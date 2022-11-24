import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/Database.js';
import SequelizeStore from 'connect-session-sequelize';
import FileUpload from 'express-fileupload';
import UserRoute from './routes/UserRoute.js';
import TugasRoute from './routes/TugasRoute.js';
import AuthRoute from './routes/AuthRoute.js';
import SubmitRoute from './routes/SubmitRoute.js';
import HadiahRoute from './routes/HadiahRoute.js'
import TukarRoute from './routes/TukarRoute.js'
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

// store.sync();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: 'auto',
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  })
);

app.use(express.json());
app.use(FileUpload());
app.use(express.static('public'));
app.use(UserRoute);
app.use(TugasRoute);
app.use(AuthRoute);
app.use(SubmitRoute);
app.use(HadiahRoute);
app.use(TukarRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.APP_PORT, () => {
  console.log('Server run.....');
});
