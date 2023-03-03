import React, { useState, useEffect } from "react";
// import axios from 'axios';
import axiosClient from "./axiosClient";
import Card from 'react-bootstrap/Card';
import './components.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axiosClient
      .get("/events")
      .then((res) => {
        // console.log(res.data);
        AOS.init();
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
    }, []);
  return (
  <div className="row d-flex justify-content-around" >
 
  <h1 className="text-center" data-aos="flip-left">Upcoming Events</h1>
  {events.map(event => {
    return <Card className="eventcard  col-3 m-5 flex-wrap" key={event.id} data-aos="zoom-in">
    <Card.Body className="d-flex flex-column justify-content-between">
    <Card.Img  src={event.pic} alt='eventpic'/>
      <Card.Title>{event.name}</Card.Title>
      <Card.Text>
        {event.description}
      </Card.Text>
      <Card.Text>
        {event.date}
      </Card.Text>
    </Card.Body>
  </Card>
  })}
  </div>)
}
