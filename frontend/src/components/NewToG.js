import AOS from "aos";
import "./components.css";
import "aos/dist/aos.css";
export default function NewToG() {
  AOS.init();
  return (
    <div className="ntg row justify-content-around text-center my-5 border-btm " data-aos="flip-left">
      <h1 className="text-center " data-aos="flip-left">
        New to Germany?
      </h1>
     <div className="col-6 mt-5">
     <h2>The Good News</h2>
  <p>Learning German just got easier!</p>
     </div>
     <div className="col-6 mt-5">
     <h2>The Better News</h2>
  <p>
    You can now learn German with other people and have <b>fun</b> doing
    it!
  </p>
     </div>

    </div>
  );
}


{/* <div className="d-flex flex-column ">
<div className="col-6">
  <h2>The Good News</h2>
  <p>Learning German just got easier!</p>
</div>
<div className="col-6">
  <h2>The Better News</h2>
  <p>
    You can now learn German with other people and have <b>fun</b> doing
    it!
  </p>
</div>
</div> */}