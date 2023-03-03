import "./components.css";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { Roller } from "react-awesome-spinners";
import { MdSearchOff } from "react-icons/md";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function PeopleNearBy() {
  const [users, setUsers] = useState([]);
  const [distance, setDistance] = useState(5000);
  const [loading, setLoading] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  useEffect(() => {
    axiosClient
      .get("/users/profile")
      .then((res) => {
        // console.log(res.data)
        setLoggedUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    axiosClient
      // .get(`/users`)
      .get(`/users?radius=${distance}`)
      .then((res) => {
        console.log(res.data)
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [distance]);

  return (
    <div className="row usersNearby m-5 text-center">
      <div className="col-12 border d-flex text-center">
        <select
          className="nearBySelect"
          onChange={(e) => setDistance(e.target.value)}
        >
          <option value={5000}>5km</option>
          <option value={10000}>10km</option>
          <option value={20000}>20km</option>
          <option value={50000}>50km</option>
        </select>
        <h1>Users Nearby</h1>
      </div>
      {loading ? (
       <div className="d-flex flex-colum justify-content-center my-5"><Roller color="#0e4d4d"  /></div>
      ) : !users ? (
        <div className="my-5">
          <h1>
            <MdSearchOff />
          </h1>
          <h1>Oops... No fellow learners found in your radius</h1>
        </div>
      ) : (
        users
          .filter((user) => user._id !== loggedUser._id)
          .map((user) => {
            return (
              <div
                className="userNearby border col-12 d-flex justify-content-between my-5 flex-wrap text-center shadow"
                key={user._id}
              >
                <div className=" col-6 m-5 d-flex flex-column justify-content-around">
                  <h1>{user.name}</h1>
                  <p>{user.description}</p>
                  {user.hobbies.length !== 0 ? <p>Hobbies:{user.hobbies}</p> : <p>Hobbies: -</p>}
                  <p>German Level:{user.germanLevel}</p>
                  <button className="btn btn-success">Send Message</button>
                </div>
                <div className="col-4 d-flex flex-column justify-content-center ">
                  <img className="userpic" src={user.pic} alt="userpic" />
                </div>
              </div>
            );
          })
      )}
    </div>
  );
}
export default PeopleNearBy;
