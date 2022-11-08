import React, { useRef } from "react";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./img/logo.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import WhitePaper from "./img/whitepaper.pdf";
import Button from 'react-bootstrap/Button';
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
},[handler]);
return domContains
}

export default function Navbar(){
  const [navBar, setNavBar] = useState(false);
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

let domContains = useClickOutside(()=>{
      setNavBar(false);
})
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
      <div className="container-fluid header">
        <div className="row" ref={domContains}>
          <div className="col-lg-12 col-sm-12 col-md-12 col-12">
            <div className="navbar_header">
              <div className="logo">
                <a href="https://www.beldex.io" rel="noreferrer">
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="language_choose ">
                <button
                  data-toggle="modal"
                  data-target="#exampleModal2"
                  id="cf7"
                >
                  <div id="image_3"></div>
                  <span id="english"></span>

                  <div id="image_1"></div>
                  <span id="russian"></span>

                  <div id="image_2"></div>
                  <span id="spanish"></span>
                </button>
              </div>

              {navBar ? (
                <nav className="main-nav">
                  <ul className="navOn">
                    <li>
                      <a
                        href="https://beldex.io/blog/posts/"
                        id="blog_nav"
                        rel="noreferrer"
                        target={"_blank"}
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                        <Link to="/masternode">Masternode</Link>
                    </li>
                    <li>
                      <a
                        href="https://exchange.beldex.io/"
                        target="_blank"
                        id="exchange_nav"
                        rel="noreferrer"
                      >
                        Exchange
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        className="whitepaper-dis"
                        id="whitepaper"
                        rel="noreferrer"
                        onClick={handleShow}
                      >
                        Whitepaper
                      </a>
                    </li>
                  </ul>
                </nav>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-12 col-sm-12 col-md-12 col-12">
              <div
                className="navToggle_index"
                onClick={() => setNavBar(!navBar)}
              >
                <span className={navBar ? "menuOn" : "menu"}></span>
              </div>
            </div>

            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title ><h5 className="modal-title" >Disclaimer</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
          <p id="disclaimer_1_nav_content">PLEASE READ THE ENTIRETY OF THIS "DISCLAIMER" SECTION CAREFULLY. NOTHING HEREIN CONSTITUTES LEGAL, FINANCIAL, BUSINESS OR TAX ADVICE AND YOU SHOULD CONSULT YOUR OWN LEGAL, FINANCIAL, TAX OR OTHER PROFESSIONAL ADVISOR(S) BEFORE ENGAGING
             IN ANY ACTIVITY IN CONNECTION HEREWITH. NEITHER BELDEX INTERNATIONAL INC (THE COMPANY), ANY OF THE PROJECT TEAM MEMBERS (THE BELDEX TEAM) WHO HAVE WORKED ON THE BELDEX ECOSYSTEM (AS DEFINED HEREIN) OR PROJECT TO DEVELOP THE BELDEX
             ECOSYSTEM IN ANY WAY WHATSOEVER, ANY DISTRIBUTOR/VENDOR OF BDX TOKENS (THE DISTRIBUTOR), NOR ANY SERVICE PROVIDER SHALL BE LIABLE FOR ANY KIND OF DIRECT OR INDIRECT DAMAGE OR LOSS WHATSOEVER WHICH YOU MAY SUFFER IN CONNECTION WITH
             ACCESSING THIS WHITEPAPER, THE WEBSITE AT <a href="https://beldex.io">HTTPS://BELDEX.IO/</a> (THE WEBSITE) OR ANY OTHER WEBSITES OR MATERIALS PUBLISHED BY THE COMPANY. </p>
         <p  id="disclaimer_2_nav_content"><b>Project purpose:</b> You agree that you are acquiring BDX to participate in the Beldex ecosystem and to obtain services on the ecosystem thereon. The Company, the Distributor and their respective affiliates would develop and contribute
             to the underlying source code for the Beldex ecosystem. The Company is acting solely as an arms' length third party in relation to the BDX distribution, and not in the capacity as a financial advisor or fiduciary of any person
             with regard to the distribution of BDX. </p>
         <p id="disclaimer_3_nav_content"><b>Nature of the Whitepaper:</b> The Whitepaper and the Website are intended for general informational purposes only and do not constitute a prospectus, an offer document, an offer of securities, a solicitation for investment, or any
             offer to sell any product, item, or asset (whether digital or otherwise). The information herein may not be exhaustive and does not imply any element of a contractual relationship. There is no assurance as to the accuracy or completeness
             of such information and no representation, warranty or undertaking is or purported to be provided as to the accuracy or completeness of such information. Where the Whitepaper or the Website includes information that has been obtained
             from third party sources, the Company, the Distributor, their respective affiliates and/or the BELDEX team have not independently verified the accuracy or completeness of such information. Further, you acknowledge that circumstances
             may change and that the Whitepaper or the Website may become outdated as a result; and neither the Company nor the Distributor is under any obligation to update or correct this document in connection therewith. </p>
         <p id="disclaimer_4_nav_content"><b>Token Documentation:</b> Nothing in the Whitepaper or the Website constitutes any offer by the Company, the Distributor, or the BELDEX team to sell any BDX (as defined herein) nor shall it or any part of it nor the fact of its presentation
             form the basis of, or be relied upon in connection with, any contract or investment decision. Nothing contained in the Whitepaper or the Website is or may be relied upon as a promise, representation or undertaking as to the future
             performance of the Beldex ecosystem. The agreement between the Distributor (or any third party) and you, in relation to any distribution or transfer of BDX, is to be governed only by the separate terms and conditions of such agreement.
         </p>
         <p id="disclaimer_5_nav_content">The information set out in the Whitepaper and the Website is for community discussion only and is not legally binding. No person is bound to enter into any contract or binding legal commitment in relation to the acquisition of BDX,
             and no digital asset or other form of payment is to be accepted on the basis of the Whitepaper or the Website. The agreement for distribution of BDX and/or continued holding of BDX shall be governed by a separate set of Terms and
             Conditions or Token Distribution Agreement (as the case may be) setting out the terms of such distribution and/or continued holding of BDX (the Terms and Conditions), which shall be separately provided to you or made available
             on the Website. The Terms and Conditions must be read together with the Whitepaper. In the event of any inconsistencies between the Terms and Conditions and the Whitepaper or the Website, the Terms and Conditions shall prevail</p>
         <p id="disclaimer_6_nav_content">Deemed Representations and Warranties: By accessing the Whitepaper or the Website (or any part thereof), you shall be deemed to represent and warrant to the Company, the Distributor, their respective affiliates, and the BELDEX team
             as follows:

             <br/><br/> (a) in any decision to acquire any BDX, you have shall not rely on any statement set out in the Whitepaper or the Website;<br/> (b) you will and shall at your own expense ensure compliance with all laws, regulatory requirements
             and restrictions applicable to you (as the case may be);<br/> (c) you acknowledge, understand and agree that BDX may have no value, there is no guarantee or representation of value or liquidity for BDX, and BDX is not an investment
             product nor is it intended for any speculative investment whatsoever;<br/> (d) none of the Company, the Distributor, their respective affiliates, and/or the BELDEX team members shall be responsible for or liable for the value of
             BDX, the transferability and/or liquidity of BDX and/or the availability of any market for BDX through third parties or otherwise; and<br/> (e) you acknowledge, understand and agree that you are not eligible to participate in the
             distribution of BDX if you are a citizen, national, resident (tax or otherwise), domiciliary and/or green card holder of a geographic area or country (i) where it is likely that the distribution of BDX would be construed as the
             sale of a security (howsoever named), financial service or investment product and/or (ii) where participation in token distributions is prohibited by applicable law, decree, regulation, treaty, or administrative act (including
             without limitation the United States of America and the People's Republic of China); and to this effect you agree to provide all such identity verification document when requested in order for the relevant checks to be carried
             out.
             <br/><br/> The Company, the Distributor and the BELDEX team do not and do not purport to make, and hereby disclaims, all representations, warranties or undertaking to any entity or person (including without limitation warranties
             as to the accuracy, completeness, timeliness, or reliability of the contents of the Whitepaper or the Website, or any other materials published by the Company or the Distributor). To the maximum extent permitted by law, the Company,
             the Distributor, their respective affiliates and service providers shall not be liable for any indirect, special, incidental, consequential or other losses of any kind, in tort, contract or otherwise (including, without limitation,
             any liability arising from default or negligence on the part of any of them, or any loss of revenue, income or profits, and loss of use or data) arising from the use of the Whitepaper or the Website, or any other materials published,
             or its contents (including without limitation any errors or omissions) or otherwise arising in connection with the same. Prospective acquirors of BDX should carefully consider and evaluate all risks and uncertainties (including
             financial and legal risks and uncertainties) associated with the distribution of BDX, the Company, the Distributor and the BELDEX team. </p>

         <p id="disclaimer_7_nav_content"><b>BDX Token:</b> The native cryptographically-secured fungible protocol token of the Beldex ecosystem (ticker symbol BDX) is a transferable representation of attributed utility functions specified in the protocol/code of the Beldex
             ecosystem, and which is designed to be used solely as an interoperable utility token thereon.
             <br/>
             <br/> BDX is a functional utility token which will be used as the medium of exchange between participants on the Beldex ecosystem in a decentralised manner. The goal of introducing BDX is to provide a convenient and secure mode
             of payment and settlement between participants who interact within the ecosystem on the Beldex ecosystem, and it is not, and not intended to be, a medium of exchange accepted by the public (or a section of the public) as payment
             for goods or services or for the discharge of a debt; nor is it designed or intended to be used by any person as payment for any goods or services whatsoever that are not exclusively provided by the issuer. BDX does not in any
             way represent any shareholding, participation, right, title, or interest in the Company, the Distributor, their respective affiliates, or any other company, enterprise or undertaking, nor will BDX entitle token holders to any promise
             of fees, dividends, revenue, profits or investment returns, and are not intended to constitute securities in Singapore or any relevant jurisdiction. BDX may only be utilised on the Beldex ecosystem, and ownership of BDX carries
             no rights, express or implied, other than the right to use BDX as a means to enable usage of and interaction within the Beldex ecosystem. </p>

         <p  id="disclaimer_8_nav_content">BDX also provides the economic incentives which will be distributed to encourage users to contribute to and participate in the ecosystem on the Beldex ecosystem, thereby creating a mutually beneficial system where every participant
             is fairly compensated for its efforts. BDX is an integral and indispensable part of the Beldex ecosystem, because without BDX, there would be no incentive for users to expend resources to participate in activities or provide services
             for the benefit of the entire ecosystem on the Beldex ecosystem. Given that additional BDX will be awarded to a user based only on its actual usage, activity and contribution on the Beldex ecosystem and/or proportionate to the
             frequency and volume of transactions, users of the Beldex ecosystem and/or holders of BDX which did not actively participate will not receive any BDX incentives.<br/><br/> The Beldex ecosystem itself is simply a blockchain protocol
         id=""    which, by design, does not own or run any computing/storage servers, so in order for users to utilise the network for transactions, it would need to pay network validators/nodes a certain amount of network transaction fees to confirm
             and execute the transaction and record these on the blockchain. BDX will be used as the native currency to quantify</p>

         <p id="disclaimer_9_nav_content">BDX are designed to be utilised, and that is the goal of the BDX distribution. In fact, the project to develop the Beldex ecosystem would fail if all BDX holders simply held onto their BDX and did nothing with it. In particular, it
             is highlighted that BDX:<br/><br/> (a) does not have any tangible or physical manifestation, and does not have any intrinsic value (nor does any person make any representation or give any commitment as to its value); (b) is non-refundable
             and cannot be exchanged for cash (or its equivalent value in any other digital asset) or any payment obligation by the Company, the Distributor or any of their respective affiliates; (c) does not represent or confer on the token
             holder any right of any form with respect to the Company, the Distributor (or any of their respective affiliates), or its revenues or assets, including without limitation any right to receive future dividends, revenue, shares,
             ownership right or stake, share or security, any voting, distribution, redemption, liquidation, proprietary (including all forms of intellectual property or licence rights), right to receive accounts, financial statements or other
             financial data, the right to requisition or participate in shareholder meetings, the right to nominate a director, or other financial or legal rights or equivalent rights, or intellectual property rights or any other form of participation
             in or relating to the Beldex ecosystem, the Company, the Distributor and/or their service providers; (d) is not intended to represent any rights under a contract for differences or under any other contract the purpose or pretended
             purpose of which is to secure a profit or avoid a loss; (e) is not intended to be a representation of money (including electronic money), security, commodity, bond, debt instrument, unit in a collective investment scheme or any
             other kind of financial instrument or investment; (f) is not a loan to the Company, the Distributor or any of their respective affiliates, is not intended to represent a debt owed by the Company, the Distributor or any of their
             respective affiliates, and there is no expectation of profit; and (g) does not provide the token holder with any ownership or other interest in the Company, the Distributor or any of their respective affiliates. </p>
         <p id="disclaimer_10_nav_content">Notwithstanding the BDX distribution, users have no economic or legal right over or beneficial interest in the assets of the Company, the Distributor, or any of their affiliates after the token distribution. <br/><br/> To the extent
             a secondary market or exchange for trading BDX does develop, it would be run and operated wholly independently of the Company, the Distributor, the distribution of BDX and the Beldex ecosystem. Neither the Company nor the Distributor
             will create such secondary markets nor will either entity act as an exchange for BDX. </p>

         <p id="disclaimer_11_nav_content"><b>Informational purposes only:</b> The information set out herein is only conceptual, and describes the future development goals for the Beldex ecosystem to be developed. In particular, the project roadmap in the Whitepaper is being
             shared in order to outline some of the plans of the BELDEX team, and is provided solely for INFORMATIONAL PURPOSES and does not constitute any binding commitment. Please do not rely on this information in deciding whether to participate
             in the token distribution because ultimately, the development, release, and timing of any products, features or functionality remains at the sole discretion of the Company, the Distributor or their respective affiliates, and is
             subject to change. Further, the Whitepaper or the Website may be amended or replaced from time to time. There are no obligations to update the Whitepaper or the Website, or to provide recipients with access to any information beyond
             what is provided herein. </p>

         <p id="disclaimer_12_nav_content"><b>Regulatory approval:</b> No regulatory authority has examined or approved, whether formally or informally, any of the information set out in the Whitepaper or the Website. No such action or assurance has been or will be taken under
             the laws, regulatory requirements or rules of any jurisdiction. The publication, distribution or dissemination of the Whitepaper or the Website does not imply that the applicable laws, regulatory requirements or rules have been
             complied with. </p>

         <p id="disclaimer_13_nav_content"><b>Cautionary Note on forward-looking statements:</b> All statements contained herein, statements made in press releases or in any place accessible by the public and oral statements that may be made by the Company, the Distributor
             and/or the BELDEX team, may constitute forward-looking statements (including statements regarding the intent, belief or current expectations with respect to market conditions, business strategy and plans, financial condition, specific
             provisions and risk management practices). You are cautioned not to place undue reliance on these forward-looking statements given that these statements involve known and unknown risks, uncertainties and other factors that may
             cause the actual future results to be materially different from that described by such forward-looking statements, and no independent third party has reviewed the reasonableness of any such statements or assumptions. These forward-looking
             statements are applicable only as of the date indicated in the Whitepaper, and the Company, the Distributor as well as the BELDEX team expressly disclaim any responsibility (whether express or implied) to release any revisions
             to these forward-looking statements to reflect events after such date. </p>

         <p id="disclaimer_14_nav_content"><b>References to companies and platforms:</b> The use of any company and/or platform names or trademarks herein (save for those which relate to the Company, the Distributor or their respective affiliates) does not imply any affiliation
             with, or endorsement by, any third party. References in the Whitepaper or the Website to specific companies and platforms are for illustrative purposes only. </p>

         <p id="disclaimer_15_nav_content"><b>English language:</b> The Whitepaper and the Website may be translated into a language other than English for reference purpose only and in the event of conflict or ambiguity between the English language version and translated versions
             of the Whitepaper or the Website, the English language versions shall prevail. You acknowledge that you have read and understood the English language version of the Whitepaper and the Website. </p>

         <p id="disclaimer_16_nav_content"><b>No Distribution:</b> No part of the Whitepaper or the Website is to be copied, reproduced, distributed or disseminated in any way without the prior written consent of the Company or the Distributor. By attending any presentation
             on this Whitepaper or by accepting any hard or soft copy of the Whitepaper, you agree to be bound by the foregoing limitations. </p>
       </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}  className="btn btn-secondary">
            Cancel
          </Button>
          <Button  className="btn btn-primary green-btn"><a  href={WhitePaper} target={"_blank"} className="accept">Accept</a></Button>
        </Modal.Footer>
      </Modal>
          </div>
        </div>
      </div>
    );
}