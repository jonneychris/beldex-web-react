// eslint-disable-next-line
import React, { useState,useEffect ,useRef} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Block from "./img/main.svg";
import Cube_1 from "./img/cube.svg";
import Run_masternode from "./img/s1.svg";
import Cube from "./img/cube.svg";
import Privacy from "./img/privacy.svg";
import Lock from "./img/secure.svg";
import Beldex_ecosystem from "./img/s2.svg";
import Beldex_product from "./img/beldex-products.mp4";
import Furistics from "./img/futuristic-B1.mp4";
import Zn_snark from "./img/zk-snarks.svg";
import Ethereum from "./img/ethereum-virutal.svg";
import Bns_domain from "./img/bns-domain.svg";
import Mexc from "./img/our_partners/mexc.svg";
import Gate_io from "./img/our_partners/gate.io.png";
import HotBit from "./img/our_partners/hotbit.svg";
import Hitbit from "./img/our_partners/hitbtc.svg";
import Coinsbit from "./img/our_partners/consbit-1.svg";
import Coinsbit_1 from "./img/our_partners/consbit-2.svg";
import P2B from "./img/our_partners/p2b-01.png";
import Btc_aplha from "./img/our_partners/btc-alpha.svg";
import BuyUcoin from "./img/our_partners/buyucoin.svg";
import Bilaxy from "./img/our_partners/billaxy.svg";
import Mno from "./img/our_partners/masternode-online.svg";
import Masternode_Buzz from "./img/our_partners/masternode-buzz.svg";
import NodeHub from "./img/our_partners/nodehub.svg";
import Mycointainer from "./img/our_partners/mycointainer.svg";
import PerfectNodes from "./img/PerfectNodes.png";
import Pecunia_platform from "./img/our_partners/pecunia.svg";
import GetBlock from "./img/our_partners/getblock.svg";
import Coinmarketcap from "./img/our_partners/coin-market-cap.svg";
import CoinGecko from "./img/our_partners/coingecko.svg";
import Cmc from "./img/our_partners/cmc.svg";
import Coincodex from "./img/our_partners/coincodex.svg";
import CryptoCompare from "./img/our_partners/cryptocompare.svg";
import CoinBase from "./img/our_partners/coinbase.svg";
import Nomics from "./img/our_partners/nomics.svg";
import Coinpapirika from "./img/our_partners/nomics.svg";
import CoinRaking from "./img/our_partners/coinranking.svg";
import Cryptocom from "./img/our_partners/cryptocom.svg";
import Bnb from "./img/BNB.png";
import Certick from "./img/website-partnership-banner_2.png";
import GeomentryLabs from "./img/website_rnd.png";
import CoinTelegrap from "./img/media_partners/coin-telegraph.svg";
import BloomBerg from "./img/media_partners/bloomberg.svg";
import Yohoo_finances from "./img/media_partners/yahoo-finance.svg";
import Hackernoon from "./img/media_partners/hackernoon.svg";
import Amb_crypto from "./img/media_partners/amb-crypto.svg";
import News_btc from "./img/media_partners/newsbtc.svg";
import Cointelegraph from "./img/media_partners/bankless.svg";
import Be_in_crypto from "./img/media_partners/be-in-cypto.svg";
import U_Today from "./img/media_partners/U-today.svg";
import Benzinga from "./img/media_partners/benzinga.svg";
import CoinsSpeaker from "./img/media_partners/coinspeaker.png";
import Analystics_insight from "./img/media_partners/analytics-insight.svg";
import CoinPedia from "./img/media_partners/coinpedia.svg";
import bitcoin_africa from "./img/media_partners/bitcoin-africa.svg";
import Blocksgeeks from "./img/media_partners/blocksgeeks.svg";
import CryptoNews from "./img/media_partners/crypto-news.svg";
import CryptoPotato from "./img/media_partners/crypto-potato.svg";
import Investing from "./img/our_partners/in.investing.com.png";
import Finanicalexpress from "./img/our_partners/financialexpress.png";
import Economictimes from "./img/our_partners/economictime.png";
import CoinJounral from "./img/our_partners/CoinJournal-logo.svg.png";
import LiveMint from "./img/our_partners/livemint-logo-v2.png";
import CryptoCom from "./img/our_partners/crypto_ru_logo.png";
import AffandHushni from "./img/Images_avatar/affandy.jpg";
import Kim from "./img/Images_avatar/9_CEO.jpg";
import Ziau from "./img/Images_avatar/10_3.jpg";
import CodemanCrypto from "./img/Images_avatar/master_yas.jpg";
import Allard from "./img/adviser_img/allard.jpg";
import Mitchell from "./img/adviser_img/mitchell.jpg";
import Dominique from "./img/adviser_img/domnique.jpg";
import Contributor from "./img/contributor-icon.png";
import Partners from "./img/partners-icon.png";
import Ambassdor from "./img/ambassador-icon.png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaMediumM } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import {AiOutlineGithub} from "react-icons/ai";
import { FaWallet } from "react-icons/fa";
import {FaLink} from "react-icons/fa";
import {FaTasks} from "react-icons/fa";
import {FaCodeBranch} from "react-icons/fa";
import BcLogo from "./img/bc-logo.png";
import {FaRegFileCode} from "react-icons/fa";
import {FaConnectdevelop} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {BiMobileAlt} from "react-icons/bi";
import {FaDesktop} from "react-icons/fa";
import {FaEye} from "react-icons/fa";
import {FaServer} from "react-icons/fa";
import {FaLaptopCode} from "react-icons/fa";
import {FaSpaceShuttle} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';



let useClickOutside =(handler)=>{
  let domContains =useRef();
 useEffect(()=>{
    let mayBeHandler=(event)=>{
      if(domContains.current && !domContains.current.contains(event.target)){
        handler();
      };
 };
    document.addEventListener("mousedown", mayBeHandler)
    return ()=>{
    document.removeEventListener("mousedown", mayBeHandler)

    };
    
});
return domContains
}

export default function Mainpage() {

  useEffect(()=>{
     AOS.init(
       {
               duration: 1000,
               offset: 120,
               easing: 'ease-in-out'
            }
     );
  },[])

   const [roadMap_1, setRoadMap_1] = useState(false);
   const [roadMap_2, setRoadMap_2] = useState(false);
   const [roadMap_3, setRoadMap_3] = useState(false);
   const [roadMap_4, setRoadMap_4] = useState(false);
   const [roadMap_5, setRoadMap_5] = useState(false);
   const [roadMap_6, setRoadMap_6] = useState(false);
   const [roadMap_7, setRoadMap_7] = useState(false);
   const [roadMap_8, setRoadMap_8] = useState(false);
   const [roadMap_9, setRoadMap_9] = useState(false);
   const [roadMap_10, setRoadMap_10] = useState(false);
   const [roadMap_11, setRoadMap_11] = useState(false);
   const [roadMap_12, setRoadMap_12] = useState(false);

  let domContains = useClickOutside(()=>{
      setRoadMap_1(true);
      setRoadMap_2(false);
      setRoadMap_3(false);
      setRoadMap_4(false);
      setRoadMap_5(false);
      setRoadMap_6(false);
      setRoadMap_7(false);
      setRoadMap_8(false);
      setRoadMap_9(false);
      setRoadMap_10(false);
      setRoadMap_11(false);
      setRoadMap_12(false);
  })

   const next= (id)=>{
 if (roadMap_2 === id) {
       setRoadMap_2(false);
      //  console.log("false",setRoadMap_2(false));
 }
     else{
      setRoadMap_1(false);
      setRoadMap_2(id);
      //  console.log("true", setRoadMap_2());


     }
   }

   const next_1= (id)=>{
 if (roadMap_3 === id) {
       setRoadMap_3(false);
       return false;
 }
     else{
      setRoadMap_2(false)
      setRoadMap_3(id);
     }
   }
   const next_2= (id)=>{
 if (roadMap_4 === id) {
       setRoadMap_4(false);
       return false;
 }
     else{
      setRoadMap_3(false)
      setRoadMap_4(id);
     }
   }
      const next_3= (id)=>{
 if (roadMap_6 === id) {
       setRoadMap_6(false);
       return false;
 }
     else{
      setRoadMap_5(false)
      setRoadMap_6(id);
     }
   }
      const next_4 = (id)=>{
 if (roadMap_7 === id) {
       setRoadMap_7(false);
       return false;
 }
     else{
      setRoadMap_6(false)
      setRoadMap_7(id);
     }
   }
      const next_5= (id)=>{
 if (roadMap_8 === id) {
       setRoadMap_8(false);
       return false;
 }
     else{
      setRoadMap_7(false)
      setRoadMap_8(id);
     }
   }
     const next_6= (id)=>{
 if (roadMap_10=== id) {
       setRoadMap_10(false);
       return false;
 }
     else{
      setRoadMap_9(false)
      setRoadMap_10(id);
     }
   }
     const next_7= (id)=>{
 if (roadMap_11=== id) {
       setRoadMap_11(false);
       return false;
 }
     else{
      setRoadMap_10(false)
      setRoadMap_11(id);
     }
   }
     const next_8= (id)=>{
 if (roadMap_12=== id) {
       setRoadMap_12(false);
       return false;
 }
     else{
      setRoadMap_11(false)
      setRoadMap_12(id);
     }
   }

     const prev_1= (id)=>{
 if (roadMap_1=== id) {
       setRoadMap_1(false);
       return false;
 }
     else{
      setRoadMap_2(false)
      setRoadMap_1(id);
     }
   }
   const prev_2= (id)=>{
 if (roadMap_2 === id) {
       setRoadMap_2(false);
       return false;
 }
     else{
      setRoadMap_3(false)
      setRoadMap_2(id);
     }
   }
      const prev_3= (id)=>{
 if (roadMap_3 === id) {
       setRoadMap_3(false);
       return false;
 }
     else{
      setRoadMap_4(false)
      setRoadMap_3(id);
     }
   }
      const prev_4 = (id)=>{
 if (roadMap_5 === id) {
       setRoadMap_5(false);
       return false;
 }
     else{
      setRoadMap_6(false)
      setRoadMap_5(id);
     }
   }
      const prev_5= (id)=>{
 if (roadMap_6 === id) {
       setRoadMap_6(false);
       return false;
 }
     else{
      setRoadMap_7(false)
      setRoadMap_6(id);
     }
   }
     const prev_6= (id)=>{
 if (roadMap_7 === id) {
       setRoadMap_7(false);
       return false;
 }
     else{
      setRoadMap_8(false)
      setRoadMap_7(id);
     }
   }
     const prev_7= (id)=>{
 if (roadMap_9 === id) {
       setRoadMap_9(false);
       return false;
 }
     else{
      setRoadMap_10(false)
      setRoadMap_9(id);
     }
   }
     const prev_8= (id)=>{
 if (roadMap_10 === id) {
       setRoadMap_10(false);
       return false;
 }
     else{
      setRoadMap_11(false)
      setRoadMap_10(id);
     }
   }

      const prev_9= (id)=>{
 if (roadMap_11 === id) {
       setRoadMap_11(false);
       return false;
 }
     else{
      setRoadMap_12(false)
      setRoadMap_11(id);
     }
   }

   const roadMap_one = (id) => {
     if (roadMap_1 === id) {
      setRoadMap_1(false);
      return false;
    
     } 
     else {
        setRoadMap_1(id);
       setRoadMap_2(false);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_5(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);
       
     }
   };
   const roadMap_two = (id) => {
     if (roadMap_2 === id) {
       setRoadMap_2(false);
       return false;
     } else {
       setRoadMap_2(id);
       setRoadMap_1(false);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_5(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

     }
   };

   const roadMap_three = (id)=>{
    if(roadMap_3 === id){
      setRoadMap_3(false);
      return false;
    }
    else{
       setRoadMap_3(id);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_4(false);
       setRoadMap_5(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);


    }

   }
    const roadMap_four = (id)=>{
    if(roadMap_4 === id){
      setRoadMap_4(false);
      return false;
    }
    else{
       setRoadMap_4(id);
      setRoadMap_3(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_5(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);


    }

   }
    const roadMap_five = (id)=>{
    if(roadMap_5 === id){
      setRoadMap_5(false);
      return false;
    }
    else{
       setRoadMap_5(id);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);
       

    }

   }
    const roadMap_six = (id)=>{
    if(roadMap_6 === id){
      setRoadMap_6(false);
      return false;
    }
    else{
       setRoadMap_6(id);
        setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_5(false);
       setRoadMap_7(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_seven = (id)=>{
    if(roadMap_7 === id){
      setRoadMap_7(false);
      return false;
    }
    else{
       setRoadMap_7(id);
        setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_5(false);
       setRoadMap_6(false);
       setRoadMap_8(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_eight = (id)=>{
    if(roadMap_8 === id){
      setRoadMap_8(false);
      return false;
    }
    else{
       setRoadMap_8(id);
        setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_5(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_nine= (id)=>{
    if(roadMap_9=== id){
      setRoadMap_9(false);
      return false;
    }
    else{
       setRoadMap_9(id);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_5(false);
       setRoadMap_8(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_ten = (id)=>{
    if(roadMap_10 === id){
      setRoadMap_10(false);
      return false;
    }
    else{
       setRoadMap_10(id);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_5(false);
       setRoadMap_9(false);
       setRoadMap_8(false);
       setRoadMap_11(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_eleven= (id)=>{
    if(roadMap_11 === id){
      setRoadMap_11(false);
      return false;
    }
    else{
       setRoadMap_11(id);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_5(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_8(false);
       setRoadMap_12(false);

    }

   }
    const roadMap_twelve = (id)=>{
    if(roadMap_12 === id){
      setRoadMap_12(false);
      return false;
    }
    else{
       setRoadMap_12(id);
       setRoadMap_3(false);
       setRoadMap_4(false);
       setRoadMap_2(false);
        setRoadMap_1(false);
       setRoadMap_6(false);
       setRoadMap_7(false);
       setRoadMap_5(false);
       setRoadMap_9(false);
       setRoadMap_10(false);
       setRoadMap_11(false);
       setRoadMap_8(false);

    }

   }



     const roadMapContent_1 = [
       {
        id:"1",
         answer: {
           answer_1: "Web Wallet V2 Launched",
           answer_2: "Android Wallet Launched",
           answer_3: "Electron Desktop Wallet Launched",
         },
       }];
        const roadMapContent_2 = [
       {
        id:"1",
         answer: {
           answer_1: "BDX Launched on BSC",
           answer_2: "Beldex-BSC Bridge Goes Live",
           answer_3: "BDX Listed on Bilaxy Exchange",
         },
       }];
 const roadMapContent_3 = [
       {
        id:"1",
         answer: {
           answer_1: "Whitepaper V 2.0 Update",
           answer_2: "Website UI/UX Update",
           answer_3: "BDX Listed on Hotbit and MEXC Exchanges",
           answer_4: "Flash Transactions on Testnet",
           answer_5: "POS Launched on Testnet",
         },
       }];
 const roadMapContent_4= [
       {
        id:"1",
         answer: {
           answer_1: "POS Hardfork ",
           answer_2: "Beldex Storage Server",
           answer_3: "BelNet Masternode Dependency",
         },
       },
     ];

        const roadMapContent_5 = [
          {
            id:"1",
            answer: {
              answer_1: "iOS Wallet Launched",
              answer_2: "Improvised Android Wallet Launched",
              answer_3: "LWS Development Started",
              answer_4: "Started Testing BChat on Testnet",
            },
          }];
 const roadMapContent_6 = [
          {
            id:"1",
            answer: {
              answer_1: "BChat iOS & Android app (Alpha)",
              answer_2: "LWS - Light Wallet Servicee",
              answer_3: "Beldex Privacy Protocol on Binance Smart Chain",
              answer_4: "Initial Planning for Beldex Browser Development",
            },
          }];
 const roadMapContent_7 = [
          {
            id:"1",
            answer: {
              answer_1: "Wallet Integration on BChat",
              answer_2: "Beldex Bridge for Polygon and Tron",
              answer_3: "Beldex Privacy Protocol on Polygon and Tron",
              answer_4: "Initial Planning for Wallet Browser Extension",
            },
          }];
 const roadMapContent_8= [
          {
            id:"1",
            answer: {
              answer_1: "Beldex Name System (BNS)",
              answer_2: "Research on EVM and Sidechains",
              answer_3: "BNS Domains for Dapps",
              answer_4: "Beldex Browser Development Begins",
            },
          }];


        const roadMapContent_9 = [
          {
          id:"1",
            answer: {
              answer_1: "Beldex Bridge for Tezos",
              answer_2: "Beldex Privacy Protocol on Tezos",
              answer_3: "Continue Research on EVM and Sidechains",
              answer_4: "BelNet Launch on Testnet",
              answer_5: "Beldex Bridge UI/UX Revamp",
            },
          }];
        const roadMapContent_10 = [
          {
            id:"1",
            answer: {
              answer_1: "BelNet Beta Release",
              answer_2: "Beldex Browser Beta Release",
              answer_3: "Research on Sharing Large Files using BChat",
              answer_4: "Development Plan for EVM Integration",
            },
          }];
        const roadMapContent_11 = [
          {
            id: "1",
            question: " Q3 - EVM Integration Phase I",
            answer: {
              answer_1: "Phase I Development of EVM Integration",
            },
          }];
        const roadMapContent_12= [
          {
            id:"1",
            answer: {
              answer_1: "Phase II Development of EVM Integration",
              answer_2: "EVM Launch on Testnet",
            },
          },
        ];

         

  return (
    <div>
      <Navbar />

      <main className="main_whole_content wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s">
        {/* <!-- Banner Section--> */}
        <div className="container-fluid banner-section">
          <div className="row">
            <div className="animation-bg">
              <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 col-sm-12 col-lg-6 private-text"
              data-aos="fade-up"
            >
              <h1 id="web_three">WEB 3.0</h1>
              <h2>
                <span style={{ whiteSpace: "pre" }} className="typed"></span>
              </h2>
              <p className="building_scalable" id="Building_sclable">
                Building scalable, decentralized, and secure applications
                Internet of Privacy.
              </p>
              <p>
                <a
                  href="masternode"
                  className="validator-button valiadator_btn"
                  id="validator_button"
                  rel="noreferrer"
                >
                  Become a validator
                </a>
              </p>
              <p className="social-icons " data-aos="zoom-out-left">
                <a
                  href="https://t.me/official_beldex"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaTelegramPlane />
                  </i>
                </a>
                <a
                  href="https://www.facebook.com/beldexofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaFacebookF />
                  </i>
                </a>
                <a
                  href="https://www.instagram.com/beldexcoin/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <AiOutlineInstagram />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/company/beldex-coin/mycompany/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="https://beldexcoin.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaMediumM />
                  </i>
                </a>
                <a
                  href="https://discord.com/invite/Hj4MAmA5gs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <SiDiscord />
                  </i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCqa1JoBB2SbmFBR7-dYQhJg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <BsYoutube />
                  </i>
                </a>
              </p>
              <p className="twitterbutton">
                <span><AiOutlineTwitter/></span>
                <a
                  href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fbeldex.io%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5EBeldexCoin&screen_name=BeldexCoin"
                  target="_blank"
                  rel="noreferrer noreferrer"
                >Follow</a>
              </p>
            </div>
            <div
              className="col-12 col-sm-12 col-lg-6 main-image"
              data-aos="fade-up"
            >
              <img src={Block} alt="block_img" />
              <div className="cube1">
                <img src={Cube_1} alt="cube_1" />
              </div>
              <div className="cube2">
                <img src={Cube_1} alt="cube_1" />
              </div>
              <div className="svg-img1">
                <img src={Run_masternode} alt="sheild" />
              </div>
              <div className="svg-img2">
                <img src={Beldex_ecosystem} alt="Lock" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid beldex-video ">
          <div className="row">
            <div className="col-12 col-sm-12 icon-head">
              <h2 id="ecosystem" data-aos="fade-left">
                ECOSYSTEM
              </h2>
              <h3 id="private_compossible" data-aos="fade-right">
                Private, Composable
                <br /> DApps
              </h3>
              <div className="cube1 cube1-mobile">
                <img src={Cube} alt="cube"/>
              </div>
              <div className="secure1 secure1-mobile">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-mobile">
                <img src={Cube} alt="cube"/>
              </div>
              <div className="privacy1 privacy1-mobile">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 main-video">
              <div className="row">
                <video
                  width="100%"
                  height="100%"
                  className="video"
                  muted
                  loop
                  autoPlay
                  playsInline
                >
                  <source src={Beldex_product} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid futuristic-section">
          <div className="row" data-aos="fade-up">
            <div
              className="col-sm-12 col-md-6 col-lg-6 fut-video"
              data-aos="fade-up-left"
            >
              <video height="100%" muted loop autoPlay playsInline>
                <source src={Furistics} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 right-text">
              <div
                className="col-12 right-section"
                data-aos="fade-up-right"
                data-aos-duration="1200"
              >
                <div className="col-3 col-lg-2 text-center">
                  <img src={Zn_snark} alt="zk-snarks" />
                </div>
                <div className="col-9 col-lg-9">
                  <h4 id="z_snark">zk-SNARKS:</h4>
                  <p id="z_snark_content">
                    Zero-knowledge proofs to enhance privacy, security, and
                    scalability of DApps.
                  </p>
                </div>
              </div>
              <div
                className="col-12 right-section BVM"
                data-aos="fade-up-right"
                data-aos-duration="1600"
              >
                <div className="col-3 col-lg-2 text-center">
                  <img src={Ethereum} alt="emv" />
                </div>
                <div className="col-9 col-lg-9">
                  <h4 id="ethereum_machine">Ethereum Virtual Machine (EVM):</h4>
                  <p id="ethereum_machine_content">
                    Integrating EVM to build permissionless, private smart
                    contracts and Web 3.0 applications
                  </p>
                </div>
              </div>
              <div
                className="col-12 right-section"
                data-aos="fade-up-right"
                data-aos-duration="2100"
              >
                <div className="col-3 col-lg-2 text-center">
                  <img src={Bns_domain} alt="bns" />
                </div>
                <div className="col-9 col-lg-9">
                  <h4 id="BNS_Domain">BNS Domains:</h4>
                  <p id="BNS_content">
                    Human readable Beldex domains connected to your wallet
                    address.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className="row partners-head">
            <div className="col-12 col-sm-12 icon-head">
              <h2 id="partner" data-aos="fade-left">
                PARTNERS
              </h2>
              <h3 id="partner_content_header" data-aos="fade-right">
                Backed by the <br /> Best{" "}
              </h3>
              <p data-aos="fade-up-left">
                We are backed by the best of exchanges, masternode hosting
                service providers, data providers, audit and R&D partners and
                media publications.
              </p>
              <div className="cube1 cube1-mobile">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure1-mobile">
                <img src={Lock} alt="secure" />
              </div>
              <div className="cube2 cube2-mobile">
                <img src={Cube} alt="cube_2" />
              </div>
              <div className="privacy1 privacy1-mobile">
                <img src={Privacy} alt="lock" />
              </div>
            </div>
          </div>
          {/* Exchange Partners start  */}

          <div className="container-fluid bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                <div className="col-12 col-sm-12 icon-head">
                  <h2
                    id="rnd_partners"
                    className="rnd_media upper_text_content"
                    data-aos="fade-right"
                  >
                    Exchange Partners
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 col-12 img-header-section">
                  <div className="row">
                    <div className="col">
                      <div
                        className="img-partners"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          href="https://www.gate.io/trade/BDX_USDT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Gate_io} alt="gate_img" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="img-partners"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          href="https://www.mexc.com/exchange/BDX_USDT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Mexc} alt="mexc" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://www.hotbit.io/exchange?symbol=BDX_USDT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={HotBit} alt="hotbit" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://hitbtc.com/bdx-to-usdt"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Hitbit} alt="hitbit" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://coinsbit.io/trade_classNameic/BDX_USDT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Coinsbit} alt="coinsbit-1" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://coinsbit.in/trade/BDX_INR"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={Coinsbit_1}
                            alt="coinsbit-2"
                            className="p2b_img"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://p2pb2b.com/trade/BDX_USDT/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={P2B} alt="p2b" className="p2b_img" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className="btc-alpha"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners btc-alpha"
                          href="https://btc-alpha.com/en/trade/BDX_BTC?layout=basic"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Btc_aplha} alt="btc-alpha" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://trade.buyucoin.com/trade/BDX-INR"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={BuyUcoin}
                            alt="buyUcoin"
                            className="Buycoins"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://bilaxy.com/trade/BDX_USDT"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Bilaxy} alt="bilaxy" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  Master partners start*/}
          <div className="container-fluid bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                <div className="col-12 col-sm-12 col-md-12 col-12 icon-head">
                  <h2
                    id="rnd_partners"
                    className="rnd_media upper_text_content"
                    data-aos="fade-right"
                  >
                    Masternode Partners
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 img-header-section">
                  <div className="row">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://masternodes.online/currencies/BDX"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Mno} alt="mno" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners"
                          href="https://coins.masternode.buzz/BDX"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Masternode_Buzz} alt="masternode-buzz" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://nodehub.io/dashboard/deploy?coin=beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={NodeHub} alt="nodehub" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.mycointainer.com/assets/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={Mycointainer}
                            alt="mycointainer"
                            rel="noreferrer"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://perfectnodes.com/en/masternodes/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={PerfectNodes} alt="perfectnodes" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners cryptoru_header"
                          href="https://pecuniaplatform.io/coin-details/Beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Pecunia_platform} alt="pecunia-platform" />
                        </a>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners media_last_child"
                          href="https://getblock.io/nodes/bdx/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={GetBlock} alt="getblock" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data provider start  */}
          <div className="container-fluid bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                <div className="col-12 col-sm-12 icon-head">
                  <h2
                    id="rnd_partners"
                    className="rnd_media upper_text_content"
                    data-aos="fade-right"
                  >
                    Data Providers
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 img-header-section">
                  <div className="row">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://coinmarketcap.com/currencies/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Coinmarketcap} alt="coinmarketcap" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.coingecko.com/en/coins/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CoinGecko} alt="coingecko" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://cmc.io/coins/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Cmc} alt="cmc" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://coincodex.com/crypto/beldex/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Coincodex} alt="coincodex" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.cryptocompare.com/coins/bdx/overview"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CryptoCompare} alt="cryptocompare" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.coinbase.com/price/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CoinBase} alt="coinbase" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://nomics.com/assets/bdx-beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Nomics} alt="nomic" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://coinpaprika.com/coin/bdx-beldex/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Coinpapirika} alt="coinpaparika" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://coinranking.com/coin/baUiyrBz7GtA+beldex-bdx"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CoinRaking} alt="coinranking" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://crypto.com/price/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Cryptocom} alt="cryptocom" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                      <div
                        className="cryptoru_header"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.binance.com/en-GB/price/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Bnb} alt="Binance" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Audit By start --> */}
          <div className="container-fluid bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 col-12">
                <div className="col-12 col-sm-12 icon-head">
                  <h2
                    id="rnd_partners"
                    className="rnd_media upper_text_content"
                    data-aos="fade-right"
                  >
                    Audit By
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 img-header-section">
                  <div className="row justify-content-center">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="rnd-partners"
                          href="https://www.certik.com/projects/beldex"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Certick} alt="Certick" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End */}
          {/* Featured In */}
          <div className="container-fluid bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 c0l-12">
                <div className="col-12 col-sm-12 icon-head">
                  <h2
                    id="rnd_partners"
                    className="rnd_media upper_text_content"
                    data-aos="fade-right"
                  >
                    R & D Partner
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 img-header-section">
                  <div className="row">
                    <div className="col">
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="rnd-partners"
                          href="https://geometrylabs.io/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={GeomentryLabs} alt="geomentrylabs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid partners-head bg-head">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-12 col-md-12 col-xl-12">
                <div className="col-12 col-sm-12 icon-head">
                  <h2 id="In_media" data-aos="fade-left">
                    IN THE MEDIA
                  </h2>
                </div>
                <div className="col-lg-12 col-sm-12 col-12 col-md-12 col-xl-12 img-header-section">
                  <div className="row ">
                    <div className="col">
                      <div data-aos="flip-right">
                        <a
                          className="img-partners "
                          href="https://www.forbesindia.com/article/brand-connect/how-blockchain-is-disrupting-social-communication/77673/1"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src="img/media_partners/forbes.svg"
                            alt="cointelegraph"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div data-aos="flip-right">
                        <a
                          className="img-partners "
                          href="https://cointelegraph.com/press-releases/bucephalus-reigning-privacy-in-crypto/amp#aoh=16389979354221&csi=1&referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CoinTelegrap} alt="cointelegraph" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div data-aos="flip-right">
                        <a
                          className="img-partners "
                          href="https://www.bloomberg.com/press-releases/2021-11-30/beldex-pos-chain-launches-with-bucephalus-hard-fork"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={BloomBerg} alt="bloomberg" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div data-aos="flip-right">
                        <a
                          className="img-partners "
                          href="https://finance.yahoo.com/news/beldex-pos-chain-launches-bucephalus-084400944.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Yohoo_finances} alt="yahoo_finance" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div data-aos="flip-right">
                        <a
                          className="img-partners "
                          href="https://hackernoon.com/can-blockchains-overcome-the-scalability-trilemma"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img src={Hackernoon} alt="hackernoon" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://ambcrypto.com/building-a-privacy-based-ecosystem-with-beldex/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Amb_crypto} alt="amb_crypto" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.newsbtc.com/sponsored/privacy-network-beldex-awaits-a-game-changing-update-bdx-set-for-the-moon/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={News_btc} alt="news_btc" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.banklesstimes.com/news/2022/06/27/free-speech-advocate-beldex-launches-first-truly-private-chat-app/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Cointelegraph} alt="cointelegraph" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://beincrypto.com/beldex-on-chain-scalability-bucephalus-pos-upgrade/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Be_in_crypto} alt="beincrypto" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://u.today/beldex-blockchain-migrates-to-proof-of-stake-releases-first-privacy-dapps-ecosystem"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={U_Today} alt="utoday" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.benzinga.com/pressreleases/21/11/24350619/beldex-pos-chain-launches-with-bucephalus-hard-fork"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img src={Benzinga} alt="benzinga" />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.coinspeaker.com/earn-passive-income-masternodes/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img src={CoinsSpeaker} alt="coinspeaker" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://www.analyticsinsight.net/what-determines-the-price-of-a-cryptocurrency/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img
                            src={Analystics_insight}
                            alt="analytics_insight"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://coinpedia.org/price-analysis/beldex-price-prediction-to-1/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img src={CoinPedia} alt="coinpedia" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://bitcoinafrica.io/2021/09/30/why-africans-need-to-consider-beldex/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={bitcoin_africa} alt="bitcoinafrica" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="row ">
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://blockgeeks.com/dapps-the-future-of-blockchain/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Blocksgeeks} alt="blockgeeks" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://cryptonews.com/news/why-beldex-is-the-best-privacy-coin.htm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          <img src={CryptoNews} alt="cryptonews" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://cryptopotato.com/beldex-solving-privacy-issues-in-the-crypto-space/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CryptoPotato} alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        className=" investing-header"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://uk.investing.com/news/cryptocurrency-news/beldex-and-geometry-labs-collaborate-to-address-blockchain-privacy-issues-2748583"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Investing} alt="investing" />
                        </a>
                      </div>
                    </div>
                    <div className="col">
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners  "
                          href="https://www.financialexpress.com/blockchain/beldex-labs-collaborates-with-decentralised-platform-geometry-labs-over-beldex-blockchain/2663739/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Finanicalexpress} alt="financialexpress" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-lg-3 col-md-3 col-sm-6">
                      <div
                        className=" cryptoru_header"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners  "
                          href="https://economictimes.indiatimes.com/markets/cryptocurrency/beldex-partners-with-geometry-labs-to-scale-up-blockchain/articleshow/94159510.cms?from=mdr"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={Economictimes} alt="economictime" />
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-3 col-sm-6">
                      <div
                        className="media_last_child"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners  "
                          href="https://coinjournal.net/news/beldex-and-geometry-labs-enter-privacy-enhancing-partnership/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CoinJounral} alt="CoinJournal" />
                        </a>
                      </div>
                    </div>
                    <div className="col-12 col-lg-3 col-md-3 col-sm-6">
                      <div
                        className="media_last_child_1"
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners  "
                          href="https://www.livemint.com/news/world/privacypreserving-tech-can-help-prevent-hacks-in-web3-beldex-blockchain-chairman-11664276654999.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={LiveMint} alt="livemint" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 col-md-3">
                      <div
                        className="media_last_child_3"
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                      >
                        <a
                          className="img-partners "
                          href="https://crypto.ru/beldex-bdx/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={CryptoCom} alt="cryptocom" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid roadmap-section roadmap-header">
          {/* <div className='box'>
               <div className='wave -one'></div>
               <div className='wave -two'></div>
               <div className='wave -three'></div>
               </div> */}
          <div className="col-12 col-sm-12 icon-head">
            <h2 id="roadmap" data-aos="fade-right">
              ROADMAP
            </h2>
            <h3 id="our_goal" data-aos="fade-left">
              Our Goals for the Near <br /> & Long Term{" "}
            </h3>
            <div className="cube1 cube1-mobile">
              <img src={Cube} alt="cube" />
            </div>
            <div className="secure1 secure1-mobile">
              <img src={Lock} alt="sheild" />
            </div>
            <div className="cube2 cube2-mobile">
              <img src={Cube} alt="cube" />
            </div>
            <div className="privacy1 privacy1-mobile">
              <img src={Privacy} alt="cube" />
            </div>
          </div>
          <div className="universe">
            <div className="universe-container">
              <div className="content">
                <canvas id="universe"></canvas>
                <div id="footer">
                  <svg id="scene" x="0px" y="0px" width="1600px" height="315px">
                    <path
                      id="ground"
                      d="M0,316.4209c0,0,157.7119-35.416,469-56c7.3833-0.4883,23.7876-3.5488,31.3335-4.0166
                              c3.7681-0.2334,19.4302,0.9424,28.3335,0.3506c17.1494-1.1396,30.9072-4.2734,38.333-4.6836
                              c7.5972-0.4189,18.4058,0.3799,27.6665-0.9834c5.7075-0.8408,10.1318-4.042,14.9248-4.2705
                              c7.8369-0.373,24.5693,3.6084,34.4087,4.2705c11.0586,0.7432,15.2656-1.8135,24.3335-2.1523c10.0576-0.376,20.4629,1.3867,28.6665,0
                              c3.5957-0.6074,4.4194,0.4209,7.7227-0.7715c1.4927-0.5391,5.8179-3.5693,6.9438-4.2432c3.8335,0.667,6.1426-1.0732,9.917-1.167
                              c2.2739-0.0566,3.9673-0.9072,6.249-0.9609c2.2725-0.0537,5.5547-1.2383,7.8345-1.2881c2.25-0.0498,3.498,1.0352,5.7554,0.9883
                              c2.9648-0.0615,7.9341,0.3164,10.9111,0.2607c2.2461-0.042,2.4976-0.5195,4.7505-0.5586c2.9663-0.0518,2.1045-0.5615,5.0825-0.6074
                              c1.5811-0.0244,6.9976,0.4131,8.582,0.3896c0.8887-0.0127,2.6113,0.373,3.5015,0.3604c1.5527-0.0215,2.2739-0.4404,3.8296-0.4609
                              c1.416-0.0186,2.0854-0.8555,3.5039-0.873c1.0835-0.0127,2.9155,0.7939,4.0005,0.7813c1.1104-0.0127,3.5542,0.4805,4.666,0.4688
                              c1.3047-0.0137,1.2773-0.5332,2.584-0.5459c1.415-0.0137,1.165-0.4414,2.5825-0.4541c0.916-0.0078,3.499,0.3984,4.416,0.3906
                              c1.499-0.0127,1.833,0.6221,3.3345,0.6104c1.3296-0.0098,3.8267-0.666,5.1587-0.6748c1.3335-0.0088,2.8389-0.6514,4.1743-0.6592
                              c1.3335-0.0078,2.4971,0.6191,3.8325,0.6123c2.5518-0.0127,7.3579,0.3965,9.9175,0.3877c5.3169-0.0176,5.5796-0.4063,10.9297-0.4063
                              c1.8379,0,6.7031,1.3184,8.3203,1.2402c2.1055-0.1016,3.7139-1.6572,5.5283-1.7969c3.9541-0.3037,7.3262-0.5732,10.5986-0.2598
                              c6.248,0.5977,12.1973-0.8125,21.207-0.7539c1.7266,0.0107,15.7813,3.085,17.5,3.0977c3.4014,0.0254,6.6191-1.3398,9.9971-1.3066
                              c4.1221,0.041,8.2275,1.2529,12.3369,1.3066c2.0752,0.0273,4.1543-1.1084,6.2314-1.0771c3.3662,0.0498,4.5547,1.0166,7.9346,1.0771
                              c2.1104,0.0381,6.4063-0.834,8.5264-0.792c2.7021,0.0537,4.4766-1.6729,7.2002-1.6113c2.9277,0.0654,7.6465,3.1641,10.6074,3.2393
                              c4.8359,0.123,8.8809-0.9854,13.832-0.8359c2.5029,0.0752,11.8818,2.0498,14.375,2.1289c1.8398,0.0586,2.499-1.2188,4.334-1.1582
                              c2.1689,0.0713,4.5049,1.209,6.666,1.2832c2.6699,0.0908,4.3398-0.916,6.998-0.8203c3.3379,0.1201,6.0566,1.3193,9.377,1.4453
                              c4.001,0.1514,4.7764-1.1602,8.75-1c3.1836,0.1289,16.834,1.9912,20,2.125c4.0059,0.1699,4.0029-0.9004,7.9814-0.7227
                              c6.8594,0.3076,7.9102,1.7656,14.6855,2.0977c8.916,0.4365,23.5254-0.2432,32.293,0.2344
                              c6.7168,0.3662,13.3896,0.7432,20.0186,1.1318C1458.8545,268.4941,1680,316.4209,1680,316.4209H0z"
                    />
                    <path
                      id="stone1"
                      d="M680.3335,250.7549c7.3335,0.333,13.6665-1.2549,6-6.4609s-14.333-7.1221-18.6665,0.8359
                              S680.3335,250.7549,680.3335,250.7549z"
                    />
                    <path
                      id="stone2"
                      d="M750.5,243.1709c3.25,0,2.5-3.707-1.75-4.2285s-5,3.7285-3,4.2285S750.5,243.1709,750.5,243.1709z"
                    />
                    <path
                      id="stone3"
                      d="M988.4893,243.8242c2.8857,0.3467,4.8438,1.2627,3.0107-2.0703s-7.3955,1.3555-5.2031,1.7129
                              S988.4893,243.8242,988.4893,243.8242z"
                    />
                    <path
                      id="stone4"
                      d="M697,248.9355c2.0142-0.2021,2.1665-2.0156,1-2.1816s-9.1543,1.8398-5.9937,2.6699S697,248.9355,697,248.9355z"
                    />
                    <g id="greens" transform="translate(850, 180)">
                      <g>
                        <path
                          d="M36.3877,59.4268C33.0576,18.9482,6.4658,4.522,6.4658,4.522s22.4834,16.1426,24.4414,54.2251
                                    C32.8657,96.8311,36.3877,59.4268,36.3877,59.4268z"
                        />
                        <path
                          d="M41.8496,83.1641C31.1572,43.98,2.3711,34.6738,2.3711,34.6738s25.063,11.7471,33.9668,48.8271
                                    C45.2441,120.5791,41.8496,83.1641,41.8496,83.1641z"
                        />
                        <path
                          d="M31.3955,60.7207C23.7139,25.7979,2.5381,16.9541,2.5381,16.9541s18.4165,10.9277,24.7925,43.9502
                                    C33.7061,93.9258,31.3955,60.7207,31.3955,60.7207z"
                        />
                        <path
                          d="M40.4517,62.0068C47.9473,21.6187,25.4009,0.1914,25.4009,0.1914s18.0098,21.9634,9.7896,59.6357
                                    C26.9722,97.499,40.4517,62.0068,40.4517,62.0068z"
                        />
                        <path
                          d="M41.9414,69.4316c13.0313-38.9565-6.3218-63.3062-6.3218-63.3062s14.7856,24.251,1.4141,60.4185
                                    C23.6621,102.709,41.9414,69.4316,41.9414,69.4316z"
                        />
                        <path
                          d="M29.4976,87.9092c27.4097-30.5938,19.2993-60.6226,19.2993-60.6226s3.958,28.1255-22.6606,56.0249
                                    C-0.4775,111.2109,29.4976,87.9092,29.4976,87.9092z"
                        />
                        <animateTransform
                          attributeName="transform"
                          type="skewX"
                          values="0;10;0"
                          begin="0s"
                          dur="5.5s"
                          fill="freeze"
                          repeatCount="indefinite"
                        />
                        <animateMotion
                          type="translate"
                          values="0,0;-10,0;0,0"
                          begin="0s"
                          dur="5.5s"
                          fill="freeze"
                          repeatCount="indefinite"
                        />
                      </g>
                      <g>
                        <path
                          d="M34.9995,60.4189C56.0713,30.6665,46.1133,5.4014,46.1133,5.4014S52.2559,29.4746,31.6235,56.79
                                    C10.9917,84.1035,34.9995,60.4189,34.9995,60.4189z"
                        />
                        <path
                          d="M36.3047,64.5391c28.4629-23.4443,25.3262-51.189,25.3262-51.189s-0.293,25.4971-27.6851,46.6538
                                    C6.5552,81.1631,36.3047,64.5391,36.3047,64.5391z"
                        />
                        <path
                          d="M33.0449,70.502c31.4424-19.2637,32.1875-47.1748,32.1875-47.1748s-3.8291,25.208-33.897,42.3584
                                    C1.271,82.833,33.0449,70.502,33.0449,70.502z"
                        />
                        <path
                          d="M13.8237,76.0244c36.5039-5.2158,48.2563-30.543,48.2563-30.543S48.5693,67.1045,14.168,70.9248
                                    C-20.2324,74.749,13.8237,76.0244,13.8237,76.0244z"
                        />
                        <animateTransform
                          attributeName="transform"
                          type="skewX"
                          values="0;15;0"
                          begin="0s"
                          dur="5s"
                          fill="freeze"
                          repeatCount="indefinite"
                        />
                        <animateMotion
                          type="translate"
                          values="0,0;-15,0;0,0"
                          begin="0s"
                          dur="5s"
                          fill="freeze"
                          repeatCount="indefinite"
                        />
                      </g>
                    </g>
                    <g id="sign" transform="translate(700, 180)">
                      <polygon
                        points="21.2168,1.1143 20.6665,1.5459 19.7593,1.4473 19.229,1.4209 18.9707,1.6274 18.6665,1.9004 17.6865,1.9219
                                 37.3516,87.8877 40.8828,87.0791 	"
                      />
                      <polygon
                        points="45.4111,9.5537 2.4258,18.7158 1.563,18.498 1.4585,17.2114 0.8291,15.583 0.9165,14.3364 0.0908,12.6548
                                 0.2085,12.0864 -0.1924,11.5308 -0.3296,9.271 43.3408,-0.0376 43.4766,0.5015 43.334,0.9629 43.6533,1.2046 43.8232,1.8784
                                 43.8965,2.7754 44.2217,3.459 44.625,5.0576 45.041,7.5459 45.2637,7.5962 45.6191,9.0073 	"
                      />
                      <polygon
                        points="47.0078,20.8545 4.2368,29.5503 3.5933,28.5903 3.3965,26.9746 2.4683,24.5137 2.8398,24.1372 2.2676,23.7847
                                 1.9834,22.7563 2.2417,22.3394 1.7388,21.8706 1.2627,20.1426 44.8281,11.2852 45.082,12.4014 45.0723,12.9517 45.3281,13.481
                                 45.752,15.3369 46.0273,17.7524 46.4219,18.2803 	"
                      />
                      <polygon
                        points="47.666,31.168 4.7803,39.4023 4.251,37.4004 4.4429,36.1895 3.6465,35.1123 3.0142,32.7178 3.2754,32.1025
                                 2.7461,31.7046 2.2676,29.8945 45.9268,21.5107 46.0762,22.2007 45.9512,22.8423 46.2783,23.1372 46.6777,24.9795 46.5234,25.4795
                                 47.3027,27.8667 47.8086,30.2017 	"
                      />
                    </g>
                    <g id="boy_1_">
                      <g id="boy">
                        <path
                          d="M800.7324,167.6929c0,0-7.9688-6.5039-9.7197-8.041c-1.751-1.5366-7.9331-6.5039-8.7197-13.0435
                                    c-0.7861-6.5396,6.0752-15.188,17.7969-16.1885c11.7207-1.0005,12.9727,1.0366,14.1514,2.7163
                                    c1.1787,1.6792,5.7178,11.1494,5.0752,18.6538c-0.6445,7.5049-5.6826,10.1133-9.7559,13.3652
                                    C805.4863,168.4072,800.7324,167.6929,800.7324,167.6929z"
                        />
                        <path
                          d="M810.7031,169.2109c-1.0723-1.3037-1.3574-2.9556-1.1426-4.0645c0.2139-1.1084-8.041,0.1128-8.8281,2.542
                                    c1.6445,1.6787,0.751,3.146-0.5,4.1108c-1.25,0.9648-1.6797,1.502-1.9297,1.8237c0.0361,0.5361,0,0.9653,0,0.9653
                                    s-1.4297,1.7153-2.2871,6.5396s-0.6787,6.79-0.9648,8.3267c-0.2852,1.5366-1.4648,5.9678-1.751,10.292s0,4.5742,0,4.5742
                                    s1.251,1.7153,1.1436,4.0742s-1.2705,5.6099-1.2705,5.6099s0.2344,1.8945,1.8779,2.252c1.6445,0.3574,2.3594-0.6436,2.3594-0.6436
                                    s1.0713,1.3223,1.75,4.0742c0.6797,2.752,0.6436,6.79,1.8945,7.9688c1.251,1.1797,1.6074,0.3223,1.6074,0.3223
                                    s0.4648,3.3975-0.9277,6.6855c-1.3945,3.2881-4.1465,6.7568-4.1465,6.7568h11.0781c0,0,1.5723-3.5234-7.1113-2.2363
                                    c3.252-4.0742,3.8955-6.1934,4.0391-11.125c1.8223,0.5,4.252,0.6738,4.9316-0.3271c0.5352,1.3223,2.4297,2.1787,3.3584,1.7139
                                    c-0.2139,3.7168-1.0713,12.1846-1.0713,12.1846l9.0049,0.2852c0,0-0.751-3.2168-6.29-1.4307
                                    c1.001-6.7891,1.3584-11.5068,1.3584-11.5068s1.3584,0.1074,1.8584-0.3926c0.5-0.501,0.6787-5.3252-0.4648-9.9346
                                    c-1.1436-4.6104-0.5-4.4678-0.5-4.4678s1.75-0.8213,1.5-2.8584s-0.8574-3.6807-1.5352-5.5391
                                    c0.4639-0.1074,1-0.7861-0.6797-2.7158c-0.2148-2.5015-0.9648-6.3242-0.6436-7.6465s0.2148-2.8232-0.1787-4.3599
                                    c0-2.4302,0.7148-13.1509-1.25-17.0103c-1.9658-3.8594-2.5371-3.5737-2.5371-3.5737S812.5977,169.0142,810.7031,169.2109z"
                        />
                      </g>
                      <g transform="translate(783, 122)">
                        <g>
                          <path
                            d="M35.3506,17.9644c2.9834-3.71,5.9824-15.2095-3.1846-18.3765c2.668,3.833,1.168,5.6665,1.168,5.6665
                                       S32,1.2549,28.666-0.4121c1.5,3.1665,0,5,0,5S20.5,8.9209,24.5,13.2544S35.3506,17.9644,35.3506,17.9644z"
                          />
                          <animateTransform
                            attributeName="transform"
                            type="skewX"
                            values="0;30;0"
                            begin="0s"
                            dur="4s"
                            fill="freeze"
                            repeatCount="indefinite"
                          />
                          <animateMotion
                            type="translate"
                            values="0,0;-10,0;0,0"
                            begin="0s"
                            dur="4s"
                            fill="freeze"
                            repeatCount="indefinite"
                          />
                        </g>
                        <g>
                          <path
                            d="M27.125,6.2334c-1.8125-0.625-2.0625-1.9375-4.375-2.25c1,0.8125,1.125,1.6875,1.125,1.6875S21.5,4.3584,19.0625,3.9834
                                       c1.3125,0.75,2,1.875,2,1.875s-3.25-0.75-5.875-0.75c1.125,0.3125,1.125,0.6875,1.125,0.6875S10.75,5.8584,8.6875,7.4834
                                       c1,0.125,0.9375,0.6714,0.9375,0.6714s-4.25,1.5786-5.375,3.7661c0.875-0.4375-0.8125,1.8125-0.8125,1.8125s0.75,1.375-0.3125,1.125
                                       S0.5,14.1084,0.5,12.5459c-0.5,2.1875,0.6924,2.5767,1.4375,3.3125c-0.0625,1-0.9375,2.6494-1.25,2.106s0.8594,0.4282,0.0547,2.4731
                                       c-0.8047,2.0459-1.1533,3.7432-0.5103,6.5195s2.7056,4.5264,3.5181,6.2139s0.5-1.6875,0.5-1.6875L27.125,6.2334z"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row" >
               <div className="col-12 col-sm-12 roadmap-road" >
                  <div  >
                     <div id="infographic" className="d-flex flex-column align-items-center py-4" >
                        <div className="step one text-primary">
                           <div className="circle" >
                              <i className="fas fa-space-shuttle" data-aos="fade-right"><FaSpaceShuttle/></i>
                              <h4 data-aos="fade-right">2021 <br/> <span id="pos_launched" >POS has Launched!</span></h4>
                           </div>
                            {roadMapContent_1.map((value,i)=>{
                                  const {answer,id}=value;
                                return( 
                                <article data-step="1" key={i}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_one(id)}>
                                 <i className="fas fa-wallet"><FaWallet/></i>
                                 <h6 id="q1_wallet" >Q1 - Wallets</h6>
                              </header>
                               {roadMap_1 === id ? <div className="body bulecurve"  ref={domContains} >
                                <ul>
                                    <li id="q1_wallet_subpart_1">{answer.answer_1}</li>
                                    <li id="q1_wallet_subpart_2">{answer.answer_2}</li>
                                    <li id="q1_wallet_subpart_3">{answer.answer_3}</li>
                                 </ul>
                                  <div className="d-flex justify-content-between mt-3 controls">
                                    <p ></p>
                                    <p className="btn btn-outline-primary " id="next_1" onClick={()=>next(id)}>Next</p>
                                 </div> 
                              </div> : null }
                             
                           </article>
                            )
                              })}


                                 {roadMapContent_2.map((value ,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="2" key={index}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_two(id)}>
                                 <i className="fas fa-link"><FaLink /></i>
                                 <h6 id="q2_binance">Q2 - Binance Smart Chain Bridge</h6>
                              </header>
                              {roadMap_2 === id ?<div className="body bulecurve" ref={domContains}  >
                                 <ul >
                                    <li id="q2_binance_subpart_1">{answer.answer_1}</li>
                                    <li id="q2_binance_subpart_2">{answer.answer_2}</li>
                                    <li id="q2_binance_subpart_3">{answer.answer_3}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <p className="btn btn-outline-primary" id="Prev_1" onClick={()=>prev_1(id)}>Prev</p>
                                    <p className="btn btn-outline-primary " id="next_2" onClick={()=>next_1(id)}>Next</p>
                                 </div>
                              </div> : " "}
                           </article>
                                )
                                })}


                                 {roadMapContent_3.map((value ,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="3" key={index}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_three(id)}>
                                 <i className="fas fa-tasks"><FaTasks /></i>
                                 <h6  id="q3_posting">Q3 - POS Testing</h6>
                              </header>
                              {roadMap_3 === id ? <div className="body bulecurve" ref={domContains}  >
                                 <ul >
                                    <li  id="q3_subpart_1">{answer.answer_1}</li>
                                    <li  id="q3_subpart_2">{answer.answer_2}</li>
                                    <li  id="q3_subpart_3">{answer.answer_3}</li>
                                    <li  id="q3_subpart_4">{answer.answer_4}</li>
                                    <li  id="q3_subpart_5">{answer.answer_5}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-primary " id="Prev_2"  onClick={()=>prev_2(id)}>Prev</a>
                                    <a className="btn btn-outline-primary " id="next_3" onClick={()=>next_2(id)}>Next</a>
                                 </div>
                              </div> :" "}
                           </article>
                                )
                                })}


                           {roadMapContent_4.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="4" key={index}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_four(id)}>
                                 <i className="fas fa-code-branch"> <FaCodeBranch /></i>
                                 <h6  id="Q4_BUCEPHALUS">Q4 - Bucephalus</h6>
                              </header>
                             {roadMap_4 === id ?<div className="body bulecurve" ref={domContains}  >
                                 <ul >
                                    <li  id="q4_subpart_1">{answer.answer_1}</li>
                                    <li  id="q4_subpart_2">{answer.answer_2}</li>
                                    <li  id="q4_subpart_3">{answer.answer_3}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-primary "  id="Prev_3"  onClick={()=>prev_3(id)}>Prev</a>
                                    {/* <!-- <a className="btn btn-outline-primary" >Next</a> --> */}
                                 </div>
                              </div>: " "}
                           </article>
                                )
                           })}
                           <div className="connecting-line1">
                           </div>
                        </div>
                        <div className="step two text-success">
                           <div className="circle">
                              <i className="fas fa-laptop-code" data-aos="fade-up-right"><FaLaptopCode/></i>
                              <h4 data-aos="fade-up-right">2022<br /><span  id="Eco_Develop">Ecosystem Development</span></h4>
                           </div>
                            {roadMapContent_5.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="6"  key={index} >
                              <header className="d-flex align-items-center text-success" data-aos="fade-up-right" onClick={()=>roadMap_five(id)}>
                                 <i className="fas fa-wallet"><FaWallet /></i>
                                 <h6  id="wallet_release_q1">Wallet Release - Q1</h6>
                              </header>
                              { roadMap_5=== id ?<div className="body greencurve" ref={domContains} >
                                 <ul>
                                    <li  id="wallet_relaese_subpart_1">{answer.answer_1}</li>
                                    <li  id="wallet_relaese_subpart_2">{answer.answer_2}</li>
                                    <li  id="wallet_relaese_subpart_3">{answer.answer_3}</li>
                                    <li  id="wallet_relaese_subpart_4">{answer.answer_4}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a ></a>
                                    <a className="btn btn-outline-success" id="next_4" onClick={()=>next_3(id)}>Next</a>
                                 </div>
                              </div>: " "}
                           </article>
                                )})}

                                 {roadMapContent_6.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="7" key={index}>
                              <header className="d-flex align-items-center text-success" data-aos="fade-up-right" onClick={()=>roadMap_six(id)}>
                                 {/* <!-- <i className="fas fa-comments q2second"></i>  --> */}
                                 <i className="q2second"><img src={BcLogo} className="bclogo" /></i>
                                 <h6  id="bchat_aplha">BChat Alpha Release - Q2</h6>
                              </header>
                              {roadMap_6 === id ?<div className="body greencurve" ref={domContains} >
                                 <ul>
                                    <li  id="bchat_subpart_1">{answer.answer_1}</li>
                                    <li  id="bchat_subpart_2">{answer.answer_2}</li>
                                    <li  id="bchat_subpart_3">{answer.answer_3}</li>
                                    <li  id="bchat_subpart_4">{answer.answer_4}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-success " id="Prev_4" onClick={()=>prev_4(id)}>Prev</a>
                                    <a className="btn btn-outline-success " id="next_5"  onClick={()=>next_4(id)}>Next</a>
                                 </div>
                              </div> :" "}
                           </article>
                                )})}

                                {roadMapContent_7.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="8" key={index}>
                              <header className="d-flex align-items-center text-success" data-aos="fade-up-right" onClick={()=>roadMap_seven(id)}>
                                 <i className="fas fa-file-code"><FaRegFileCode /></i>
                                 <h6  id="eco_system_phase_1">Ecosystem Phase I - Q3 </h6>
                              </header>
                              {roadMap_7 === id ?<div className="body greencurve" ref={domContains} >
                                 <ul  >
                                    <li  id="eco_system_subpart_1">{answer.answer_1}</li>
                                    <li  id="eco_system_subpart_2">{answer.answer_2}</li>
                                    <li  id="eco_system_subpart_3">{answer.answer_3}</li>
                                    <li  id="eco_system_subpart_4">{answer.answer_4}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-success " id="Prev_5" onClick={()=>prev_5(id)}>Prev</a>
                                    <a className="btn btn-outline-success " id="next_6"  onClick={()=>next_5(id)}>Next</a>
                                 </div>
                              </div>:" "}
                           </article>
                                )})}

                                 {roadMapContent_8.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="9" key={index}>
                              <header className="d-flex align-items-center text-success" data-aos="fade-up-right" onClick={()=>roadMap_eight(id)}>
                                 <i className="fab fa-connectdevelop"><FaConnectdevelop /></i>
                                 <h6  id="eco_system_phase_2">Ecosystem Phase II - Q4 </h6>
                              </header>
                              {roadMap_8 === id ?<div className="body greencurve" ref={domContains}  >
                                 <ul >
                                    <li  id="eco_system_phase_2_subpart_1">{answer.answer_1}</li>
                                    <li  id="eco_system_phase_2_subpart_2">{answer.answer_2}</li>
                                    <li  id="eco_system_phase_2_subpart_3">{answer.answer_3}</li>
                                    <li  id="eco_system_phase_2_subpart_4">{answer.answer_4}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-success" id="Prev_6"  onClick={()=>prev_6(id)}>Prev</a>
                                    {/* <!-- <a className="btn btn-outline-success" >Next</a> --> */}
                                 </div>
                              </div>: " "}
                           </article>
                                )})}
                           <div className="connecting-line2">
                           </div>
                        </div>
                        <div className="step one three text-primary roadmap-3 ">
                           <div className="circle">
                              <i className="fas fa-server" data-aos="fade-left"><FaServer/></i>
                              <h4 data-aos="fade-left">2023 <br /> <span  id="emv_integration">EVM Integration</span></h4>
                           </div>
                             {roadMapContent_9.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="11" key={index}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_nine(id)}>
                                 <i className="fas fa-search"><FaSearch/></i>
                                 <h6  id="q1_ecosystem_phase_3">Q1 - Ecosystem Phase III</h6>
                              </header>
                              {roadMap_9 === id ?<div className="body violetcurve" ref={domContains} >
                                 <ul  >
                                    <li  id="q1_ecosystem_phase_3_subpart_1">{answer.answer_1}</li>
                                    <li  id="q1_ecosystem_phase_3_subpart_2">{answer.answer_2}</li>
                                    <li  id="q1_ecosystem_phase_3_subpart_3">{answer.answer_3}</li>
                                    <li  id="q1_ecosystem_phase_3_subpart_4">{answer.answer_4}</li>
                                    <li  id="q1_ecosystem_phase_3_subpart_5">{answer.answer_5}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a> </a>
                                    <a className="btn btn-outline-primary " id="next_7"  onClick={()=>next_6(id)}>Next</a>
                                 </div>
                              </div>: " "}
                           </article>
                                )})}

                                 {roadMapContent_10.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="12"  key={index}>
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_ten(id)}>
                                 <i className="fas fa-mobile-alt"><BiMobileAlt/></i>
                                 <h6  id="q2_ecosystem_phase_4">Q2 - Ecosystem Phase IV</h6>
                              </header>
                              {roadMap_10 === id ?<div className="body violetcurve" ref={domContains}>
                                 <ul>
                                    <li  id="q2_ecosystem_phase_4_subpart_1">{answer.answer_1}</li>
                                    <li  id="q2_ecosystem_phase_4_subpart_2">{answer.answer_2}</li>
                                    <li  id="q2_ecosystem_phase_4_subpart_3">{answer.answer_3}</li>
                                    <li  id="q2_ecosystem_phase_4_subpart_4">{answer.answer_4}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-primary"  id="Prev_7" onClick={()=>prev_7(id)}>Prev</a>
                                    <a className="btn btn-outline-primary"  id="next_8" onClick={()=>next_7(id)}>Next</a>
                                 </div>
                              </div>: " "}
                           </article>
                                )})}

                                {roadMapContent_11.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="13">
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_eleven(id)}>
                                 <i className="fas fa-desktop"><FaDesktop/></i>
                                 <h6  id="Q3_EVM_Integration_Phase_1">Q3 - EVM Integration Phase I</h6>
                              </header>
                              {roadMap_11 === id ?<div className="body violetcurve" ref={domContains} key={index}>
                                 <ul>
                                    <li  id="phase_1_development_emv">{answer.answer_1}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-primary "  id="Prev_8"  onClick={()=>prev_8(id)}>Prev</a>
                                    <a className="btn btn-outline-primary "  id="next_9" onClick={()=>next_8(id)}>Next</a>
                                 </div>
                              </div>: " " }
                           </article>
                                )})}

                                {roadMapContent_12.map((value,index)=>{
                                  const {answer,id}=value;
                                return( 
                           <article data-step="14">
                              <header className="d-flex align-items-center text-primary" data-aos="fade-up-left" onClick={()=>roadMap_twelve(id)}>
                                 <i className="far fa-eye"><FaEye/></i>
                                 <h6  id="q4_emv_integration_4">Q4 - EVM Integration Phase II</h6>
                              </header>
                              {roadMap_12 === id ?<div className="body violetcurve" ref={domContains} key={index}>
                                 <ul  >
                                    <li  id="phase_2_development">{answer.answer_1}</li>
                                    <li  id="emv_launch">{answer.answer_2}</li>
                                 </ul>
                                 <div className="d-flex justify-content-between mt-3 controls">
                                    <a className="btn btn-outline-primary "  id="Prev_9"  onClick={()=>prev_9(id)}>Prev</a>
                                    {/* <!-- <a className="btn btn-outline-primary" >Next</a> --> */}
                                 </div>
                              </div>: " "}
                           </article>
                                )})}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </div>
        <div className="container-fluid carousel-header roadmap-header ">
          <div className="row">
            <div className="col-12 col-sm-12 icon-head team_header">
              <h2 id="teams" data-aos="fade-left" data-aos-duration="1600">
                Team
              </h2>
              <p id="teams_content" data-aos="fade-left">
                A team of crypto enthusiasts building privacy in Web3
              </p>
              <div className="cube1 cube1-mobile">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure1-mobile">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-mobile">
                <img src={Cube} alt="cube" />
              </div>
              <div className="privacy1 privacy1-mobile">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row">
                <div className=" col-xl-3 col-lg-4 col-sm-6 col-12 col-md-6 ">
                  <div
                    className="item"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                  >
                    <img src={AffandHushni} alt="" data-aos="zoom-in" />
                    <h5 id="affandy_header">Afanddy B. Hushni</h5>
                    <p id="affandy_content">
                      Afanddy is an investor & a crypto economist with more than
                      20 years of experience in traditional finance &
                      investments. He serves as the chairman of Beldex
                      International Inc.
                    </p>
                    <div className="social-icons">
                      <a
                        className="btn_social_icon"
                        href="https://www.linkedin.com/in/afanddy-b-hushni/"
                        target="_blank"
                      >
                        <i>
                          <FaLinkedinIn />
                        </i>
                      </a>
                      <a
                        className="btn_social_icon"
                        href="https://t.me/beldex_chairman "
                        target="_blank"
                      >
                        <i>
                          <FaTelegramPlane />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3  col-lg-4 col-sm-6 col-12 col-md-6 ">
                  <div
                    className="item"
                    data-aos="fade-up"
                    data-aos-duration="1600"
                  >
                    <img src={Kim} alt="" data-aos="zoom-in" />
                    <h5 id="shawn_header">Kim</h5>
                    <p id="shawn_content">
                      Kim is the CEO and the co-founder of Beldex. With over 15
                      years of experience in working with privacy-enhancing
                      systems, Kim has an a extensive knowledge of
                      privacy-preserving cryptographic protocols.
                    </p>
                    <div className="social-icons">
                      <a
                        className="btn_social_icon"
                        href="https://www.linkedin.com/in/kimbeldex/"
                        target="_blank"
                      >
                        <i>
                          <FaLinkedinIn />
                        </i>
                      </a>
                      <a
                        className="btn_social_icon"
                        href="https://t.me/beldexadmin"
                        target="_blank"
                      >
                        <i>
                          <FaTelegramPlane />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col-xl-3 col-lg-4 col-sm-6 col-12 col-md-6 ">
                  <div
                    className="item"
                    data-aos="fade-up"
                    data-aos-duration="1800"
                  >
                    <img src={CodemanCrypto} alt="" data-aos="zoom-in" />
                    <h5 id="azhaan_header">Codeman-Crypto(cc)</h5>
                    <p id="azhaan_content">
                      Codeman Crypto serves as the CTO of Beldex. He has
                      extensively worked with distributed systems &
                      multi-threading architectures with 13 years of sound
                      experience in software systems development.
                    </p>
                    <div className="social-icons">
                      <a
                        className="btn_social_icon"
                        href="https://www.linkedin.com/in/codeman-crypto/ "
                        target="_blank"
                      >
                        <i>
                          <FaLinkedinIn />
                        </i>
                      </a>
                      {/*  <a className="btn_social_icon" href=" https://t.me/codeman_crypto/ " target="_blank"><i className="fab fa-telegram-plane"></i></a> */}
                      <a
                        className="btn_social_icon"
                        href=" https://github.com/codeman-crypto"
                        target="_blank"
                      >
                        <i>
                          <AiOutlineGithub />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className=" col-xl-3 col-lg-4 col-sm-6 col-12 col-md-6 ">
                  <div
                    className="item"
                    data-aos="fade-up"
                    data-aos-duration="2100"
                  >
                    <img src={Ziau} alt="Zia" />
                    <h5 id="zaue_header">Ziau</h5>
                    <p id="zaue_content">
                      Ziau is the CMO of Beldex. With more than 7 years of
                      experience in crypto specific marketing, Ziau leads
                      multiple facets such as marketing, investments &
                      partnerships. He is also an avid trader & investor in
                      private cryptocurrencies.
                    </p>
                    <div className="social-icons">
                      <a
                        className="btn_social_icon"
                        href="https://www.linkedin.com/in/sulthanziau/"
                        target="_blank"
                      >
                        <i>
                          <FaLinkedinIn />
                        </i>
                      </a>
                      <a
                        className="btn_social_icon"
                        href="https://t.me/beldex_marketing "
                        target="_blank"
                      >
                        <i>
                          <FaTelegramPlane />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>

                {/*  <div className="item">
      <img src="img/Images_avatar/11.jpg" alt="">
      <h5 id="sanada_header">Sanada Yukimura</h5>
      <p id="sanada_content">Sanada Yukimura is the lead architect at Beldex handling several contributing teams working on the core Beldex protocol and DApps.</p>
     <div className="social-icons">
      <a ><i className="fab fa-linkedin-in"></i></a>
      <a href=" https://t.me/Sanada08/" target="_blank"><i className="fab fa-telegram-plane"></i></a>
      <a href="https://github.com/sanada08" target="_blank"><i className="fab fa-github"></i></a>

     </div>
     </div> -->
     <!-- <div className="item">
      <img src="img/Images_avatar/8.png" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div>
     <div className="item">
      <img src="img/Images_avatar/11.jpg" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div>
     <div className="item">
      <img src="img/Images_avatar/10_3.jpg" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div> 
      <div className="item">
       <h2></h2>
     </div>
      <div className="item">
       <h2></h2>
     </div>
     <div className="item">
       <h2></h2>
     </div>
     <div className="item">
       <h2></h2>
     </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid carousel-header roadmap-header ">
          <div className="row">
            <div className="col-12 col-sm-12 icon-head team_header">
              <h2 id="" data-aos="fade-left" data-aos-duration="1600">
                Advisors
              </h2>
              <p id="" data-aos="fade-up-right">
                Our esteemed research partners
              </p>
              <div className="cube1 cube1-mobile">
                <img src={Cube} alt="cube" />
              </div>
              <div className="secure1 secure1-mobile">
                <img src={Lock} alt="lock" />
              </div>
              <div className="cube2 cube2-mobile">
                <img src={Cube} alt="cube" />
              </div>
              <div className="privacy1 privacy1-mobile">
                <img src={Privacy} alt="privacy" />
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="adviser_header">
                <div
                  className="adviser_content"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src={Allard} alt="" data-aos="zoom-in" />
                  <h5 id="">Allard Dijk</h5>
                  <p id="">
                    Allard is the assistant professor of IT at the Eindhoven
                    University of Technology. He specializes in software &
                    hardware engineering, hacking, digital forensics & ICT. He
                    has extensively contributed to BeldexPOS and the development
                    of a proof of concept EVM for Beldex.
                  </p>
                  <div className="social-icons">
                    <a
                      className="btn_social_icon"
                      href="https://nl.linkedin.com/in/allarddijk"
                      target="_blank"
                    >
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                    <a
                      className="btn_social_icon"
                      href="https://github.com/scilicet64"
                      target="_blank"
                    >
                      <i>
                        <AiOutlineGithub />
                      </i>
                    </a>
                  </div>
                </div>
                <div
                  className="adviser_content"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  <img src={Mitchell} alt="" data-aos="zoom-in" />
                  <h5 id="">Dr. Mitchell Kraiwec-Thayer</h5>
                  <p id="">
                    He is the President and Chief Scientist of Geometry Labs.
                    Dr. Mitchell’s research is at the intersection of data
                    science and privacy engineering. He has previously
                    contributed to research at the Monero Research Labs.
                  </p>
                  <div className="social-icons">
                    <a
                      className="btn_social_icon"
                      href=" https://www.linkedin.com/in/mitchellpkt/"
                      target="_blank"
                    >
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                    <a
                      className="btn_social_icon"
                      href="https://twitter.com/Mitchellpkt0"
                      target="_blank"
                    >
                      <i>
                        <BsTwitter />
                      </i>
                    </a>
                  </div>
                </div>

                <div
                  className="adviser_content"
                  data-aos="fade-up"
                  data-aos-duration="2100"
                >
                  <img src={Dominique} alt="" data-aos="zoom-in" />
                  <h5 id="">Dr. Dominique Schroder</h5>
                  <p id="">
                    Dominique Schroder is a professor of computer science. His
                    research interests are in applied cryptography and
                    privacy-enhancing technologies. He is the recipient of Intel
                    Early Career Faculty Award and the Feodor Lynen Fellowship
                    of The Humboldt Foundation.
                  </p>
                  <div className="social-icons">
                    <a
                      className="btn_social_icon"
                      href="https://www.linkedin.com/in/dominique-schroeder/"
                      target="_blank"
                    >
                      <i>
                        <FaLinkedinIn />
                      </i>
                    </a>
                    <a
                      className="btn_social_icon"
                      href="https://twitter.com/doschroeder"
                      target="_blank"
                    >
                      <i>
                        <BsTwitter />
                      </i>
                    </a>
                  </div>
                </div>
                {/* <div className="item">
      <img src="img/Images_avatar/master_yas.jpg" alt="">
      <h5 id="azhaan_header">Azhaan (Codeman-Crypto)</h5>
      <p id="azhaan_content">Azhaan, who goes by the alias Codeman Crypto, has extensively worked with distributed systems & multi-threading architectures and serves as the CTO at Beldex.</p>
     <div className="social-icons">
      <a href="https://www.linkedin.com/in/codeman-crypto/ " target="_blank"><i className="fab fa-linkedin-in"></i></a>
      <a href=" https://t.me/codeman_crypto/ " target="_blank"><i className="fab fa-telegram-plane"></i></a>
      <a href=" https://github.com/codeman-crypto" target="_blank"><i className="fab fa-github"></i></a>

     </div>
     </div>
     
     <div className="item">
      <img src="img/Images_avatar/11.jpg" alt="">
      <h5 id="sanada_header">Sanada Yukimura</h5>
      <p id="sanada_content">Sanada Yukimura is the lead architect at Beldex handling several contributing teams working on the core Beldex protocol and DApps.</p>
     <div className="social-icons">
      <a ><i className="fab fa-linkedin-in"></i></a>
      <a href=" https://t.me/Sanada08/" target="_blank"><i className="fab fa-telegram-plane"></i></a>
      <a href="https://github.com/sanada08" target="_blank"><i className="fab fa-github"></i></a>

     </div>
     </div>
     <div className="item">
      <img src="img/Images_avatar/8.png" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div>
     <div className="item">
      <img src="img/Images_avatar/11.jpg" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div>
     <div className="item">
      <img src="img/Images_avatar/10_3.jpg" alt="">
      <h5>Henrik Sommerfelt</h5>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
     <p className="social-icons">
      <a href=""><i className="fab fa-linkedin-in"></i></a>
      <a href=""><i className="fab fa-telegram-plane"></i></a>
     </p>
     </div> 
      <div className="item">
       <h2></h2>
     </div>
      <div className="item">
       <h2></h2>
     </div>
     <div className="item">
       <h2></h2>
     </div>
     <div className="item">
       <h2></h2>
     </div> */}
              </div>
            </div>
          </div>
        </div>
        <section className="lets-section">
          <div className="col-lg-12 col-sm-12 contributor-header-section roadmap-header">
            <div className="row">
              <div className="col-12 col-sm-12 icon-head">
                <h2 id="lets" data-aos="fade-left" data-aos-duration="1600">
                  Let's
                </h2>
                <h3 id="build_together" data-aos="fade-right">
                  Build Together
                </h3>
                <p id="join_hundred" data-aos="fade-up-right">
                  Join hundreds of founders, developers, and enthusiasts,
                  <br /> building the internet of privacy.
                </p>
                <div className="cube1 cube1-mobile">
                  <img src={Cube} alt="cube" />
                </div>
                <div className="secure1 secure1-mobile">
                  <img src={Lock} alt="lock" />
                </div>
                <div className="cube2 cube2-mobile">
                  <img src={Cube} alt="cube" />
                </div>
                <div className="privacy1 privacy1-mobile">
                  <img src={Privacy} alt="privacy" />
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 mnbox ">
                <div
                  className="contributor-box-1 grad1 rm-line"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="icon-img">
                    <img src={Contributor} alt="Contributor" />
                  </div>
                  <h5 id="contributor">Contributors</h5>
                  <div className="contributor-content">
                    <p id="contibutor_content">
                      Help scale the Beldex network and build secure,
                      privacy-preserving DApps. The Beldex ecosystem with BChat,
                      BelNet, the Beldex Browser, and the Beldex Privacy
                      Protocol offers multi-faceted opportunities to open-source
                      contributors.
                    </p>
                  </div>
                  <div className="contibutor-button">
                    <p>
                      <a
                        href="beldex-contributor"
                        className="button contributing_now"
                        id="start_contributing"
                      >
                        Start Contributing
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 mnbox">
                <div
                  className="contributor-box-1 grad2 rm-line"
                  data-aos="fade-up"
                  data-aos-duration="1700"
                >
                  <div className="icon-img">
                    <img src={Partners} alt="Partners" />
                  </div>
                  <h5 id="partner_1">Partners</h5>
                  <div className="contributor-content">
                    <p id="partner_content_down">
                      From exchanges, masternode hosting services, and data
                      providers to non-custodial wallets and media partners,
                      Beldex has a growing list of partners who have found a
                      long-standing and reliable partnership with us.
                    </p>
                  </div>
                  <div className="contibutor-button">
                    <p>
                      <a
                        href="mailto:cmo@beldex.io"
                        className="button "
                        id="get_in_touch"
                      >
                        Get In Touch
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-lg-4 mnbox">
                <div
                  className="contributor-box-1  grad3 rm-line"
                  data-aos="fade-up"
                  data-aos-duration="2100"
                >
                  <div className="icon-img">
                    <img src={Ambassdor} alt="Ambassdor" />
                  </div>
                  <h5 id="ambassador">Ambassadors</h5>
                  <div className="contributor-content">
                    <p id="ambassador_content">
                      Ambassadors are brand representatives who lead Beldex
                      communities, organize online and offline events,
                      participate in AMAs and get information about our latest
                      updates & developments to the community.
                    </p>
                  </div>
                  <div className="contibutor-button">
                    <p>
                      <a
                        href="mailto:marketing@beldex.io"
                        className="button "
                        id="apply_now"
                      >
                        Apply Today
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
