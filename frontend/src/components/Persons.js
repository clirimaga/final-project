import React from "react";
import "./components.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Persons() {
  AOS.init();
  return (
    <div className="row  persons gap-5">
      <h1 className="text-center border-btm p-3" data-aos="fade-down">
        Here's what our users have to say!
      </h1>

      <div
        className="person col-xs-8 col-12 d-flex justify-content-between m-3 flex-wrap p-5 border shadow"
        data-aos="fade-right"
      >
        <div className="d-flex flex-column justify-content-around  col-12 col-md-8 ">
          <h2>Jack</h2>
          <p>Coming from China.</p>
          <p>
            I've been struggling a lot with almost everything related to the
            German language and especially the german grammar. I found this
            website online and decided to give it a try. Since then I have made
            a lot of friends and had a huge progress with my german skills.
          </p>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbmVzZSUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="person1"
          />
        </div>
      </div>

      <div
        className="person col-12 d-flex justify-content-between m-3 flex-wrap p-5 border shadow "
        data-aos="fade-left"
      >
        <div className="d-flex flex-column justify-content-around  col-12 col-md-8 ">
          <h2>Valeria</h2>
          <p>Coming from Italy.</p>
          <p>
            I used to struggle a lot learning german and I gave up a few times.
            But after I found this website I saw good progress and I saw a lot
            of hope for the future. Since I started learning with this website I
            saw amazing progress and met a few cool people to learn german with.
          </p>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="person1"
          />
        </div>
      </div>

      <div
        className="person col-12 d-flex justify-content-between m-3 flex-wrap p-5 border shadow"
        data-aos="fade-right"
      >
        <div className="d-flex flex-column justify-content-around  col-12 col-md-8 ">
          <h2>Alex</h2>
          <p>Coming from England.</p>
          <p>
            Since I came from England I had alot of problems with learning
            german. Until I stumbled upon this website which helped me get a
            better grasp on the german language and how the german language
            works. I made some awesome friends through this website and learned
            a lot of german too.
          </p>
        </div>
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="person1"
          />
        </div>
      </div>
    </div>
  );
}
