import {useState} from "react";
import './components.css';
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function About() {
const [clicked,setClicked]=useState(false);

const toggle = () =>{
  setClicked(!clicked)
}
  return (
    <div className="my-5 border-btm">
      <div className="d-flex">
        <h2 className="">About <i>Learn German</i></h2> 
        <BsFillInfoCircleFill className="ms-2" onClick={toggle} />
      </div>
      <p className={clicked ? 'aboutp aboutpshow ' : 'aboutp'}>
        If you are eager to learn German but struggling to find the right
        resources? Look no further than our website, Learn German! Our platform
        connects you with other learners so you can practice speaking,
        listening, and writing together. With our user-friendly interface and
        diverse community, you'll quickly improve your German skills and make
        new friends along the way. Whether you're a beginner or advanced
        learner, our website offers something for everyone. Join today and start
        your journey towards fluency in the beautiful German language!🙂
      </p>
    </div>
  );
}
