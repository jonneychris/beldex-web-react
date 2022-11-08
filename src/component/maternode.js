import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Cube from "./img/cube.svg";
import Privacy from "./img/privacy.svg";
import Lock from "./img/secure.svg";
import node_s1 from "./img/s1.png";
import node_s2 from "./img/s2.png";
import node_s3 from "./img/s3.png";
import node_q1 from "./img/q1.png";
import node_q2 from "./img/q2.png";
import node_q3 from "./img/q3.png";
import node_a1 from "./img/a1.png";
import node_a2 from "./img/a2.png";
import node_a3 from "./img/a3.png";
import NodeHub from "./img/our_partners/nodehub.svg";
import Mycointainer from "./img/our_partners/mycointainer.svg";
import PerfectNodes from "./img/PerfectNodes.png";
import Pecunia_platform from "./img/our_partners/pecunia.svg";
import QrCode_mn from "./img/mn_monitor/QR.png";
import QrAndroid from "./img/mn_monitor/android.svg";
import QrMac from "./img/mn_monitor/ios.svg";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Masternode() {
  const [node, setNode] = useState("");
  const [staking, setStaking] = useState("");
  const [toggle, setToggle] = useState(null);
  const [tableFaq, setTableFaq] = useState(null);
  const [tableFaqTwo, setTableFaqTwo] = useState(null);
  const [inputrange, setInputRange] = useState(0);
  const [dailyRewards,setDailyRewards] = useState(18000);
  const [weeklyRewards,setWeeklyRewards] = useState(126000);
  const [monthlyRewards,setMonthlyRewards] = useState(540000);
  const [yearlyRewards,setYearlyRewards] = useState(6570000);
  const [dailyRewardsAns,setDailyRewardsAns] = useState('');
  const [weeklyRewardsAns,setWeeklyRewardsAns] = useState('');
  const [yearlyRewardsAns,setYearlyRewardsAns] = useState('');
  const [monthlyRewardsAns,setMonthlyRewardsAns] = useState('');
  const url = "https://api.beldex.io/api/v1/masternode-details";

   useEffect(() => {
      const nodeUpdate = () => {
        if (inputrange == "") {
          setInputRange(node);
          // console.log("firstifupdate", inputrange);
        }
      };
     AOS.init(
       {
               duration: 1000,
               offset: 120,
               easing: 'ease-in-out'
            }
     );
      nodeUpdate();
      nodeApi();
      multipleRewards(node);
  //  console.log("effect");
  }, [node]);

  const handleChange = (e) => {
    if (inputrange == '') {
      setInputRange(node);
      let number =node;
      // console.log("firstif");
       let total = dailyRewards/number;
    let totalrewards = total.toFixed(5);
    setDailyRewardsAns(totalrewards);

    let  weekTotal = weeklyRewards/number;   
    let totalWeekRewards = weekTotal.toFixed(5);
    setWeeklyRewardsAns(totalWeekRewards);

    let  monthTotal = monthlyRewards/number;  
    let totalMonthRewards = monthTotal.toFixed(5);
    setMonthlyRewardsAns(totalMonthRewards);

    let  yearTotal = yearlyRewards/number;
    let totalYearRewards = yearTotal.toFixed(5);
    setYearlyRewardsAns(totalYearRewards);
    }
    else if(e.target.value === 0){
      // console.log("secondif");
      setDailyRewardsAns(dailyRewards);
    setWeeklyRewardsAns(weeklyRewards);
    setMonthlyRewardsAns(monthlyRewards);
    setYearlyRewardsAns(yearlyRewards);
    // console.log(dailyRewards,"dailyRewards1");

    }
  
    else{
      setInputRange(e.target.value);
      // console.log("thirdifs");
      let total = dailyRewards/e.target.value;
    let totalrewards = total.toFixed(5);
    setDailyRewardsAns(totalrewards);

     let  weekTotal = weeklyRewards/e.target.value;   
    let totalWeekRewards = weekTotal.toFixed(5);
    setWeeklyRewardsAns(totalWeekRewards);

    let  monthTotal = monthlyRewards/e.target.value;  
    let totalMonthRewards = monthTotal.toFixed(5);
    setMonthlyRewardsAns(totalMonthRewards);

    let  yearTotal = yearlyRewards/e.target.value;
    let totalYearRewards = yearTotal.toFixed(5);
    setYearlyRewardsAns(totalYearRewards);
    }
  };

  const multipleRewards =(e)=>{
    let number = node;
    if(number !== "")
    {
      // console.log("multiple");
    let total = dailyRewards/number;
    let totalrewards = total.toFixed(5);
    setDailyRewardsAns(totalrewards);

    let  weekTotal = weeklyRewards/number;   
    let totalWeekRewards = weekTotal.toFixed(5);
    setWeeklyRewardsAns(totalWeekRewards);

    let  monthTotal = monthlyRewards/number;  
    let totalMonthRewards = monthTotal.toFixed(5);
    setMonthlyRewardsAns(totalMonthRewards);

    let  yearTotal = yearlyRewards/number;
    let totalYearRewards = yearTotal.toFixed(5);
    setYearlyRewardsAns(totalYearRewards);

    }
    else{
    setDailyRewards(dailyRewards);
    setWeeklyRewards(weeklyRewards);
    setMonthlyRewards(monthlyRewards);
    setYearlyRewards(yearlyRewards);
    }

  }


 
  let faqcontent = (id) => {
    if (toggle === id) {
      setToggle(null);
      return false;
    } else {
      setToggle(id);
    }
  };
  let tableFaqContent = (id) => {
    if (tableFaq === id) {
      setTableFaq(null);
      return false;
    } else {
      setTableFaq(id);
    }
  };
  let tableFaqContentTwo = (id) => {
    if (tableFaqTwo === id) {
      setTableFaqTwo(null);
      return false;
    } else {
      setTableFaqTwo(id);
    }
  };

  const faqHeader = [
    {
      id: 1,
      question: "What are BDX Masternodes?",
      answer:
        "BDX masternodes are nodes that help scale and securethe Beldex network. They possess validation rights within the network and are incentivized for their contributions.",
    },
    {
      id: 2,
      question: "What is the minimum collateral to set up a BDX masternode?",
      answer:
        "The minimum staking collateral is 10000 BDX to set up a self-hosted masternode or a cold masternode hosting on Nodehub. However, with shared masternode pools like MyCointainer, you can stake any amount.",
    },
    {
      id: 3,
      question: "What is the locking period?",
      answer:
        "Masternode collateral is locked for a minimum of 30 days, that is the time required to generate 86400 blocks.",
    },
  ];

  const tableSecondHalf = [
    {
      id: 1,
      question: "How are masternodes rewarded?",
      answer:
        " Block rewards are shared by the masternodes in the network. Beldex follows a reward queue based on the first in first out mechanism to ensure that every  masternode in the network is fairly rewarded. If your  masternode was recently rewarded, then it will end up  at the bottom of the reward queue and wait its turn for the next reward cycle.",
    },
    {
      id: 2,
      question: "Why set up BDX masternodes?",
      answer:
        "  BDX masternodes are a great way to participate in the Beldex network and get passive rewards at the same time. Current block rewards are 10 BDX per block. 62.5% of the block rewards are allocated to themasternode operators while 37.5% are allocated to governance.",
    },
  ];

  const tableMasternode = [
    {
      id: 1,
      question: "What are the minimum hardware requirements?",
      answer: {
        table_header_1: "spec",
        table_header_2: "Note",
        left_side_1: "Latest Binary",
        left_side_2: "Software",
        left_side_3: "Storage",
        left_side_4: "Ram",
        left_side_5: "CPU",
        right_side_1: "Bucephalus v4.1.0",
        right_side_2: "Ubuntu 18.04",
        right_side_3: "30-50 GB",
        right_side_4: "2-4 GB",
        right_side_5: "1 Core",
      },
    },
  ];

  async function nodeApi() {
    try {
      let response = await axios.get(url).then((res) => {
        if (res.status === 200) {
          setNode(res.data.total_master_node);
          setStaking(res.data.total_bdx_statking);
        }
      });
    } catch {}
  }



  return (
    <div>
      <Navbar />
      <main data-aos="fade-up">
        {/* <!-- Masternode Section--> */}
        <div className="container-fluid masternode">
          <div className="row">
            <h1 id="beldex_masternode_header" data-aos="fade-up">
              Beldex Masternodes
            </h1>
            <h3 id="beldex_masternode_content" data-aos="fade-up-left">
              The Beldex network is powered by Beldex masternodes. Host your BDX
              masternodes to earn passive rewards.
            </h3>
          </div>
        </div>
        {/* <!-- End--> */}
        {/* <!--Run a masternode--> */}
        <div className="container-fluid run-masternode beldex-rewards">
          <div className="row">
            <div className="col-12 col-sm-12 icon-head run-nodes">
              <h2 id="masternode_run" data-aos="fade-right">
                Run{" "}
              </h2>
              <h1 id="a_masternode_header" data-aos="fade-left">
                {" "}
                A Masternode
              </h1>
              <h4 id="a_masternode_content" data-aos="fade-up-left">
                Beldex masternodes help the network remain fast, scalable,
                secure and decentralized{" "}
              </h4>
              <div className="cube1  cube-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure-masternode">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="privacy1 privacy-masternode">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox">
              <div className="box-1 grad1" data-aos="fade-up">
                <div className="icon-img">
                  <img src={node_s1} alt="nodes1" />
                </div>
                <h5 id="secure_network">Secure the Network</h5>
                <p id="secure_network_content">
                  Community participation is key to Beldex. Set up a BDX
                  masternode and help secure the network.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox">
              <div
                className="box-1 grad2"
                data-aos="fade-up"
                data-aos-duration="1700"
              >
                <div className="icon-img">
                  <img src={node_s2} alt="nodes2" />
                </div>
                <h5 id="get_passive_rewards">Get Passive Rewards</h5>
                <p id="get_passive_content">
                  Get passive rewards for your contribution to the network. BDX
                  rewards can be claimed daily, weekly, and monthly.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox">
              <div
                className="box-1 grad3"
                data-aos="fade-up"
                data-aos-duration="2100"
              >
                <div className="icon-img">
                  <img src={node_s3} alt="nodes3" />
                </div>
                <h5 id="scalale_dapps">Scalable DApps</h5>
                <p id="scalable_dapps_content">
                  The more masternodes there are, the more scalable the network
                  is. You help us build scalable DApps on top of Beldex chain.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-12">
              <div className="masternode-count">
                <div className="col-12 col-sm-6 col-lg-4">
                  <div className="circle-1" data-aos="fade-up">
                    <p>
                      <img src={node_q1} alt="q1node" />
                    </p>
                    <p id="masternode_online">Masternodes Online</p>
                    <h5 id="total-mn">{node}</h5>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="circle-1"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  >
                    <p>
                      <img src={node_q2} alt="q2node" />
                    </p>
                    <p id="locked_masternode">Locked in Masternodes</p>
                    <h5 id="total-bdx" className="green h5-line">
                      {staking}
                    </h5>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                  <div
                    className="circle-1"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <p>
                      <img src={node_q3} alt="q3node" />
                    </p>
                    <p id="minium_lockup">Minimum Lockup</p>
                    <h5 id="thirty_days_block">
                      30 days <span>(86400 Blocks)</span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End--> */}

        {/* <!--Calculate BDX rewards--> */}
        <div className="container-fluid bdx-rewards">
          <div className="row">
            <div className="col-12 col-sm-12 beldex-rewards" data-aos="fade-up">
              <h2 id="calculate_your_bdx" data-aos="fade-up">
                Calculate your BDX Rewards
              </h2>
              <p id="calculate_bdx_content" data-aos="fade-up-left">
                BDX rewards are shared by the masternode on the network. To
                ensure that all masternodes are rewarded,each masternode is
                incentivized based on a reward queue. Enter the number of
                masternodes on the network to check your BDX masternode rewards
              </p>
            </div>
            <div className="col-12 col-sm-12">
              <form>
                <div className="form-group masternode-form">
                  <h1 id="hashrate" data-aos="fade-up">
                    {node}
                  </h1>
                  <h5 id="currently_running_beldex" data-aos="fade-up">
                    Currently Running on Beldex Network
                  </h5>
                </div>

                <div className="col-md-12 col-12 bdx-calc-new">
                  <div className="row">
                    <div
                      className="calc col-sm-6 col-lg-3 col-12"
                      data-aos="fade-up"
                    >
                      <p id="daily_rewards">
                        Daily <span>Rewards</span>
                      </p>
                      <div id="result">{dailyRewards?dailyRewardsAns:dailyRewards}</div>
                    </div>
                    <div
                      className="calc col-sm-6 col-lg-3 col-12"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                    >
                      <p id="weekly_rewards">
                        Weekly <span>Rewards</span>
                      </p>
                      <div id="week">{weeklyRewards?weeklyRewardsAns:weeklyRewards}</div>
                    </div>
                    <div
                      className="calc col-sm-6 col-lg-3 col-12"
                      data-aos="fade-up"
                      data-aos-duration="1600"
                    >
                      <p id="monthlu_rewards">
                        Monthly <span>Rewards</span>
                      </p>
                      <div id="month">{monthlyRewards?monthlyRewardsAns:monthlyRewards}</div>
                    </div>
                    <div
                      className="calc col-sm-6 col-lg-3 col-12"
                      data-aos="fade-up"
                      data-aos-duration="2100"
                    >
                      <p id="annula_rewards">
                        Annual <span>Rewards</span>
                      </p>
                      <div id="year">{yearlyRewards?yearlyRewardsAns:yearlyRewards}</div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="range-slider">
                  <Box style={{ width: "100%" }}>
                    <Slider
                      valueLabelDisplay="auto"
                      value={inputrange}
                      max={10000}
                      step={1}
                      min={0}
                      onChange={handleChange}
                    />
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End--> */}

        {/* <!--Masternode Requirements--> */}
        <div className="container-fluid run-masternode">
          <div className="row">
            <div className="col-12 col-sm-12 beldex-rewards">
              <h2 id="masternode_reqiurements" data-aos="fade-left">
                Masternode Requirements
              </h2>
              <h4 id="masternode_requirement_content" data-aos="fade-up-left">
                Beldex masternodes help the network remain fast, scalable,
                secure and decentralized
              </h4>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox1">
              <div
                className="box-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="icon-img">
                  <img src={node_a1} alt="node_a1" />
                </div>
                <h5 id="collateral">Collateral</h5>
                <p>10000 BDX</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox1">
              <div
                className="box-1"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <div className="icon-img">
                  <img src={node_a2} alt="node_a2" />
                </div>
                <h5 id="vps">VPS</h5>
                <p id="dedicated_ip">Dedicated IP</p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-4 mnbox1">
              <div
                className="box-1"
                data-aos="fade-up"
                data-aos-duration="2100"
              >
                <div className="icon-img">
                  <img src={node_a3} alt="node_a3" />
                </div>
                <h5 id="online">Online</h5>
                <p id="updatetime">24h Uptime</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End--> */}

        {/* <!--Masternode remote--> */}
        <div className="container-fluid remote-host  beldex-rewards">
          <div className="row">
            <div
              className="col-12 col-sm-12 icon-head run-nodes"
              data-aos="fade-up"
            >
              <h2 id="masternode_header_remote" data-aos="fade-up">
                Masternode{" "}
              </h2>
              <h1 id="remote_hosting" data-aos="fade-right">
                Remote Hosting
              </h1>
              <h4 id="remote_hosting_content" data-aos="fade-up-left">
                Host your BDX masternode effortlessly with our masternode
                partners
              </h4>
              <div className="cube1  cube-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure-masternode">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="privacy1 privacy-masternode">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 mnbox" data-aos="fade-up">
              <div
                className="box-2 grad1"
                data-aos="fade-up"
                data-aos-duration="1400"
              >
                <div className="partner-img">
                  <a
                    href="https://www.mycointainer.com/assets/beldex"
                    target="_blank"
                  >
                    <img src={Mycointainer} alt="mycointainer" />
                  </a>
                </div>
                <p id="mycontainer_content">
                  Simple and easy to your shared masternode pool staking.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-3 mnbox">
              <div
                className="box-2 grad2"
                data-aos="fade-up"
                data-aos-duration="1600"
              >
                <div className="partner-img">
                  <a
                    href="https://pecuniaplatform.io/coin-details/Beldex"
                    target="_blank"
                  >
                    <img src={Pecunia_platform} alt="pecunia-platform" />
                  </a>
                </div>
                <p id="pecinia_plateform">
                  Shared masternode pool with extensive analytics on reward
                  data.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-3 mnbox">
              <div
                className="box-2 grad3"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <div className="partner-img ">
                  <a
                    href="https://nodehub.io/dashboard/deploy?coin=beldex"
                    target="_blank"
                  >
                    <img
                      src={NodeHub}
                      className="nodehub_masternode"
                      alt="nodehub"
                    />
                  </a>
                  <p id="nodehub_content">
                    Masternode cold staking platform. Your funds are always with
                    you.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-12 col-lg-3 mnbox">
              <div
                className="box-2 grad3"
                data-aos="fade-up"
                data-aos-duration="2100"
              >
                <div className="partner-img ">
                  <a
                    href="https://perfectnodes.com/en/masternodes/"
                    target="_blank"
                  >
                    <img
                      src={PerfectNodes}
                      className="perfectnode_masternode"
                      alt="nodehub"
                    />
                  </a>
                  <p className="perfectnode_content" id="perfect_node_hub">
                    Simplified masternode hosting solution. Stake any % of the
                    collateral and receive proportionate rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End--> */}

        {/* <!--Masternode Requirements--> */}
        <div className="container-fluid run-masternode beldex-rewards faq-new">
          <div className="row">
            <div className="col-12 col-sm-12 mn-bg" data-aos="fade-up">
              <h2 id="masternode_setup_guide" data-aos="fade-up">
                Masternode Setup Guide
              </h2>
              <h4 id="maternode_setup_content" data-aos="fade-up">
                You can set up a dedicated masternode by following the guide
                below
              </h4>
              <p className="docs-link">
                <a
                  href="https://docs.beldex.io/master-nodes/"
                  id="http_masternode_url"
                  target="_blank"
                >
                  https://docs.beldex.io/master-nodes/
                </a>
              </p>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-sm-12 col-md-12 col-12 mb-5 ">
                  <div className="mn_moniter_header" data-aos="fade-up">
                    <p id="mn_content">
                      Now you can easily Monitor your beldex Masternode anytime
                    </p>
                    <h6 id="mn_header">
                      Grab your <span id="mn_main_header">MN Moniter</span> App
                      on
                    </h6>
                  </div>
                  <div className="qr_monitor_header" data-aos="fade-up">
                    <div className="qr_img" data-aos="fade-right">
                      <img src={QrCode_mn} alt="QrCode_mn" />
                    </div>
                    <div className="android_ios_btn" data-aos="fade-left">
                      <p data-aos="fade-left">
                        <a
                          id="mn_android_btn"
                          href="https://play.google.com/store/apps/details?id=io.beldex.master_node_monitor"
                          target="_blank"
                          className="download_btn_android"
                        >
                          {" "}
                          <img src={QrAndroid} alt="QrAndroid" /> Download for
                          Android
                        </a>
                      </p>
                      <p data-aos="fade-left" data-aos-duration="1800">
                        <a
                          id="mn_ios_btn"
                          href="https://apps.apple.com/kg/app/beldex-masternode-monitor/id1640027481"
                          target="_blank"
                          className="download_btn_ios"
                        >
                          <img src={QrMac} alt="QrMac" /> Download for ios
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 FAQ icon-head run-nodes ">
              <h2 id="faq_header" data-aos="fade-up">
                FAQ
              </h2>
              <h1 id="faq_content" data-aos="fade-up">
                Frequently Asked Questions
              </h1>
              <div className="cube1  cube-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure-masternode">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-masternode">
                <img src={Cube} alt="cube" />
              </div>
              <div className="privacy1 privacy-masternode">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 faq-mobile">
                <div className="faq_header">
                  {faqHeader.map((value) => {
                    const { answer, question, id } = value;
                    return (
                      <div
                        className="accordion-item"
                        data-aos="fade-up-left"
                        key={id}
                      >
                        <button
                          id="accordion-button-5"
                          onClick={() => faqcontent(id)}
                        >
                          <span
                            className="accordion-title"
                            id="set_ip_bdx_accord_header"
                          >
                            {question}
                          </span>
                          <div className="icon_header">
                            {id === toggle ? (
                              <span className="iconminus">-</span>
                            ) : (
                              <span className="icon">+</span>
                            )}
                          </div>
                        </button>
                        {id === toggle ? (
                          <div className="accordion-content">
                            <p id="masternode_reward_accord_content">
                              {answer}
                            </p>
                          </div>
                        ) : (
                          " "
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 faq-mobile">
                <div className="faq_header">
                  {tableSecondHalf.map((value) => {
                    const { answer, id, question } = value;
                    return (
                      <div
                        className="accordion-item"
                        data-aos="fade-up-left"
                        key={id}
                      >
                        <button
                          id="accordion-button-4"
                          onClick={() => tableFaqContentTwo(id)}
                        >
                          <span
                            className="accordion-title"
                            id="masternode_reward_accord_header"
                          >
                            {question}
                          </span>
                          <div className="icon_header">
                            {id === tableFaqTwo ? (
                              <span className="iconminus">-</span>
                            ) : (
                              <span className="icon">+</span>
                            )}
                          </div>
                        </button>
                        {id === tableFaqTwo ? (
                          <div className="accordion-content">
                            <p id="masternode_reward_accord_content">
                              {answer}
                            </p>
                          </div>
                        ) : (
                          " "
                        )}
                      </div>
                    );
                  })}
                  <div>
                    {tableMasternode.map((value) => {
                      const { id, answer, question } = value;

                      return (
                        <div
                          className="accordion-item"
                          data-aos="fade-up-left"
                          key={id}
                        >
                          <button
                            id="accordion-button-6"
                            aria-expanded="false"
                            onClick={() => tableFaqContent(id)}
                          >
                            <span
                              className="accordion-title"
                              id="minium_hardware_reqired_accord"
                            >
                              {question}
                            </span>
                            <div className="icon_header">
                              {id === tableFaq ? (
                                <span className="iconminus">-</span>
                              ) : (
                                <span className="icon">+</span>
                              )}
                            </div>
                          </button>
                          {id === tableFaq ? (
                            <div className="accordion-content">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th scope="col" id="spec">
                                      {answer.table_header_1}
                                    </th>
                                    <th scope="col" id="note">
                                      {answer.table_header_2}
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td id="latest_binary">
                                      {answer.left_side_1}
                                    </td>
                                    <td>
                                      <a
                                        href="https://github.com/Beldex-Coin/beldex/releases/tag/v4.1.0"
                                        id="bucephalus"
                                        target="_blank"
                                      >
                                        {answer.right_side_1}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td id="software">{answer.left_side_2}</td>
                                    <td id="ubuntu"> {answer.right_side_2}</td>
                                  </tr>
                                  <tr>
                                    <td id="storeage">{answer.left_side_3}</td>
                                    <td id="gb"> {answer.right_side_3}</td>
                                  </tr>
                                  <tr>
                                    <td id="ram">{answer.left_side_4}</td>
                                    <td id="gb_1"> {answer.right_side_4}</td>
                                  </tr>
                                  <tr>
                                    <td id="cpu">{answer.left_side_5}</td>
                                    <td id="core"> {answer.right_side_5}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            " "
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- End--> */}
      </main>
      <Footer />
    </div>
  );
}
