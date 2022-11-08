
import React ,{useEffect}  from"react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Research_one from "./img/research/1.png";
import Research_two from "./img/research/2.png";
import Research_three from "./img/research/3.png";
import Research_Four from "./img/research/4.png";
import Research_Five from "./img/research/5.png";
import Research_six from "./img/research/6.png";
import Research from "./img/research.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function BeldexResearch(){
 useEffect(()=>{
     AOS.init(
       {
               duration: 1000,
               offset: 120,
               easing: 'ease-in-out'
            }
     );
  },[])
    return(
        <div>
        <Navbar/>
        <main data-aos="fade-up">
         {/* <!-- Masternode Section--> */}
         <div class="container-fluid research-labs" data-aos="fade-up">
            <div class="row">
                <h1 id="beldex_research_lab_header" data-aos="fade-up">Beldex Research Labs</h1>
                <h3 id="beldex_research_content" data-aos="fade-up-left"> Researching zkSNARKs, EVM, and more to build a scalable and privacy-first ecosystem.</h3>
                <p data-aos="flip-left"><a href="https://docs.google.com/forms/d/e/1FAIpQLSddCySXTrGX6riXh43HxeDwkOzpMVCrCImbSb_UOd12NgbiDg/viewform" target="_blank" class="validator-button-research-labs" id="beldex_research_lab_join_btn" rel="noreferrer">Join Beldex Research</a></p>
            </div>
         </div>
         {/* <!-- End--> */}
         {/* <!--Run a masternode--> */}
        <div class="container-fluid run-masternode beldex-rewards research-labs1">
            <div class="row">
                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad1 rm-line" data-aos="fade-up" data-aos-duration="1200">
                        <div class="icon-img">
                            <img src={Research_one} alt="research"/>
                        </div>
                        <h5 id="emv_intergration_box_one">EVM Integration</h5>
                        <p id="emv_intergration_box_one_content">Beldex aims to be a programmable privacy network by adding EVM compatibility to the sidechains.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad2 rm-line" data-aos="fade-up" data-aos-duration="1600">
                        <div class="icon-img">
                           <img src={Research_two} alt="research_two"/>
                        </div>
                        <h5 id="zk_snarks_sidechain_box">zk-SNARKs based Sidechains</h5>
                        <p id="zk_snarks_sidechain_box_content">Zero knowledge proofs are proven to reduce size of transactions with large anonymity sets. Beldex is researching the implementation of zkSNARKs on sidechains.</p>
                    </div>
                </div>
                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad3 rm-line" data-aos="fade-up" data-aos-duration="2100">
                        <div class="icon-img">
                           <img src={Research_three} alt="research_three" />
                        </div>
                        <h5 id="beldex_name_box">Beldex Name System </h5>
                        <p id="beldex_name_box_content">The Beldex name system allows for users to send BDX to an address connected to a human readable domain.</p>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad3 rm-line" data-aos="fade-up" data-aos-duration="1200">
                        <div class="icon-img">
                          <img src={Research_Four} alt="research_four" />
                        </div>
                        <h5 id="cross_chain_box">Cross-Chain Interoperability</h5>
                        <p id="cross_chain_box_content">Cross-chain interoperability is a necessity for leveraging cross-chain users and liquidity. Beldex is bridging to ecosystems like BSC, Polygon, and Ethereum.</p>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad2 rm-line" data-aos="fade-up" data-aos-duration="1600">
                        <div class="icon-img">
                           <img src={Research_Five} alt="research_five" />
                        </div>
                        <h5 id="wallet_integration_box">Wallet Integration on BChat</h5>
                        <p id="wallet_integration_box_content">Integrating the Beldex wallet with BChat to send and receive BDX payments as you chat.</p>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-lg-4 mnbox">
                    <div class="box-1 grad1 rm-line" data-aos="fade-up" data-aos-duration="2100">
                        <div class="icon-img">
                           <img src={Research_six} alt="research_six" />
                        </div>
                        <h5 id="privacy_box_frist_nft">Privacy-first NFTs</h5>
                        <p id="privacy_box_frist_nft_content">NFTs that verify proof of ownership without revealing private information of the user.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid research-labs-header" data-aos="fade-up">
            <div class="row">
                <div class="col-lg-12 col-sm-12 col-md-12 ">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-12" data-aos="fade-up-right" >
                            <div class="left-side-research">
                            <h2 id="contribute_beldex_research_header">Contribute to Beldex Research </h2>
                            <p id="contribute_beldex_research_header_content">Beldex research labs provides information on the current scope of research on the Beldex project. Researchers, scholars, industry leaders, and community members can contribute to Beldex research on improving core consensus, zk-based sidechain implementation and EVM integration for the integration of shielded smart contracts. Research contributors will be rewarded for their contributions. Get involved to know more about available research opportunities at Beldex.</p>
                            <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSddCySXTrGX6riXh43HxeDwkOzpMVCrCImbSb_UOd12NgbiDg/viewform" class="button" target="_blank" rel="noreferrer" id="get_involved_btn"> Get Involved </a></p>
                           </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-12 research-img" data-aos="fade-up-left">
                              <img src={Research} alt="reasearch" />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* <!-- End-->          */}
        <Footer/>
         
      </main>
      </div>
    )

}