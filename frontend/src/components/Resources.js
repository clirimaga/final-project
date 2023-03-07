import { BsHeadphones, BsFilm, BsBook } from "react-icons/bs";
import Navigator from "./Navigator";
import Carousel from "react-bootstrap/Carousel";
import { TypeAnimation } from "react-type-animation";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resources() {
  AOS.init();

  return (
    <div className="container">
      <Carousel controls={false} indicators={false} data-aos="fade-up">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dlbenbmke/image/upload/v1677010460/matthew-feeney-Nwkh-n6l25w-unsplash_1_oyofwx.jpg"
            alt="First slide"
            style={{ width: "950px", height: "700px" }}
          />
          <Carousel.Caption>
            <h3>Learn From Doing</h3>
            <p>Learn something every day with LEARN GERMAN</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="row mt-4" data-aos="fade-up">
        <div className="col-4">
          <div className="card soft-yellow">
            <div className="card-body text-center">
              <BsHeadphones size={64} />
              <h5 className="mt-2 mb-0">Audio Learning</h5>
              <ul className="dots">
                <li>
                  <a
                    href="https://open.spotify.com/album/1hIrsbY7DZ0ItN5OrPhI6a"
                    className="linkStyle"
                    target="_blank"
                  >
                    {" "}
                    Hören und Verstehen
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    href="https://www.youtube.com/watch?v=iUCSJBzhrv0"
                    className="linkStyle"
                    target="_blank"
                  >
                    Hören B1 Test
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=WJzH_vK9e_Y"
                    className="linkStyle"
                    target="_blank"
                  >
                    B1 B2 C1
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card soft-yellow">
            <div className="card-body text-center">
              <BsFilm size={64} />
              <h5 className="mt-2 mb-0">Creative learning videos</h5>
              <ul className="dots">
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=6Ka_3Rq8JZ4"
                    className="linkStyle"
                    target="_blank"
                  >
                    A1 Complete
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=trEa3ovyDYM"
                    className="linkStyle"
                    target="_blank"
                  >
                    A2 Complete
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=Y_5jwBdOukk"
                    className="linkStyle"
                    target="_blank"
                  >
                    B1 Complete
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card soft-yellow">
            <div className="card-body text-center">
              <BsBook size={64} />
              <h5 className="mt-2 mb-0">Learn anywhere in Germany</h5>
              <ul className="dots">
                <li>
                  <a
                    href="https://www.hueber.de/media/36/GLT_2016_2017_small.pdf"
                    className="linkStyle"
                    target="_blank"
                  >
                    Hueber
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.de/books/edition/Mit_Erfolg_zu_telc_Deutsch_B1_+_Beruf/eWJzrgEACAAJ?hl=en"
                    className="linkStyle"
                    target="_blank"
                  >
                    B1+Beruf
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.de/books/edition/Prüfungstraining/QnuqpwAACAAJ?hl=en"
                    className="linkStyle"
                    target="_blank"
                  >
                    Prüfungstraining
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 text-center">
        {" "}
        <TypeAnimation
          sequence={[
            "Übung macht den Meister (Practice makes perfect)",
            1000,
            " Bald reif hält nicht steif (Early ripe, early rotten)",
            1000,
            "Nur die Harten kommen in den Garten (Only the strongest survive)",
            1000,
            "Alles hat ein Ende, nur die Wurst hat zwei (Everything has an end, only the sausage has two)",
            1000,
            " Kleinvieh macht auch Mist (Small amounts add up to something bigger)",
            1000,
            "Das Leben ist kein Ponyhof (You can not always get what you want)",
            1000,
            "Kinder und Betrunkene sagen immer die Wahrheit (Children and fools tell the truth)",
            1000,
            " Wenn man dem Teufel den kleinen Finger gibt, so nimmt er die ganze Hand. (Give an inch; they will take a mile)",
            1000,
            "Klappe zu, Affe tot (Let us end this)",
            1000,
            "Was ich nicht weiß, macht mich nicht heiß (What I do not know can not hurt me)",
            1000,
            "Was Hänschen nicht lernt, lernt Hans nimmermehr (You cannot teach an old dog new tricks)",
            1000,
            "Stochere nicht im Bienenstock (Let sleeping dogs lie)",
            1000,
            "Wo sich die Füchse gute Nacht sagen (The back of beyond)",
            1000,
            "Besser ein Spatz in der Hand, als eine Taube auf dem Dach (A bird in the hand is worth two in the bush)",
            1000,
            "Arbeit ist die beste Jacke (The best way to warm yourself up is by doing something useful)",
            1000,
          ]}
          speed={50} // Custom Speed from 1-99 - Default Speed: 40
          style={{ fontSize: "2em" }}
          wrapper="span" // Animation will be rendered as a <span>
          repeat={Infinity} // Repeat this Animation Sequence infinitely
          data-aos="fade-up"
        />
      </div>
    </div>
  );
}
