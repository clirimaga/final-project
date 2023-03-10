import "./components.css";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
// import { Roller } from "react-awesome-spinners";
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import { MdSearchOff } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function PeopleNearBy() {
  const [users, setUsers] = useState([]);
  const [distance, setDistance] = useState(5000);
  const [loading, setLoading] = useState(false);
  const [loggedUser, setLoggedUser] = useState();
  const navigate = useNavigate();
  AOS.init();

  useEffect(() => {
    axiosClient
      .get("/users/profile")
      .then((res) => {
        setLoggedUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get(`/users?radius=${distance}`)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [distance]);

  return (
    <div className="row usersNearby m-5 ">
      <div className="col-12 d-flex text-center justify-content-between">
        <MdArrowBackIosNew
          style={{ width: 50, height: 50 }}
          onClick={() => navigate(-1)}
        />
        <h1>Users Nearby</h1>
        <select
          className="nearBySelect"
          onChange={(e) => setDistance(e.target.value)}
        >
          <option value={5000}>5km</option>
          <option value={10000}>10km</option>
          <option value={20000}>20km</option>
          <option value={50000}>50km</option>
        </select>
      </div>
      {loading ? (
        <div className="d-flex flex-row justify-content-center my-5">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : users.length === 1 ? (
        <div className="my-5">
          <h1>
            <MdSearchOff />
          </h1>
          <h1>Oops... No fellow learners found in your radius!</h1>
        </div>
      ) : (
        users
          .filter((user) => user._id !== loggedUser._id)
          .map((user) => {
            return (
              <div className="row  justify-content-center my-3">

              <Card style={{width: '25rem'}} key={user._id}>
      <Card.Img variant="top" src={user.pic} />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
        {user.description ? <p className="">{user.description}</p> : ""}
                  {user.hobbies.length !== 0 ? (
                    <p>Hobbies: {user.hobbies}</p>
                  ) : (
                    ""
                  )}
                  {!user.germanLevel ? (
                    <p>German Level: {user.germanLevel}</p>
                  ) : (
                    ""
                  )}
                  {user.contact ? (
                    <p>Contact: {user.contact}</p>
                  ) : (
                    ""
                  )}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
            );
          })
      )}
    </div>
  );
}
export default PeopleNearBy;
{/* <div
                className="userNearby border col-8 offset-2 d-flex justify-content-between my-5 flex-wrap shadow"
                key={user._id}
                data-aos="fade-up"
              >
                <div className="col-6 m-5 d-flex flex-column justify-content-around">
                  <h1 className="">{user.name}</h1>
                  <p>
                    <MdLocationOn />
                    {Math.trunc(user.distance)}m away.
                  </p>
                  {user.description ? <h5 className="">{user.description}</h5> : ""}
                  {user.hobbies.length !== 0 ? (
                    <h5>Hobbies: {user.hobbies}</h5>
                  ) : (
                    ""
                  )}
                  {!user.germanLevel ? (
                    <h5>German Level:{user.germanLevel}</h5>
                  ) : (
                    ""
                  )}
                  <h5>Contact: {user.contact}</h5>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center ">
                  <img className="userpic" src={user.pic} alt="userpic" />
                </div>
              </div> */}