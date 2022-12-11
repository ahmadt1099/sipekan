const express = require("express");
const cors = require("cors");
const session = require("express-session")
const SequelizeStore = require("connect-session-sequelize")
const dotenv = require("dotenv")
const FileUpload = require("express-fileupload")
const path = require("path")
dotenv.config();

const app = express();
app.use(FileUpload());
app.use(express.static('public'));

const sessionStore = SequelizeStore(session.Store);

app.use(
  cors({
    credentials: true,
    // origin: 'http://localhost:3000',
    // origin: 'https://sipekan.my.id',
    origin: ["http://localhost:3000", "https://sipekan.my.id"]
  })
);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
const dbconfig = db.sequelize;

const store = new sessionStore({
  db: dbconfig,
});

// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });

// store.sync();

// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// app.use(
//   session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: store,
//     cookie: {
//       secure: 'true',
//       sameSite: 'strict',
//     },
//   })
// );
const sessionConfig = {
  secret: 'MYSECRET',
  name: 'appName',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie : {
    secure: 'true',
    sameSite: 'none', // THIS is the config you are looing for.
  }
};

if (process.env.NODE_ENV === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sessionConfig.cookie.secure = true; // serve secure cookies
}

app.use(session(sessionConfig));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "SIPEKAN API V3" });
// });

require("./app/routes/UserRoute")(app);
require("./app/routes/AuthRoute")(app);
require("./app/routes/TaskRoute")(app);
require("./app/routes/SubmitRoute")(app);
require("./app/routes/RewardRoute")(app);
require("./app/routes/RedeemRoute")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
