import React,{createContext,useState,useEffect} from 'react'
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();

export default function AuthProvider({children}) {
const [user,setUser] = useState();
const [loading,setLoading]= useState();
const navigate = useNavigate();
useEffect(()=>{
    axiosClient
    .get('/users/profile')
    .then(res=>{
      // console.log(res.data)
      setUser(res.data)
  })
  .catch(err=>console.log(err))
},[])
 
const login= (email,password)=>{
  axiosClient
  .post('/auth/login',{email,password})
  .then(res=>{
    console.log(res.data)
    setUser(res.data)
    navigate('/profile')
})
.catch((err) => {
  console.log(err);
  if (err.response && err.response.status === 401) {
    toast.error('Invalid email or password. Please try again.', {
      position: toast.POSITION.TOP_CENTER,
    });
  } else {
    toast.error('Login failed. Please try again later.', {
      position: toast.POSITION.BOTTOM_CENTER,
    });

}
});
};
const signup= (name,email,password)=>{
  axiosClient
  .post('/auth/signup',{name,email,password})
  .then(res=>{
    console.log(res.data)
    // setUser(res.data)
    navigate('/login')
})
.catch(err=>console.log(err))
}

const logout= ()=>{
    axiosClient
    .get('/auth/logout')
    .then(res=>{
      console.log(res.data)
      setUser(null)
      navigate('/')
  }) }

  return (
    <AuthContext.Provider value={{user,loading,login,logout,signup}} >
    {children}
    </AuthContext.Provider>
  )
}
