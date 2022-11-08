
import React ,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import  Group_1  from "./img/BG_elements/Group 86.svg";
import  Group_2  from "./img/BG_elements/Group 90.svg";
import  Group_3  from "./img/BG_elements/Group 141.svg";
import  Group_4  from "./img/BG_elements/Group 136.svg";
import  Group_5  from "./img/BG_elements/Group 88.svg";
import  Beldexlogoverticalwhite  from "./img/beldex-logo-page/Jpeg/Logo_Horizontal-Black_White_vertical.jpg";
import  Beldexlogohorizondalwhite  from "./img/beldex-logo-page/Jpeg/Logo_Horizontal-Black_White_horizontal.jpg";
import  Beldexlogohorizondalblack  from "./img/beldex-logo-img/Logo_Horizontal-Black_Black_horizontal.jpg";
import  Beldexlogoverticalblack  from "./img/beldex-logo-img/Logo_Horizontal-Black_Black_vertical.jpg";
import  IconMac  from "./img/beldex-logo-img/icons8_macos_close.png";
import  BeldexLogoBlack   from "./img/beldex-logo-img/black.png";
import  Distort  from "./img/beldex-logo-img/distort.png";
import Crop from "./img/beldex-logo-img/logo_cut.png";
import OpacityLogo from "./img/beldex-logo-img/opactity.png";
import  Othercolor  from "./img/beldex-logo-img/other_colors.png";
import ShadowLogo from "./img/beldex-logo-img/shadow.png";
import  Group_125  from "./img/BG_elements/Group 125.svg";
import Group_141  from "./img/BG_elements/Group 141.svg";
import   Horizontal_space from "./img/beldex-logo-img/Horizontal_space.png";
import Vertical_space from "./img/beldex-logo-img/vertical_square.png";
import  Group_126   from "./img/BG_elements/Group 126.svg";
import  Group_136   from "./img/BG_elements/Group 136.svg";
import  Group_128   from "./img/BG_elements/Group 128.svg";
import  Group_88   from "./img/BG_elements/Group 88.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';







export default function Mediakit(){
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
    <div class="container-fluid logo_header_page" data-aos="fade-up">
        <div class="row">
             <div class="col-lg-12 col-sm-12 col-md-12 col-12" >
                <div class="beldex_logo_header_page" data-aos="fade-up">
                    <h2 id="media_kit_header" data-aos="fade-up">Beldex Media Kit</h2>
                    <p id="media_kit_content" data-aos="fade-up-left">Refer to our guidlines on using the brand name, logos, artwork, and trademarks correctly</p>
                    <p data-aos="fade-up"><a  href="img/beldex-logo-page.zip" target="_blank" class="download_btn_android" id="media_kit_button" > Download Complete Kit</a></p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid logo_page_beldex_bg" data-aos="fade-up">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="logo_beldex_section_2">
                    <h4 id="media_kit_logo_beldex" data-aos="fade-left">Beldex <span>Logo</span></h4>
                    <div class="logo_background_img">
                        <img src={Group_1} alt="group_1" />
                    </div>
                    <div class="logo_background_img_1">
                        <img src={Group_2} alt="group_2" />
                    </div>
                    <div class="logo_background_img_2">
                        <img src={Group_3} alt="group_3" />
                    </div>
                    <div class="logo_background_img_3">
                        <img src={Group_4} alt="group_4" />
                    </div>
                    <div class="logo_background_img_4">
                        <img src={Group_5} alt="group_5" />
                    </div>
                </div>
                <div class="row logo_section_content" data-aos="fade-up">
                    <div class="col-lg-6 col-sm-6 col-12 col-md-6 mt-4" data-aos="fade-up-right">
                        <div class="beldex_white_small_logo">
                            <img src={Beldexlogoverticalwhite} alt="logowhite" />
                        </div>
                        <div class="beldex_white_logo">
                            <img src={Beldexlogohorizondalwhite} alt="logohorizondal" />
                        </div>
                        <div class="beldex_black_small_logo">
                            <img src={Beldexlogohorizondalblack} alt="logoblack" />
                        </div>
                        <div class="beldex_black_logo">
                            <img src={Beldexlogoverticalblack} alt="horizondalblack" />
                        </div>
                       
                    </div>
                    <div class="col-lg-6 col-sm-6 col-12 col-md-6 mt-4">
                        <div class="section_2_right_content" data-aos="fade-up-left" >
                            <p id="media_kit_logo_beldex_content">Use the logo either in block or white backgrounds only.You can use both the horizontal and vertical lockups depending  on your conposition and requirements.</p>
                        <p><a  href="img/beldex-logo-page.zip" target="_blank" class="download_btn_android" id="media_kit_logo_beldex_button"> Download Complete Kit</a></p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="usage_header" data-aos="fade-up">
                        <h4 id="media_kit_logo_usage_guide_header" data-aos="fade-up-left">Usage<span> Guide</span></h4>
                        <div class="col-lg-12 col-sm-12 col-md-12 col-12">
                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="1400">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="iconMac" />
                                            <p id="media_kit_logo_usage_guide_content_1"> Do not use the logo in block or white</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={BeldexLogoBlack } alt="BeldexLogoBlack " />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="1800">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="iconsmac" />
                                            <p id="media_kit_logo_usage_guide_content_2"> Do not distort the logo</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={Distort} alt="Distort" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="2100">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="macos" />
                                            <p id="media_kit_logo_usage_guide_content_3"> Do not crop the logo</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={Crop} alt="Crop" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="1400">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="macicons" />
                                            <p id="media_kit_logo_usage_guide_content_4"> Do not aiter the opacity</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={OpacityLogo} alt="opcaitylogo" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="1800">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="macicons" />
                                            <p id="media_kit_logo_usage_guide_content_5"> Do not use different colors</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={Othercolor} alt="Othercolor" />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4 col-sm-6 col-12">
                                    <div class="guide_card_1" data-aos="fade-up" data-aos-duration="2100">
                                        <div class="guide_card_header">
                                            <img src={IconMac} alt="macicons" />
                                            <p id="media_kit_logo_usage_guide_content_6"> Do not use shadows and effects</p>
                                        </div>
                                        <div class="beldex_logo_page_img">
                                            <img src={ShadowLogo} alt="shadowlogo" />
                                        </div>
                                    </div>
                                </div>
                                <div class="bg_ring_usage_header">
                                    <img src={Group_125} alt="Group_125" />
                                </div>
                                <div class="bg_dot_usage_header">
                                    <img src={Group_141} alt="Group_141" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="usage_header">
                        <h4 id="media_kit_logo_clear_space_header" data-aos="fade-up-left">Clear <span>Space</span></h4>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-md-12 col-12" data-aos="fade-up">
                        <div class="row">
                            <div class="clear_space_bg">
                                <p id="media_kit_logo_clear_space_content" data-aos="fade-left">For Readability and visual impact, the logo must have a clear space.</p>
                                <div class="clear_space_beldex_logo" data-aos="fade-up">
                                    <img src={Horizontal_space} alt="" class="beldex_logo_width_clear_space_2" data-aos="fade-up-right" />
                                    <img src={Vertical_space} alt="" class="beldex_logo_width_clear_space_1" data-aos="fade-up-left" />
                                </div>
                            </div>
                             <div class="bg_element_space_clear">
                                    <img src={Group_126} alt="group_126" />
                                </div>
                                <div class="bg_dot_clear_space_header">
                                    <img src={Group_141} alt="group_141" />
                                </div>
                                <div class="bg_slash_clear_space_header">
                                    <img src={Group_136} alt="Group_136" />
                                </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="usage_header">
                        <h4 id="media_kit_logo_clear_color_pallete_header" data-aos="fade-up"><span>Color</span> Palette</h4>
                        <p class="text_align_color_pallete" id="media_kit_logo_clear_color_pallete_content" data-aos="fade-up-left">Only use this signature colors when refering to the Beldex brand.</p>
                    </div>
                    <div class="col-lg-12 col-sm-12 col-md-12 col-12">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12 col-md-6 col-12">
                                <div class="color_pallete_beldex_logo" data-aos="fade-up-right">
                                    <div class="overall_color_pallete">
                                        <div class="green_pallete">
                                            <p>#00db09</p>
                                        </div>
                                        <div class="blue_pallete">
                                            <p>#2979FB</p>
                                        </div>
                                        <div class="darh_gray_pallete">
                                            <p>#1C1C26</p>
                                        </div>
                                    </div>
                                    <div class="primary_text_center">
                                        <p id="media_kit_logo_clear_color_pallete_content_primary">Primary Colors</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12 col-md-6 col-12">
                                <div class="color_pallete_beldex_logo" data-aos="fade-up-left">
                                    <div class="overall_color_pallete">
                                        <div class="green_pallete_secondary">
                                        </div>
                                        <div class="blue_pallete_secondary">
                                        </div>
                                        <div class="darh_gray_pallete">
                                        </div>
                                    </div>
                                    <div class="secondary_text_center">
                                        <p id="media_kit_logo_clear_color_pallete_content_secondary">Secondary Colors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg_ring_color_pallete_header">
                            <img src={Group_125} alt="group_125" />
                        </div>
                        <div class="bg_dot_circle_color_pallete_header">
                            <img src={Group_128} alt="Group_128" />
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12 col-md-12 col-12">
                        <div class="complete_kit_bg" data-aos="fade-up">
                            <div class="complete_kit_header">
                                <h4 id="media_kit_logo_complete_kit">Get the <span>complete Kit</span></h4>
                                <p data-aos="flip-right"><a href="img/beldex-logo-page.zip" target="_blank" class="download_btn_complete" id="media_kit_logo_complete_kit_button"> Download</a></p>
                            </div>
                            <div class="bg_circle_complete_kit_header">
                                <img src={Group_88} alt="Group_88" />
                            </div>
                            <div class="bg_slash_complete_kit_header">
                                <img src={Group_136} alt="Group_136" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

            <Footer/>
        </div>

    )
}