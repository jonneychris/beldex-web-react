import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Cube from "./img/cube.svg";
import Privacy from "./img/privacy.svg";
import Lock from "./img/secure.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutus(){
 useEffect(()=>{
     AOS.init(
       {
               duration: 1000,
               offset: 120,
               easing: 'ease-in-out'
            }
     );
  },[])

    return (
      <div>
        <Navbar />
        <main>
          {/* <!-- Masternode Section--> */}
          <div className="container-fluid career-bg about-bg">
            <div className="row">
              <h1 id="about_us_header" data-aos="fade-up">
                About Beldex
              </h1>
              <h3 id="about_us_content" data-aos="fade-up-left">
                A team of crypto enthusiasts building a world of privacy
              </h3>
            </div>
          </div>
          {/* <!-- End--> */}
          {/* <!--Run a masternode--> */}
          <div className="container-fluid run-masternode beldex-rewards">
            <div className="row">
              <div className="col-12 col-sm-12 icon-head run-nodes">
                <h2 id="about_who" data-aos="fade-left">
                  Who
                </h2>
                <h1 id="about_we_are" data-aos="fade-right">
                  We Are?
                </h1>
                <div className="cube1  cube-masternode">
                  <img src={Cube} alt="cube" />
                </div>
                <div className="secure1 secure-masternode">
                  <img src={Lock}  alt="Lock"/>
                </div>
                <div className="cube2 cube2-masternode">
                  <img src={Cube} alt="cube " />
                </div>
                <div className="privacy1 privacy-masternode">
                  <img src={Privacy} alt="Privacy" />
                </div>
              </div>

              <div className="col-12 col-sm-12 about-content">
                <p id="founded_beldex" data-aos="fade-right">
                  Founded in 2018 by a team of crypto enthusiasts, the Beldex
                  project aims to restore privacy on the internet by building an
                  ecosystem of decentralized privacy-first applications. The
                  Beldex team consists of accomplished professionals from
                  finance, marketing and technology who uphold the ethos of
                  community-first and decentralization. Mr. Afanddy Bin Hushni
                  serves as the present Chairman of Beldex.
                </p>

                <p id="founded_community" data-aos="fade-right">
                  The community is what makes a Web3 project successful. The
                  Beldex community is now over half a million strong with
                  members from across several countries and continents.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* <!-- End--> */}
          <Footer/>
        </main>
      </div>
    );
}