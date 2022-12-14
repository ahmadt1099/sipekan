import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigatorStatus } from 'react-navigator-status';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import User from './pages/User.jsx';
import Task from './pages/Task.jsx';
import Reward from './pages/Reward.jsx';
import Submit from './pages/Submit.jsx';
import Redeem from './pages/Redeem.jsx';
import AddUser from './pages/AddUser.jsx';
import EditUser from './pages/EditUser.jsx';
import AddTask from './pages/AddTask.jsx';
import EditTask from './pages/EditTask.jsx';
import AddReward from './pages/AddReward.jsx';
import EditReward from './pages/EditReward.jsx';
import Forbidden from './pages/Forbidden.jsx';
import AddRedeem from './pages/AddRedeem.jsx';
import AddSubmit from './pages/AddSubmit.jsx';
import EditSubmit from './pages/EditSubmit.jsx';
import About from './pages/About.jsx';
import Alert from './components/Alert.jsx';

function App() {
  const isOnline = useNavigatorStatus();
  return (
    <div>
      <Alert isOnline={isOnline} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/add" element={<AddUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/tugas" element={<Task />} />
          <Route path="/tugas/add" element={<AddTask />} />
          <Route path="/tugas/edit/:id" element={<EditTask />} />
          <Route path="/reward" element={<Reward />} />
          <Route path="/reward/add" element={<AddReward />} />
          <Route path="/reward/edit/:id" element={<EditReward />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/submit/:id" element={<AddSubmit />} />
          <Route path="/submit/edit/:id" element={<EditSubmit />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/redeem/:id" element={<AddRedeem />} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
