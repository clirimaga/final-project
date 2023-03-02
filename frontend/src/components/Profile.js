import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./EditProfile";
import axiosClient from "./axiosClient";
import { NavLink } from "react-router-dom";
import "./components.css";

function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState({});
  const [location,setLocation] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      setLocation( {
        type:'point',
      coordinates: [position.coords.latitude,position.coords.longitude]
    })
    });

    
    axiosClient
      .get("/users/profile")
      .then((res) => {
        // console.log(res.data);
        // if(res.data.geometry) {
        //  console.log(res.data)
        // }else{
        //   console.log(res.data)
        // }
        setProfile(res.data);
      })
      .catch((err) => console.log(err));

      
  }, []);
  
const sendLocation = async () =>{
  try {
    const result = await axiosClient
       .put("/users/profile", { location })
   setProfile(result.data)
  } catch (error) {
   console.log(error)
  }
}



  return (
    <>
      <div className="row profile m-5 ">
        <div className="col-4">
          <img src={profile.pic} alt="profilepic" id="profilepic" />
        </div>

        <div className="col-6">
          <h4>Name</h4>
          <p>{profile.name}</p>
          <h4>Description</h4>
          <p>{profile.description}</p>
          <h4>Hobbies</h4>
          <p>{profile.hobbies}</p>
          <h4>German Level</h4>
          <p>{profile.germanLevel}</p>
        </div>
      </div>
      <div className="d-flex  justify-content-between m-5">
        <button className="button text-white" onClick={handleShow}>
          Edit Profile
        </button>
        <NavLink to="/people-nearby" className="nav-link">
          <button className="button text-white" onClick={sendLocation} >See people nearby</button>
        </NavLink>
      </div>
      {/* <Photo /> */}
      <EditProfile
        setShow={setShow}
        show={show}
        handleClose={handleClose}
        profile={profile}
        setProfile={setProfile}
      />
    </>
  );
}

export default Profile;