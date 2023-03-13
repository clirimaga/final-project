import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./EditProfile";
import axiosClient from "./axiosClient";
import { useNavigate } from "react-router-dom";
import "./components.css";
import { AuthContext } from "./context/AuthProvider";
import Card from "react-bootstrap/Card";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { FaSearchLocation } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner';
import AOS from "aos";
import "aos/dist/aos.css";

function Profile() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [profile, setProfile] = useState({});
  const [location, setLocation] = useState({});
  const { deleteProfile } = useContext(AuthContext);
  const [checkLocation, setCheckLocation] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("/users/profile")
      .then((res) => {
        setProfile(res.data);
        setLoading(false);
        if (res.data?.location?.coordinates) {
          setCheckLocation(false);
        } else {
          if (!navigator.geolocation) {
            alert("Geolocation is not supported by this browser.");
          } else {
            navigator.geolocation.getCurrentPosition(function (position) {
              setLocation({
                type: "point",
                coordinates: [
                  position.coords.latitude,
                  position.coords.longitude,
                ],
              });
              axiosClient
                .put("/users/profile", {
                  location: {
                    type: "point",
                    coordinates: [
                      position.coords.latitude,
                      position.coords.longitude,
                    ],
                  },
                })
                .then((res) => {
                  console.log(res.data);
                  setProfile(res.data);
                  if (res.data.location.coordinates) {
                    setCheckLocation(false);
                  } else {
                    setCheckLocation(true);
                  }
                })
                .catch((err) => console.log(err));
            });
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  // const sendLocation = async () => {
  //   try {
  //     const result = await axiosClient.put("/users/profile", { location });
  //     setProfile(result.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const deleteAccount = () => {
    const response = window.confirm(
      "Are you sure you want to delete your account"
    );
    console.log(response);
    if (response == true) {
      deleteProfile();
    }
  };

  return (
    <div className="row ">
      {loading ? (
        <div className="d-flex justify-content-center my-5">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <div
          className="profile col-10 offset-1 my-5 d-flex flex-wrap justify-content-center p-5"
        >
          <Card className="col-xs-6 col-sm-4 col-md-3 col-md-3 text-center">
            <Card.Img
              variant="top"
              src={profile.pic}
              alt="profilepic"
              id="profilepic"
              onClick={handleShow}
            />
            <Card.Body className="d-flex flex-column justify-content-around">
              <Card.Title className="text-black">{profile.name}</Card.Title>
              <button className="btn btn-success " onClick={handleShow}>
                <FaEdit /> Edit/Add Profile
              </button>
            </Card.Body>
          </Card>
          <div className="d-flex flex-column justify-content-around col-9 text-right p-5">
            <div>
              <span>
                My Description:
                <h5>{profile.description}</h5>
              </span>
              <span>
                My Hobbies:
                <h5>{profile.hobbies}</h5>
              </span>
              <span>
                My German Level:
                <h5>{profile.germanLevel}</h5>
              </span>
              <span>
                My Contact:
                <h5>{profile.contact}</h5>
              </span>
              <div className=" d-flex justify-content-between flex-wrap my-2">
                <button className="btn btn-danger" onClick={deleteAccount}>
                  <AiFillDelete /> Delete Account
                </button>
                <button
                  onClick={() => navigate("/people-nearby")}
                  title="Your current location will be used to see people nearby"
                  className="btn btn-success"
                  disabled={checkLocation}
                >
                  See people nearby <FaSearchLocation />
                </button>
              </div>
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
      )}
    </div>
  );
}

export default Profile;
