import React, {useState,useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Cube from "./img/cube.svg";
import Privacy from "./img/privacy.svg";
import Lock from "./img/secure.svg";
import {AiOutlineClockCircle} from "react-icons/ai";
import Moment from "react-moment";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Career(){
    const dateFormateTime1 = "2022-05-30 20:00:00.000";
    const dateFormateTime2 = "2022-06-20 17:00:00.000";

    const [ToggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
  setToggleState(index);
};

const getActiveClass = (index, className) =>
  ToggleState === index ? className : "";

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
        <main data-aos="fade-up">
          {/* <!-- Masternode Section--> */}
          <div class="container-fluid career-bg" data-aos="fade-up">
            <div class="row">
              <h1 id="beldex_career_header" data-aos="fade-up">
                Beldex Careers
              </h1>
              <h3 id="beldex_career__content" data-aos="fade-up-left">
                Are you a Web3 or privacy enthusiast? You're right where you
                need to be. Beldex offers you endless opportunities.
              </h3>
            </div>
          </div>
          {/* <!-- End--> */}
          {/* <!--Run a masternode--> */}
          <div class="container-fluid run-masternode beldex-rewards">
            <div class="row">
              <div class="col-12 col-sm-12 icon-head run-nodes ">
                <h2 id="current" data-aos="fade-right">
                  Current
                </h2>
                <h1 id="openings" data-aos="fade-left">
                  Openings
                </h1>
                <div class="cube1  cube-masternode">
                  <img src={Cube} alt="cube" />
                </div>
                <div class="secure1 secure-masternode">
                  <img src={Lock} alt="lock" />
                </div>
                <div class="cube2 cube2-masternode">
                  <img src={Cube} alt="cube" />
                </div>
                <div class="privacy1 privacy-masternode">
                  <img src={Privacy} alt="privacy" />
                </div>
              </div>
              <div class="col-12 col-sm-12">
                <div class="row">
                  <div class="tabs_wrapper">
                    <ul className="tab-list">
                      <li
                        className={`tabs ${getActiveClass(1, "active-tabs")}`}
                        onClick={() => toggleTab(1)}
                      >
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="community_manager">Community Manager</h5>
                            <p class="career-btn" id="remote">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="community_manager_required_skills_1">
                              <b>Required Skills:</b> Native English Speaker,
                              Excellent Communication, Creativity, Social Media
                              Savvy, Willingness to Learn
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply">View & Apply</p>
                            <p>
                              <i>
                                <AiOutlineClockCircle className="clock" />
                              </i>
                              <i>
                                <Moment fromNow class="clock-time-ago">
                                  {dateFormateTime1}
                                </Moment>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`tabs ${getActiveClass(2, "active-tabs")}`}
                        onClick={() => toggleTab(2)}
                      >
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="consultant_adiviser_header">
                              Consultant / Advisor
                            </h5>
                            <p class="career-btn" id="remote_1">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="consultant_required_skills_1">
                              <b>Required Skills:</b> Blockchain, Cryptography
                              basics, Tech Savvy, Critical Thinking, Market
                              Research, Networking, Legal & Financial Aspects of
                              Crypto
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply_1">View & Apply</p>
                            <p>
                              <i>
                                <AiOutlineClockCircle className="clock" />
                              </i>
                              <i>
                                <Moment fromNow class="clock-time-ago">
                                  {dateFormateTime1}
                                </Moment>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li
                        className={`tabs ${getActiveClass(3, "active-tabs")}`}
                        onClick={() => toggleTab(3)}
                      >
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="block_chain_core_header">
                              Blockchain Core Developer
                            </h5>
                            <p class="career-btn" id="remote_2">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="block_chain_core_required_skills_1">
                              <b>Required Skills:</b> Consensus protocols, LMDB
                              database, C, C++, Boost Libraries, CMake and Make
                              files
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply_2">View & Apply</p>
                            <p>
                              <i>
                                <AiOutlineClockCircle className="clock" />
                              </i>
                              <i>
                                <Moment fromNow class="clock-time-ago">
                                  {dateFormateTime2}
                                </Moment>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="content-container">
                      <div
                        className={`content ${getActiveClass(
                          1,
                          "active-content"
                        )}`}
                      >
                        <div id="tab1" class="tab_content" data-aos="fade-up">
                          <h3
                            id="community_manager_main_part"
                            data-aos="fade-up"
                          >
                            Community Manager
                          </h3>
                          <p id="community_manager_main_content">
                            Beldex builds decentralized privacy-first
                            applications that challenge modern centralized
                            structures, giving the power back to you. We are one
                            of the original privacy coins to build a complete
                            privacy Web3 ecosystem.
                          </p>
                          <h4 id="job_description">Job Description</h4>
                          <p id="job_description_1">
                            Beldex International Inc. is seeking a vibrant
                            Community Manager to lead the voice of our community
                            on Telegram, Twitter, and Discord. Your role will be
                            to educate and inspire the community via text,
                            video, and audio formats, becoming the community
                            face of Beldex.
                          </p>
                          <p id="job_description_2">
                            Supporting and working with a team of 25
                            international members, Beldex will rely on you to
                            work closely with the Social Media Manager to manage
                            all community communications and truly drive the
                            brand's vision on the ground level and listen to
                            questions and concerns of the community that want to
                            contribute to our future ecosystem.
                          </p>
                          <h4 id="consultant_adiviser_your_responsibilities_header">
                            Your Responsibilities
                          </h4>
                          <ul>
                            <li>
                              <p id="community_manager_your_responsibilities_1">
                                Provide engaging text and voice content.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_your_responsibilities_2">
                                Participate in AMA sessions on Twitter,
                                Telegram, and Discord.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_your_responsibilities_3">
                                Keep the community informed on the latest
                                developments through audio and video AMAs.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_your_responsibilities_4">
                                Organise and manage community online events to
                                boost brand awareness.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_your_responsibilities_5">
                                Stay up-to-date on crypto trends.
                              </p>
                            </li>
                          </ul>
                          <h4 id="community_manager_right_person_as_header">
                            The Right Person Has
                          </h4>
                          <ul>
                            <li>
                              <p id="community_manager_right_person_as_1">
                                A big, bright, and fun personality.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_right_person_as_2">
                                Someone with experience in leading communities
                                on social media.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_right_person_as_3">
                                A crypto native that understands how to manage
                                Telegram, Twitter, and Discord.{" "}
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_right_person_as_4">
                                People that can work autonomously and
                                communicate excellently and respond to the
                                community’s questions in a timely and
                                professional manner.
                              </p>
                            </li>
                            <li>
                              <p id="community_manager_right_person_as_5">
                                English native speakers are preferred, however,
                                there are no constraints if you have a legible
                                and clear accent.
                              </p>
                            </li>
                          </ul>
                          <h4 id="location">Location</h4>
                          <ul>
                            <li>
                              <p id="remote_4">Remote</p>
                            </li>
                          </ul>
                          <p class="btn-click-apply">
                            <a
                              href="mailto:careers@beldex.io"
                              id="click_here_apply"
                            >
                              Click here to apply
                            </a>
                          </p>
                        </div>
                      </div>
                      <div
                        className={`content ${getActiveClass(
                          2,
                          "active-content"
                        )}`}
                      >
                        <div id="tab2" class="tab_content" data-aos="fade-up">
                          <h3 id="consultant_adiviser_header_2">
                            Consultant / Advisor
                          </h3>

                          <h4 id="consultant_adiviser_your_responsibilities_header_1">
                            Your Responsibilities
                          </h4>
                          <ul>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_1">
                                Translate business goals/ challenges into
                                technology roadmaps and architecture designs.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_2">
                                Conduct research, comprehend analyst reports,
                                keep abreast of technology trends and identify
                                applicability to clients’ business/ technology
                                ecosystem.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_3">
                                Define enterprise blueprints that leverage
                                emerging architecture patterns and industry/
                                functional solutions.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_4">
                                Partner with clients on business/ technology
                                transformation programs; orchestrate the
                                implementation of planned initiatives and
                                realization of business outcomes.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_5">
                                Analyzing the authorized landscape of the
                                authority in which you plan to offer your
                                tokens.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_6">
                                Helping to arrange the necessary
                                know-your-customer (KYC) and anti-money
                                laundering (AML) processes.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_7">
                                Creating legal contracts for the rights of token
                                holders.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_your_responsibilities_8">
                                Making sure the entire project documentation
                                that including white papers or technical papers,
                                contain the required disclaimers and caveats.
                              </p>
                            </li>
                          </ul>
                          <h4 id="community_manager_right_person_as_header_1">
                            The Right Person Has
                          </h4>
                          <ul>
                            <li>
                              <p id="consultant_adiviser_right_person_as_header">
                                Interest in Technology.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_right_person_as_1">
                                Exceptional Analytical skills.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_right_person_as_2">
                                Understanding of Blockchain software development
                                and software management.{" "}
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_right_person_as_3">
                                Ability to adapt quickly to new technology and
                                trends in the field.
                              </p>
                            </li>
                            <li>
                              <p id="consultant_adiviser_right_person_as_4">
                                Understanding the legal and financial
                                implications of blockchain.
                              </p>
                            </li>
                          </ul>
                          <h4 id="location_1">Location</h4>
                          <ul>
                            <li>
                              <p id="remote_6">Remote</p>
                            </li>
                          </ul>
                          <p class="btn-click-apply">
                            <a
                              href="mailto:careers@beldex.io"
                              id="click_here_apply_1"
                            >
                              Click here to apply
                            </a>
                          </p>
                        </div>
                      </div>
                      <div
                        className={`content ${getActiveClass(
                          3,
                          "active-content"
                        )}`}
                      >
                        <div id="tab3" class="tab_content" data-aos="fade-up">
                          <h3 id="block_chain_core_header_2">
                            Blockchain Core Developer
                          </h3>
                          <h4 id="community_manager_right_person_as_header_2">
                            The Right Person Has
                          </h4>
                          <ul>
                            <li>
                              <p id="Block_chain_core_right_person_as_1">
                                Good understanding of{" "}
                                <b>Blockchain fundamentals</b>
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_2">
                                Strong knowledge of <b>consensus protocols</b>
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_3">
                                Experience in working with <b>lmdb</b> database
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_4">
                                Should have hands on experience in advanced{" "}
                                <b>C++</b> concepts
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_5">
                                Should be capable of writing <b>cmake</b> and{" "}
                                <b>make files</b>
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_6">
                                Experience in working with{" "}
                                <b>boost libraries</b>
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_7">
                                Experience in development of any layer one
                                blockchain
                              </p>
                            </li>
                            <li>
                              <p id="Block_chain_core_right_person_as_8">
                                Experience in <b>Monero code</b> base is an
                                added advantage
                              </p>
                            </li>
                          </ul>
                          <h4 id="location_2">Location</h4>
                          <ul>
                            <li>
                              <p id="remote_8">Remote</p>
                            </li>
                          </ul>
                          <p class="btn-click-apply">
                            <a
                              href="mailto:careers@beldex.io"
                              id="click_here_apply_3"
                            >
                              Click here to apply
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* {/* <ul class="tabs">
                      <li class="active" rel="tab1">
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="community_manager">Community Manager</h5>
                            <p class="career-btn" id="remote">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="community_manager_required_skills_1">
                              <b>Required Skills:</b> Native English Speaker,
                              Excellent Communication, Creativity, Social Media
                              Savvy, Willingness to Learn
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply">View & Apply</p>
                            <p>
                              <i class="fas fa-clock"></i>
                              <i>
                                <span class="clock-time-ago" id="time1"></span>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li rel="tab2">
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="consultant_adiviser_header">
                              Consultant / Advisor
                            </h5>
                            <p class="career-btn" id="remote_1">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="consultant_required_skills_1">
                              <b>Required Skills:</b> Blockchain, Cryptography
                              basics, Tech Savvy, Critical Thinking, Market
                              Research, Networking, Legal & Financial Aspects of
                              Crypto
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply_1">View & Apply</p>
                            <p>
                              <i class="fas fa-clock"></i>
                              <i>
                                <span class="clock-time-ago" id="time2"></span>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                      <li rel="tab3">
                        <div class="career-box" data-aos="fade-up">
                          <div class="carrer-topic">
                            <h5 id="block_chain_core_header">
                              Blockchain Core Developer
                            </h5>
                            <p class="career-btn" id="remote_2">
                              Remote
                            </p>
                          </div>
                          <div class="career-content">
                            <p id="block_chain_core_required_skills_1">
                              <b>Required Skills:</b> Consensus protocols, LMDB
                              database, C, C++, Boost Libraries, CMake and Make
                              files
                            </p>
                          </div>
                          <div class="career-link">
                            <p id="view_apply_2">View & Apply</p>
                            <p>
                              <i class="fas fa-clock"></i>
                              <i>
                                <span class="clock-time-ago" id="time5"></span>
                              </i>
                            </p>
                          </div>
                        </div>
                      </li>
                       <!-- <li rel="tab4">Tab 4</li>
                          <li rel="tab5">Tab 5</li> --> 
                    </ul>
                    <div class="tab_container">
                      <div
                        class="d_active tab_drawer_heading"
                        rel="tab1"
                        data-aos="fade-up"
                      >
                        <div class="carrer-topic">
                          <h5 id="community_manager_1">Community Manager</h5>
                          <p class="career-btn" id="remote_3">
                            Remote
                          </p>
                        </div>
                        <div class="career-content">
                          <p id="community_manager_required_skills">
                            <b>Required Skills:</b> Native English Speaker,
                            Excellent Communication, Creativity, Social Media
                            Savvy, Willingness to Learn
                          </p>
                        </div>
                        <div class="career-link">
                          <p id="view_apply_3">View & Apply</p>
                          <p>
                            <i class="fas fa-clock"></i>
                            <i>
                              <span class="clock-time-ago" id="time3"></span>
                            </i>
                          </p>
                        </div>
                      </div>
                      <div id="tab1" class="tab_content" data-aos="fade-up">
                        <h3 id="community_manager_main_part" data-aos="fade-up">
                          Community Manager
                        </h3>
                        <p id="community_manager_main_content">
                          Beldex builds decentralized privacy-first applications
                          that challenge modern centralized structures, giving
                          the power back to you. We are one of the original
                          privacy coins to build a complete privacy Web3
                          ecosystem.
                        </p>
                        <h4 id="job_description">Job Description</h4>
                        <p id="job_description_1">
                          Beldex International Inc. is seeking a vibrant
                          Community Manager to lead the voice of our community
                          on Telegram, Twitter, and Discord. Your role will be
                          to educate and inspire the community via text, video,
                          and audio formats, becoming the community face of
                          Beldex.
                        </p>
                        <p id="job_description_2">
                          Supporting and working with a team of 25 international
                          members, Beldex will rely on you to work closely with
                          the Social Media Manager to manage all community
                          communications and truly drive the brand's vision on
                          the ground level and listen to questions and concerns
                          of the community that want to contribute to our future
                          ecosystem.
                        </p>
                        <h4 id="consultant_adiviser_your_responsibilities_header">
                          Your Responsibilities
                        </h4>
                        <ul>
                          <li>
                            <p id="community_manager_your_responsibilities_1">
                              Provide engaging text and voice content.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_your_responsibilities_2">
                              Participate in AMA sessions on Twitter, Telegram,
                              and Discord.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_your_responsibilities_3">
                              Keep the community informed on the latest
                              developments through audio and video AMAs.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_your_responsibilities_4">
                              Organise and manage community online events to
                              boost brand awareness.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_your_responsibilities_5">
                              Stay up-to-date on crypto trends.
                            </p>
                          </li>
                        </ul>
                        <h4 id="community_manager_right_person_as_header">
                          The Right Person Has
                        </h4>
                        <ul>
                          <li>
                            <p id="community_manager_right_person_as_1">
                              A big, bright, and fun personality.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_right_person_as_2">
                              Someone with experience in leading communities on
                              social media.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_right_person_as_3">
                              A crypto native that understands how to manage
                              Telegram, Twitter, and Discord.{" "}
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_right_person_as_4">
                              People that can work autonomously and communicate
                              excellently and respond to the community’s
                              questions in a timely and professional manner.
                            </p>
                          </li>
                          <li>
                            <p id="community_manager_right_person_as_5">
                              English native speakers are preferred, however,
                              there are no constraints if you have a legible and
                              clear accent.
                            </p>
                          </li>
                        </ul>
                        <h4 id="location">Location</h4>
                        <ul>
                          <li>
                            <p id="remote_4">Remote</p>
                          </li>
                        </ul>
                        <p class="btn-click-apply">
                          <a
                            href="mailto:careers@beldex.io"
                            id="click_here_apply"
                          >
                            Click here to apply
                          </a>
                        </p>
                      </div>
                      <!-- #tab1 -->
                      <div
                        class="tab_drawer_heading"
                        rel="tab2"
                        data-aos="fade-up"
                      >
                        <div class="carrer-topic">
                          <h5 id="consultant_adiviser_header_1">
                            Consultant / Advisor
                          </h5>
                          <p class="career-btn" id="remote_5">
                            Remote
                          </p>
                        </div>
                        <div class="career-content">
                          <p id="consultant_required_skills">
                            <b>Required Skills:</b> Blockchain, Cryptography
                            basics, Tech Savvy, Critical Thinking, Market
                            Research, Networking, Legal & Financial Aspects of
                            Crypto
                          </p>
                        </div>
                        <div class="career-link">
                          <p id="view_apply_4">View & Apply</p>
                          <p>
                            <i class="fas fa-clock"></i>
                            <i>
                              <span class="clock-time-ago" id="time4"></span>
                            </i>
                          </p>
                        </div>
                      </div>
                      <div id="tab2" class="tab_content" data-aos="fade-up">
                        <h3 id="consultant_adiviser_header_2">
                          Consultant / Advisor
                        </h3>

                        <h4 id="consultant_adiviser_your_responsibilities_header_1">
                          Your Responsibilities
                        </h4>
                        <ul>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_1">
                              Translate business goals/ challenges into
                              technology roadmaps and architecture designs.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_2">
                              Conduct research, comprehend analyst reports, keep
                              abreast of technology trends and identify
                              applicability to clients’ business/ technology
                              ecosystem.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_3">
                              Define enterprise blueprints that leverage
                              emerging architecture patterns and industry/
                              functional solutions.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_4">
                              Partner with clients on business/ technology
                              transformation programs; orchestrate the
                              implementation of planned initiatives and
                              realization of business outcomes.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_5">
                              Analyzing the authorized landscape of the
                              authority in which you plan to offer your tokens.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_6">
                              Helping to arrange the necessary
                              know-your-customer (KYC) and anti-money laundering
                              (AML) processes.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_7">
                              Creating legal contracts for the rights of token
                              holders.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_your_responsibilities_8">
                              Making sure the entire project documentation that
                              including white papers or technical papers,
                              contain the required disclaimers and caveats.
                            </p>
                          </li>
                        </ul>
                        <h4 id="community_manager_right_person_as_header_1">
                          The Right Person Has
                        </h4>
                        <ul>
                          <li>
                            <p id="consultant_adiviser_right_person_as_header">
                              Interest in Technology.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_right_person_as_1">
                              Exceptional Analytical skills.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_right_person_as_2">
                              Understanding of Blockchain software development
                              and software management.{" "}
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_right_person_as_3">
                              Ability to adapt quickly to new technology and
                              trends in the field.
                            </p>
                          </li>
                          <li>
                            <p id="consultant_adiviser_right_person_as_4">
                              Understanding the legal and financial implications
                              of blockchain.
                            </p>
                          </li>
                        </ul>
                        <h4 id="location_1">Location</h4>
                        <ul>
                          <li>
                            <p id="remote_6">Remote</p>
                          </li>
                        </ul>
                        <p class="btn-click-apply">
                          <a
                            href="mailto:careers@beldex.io"
                            id="click_here_apply_1"
                          >
                            Click here to apply
                          </a>
                        </p>
                      </div>
                      <!-- #tab2 -->
                      <div
                        class="tab_drawer_heading"
                        rel="tab3"
                        data-aos="fade-up"
                      >
                        <div class="carrer-topic">
                          <h5 id="block_chain_core_header_1">
                            Blockchain Core Developer
                          </h5>
                          <p class="career-btn" id="remote_7">
                            Remote
                          </p>
                        </div>
                        <div class="career-content">
                          <p id="block_chain_core_required_skills">
                            <b>Required Skills:</b> Consensus protocols, LMDB
                            database, C, C++, Boost Libraries, CMake and Make
                            files
                          </p>
                        </div>
                        <div class="career-link">
                          <p id="view_apply_5">View & Apply</p>
                          <p>
                            <i class="fas fa-clock"></i>
                            <i>
                              <span class="clock-time-ago" id="time6"></span>
                            </i>
                          </p>
                        </div>
                      </div>
                      <div id="tab3" class="tab_content" data-aos="fade-up">
                        <h3 id="block_chain_core_header_2">
                          Blockchain Core Developer
                        </h3>

                       
                        <h4 id="community_manager_right_person_as_header_2">
                          The Right Person Has
                        </h4>
                        <ul>
                          <li>
                            <p id="Block_chain_core_right_person_as_1">
                              Good understanding of{" "}
                              <b>Blockchain fundamentals</b>
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_2">
                              Strong knowledge of <b>consensus protocols</b>
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_3">
                              Experience in working with <b>lmdb</b> database
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_4">
                              Should have hands on experience in advanced{" "}
                              <b>C++</b> concepts
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_5">
                              Should be capable of writing <b>cmake</b> and{" "}
                              <b>make files</b>
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_6">
                              Experience in working with <b>boost libraries</b>
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_7">
                              Experience in development of any layer one
                              blockchain
                            </p>
                          </li>
                          <li>
                            <p id="Block_chain_core_right_person_as_8">
                              Experience in <b>Monero code</b> base is an added
                              advantage
                            </p>
                          </li>
                        </ul>
                        <h4 id="location_2">Location</h4>
                        <ul>
                          <li>
                            <p id="remote_8">Remote</p>
                          </li>
                        </ul>
                        <p class="btn-click-apply">
                          <a
                            href="mailto:careers@beldex.io"
                            id="click_here_apply_3"
                          >
                            Click here to apply
                          </a>
                        </p>
                      </div> */}
                    {/* <!-- <h3 class="tab_drawer_heading" rel="tab3">Tab 3</h3>
                          <div id="tab3" class="tab_content">
                          <h2>Tab 3 content</h2>
                            <p>Nulla eleifend felis vitae velit tristique imperdiet. Etiam nec imperdiet elit. Pellentesque sem lorem, scelerisque sed facilisis sed, vestibulum sit amet eros.</p>
                          </div> -->
                          <!-- #tab3 -->
                          <!-- <h3 class="tab_drawer_heading" rel="tab4">Tab 4</h3>
                          <div id="tab4" class="tab_content">
                          <h2>Tab 4 content</h2>
                            <p>Integer ultrices lacus sit amet lorem viverra consequat. Vivamus lacinia interdum sapien non faucibus. Maecenas bibendum, lectus at ultrices viverra, elit magna egestas magna, a adipiscing mauris justo nec eros. </p>
                          </div> -->
                          <!-- #tab4 --> 
                            <!-- <h3 class="tab_drawer_heading" rel="tab5">Tab 5</h3>
                          <div id="tab5" class="tab_content">
                          <h2>Tab 5 content</h2>
                            <p>Integer ultrices lacus sit amet lorem viverra consequat. Vivamus lacinia interdum sapien non faucibus. Maecenas bibendum, lectus at ultrices viverra, elit magna egestas magna, a adipiscing mauris justo nec eros. </p>
                          </div>
                        </div> -->
                        <!-- .tab_container --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </div>
    );
}