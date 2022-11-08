
import React ,{useEffect}  from"react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Issues from "./img/issues.png";
import research from "./img/research.png";
import Translate from "./img/translate.png";
import Improve_Doc from "./img/improve-doc.png";
import Contributor_one from "./img/contributor-icon/1.png";
import Contributor_two from "./img/contributor-icon/2.png";
import Contributor_three from "./img/contributor-icon/3.png";
import Contributor_four from "./img/contributor-icon/4.png";
import Contributor_five from "./img/contributor-icon/5.png";
import Contributor_six from "./img/contributor-icon/6.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contributor(){
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
         <div class="container-fluid contibutor-header-section" data-aos="fade-up">
            <div class="row">
                <h1 id="build_beldex_header" data-aos="fade-up">Build For Beldex</h1>
                <h3 id="build_beldex_header_content"  data-aos="fade-up-left">Anybody can contribute to Beldex, right from developers, content creators, marketers, designers, translators, advisors, and consultants. Beldex remains true to the ethos of decentralization and is piloted by the community. </h3>
                <p><a href="https://github.com/orgs/Beldex-Coin/projects/1/views/1?layout=board" target="_blank" class="validator-button-research-labs" id="build_beldex_developer_btn" 
                rel="noreferrer"
                data-aos="fade-up"> Developers </a> <a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link" target="_blank" class="validator-button-research-labs" 
                rel="noreferrer"
                id="build_beldex_creator_btn" data-aos="fade-up"> Creators </a></p>
            </div>
         </div>
         {/* <!-- End--> */}
         {/* <!--Run a masternode--> */}
        <div class="container-fluid run-masternode beldex-rewards">
            <div class="row">
               
                 <div class="col-sm-12 col-lg-12 col-12 contributor-header-section">
                     <div class="row" data-aos="fade-up">
                         <div class="col-lg-6 col-sm-12 col-12">
                             <div class="contributor-section" data-aos="fade-up-left">
                                 <h2 id="commiting_task_header">Committing to Tasks</h2>
                                 <p id="commiting_task_content">There are several open issues and tasks to commit to on our Github classified into features, bugs, and process enhancements. You can contribute to any of these issues and it will be peer-reviewed by the team and other contributors before it is approved. </p>
                                 <p id="commiting_task_content_1">You can also create an issue or propose a feature, fix your own schedule to work on it and quote your fee for the same. </p>
                                 <p ><a href="https://github.com/orgs/Beldex-Coin/projects/1/views/1?layout=board" rel="noreferrer"
                                 target="_blank" class="button " id="commiting_task_header_btn">Contribute now</a></p>
                             </div>
                         </div>
                         <div class="col-lg-6 col-sm-12 col-12">
                           <div class="contributor-content-img" data-aos="fade-up-right">
                               <img src={Issues} alt="issues" />
                           </div>
                        </div>
                     </div>
                 </div>


                 <div class="col-sm-12 col-lg-12 col-12 contributor-header-section">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-12">
                            <div class="contributor-content-img" style={{textAlign:"left"}} data-aos="fade-up-left">
                                <img src={research} alt="research" />
                            </div>
                         </div>
                        <div class="col-lg-6 col-sm-12 col-12">
                            <div class="contributor-section" data-aos="fade-up-right">
                                <h2 id="beldex_research_labs_header"> Beldex Research Labs</h2>
                                <p id="beldex_research_labs_content">Beldex is researching ways to implement zk-SNARKs in an effort to reduce the transaction size, improve the anonymity set of Beldex transactions and enhance network scalability.</p>
                                <p id="beldex_research_labs_content_1">As blockchains keep adding data, over time, it becomes impractical and inconvenient to run nodes to sustain the network. To overcome this, Beldex is researching data and transactional sharding implementation on its network. Beldex lends an open invite to researchers and learned scholars to join our research community.</p>
                                <p ><a href="research-labs.html" class="button " id="beldex_research_labs_btn" >Join Beldex Research </a></p>
                            </div>
                        </div>
                    </div>
                </div>
                 
                 <div class="col-sm-12 col-lg-12 col-12 contributor-header-section">
                    <div class="row">
                        <div class="col-lg-6 col-sm-12 col-12">
                            <div class="contributor-section" data-aos="fade-up-left">
                                <h2 id="translation_program_header">Translation Program</h2>
                                <p id="translation_program_content">Be the first to introduce Beldex to your community in your own native language. Help translate the website, blogs, articles, videos and expand the Beldex community to speakers of other languages.</p>

                                <p id="translation_program_content_1">Our translator program awards regular and consistent contributors with BDX as they are considered early adopters who aid our mission and extend our vision to every corner of the world.</p>

                                <p ><a href="https://beldex.io/blog/" target="_blank"
                                rel="noreferrer" class="button " id="translation_program_btn">Translate now</a></p>
                            </div>

                        </div>
                        <div class="col-lg-6 col-sm-12 col-12">
                          <div class="contributor-content-img" data-aos="fade-up-right">
                              <img src={Translate} alt="translate" />
                          </div>
                       </div>
                    </div>
                </div>

                <div class="col-sm-12 col-lg-12 col-12 contributor-header-section">
                  <div class="row">
                      <div class="col-lg-12 col-sm-12 col-md-12  col-12">
                          <div class="improve-docs-section" data-aos="fade-up">
                              <h2 id="improve_our_docs_header">Improve Our Docs</h2>
                              <p id="improve_our_docs_content" data-aos="fade-up-left">Our project is constantly evolving and our developer docs must reflect accurate and up-to-date information. We welcome contributors who are skilled in the documentation and maintaining of technical resources that help onboard new developers to the community.  </p>
                              <p  data-aos="fade-up-left"><a href="https://docs.beldex.io" target="_blank" rel="noreferrer" class="button" id="improve_our_docs_btn">Developer Docs</a></p>
                              <p  data-aos="fade-up"><img src={Improve_Doc} alt="improve_doc" /></p>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
        </div>
        <div class="container-fluid content-creation-section research-labs1">
         <div class="row">
              <div class="col-lg-12 col-sm-12 col-md-12  col-12">
               <div class="improve-docs-section">
                   <h2 id="content_creation_header" data-aos="fade-up">Content Creation </h2>
                   <p id="content_creation_content" data-aos="fade-up-left">Content creators are at the foundation of every major and successful project. Beldex calls for content creators to produce text, images, videos and other social media content that help new users who join the community easily learn and participate in the network.
                </p>
               </div>
           </div>
             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                         <img src={Contributor_one} alt="conributor_one"/>
                     </div>
                     <h5 id="blog_articles_header"> Blogs & Articles</h5>
                     <div class="contributor-content-1">
                        <p id="blog_articles_content">Are you a crypto writer who writes informative and compelling articles that are backed by data and extensive research? Then, join our legion of writers and start writing on your personal blog or share your article with us.</p>
                     </div>
                     <div class="contibutor-button">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link" 
                        rel="noreferrer" target="_blank" class="button" id="blog_articles_btn">Share Your Article</a></p>
                      </div>
                 </div>
             </div>
             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up" data-aos-duration="1600">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                        <img src={Contributor_two} alt="contributor_two" />
                     </div>
                     <h5 id="video_img_header">Videos & Images</h5>
                     <div class="contributor-content-1">
                        <p id="video_img_content">Graphic designers, UI/UX designers, video editors, and 3D animators - this is your turf. Share your images, videos, and other designs, to be featured on our website and social media. </p>
                     </div>
                     <div class="contibutor-button">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link" target="_blank" rel="noreferrer" class="button" id="video_img_btn">Submit Your Designs</a></p>
                      </div>
                 </div>
             </div>
             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up" data-aos-duration="2100">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                        <img src={Contributor_three} alt="contributor_three" />
                     </div>
                     <h5 id="infographic_meme_header">Infographics & Memes</h5>
                   <div class="contributor-content-1">
                    <p id="infographic_meme_content">Infographics and memes make up for engaging social media content. If you’ve got a knack for creating humorous, informative, and engaging memes, then this is the place for you. </p>
                   </div>
                     <div class="contibutor-button">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link"
                        rel="noreferrer" target="_blank" class="button" id="infographic_meme_btn">Share Your Memes</a></p>
                      </div>
                 </div>
             </div>

             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                        <img src={Contributor_four} alt="contributor_four" />
                     </div>
                     <h5 id="vlog_podcast_header">Vlogs & Podcasts</h5>
                    <div class="contributor-content-1">
                        <p id="vlog_podcast_content">Are you a vlogger or run your own podcast? There’s no better platform to express yourself than to our community of almost half a million people. Get in touch to schedule a vlog or podcast with us!</p>
                    </div>
                     <div class="contibutor-button">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link" 
                        rel="noreferrer" target="_blank" class="button" id="vlog_podcast_btn">Let’s Podcast</a></p>
                      </div>
                 </div>
             </div>

             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up" data-aos-duration="1600">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                        <img src={Contributor_five} alt="contributor_five" />
                     </div>
                     <h5 id="social_media_header">Social Media Content</h5>
                     <div class="contributor-content-1">
                       <p id="social_media_content">
                        If you’re a social wizard, then you can help spread the word about Beldex on Twitter, Telegram, Reddit, Discord, or any other social channel that you maintain.
                       </p>
                     </div>
                     <div class="contibutor-button">
                        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLScUDgPenD_pIqOkLP2kCWRqNMZWBJK_7eKKF56d2VHO4PfwAg/viewform?usp=sf_link" 
                        rel="noreferrer" target="_blank" class="button" id="social_media_btn">Spread the Word</a></p>
                      </div>
                 </div>
             </div>

             <div class="col-12 col-sm-12 col-lg-4 mnbox" data-aos="fade-up" data-aos-duration="2100">
                 <div class="contributor-box-1 grad4-bg rm-line">
                     <div class="icon-img">
                        <img src={Contributor_six} alt="contributor_six" />
                     </div>
                     <h5 id="suggestion_header">Suggestions</h5>
                     <div class="contributor-content-1">
                        <p id="suggestion_content">We value your feedback and suggestions. Your ideas are always welcome. If you’ve got a suggestion, and it doesn’t matter how small or trivial it may be, reach out to us on our discord and we’ll pass it for a community vote.</p>
                     </div>
                     <div class="contibutor-button">
                        <p><a href="https://discord.com/invite/Hj4MAmA5gs" target="_blank" rel="noreferrer" class="button" id="suggestion_btn">Reach Us</a></p>
                      </div>
                 </div>
             </div>
         </div>
     </div>

        {/* <!-- End-->          */}
         

      </main>     
     
            <Footer/>
        </div>
    )
}