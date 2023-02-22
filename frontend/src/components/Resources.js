import { BsHeadphones, BsFilm, BsBook } from 'react-icons/bs';
import Navigator from './Navigator';
import Carousel from "react-bootstrap/Carousel";

export default function Resources() {
  return (
    <div className="container">
      <Navigator />

      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dlbenbmke/image/upload/v1677010460/matthew-feeney-Nwkh-n6l25w-unsplash_1_oyofwx.jpg"
            alt="First slide"
            style={{ width: "950px", height: "700px" }}
          />
          <Carousel.Caption>
            <h3>Learn From Doing</h3>
            <p>
            Learn something every day with LEARN GERMAN  
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row mt-4">
        <div className="col-4">
          <div className="card">
            <div className="card-body text-center">
              <BsHeadphones size={64} />
              <h5 className="mt-2 mb-0">Audio Learning</h5>
              <ul>
             <li><a href='https://open.spotify.com/album/1hIrsbY7DZ0ItN5OrPhI6a'>Hören und Verstehen</a></li>
             <li> <a href='https://www.youtube.com/watch?v=iUCSJBzhrv0'>Hören B1 Test</a></li>
             <li><a href='https://www.youtube.com/watch?v=WJzH_vK9e_Y'>B1 B2 C1</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body text-center">
              <BsFilm size={64} />
              <h5 className="mt-2 mb-0">Creative learning videos</h5>
              <ul>
              <li><a href='https://www.youtube.com/watch?v=6Ka_3Rq8JZ4'>A1 Complete</a></li>
              <li><a href='https://www.youtube.com/watch?v=trEa3ovyDYM'>A2 Complete</a></li>
              <li><a href='https://www.youtube.com/watch?v=Y_5jwBdOukk'>B1 Complete</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body text-center">
              <BsBook size={64} />
              <h5 className="mt-2 mb-0">Learn anywhere in Germany</h5>
              <ul>
              <li><a href='https://www.hueber.de/media/36/GLT_2016_2017_small.pdf'>Hueber</a></li>
              <li><a href='https://www.google.de/books/edition/Mit_Erfolg_zu_telc_Deutsch_B1_+_Beruf/eWJzrgEACAAJ?hl=en'>B1+Beruf</a></li>
              <li><a href='https://www.google.de/books/edition/Prüfungstraining/QnuqpwAACAAJ?hl=en'>Prüfungstraining</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
