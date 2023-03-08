import "./components.css";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
// import { Roller } from "react-awesome-spinners";
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
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [distance]);

  return (
    <div className="row usersNearby m-5 text-center">
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
        <div className="d-flex  justify-content-center my-5">
          {/* <Roller color="#0e4d4d" /> */}
          <div>Loading...</div>

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
              <div
                className="userNearby border col-12 d-flex justify-content-between my-5 flex-wrap shadow"
                key={user._id}
                data-aos="fade-up"
              >
                <div className="col-6 m-5 d-flex flex-column justify-content-around">
                  <h1>{user.name}</h1>
                  <p>
                    <MdLocationOn />
                    {Math.trunc(user.distance)}m away.
                  </p>
                  {user.description ? <h5>{user.description}</h5> : ""}
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
              </div>
            );
          })
      )}
    </div>
  );
}
export default PeopleNearBy;
