import "./components.css";
import { useState, useEffect } from "react";
import axiosClient from "./axiosClient";
import { Roller } from "react-awesome-spinners";
import Card from "react-bootstrap/Card";

function PeopleNearBy() {
  const [users, setUsers] = useState([]);
  const [distance, setDistance] = useState(5000);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axiosClient
    // .get(`/users`)
      .get(`/users?radius=${distance}`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [distance]);

  return (
    <div className="row usersNearby m-5">
      <div className="col-12 d-flex text-center">
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
          <Roller color="#0e4d4d" />
          ) : (
              users.map((user) => {
                  return (
                     <div className="userNearby border col-12 d-flex justify-content-between my-5 flex-wrap text-center shadow" key={user._id}>
                <div className=' col-6 m-5 d-flex flex-column justify-content-around'>
                  <h1>{user.name}</h1>
                  <p>{user.description}</p>
                  <p>Hobbies:{user.hobbies}</p>
                  <p>German Level:{user.germanLevel}</p>
                  <button className="btn btn-success">Send Message</button>
                </div>
                <div className='col-4 d-flex flex-column justify-content-center '>
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
  {/* <div className='nearByCard'>
                    <div className='nearByTop'>
                    <div className='nearByData'>
                    <h5>name:`${undefined}`, distance:`${undefined}` away</h5>
                    <button onClick={undefined} className='messageButton '>Send message</button>
                    </div>
                    <p>${}</p>
                    </div>
                    <div className='nearByImage'>
                        <img className='nearByImage'/>
                    </div>
                </div> */}


              //   <div className="userNearby border col-12 d-flex justify-content-between my-5 flex-wrap text-center shadow" key={user._id}>
              //   <div className=' col-6 m-5 d-flex flex-column justify-content-around'>
              //     <h1>{user.name}</h1>
              //     <p>{user.description}</p>
              //     <p>Hobbies:{user.hobbies}</p>
              //     <p>German Level:{user.germanLevel}</p>
              //     <button className="btn btn-success">Send Message</button>
              //   </div>
              //   <div className='col-4 d-flex flex-column justify-content-center '>
              //     <img className="userpic" src={user.pic} alt="userpic" />
              //   </div>
              // </div>