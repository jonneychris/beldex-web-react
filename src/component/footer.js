import React,{useState,useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import axios from "axios";
import { Link } from "react-router-dom";
import BdxLogo  from "./img/favicon.ico";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Footer(){

  useEffect(()=>{
     AOS.init(
       {
               duration: 1000,
               offset: 120,
               easing: 'ease-in-out'
            }
     );
  },[])

  const [deskWallet, setDeskWallet] = useState(false);
  const [mobileWallet, setMobileWallet] = useState(false);
  const [userEmail, setUserEmail] = useState(" ");
  const [inputResponse, setInputResponse] = useState(" ");
  const [textColor, setTextColor] = useState("red");
  const [name ,setName] = useState(" ");
  const [price ,setPrice] = useState(" ");
  const [volume ,setVolume] = useState(" ");
  const [rank ,setrank] = useState(" ");
  const [slug , setSlug] = useState(" ");
  const [lowLevelprices , setLowLevelPrices] = useState(" ");
  const [priceTrunc , setPriceTrunc] =useState(" ");
  const [lowLevelPricesTrun  ,setLowLevelPricesTrun] =useState("");
  const [lowLevelVolumeTrun  ,setLowLevelVolumeTrun] =useState("");

   const url = "https://beldex.io/news_letter/subscription";
   const coinMarketCapUrl ="https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/widget?id=3987&convert_id=1,2781,2781";
   useEffect(()=>{
    response();
    lessNumber();
   })

   const response =()=>{
    axios.get(coinMarketCapUrl).then((res)=>{
    // console.log(res.data.data,"res");
    setName(res.data.data["3987"].name);
    setPrice(res.data.data["3987"].quote["2781"].price);
    setVolume(res.data.data["3987"].quote["2781"].Volume_24h);
    setrank(res.data.data["3987"].cmc_rank);
    setSlug(res.data.data["3987"].symbol);
    setLowLevelPrices(res.data.data["3987"].quote["1"].percent_change_24h);
    setVolume(res.data.data["3987"].quote["2781"].volume_24h);

   })
  }

  const lessNumber = ()=>{
    let priceValue = price;
    let str = priceValue.toString();
    let result = Number(str.slice(0,8));
    setPriceTrunc(result);
    // console.log(result,"result");

    let lowprecent=lowLevelprices;
    let str_lowPresent = lowprecent.toString();
    let str_lowvalue = parseFloat(str_lowPresent).toFixed(2);
    setLowLevelPricesTrun(str_lowvalue);
    // console.log(str_lowvalue,"str_lowvalue");

    let lowVolume = volume;
     let str_lowVolume = lowVolume.toString();
    // let str_lowVolumeValue = parseFloat(str_lowVolume).toFixed(2);
    let str_lowVolumeValue = parseFloat(str_lowVolume/1000000).toFixed(2);
    // console.log(str_lowVolumeValue,"str_lowVolumeValue");
    setLowLevelVolumeTrun(str_lowVolumeValue);


  }

   const warning = {
     color: textColor,
   };

   function inputValidation(event) {
     const email = event.target.value;
     setUserEmail(email);
   }

   function regexValidation() {
     const regex =
       /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (regex.test(userEmail)) {
       inputApi(userEmail);
     } else if (userEmail === " ") {
       setInputResponse("Please enter your email id");
       setTextColor("rgb(253, 76, 76)");
      //  console.log(inputResponse, "inputResponse");
     } else {
       setInputResponse("Please enter your valid email");
       setTextColor("rgb(253, 76, 76)");

      //  console.log(inputResponse, "inputResponse");
     }
     //  coinMarketCapApi();
   }

   //  async function coinMarketCapApi(){
   //    try {
   //      let responseCoin = await axios.get(
   //        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/new"
   //      ).then((res)=>{
   //       console.log(res,"res");
   //      })
   //      console.log(responseCoin,"resCoin");
   //    } catch (err) {
   //     console.log(err,"err");
   //    }
   //  }

   async function inputApi(email) {
     let body = {
       mail_id: email,
       product_name: "beldex",
     };
    //  console.log(body.mail_id, "mail_id");

     try {
        await axios.post(url, body).then((res) => {
         console.log("Res:", res.data);
         if (res.data.code === 200) {
           setInputResponse(res.data.message);
           setTextColor("rgb(35, 189, 47)");
          //  console.log("200res:", res.data.message);
         } else if (res.data.code === 201) {
           setInputResponse(res.data.message);
           setTextColor("rgb(253, 76, 76)");

           console.log("201res:", res.data.message);
         } else if (res.data.code === 400) {
           setInputResponse(res.data.message);
           setTextColor("rgb(253, 76, 76)");

          //  console.log("400res:", res.data.message);
         }
       });
     } catch (err) {
       console.log("error:", err);
     }
   }

    return (
      <div>
        <div className="conatainer-fluid footer-section ">
          <div className="row" data-aos="fade-up">
            <div
              className="col-8 col-sm-6 col-lg-2 p-0"
            >
              <div className="coinmarketcap-currency-widget">
                <div className="table_first">
                  <div className="table_box_api_component">
                  <img src={BdxLogo} alt="beldexLogo" />
                </div>
                <div className="table_box_api_component_content">
                  <p>{name} <span>({slug})</span></p>
                  <h6>{priceTrunc}<span>USD</span></h6>
                  <h5>({lowLevelPricesTrun}%)</h5>
                </div>
                </div>
                <div className="table_box_api_component_content_1">
                  <div className="rank_bdx">
                    <p>Rank</p>
                    <h5>{rank}</h5>
                  </div>
                  <div className="line_center">
                    <span></span>
                  </div>
                  <div className="volume_bdx">
                    <p>Volume</p>
                    <h5>${lowLevelVolumeTrun} M <span>USD</span></h5>
                  </div>

                </div>
                <div className="link_coinmarketcap">
                  <a href="https://coinmarketcap.com?utm_medium=widget&amp;utm_campaign=cmcwidget&amp;utm_source=www.beldex.io&amp;utm_content=beldex" target={"_blank"} rel="noreferrer">Powered by CoinMarketCap</a>
                </div>
                
                

              </div>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-2 products"
              data-aos="flip-right"
              data-aos-duration="1800"
            >
              <h5 id="foundation">Foundation</h5>
              <ul>
                <li>
                    <Link to="/aboutUs">About Us</Link>
                </li>
                <li>
                    <Link to="/beldexresearch">Beldex Research Labs</Link>
                </li>
              </ul>
              <h5 id="wallet_header">Wallets</h5>
              <ul>
                <li>
                  <p
                    className="d_hover "
                    id="desk_wallet"
                    rel="noreferrer"
                    onClick={() => setDeskWallet(!deskWallet)}
                  >
                    Desktop Wallet
                  </p>
                </li>

                {deskWallet ? (
                  <ul className="d_wallet">
                    <li>
                      <a
                        href="https://github.com/Beldex-Coin/beldex-electron-gui-wallet/releases/download/v4.1.1/beldex-electron-wallet-4.1.1-win.exe"
                        id="windows"
                        rel="noreferrer"
                      >
                        Windows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Beldex-Coin/beldex-electron-gui-wallet/releases/download/v4.1.0/beldex-electron-wallet-4.1.0-mac.dmg"
                        id="mac"
                        rel="noreferrer"
                      >
                        Mac
                      </a>
                    </li>
                    <li>
                      <a
                        href=" https://github.com/Beldex-Coin/beldex-electron-gui-wallet/releases/download/v4.1.1/beldex-electron-wallet-4.1.1-linux.deb"
                        id="linux_deb"
                        rel="noreferrer"
                      >
                        Linux Deb
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/Beldex-Coin/beldex-electron-gui-wallet/releases/download/v4.1.1/beldex-electron-wallet-4.1.1-linux.AppImage"
                        id="linux_app"
                        rel="noreferrer"
                      >
                        Linux App
                      </a>
                    </li>
                  </ul>
                ) : (
                  ""
                )}

                <li>
                  <p
                    className="m_hover "
                    id="mobile_wallet"
                    onClick={() => setMobileWallet(!mobileWallet)}
                  >
                    Mobile Wallet
                  </p>
                </li>

                {mobileWallet ? (
                  <ul className="m_wallet">
                    <li>
                      <a
                        href="https://play.google.com/store/apps/details?id=io.beldex.wallet"
                        target="_blank"
                        id="android_bchat"
                        rel="noreferrer"
                      >
                        Android
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://apps.apple.com/in/app/beldex-official-wallet/id1603063369"
                        target="_blank"
                        id="ios"
                        rel="noreferrer"
                      >
                        iOS
                      </a>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </ul>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-2 products"
              data-aos="flip-right"
              data-aos-duration="1800"
            >
              <h5 id="our_product">Our Products</h5>
              <ul>
                <li>
                  <a
                    href="https://bchat.beldex.io/"
                    target="_blank"
                    id="bchat_header_1"
                    rel="noreferrer"
                  >
                    Bchat
                  </a>
                </li>
                <li>
                  <a
                    href="https://belnet.beldex.io/"
                    target="_blank"
                    id="belnet_header_1"
                    rel="noreferrer"
                  >
                    Belnet
                  </a>
                </li>
                <li>
                  <a
                    href="https://bridge.beldex.io/"
                    target="_blank"
                    id="beldex_bridge"
                    rel="noreferrer"
                  >
                    Beldex Bridge
                  </a>
                </li>
              </ul>
              <h5 id="bchat_header">Bchat</h5>
              <ul>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=io.beldex.bchat"
                    target="_blank"
                    id="android_bchat_1"
                    rel="noreferrer"
                  >
                    Android
                  </a>
                </li>
                <li>
                  <a
                    href="https://apps.apple.com/in/app/bchat-messenger/id1626066143"
                    target="_blank"
                    id="ios_1"
                    rel="noreferrer"
                  >
                    iOS
                  </a>
                </li>
              </ul>
              <h5 id="belnet_header">Belnet</h5>
              <ul>
                <li>
                  <a
                    href="https://play.google.com/store/apps/details?id=io.beldex.belnet"
                    target="_blank"
                    id="android_belnet_1"
                    rel="noreferrer"
                  >
                    Android
                  </a>
                </li>
              </ul>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-2 products"
              data-aos="flip-right"
              data-aos-duration="1800"
            >
              <h5 id="resource">Resources</h5>
              <ul>
                <li>
                  <a
                    href="https://beldex.io/blog/"
                    target="_blank"
                    id="blog_header"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.beldex.io/"
                    target="_blank"
                    id="documentation"
                    rel="noreferrer"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Beldex-Coin"
                    target="_blank"
                    id="github"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                    <Link to="/contributor">Contributor Program</Link>
                </li>
                <li>
                    <Link to="/mediakit">Media kit</Link>
                </li>
                <li>
                    <Link to="/career">Careers</Link>
                </li>
              </ul>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 subscribe"
              data-aos="flip-right"
              data-aos-duration="1800"
            >
              <h5 id="suscribe">Subscribe Us</h5>
              <p id="stay_connected">Stay connected with beldex</p>
              <div className="mb-3 col-12 col-sm-12">
                <div className="row" id="SubForm">
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email Id"
                    className="form-control enter_your_mail"
                    aria-describedby="emailHelp"
                    onChange={inputValidation}
                    // value={userEmail}
                  />
                </div>
              </div>
              <div className="mb-3 col-12 col-sm-6 subscribe-button">
                <div className="row">
                  <button
                    // onClick={()=>buttonClick()}
                    type="submit"
                    className="btn btn-primary "
                    id="suscribe_btn"
                    onClick={() => regexValidation()}
                  >
                    Subscribe
                  </button>
                </div>
                <div className="response-1">
                  <p style={warning}>{inputResponse}</p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="support-mail" data-aos="flip-up">
                <p id="email_context">
                  Email:{" "}
                  <a
                    href="mailto:support@beldex.io"
                    target="_blank"
                    className="support_gmail"
                    rel="noreferrer"
                  >
                    support@beldex.io
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid">
          <p id="copy_right">
            Copyrights 2022 @{" "}
            <a href="https://www.beldex.io" id="beldex_internation" rel="noreferrer">
              Beldex International Inc
            </a>
          </p>
        </footer>
      </div>
    );
}