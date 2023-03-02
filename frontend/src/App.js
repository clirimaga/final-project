import './App.css';
import { Routes,Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Resources from './components/Resources';
import PeopleNearBy from './components/People-nearby'
import Profile from './components/Profile';
import ChatRoom from './components/chatroom'
import { ToastContainer } from 'react-toastify';
import Navigator from './components/Navigator';
import Footer from './components/Footer';

function App() {
  return (

    <div className='container'>
    <ToastContainer />
    <Navigator />
    <Routes>
  
     <Route path='/' element={<Homepage />} />
     <Route path='/login' element={<Login />} />
     <Route path='/register' element={<Register />} />
     <Route path='/helpful-resources' element={<Resources />} />
     <Route path='/people-nearby' element={<PeopleNearBy />} />
     <Route path='/chatroom' element={<ChatRoom />} />
     <Route path='/profile' element={<Profile />} />
  
    </Routes>
    <Footer />
    </div>
  );
}

export default App;

// Main color #OA3939 DARK GREEN
// Secondary color #D8D2B9  GOLD