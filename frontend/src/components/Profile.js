import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./EditProfile";
import axiosClient from "./axiosClient";
import { NavLink } from "react-router-dom";
import "./components.css";
import { AuthContext } from "./context/AuthProvider";
import Card from "react-bootstrap/Card";

function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState({});
  const [location, setLocation] = useState({});
  const { deleteProfile } = useContext(AuthContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        type: "point",
        coordinates: [position.coords.latitude, position.coords.longitude],
      });
    });

    axiosClient
      .get("/users/profile")
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const sendLocation = async () => {
    try {
      const result = await axiosClient.put("/users/profile", { location });
      setProfile(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccount = () => {
    deleteProfile();
  };

  return (
    <div className="row ">
      <div className="profile my-5 d-flex flex-wrap justify-content-center p-5">
        <Card className="col-6 col-md-3 text-center">
          <Card.Img
            variant="top"
            src={profile.pic}
            alt="profilepic"
            id="profilepic"
          />
          <Card.Body className="d-flex flex-column justify-content-around">
            <Card.Title>{profile.name}</Card.Title>
            <button className="btn btn-success text-white" onClick={handleShow}>
              Edit Profile
            </button>
          </Card.Body>
        </Card>
        <div className=" d-flex flex-column justify-content-around col-9  p-5">
          <div className="">
            <p>My Description:</p>
            <h5 className="info">{profile.description}</h5>
            <p>My Hobbies:</p>
            <h5 className="info">{profile.hobbies}</h5>
            <p>My German Level:</p>
            <h5 className="info">{profile.germanLevel}</h5>
          </div>
          <div className=" d-flex justify-content-between">
            <button className="btn btn-danger" onClick={deleteAccount}>
              Delete Account
            </button>
            <NavLink to="/people-nearby" className="nav-link">
              <button className="btn btn-success" onClick={sendLocation}>
                See people nearby
              </button>
            </NavLink>
          </div>
        </div>

        <EditProfile
          setShow={setShow}
          show={show}
          handleClose={handleClose}
          profile={profile}
          setProfile={setProfile}
        />
      </div>
    </div>
  );
}

export default Profile;

{
  /* <div className="row profile my-5">
      <div className="col-12 m-5 d-flex flex-wrap ">
        <div className="col-6 flex-wrap">
          <img src={profile.pic} alt="profilepic" id="profilepic" />
        </div>
        <div className="col-6 flex-wrap">
          <p>Name
          <h3>{profile.name}</h3>
          </p>
          <p>Description
          <h5>{profile.description}</h5>
          </p>
          <p>Hobbies
          <h5>{profile.hobbies}</h5>
          </p>
          <p>German Level
          <h5>{profile.germanLevel}</h5>
          </p>
        </div>
      </div>
      <div className="d-flex  justify-content-between m-5">
        <button className="btn btn-success text-white" onClick={handleShow}>
          Edit Profile
        </button>
          <button className="btn btn-danger" onClick={deleteAccount} >Delete Account</button>
        <NavLink to="/people-nearby" className="nav-link">
          <button className="btn btn-success" onClick={sendLocation} >See people nearby</button>
        </NavLink>
      <EditProfile
        setShow={setShow}
        show={show}
        handleClose={handleClose}
        profile={profile}
        setProfile={setProfile}
      />
      </div>
    </div> */
}
