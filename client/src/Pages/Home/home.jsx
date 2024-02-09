import React from "react";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/slick.css";
import "./assets/icons/style.css";
import "./assets/css/style.css";
import "./assets/css/swiper-bundle.min.css";
import avatar1 from "./assets/images/avatar/curly-hair-man.png";
import avatar2 from "./assets/images/avatar/long-hair-woman.png";
import avatar3 from "./assets/images/avatar/chat.png";
import avatar4 from "./assets/images/avatar/dreadlocked-man.png";
import avatar5 from "./assets/images/avatar/bald-hair-man-with-vr.png";

// <link rel="preconnect" href="https://fonts.googleapis.com"/>
// <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap"/>
// <link rel="shortcut icon" href="./assets/images/fav.png"/>
// <link rel="stylesheet" href="./assets/css/animate.min.css"/>
// <link rel="stylesheet" href="./assets/css/bootstrap.min.css"/>
// <link rel="stylesheet" href="./assets/css/slick.css"/>
// <link rel="stylesheet" href="./assets/icons/style.css"/>
// <link rel="stylesheet" href="./assets/css/style.css"/>
// <link rel="stylesheet" href="./assets/css/swiper-bundle.min.css"/>

const home = () => {
  return (
    <>
      <div id="header">
        <div className="style-two">
          <div className="header-menu style-one bg-black-surface">
            <div className="container">
              <div className="header-main flex-between">
                <div className="menu-main">
                  <ul className="flex-item-center">
                    <li className="flex-center">
                      <a className="text-subtitle active" href="#!">
                        Home<i className="ph ph-caret-down fs-12 pl-4"></i>
                      </a>
                      {/* <div className="sub-nav">
                      <div className="sub-nav-main bg-black-surface p-24">
                        <div className="row">
                          <div className="col-9">
                            <div className="list-home p-32 flex-between gap-30">
                              <div className="item"> <i className="icon-chat-bot text-white fs-32"> </i><a className="display-block mt-20" href="index.html">
                                  <div className="text-button text-white">Home chat bot</div>
                                  <div className="caption1 text-placehover mt-8">Seamlessly integrate AI chat services into your existing systems</div></a></div>
                              <div className="item"> <i className="icon-image text-white fs-32"> </i><a className="display-block mt-20" href="home2.html">
                                  <div className="text-button text-white">Home Image generator</div>
                                  <div className="caption1 text-placehover mt-8">Seamlessly integrate AI chat services into your existing systems</div></a></div>
                              <div className="item"> <i className="icon-laptop text-white fs-32"> </i><a className="display-block mt-20" href="home3.html">
                                  <div className="text-button text-white">Home Digital Agency</div>
                                  <div className="caption1 text-placehover mt-8">Seamlessly integrate AI chat services into your existing systems</div></a></div>
                              <div className="item"> <i className="icon-clip text-white fs-32"> </i><a className="display-block mt-20" href="home4.html">
                                  <div className="text-button text-white">Home Business Agency</div>
                                  <div className="caption1 text-placehover mt-8">Seamlessly integrate AI chat services into your existing systems</div></a></div>
                            </div>
                          </div>
                          <div className="col-3">
                            <div className="explore-block bg-line-dark p-24 bora-12">
                              <div className="heading7 text-white">Explore AI help Business</div>
                              <div className="text-placehover mt-12">Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus, ante vitae matti gravida.</div><a className="button bg-blue button-blue-hover text-white mt-12" href="about.html"> <span> <span> </span></span><span className="bg-blue">Explore now</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    </li>
                    <li className="flex-center">
                      <a className="text-subtitle" href="#!">
                        Services
                      </a>
                      {/* <div className="sub-nav">
                      <div className="sub-nav-main bg-black-surface p-24">
                        <div className="row">
                          <div className="col-8">
                            <div className="list-home flex-between gap-30">
                              <div className="item"> <a className="flex-column-center" href="service-one.html">
                                  <div className="bg-img bora-12 overflow-hidden"><img className="w-100" src="assets/images/submenu/182x182.png" alt=""/></div>
                                  <div className="text-button text-white text-center mt-8">AI chat bot</div></a></div>
                              <div className="item"> <a className="flex-column-center" href="service-two.html">
                                  <div className="bg-img bora-12 overflow-hidden"><img className="w-100" src="assets/images/submenu/182x182.png" alt=""/></div>
                                  <div className="text-button text-white text-center mt-8">AI Image generator</div></a></div>
                              <div className="item"> <a className="flex-column-center" href="service-three.html">
                                  <div className="bg-img bora-12 overflow-hidden"><img className="w-100" src="assets/images/submenu/182x182.png" alt=""/></div>
                                  <div className="text-button text-white text-center mt-8">Digital Agency</div></a></div>
                              <div className="item"> <a className="flex-column-center" href="service-four.html">
                                  <div className="bg-img bora-12 overflow-hidden"><img className="w-100" src="assets/images/submenu/182x182.png" alt=""/></div>
                                  <div className="text-button text-white text-center mt-8">Business Agency</div></a></div>
                            </div>
                          </div>
                          <div className="col-4">
                            <div className="explore-block bg-line-dark p-24 bora-12">
                              <div className="heading7 text-white">AI Create Image</div>
                              <div className="text-placehover mt-12">Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus, ante vitae matti gravida.</div><a className="button bg-blue button-blue-hover text-white mt-12" href="about.html"> <span> <span> </span></span><span className="bg-blue">Explore now</span></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    </li>
                    <li className="flex-center">
                      <a className="text-subtitle" href="blog.html">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <a className="logo" href="">
                  <svg
                    width="46"
                    height="34"
                    viewbox="0 0 46 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_8601_1497)">
                      <path
                        d="M0.745605 29.981C1.67613 27.7771 2.54072 25.7314 3.40532 23.6877C6.04243 17.449 8.69272 11.2161 11.3016 4.96611C11.5992 4.25409 11.9495 3.97154 12.7369 4.00168C14.3983 4.06761 16.0653 4.05819 17.7267 4.00356C18.4123 3.98096 18.7118 4.23902 18.9605 4.84367C20.7744 9.25141 22.6148 13.6497 24.4589 18.0462C25.1615 19.7226 25.9243 21.3764 26.5968 23.0642C26.8436 23.6858 27.1638 23.9005 27.8381 23.8968C33.2367 23.8685 38.6371 23.8798 44.0356 23.8779C44.4067 23.8779 44.7759 23.8779 45.1997 23.8779C45.1997 25.9255 45.1997 27.8863 45.1997 29.9339C44.872 29.9508 44.5687 29.981 44.2654 29.981C37.1076 29.9847 29.9516 29.9753 22.7937 29.9979C22.1382 29.9998 21.7709 29.8378 21.5467 29.1842C21.1794 28.118 20.6972 27.0914 20.2998 26.0347C20.1227 25.5619 19.8778 25.3566 19.3391 25.3623C16.4835 25.3905 13.626 25.3585 10.7704 25.4037C10.469 25.4093 10.0301 25.7164 9.89825 25.9989C9.38213 27.1065 8.98845 28.2687 8.49305 29.3857C8.38192 29.6362 8.04286 29.9508 7.80175 29.9546C5.515 29.9979 3.22449 29.981 0.745605 29.981ZM17.9358 19.7867C16.9827 17.3605 16.071 15.038 15.0595 12.463C14.0649 15.0512 13.172 17.3718 12.2453 19.7867C14.176 19.7867 15.9824 19.7867 17.9358 19.7867Z"
                        fill="#3D89FB"
                      ></path>
                      <path
                        d="M45.2506 4.09424C45.2506 5.7688 45.2656 7.36614 45.2355 8.96347C45.2299 9.21023 45.0622 9.49466 44.8889 9.69056C41.7357 13.2601 37.8422 17.4418 34.6513 20.9774C33.3045 20.9755 31.2287 20.9585 29.8423 20.9096C29.8423 20.9096 28.4032 18.4213 28.1847 18.0219C28.2864 17.924 28.3354 17.9278 30.1682 16.0234C31.92 14.2038 33.5268 12.2429 35.3614 10.1596C34.7003 10.1596 34.2482 10.1596 33.7961 10.1596C31.0968 10.1596 28.3976 10.1709 25.6983 10.1389C25.3894 10.1351 24.9091 9.9505 24.8017 9.71505C23.9748 7.89167 23.2213 6.03816 22.4038 4.09424C30.0439 4.09424 37.5785 4.09424 45.2506 4.09424Z"
                        fill="white"
                      ></path>
                    </g>
                    <defs>
                      <clippath id="clip0_8601_1497">
                        <rect
                          width="44.5087"
                          height="26"
                          fill="white"
                          transform="translate(0.745605 4)"
                        ></rect>
                      </clippath>
                    </defs>
                  </svg>
                </a>
                <div className="right-block flex-item-center">
                  <div className="search-icon pr-24 pointer">
                    <i className="ph ph-magnifying-glass text-white fs-24"></i>
                  </div>
                  <div className="menu-humburger display-none pr-24 pointer">
                    <i className="ph ph-list text-white fs-24"></i>
                  </div>
                  <a
                    className="button button-blue-hover text-white text-button"
                    href="about.html"
                  >
                    {" "}
                    <span>
                      {" "}
                      <span></span>
                    </span>
                    <span className="bg-blue">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="slider-block style-two">
          <div className="slider-main">
            <div className="container flex-center h-100">
              <div className="row flex-center w-100">
                <div className="col-lg-9 text-center">
                  <div className="heading2 text-center text-scroll-bottom-to-top1">
                    Connect,{" "}
                    <span className="text-scroll-bottom-to-top2">Chat, </span>
                    <span className="text-scroll-bottom-to-top3">Share</span>
                    <span className="text-scroll-bottom-to-top4">
                      {" "}
                      Moments{" "}
                    </span>
                    <span className="text-scroll-bottom-to-top5"> & </span>
                    <span className="text-scroll-bottom-to-top6">
                      {" "}
                      Memories:{" "}
                    </span>
                    <span className="text-scroll-bottom-to-top7">
                      Revolutionize{" "}
                    </span>
                    <span className="text-scroll-bottom-to-top8">Your </span>
                    <span className="text-scroll-bottom-to-top9">
                      Conversations
                    </span>
                  </div>
                </div>
                <div className="col-lg-8 text-center">
                  <div className="body2 text-placehover mt-24">
                    Your Ultimate Chat Experience Awaits!
                  </div>
                </div>
                <div className="block-button scroll-left-to-right3">
                  <a className="button button-green-hover" href="#!">
                    <span>
                      <span> </span>
                    </span>
                    <span className="bg-green">Login</span>
                  </a>
                </div>

                {/* <div className="col-xxl-7 col-lg-8 col-11 block-input mt-40">
                <input className="body2" type="text" placeholder="Search"/>
                <div className="block-button scroll-left-to-right3"><a className="button button-green-hover" href="#!"> <span>   <span> </span></span><span className="bg-green">Find now</span></a></div>
              </div> */}
                <div className="col-lg-8 col-md-12 tags flex-center gap-32 mt-24">
                  <div className="text-subtitle display-inline-block">
                    product tag:
                  </div>
                  <div className="list-tag flex-center gap-16">
                    {" "}
                    <a href="blog-three.html">Animation</a>
                    <a href="blog.html">Creative</a>
                    <a href="blog-two.html">3D</a>
                    <a href="blog-four.html">Wallpaper</a>
                    <a href="blog-five.html">Design</a>
                  </div>
                </div>
              </div>
              <div className="list-avatar">
                {" "}
                <img src={avatar1} alt="" />
                <img src={avatar3} alt="" />
                <img src={avatar2} alt="" />
                <img src={avatar4} alt="" />
                <img src={avatar5} alt="" />
                <img src="assets/images/slider/84x84.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="video-block"> 
        <div className="bg-img w-100 h-100"><img src="assets/images/components/bg-video.png" alt=""/></div>
        <div className="play-btn"> <i className="ph-fill ph-play fs-36 text-white"></i></div>
      </div> */}
        <div className="list-partner-slide bg-green pt-40 pb-40">
          <div className="list">
            <div className="item">
              {" "}
              <img src="/assets/images/partners/mian.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/mega.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/mian2.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/beta.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/genvi.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/mian.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/mega.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/mian2.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/beta.svg" alt="" />
            </div>
            <div className="item">
              {" "}
              <img src="assets/images/partners/genvi.svg" alt="" />
            </div>
          </div>
        </div>

        {/* <div className="style-green">
        <div id="preload"> 
          <div className="main-content flex-center">
            <div className="circle flex-center"><span></span>
              <div className="circle-child"></div>
            </div>
            <div className="circle flex-center"></div>
          </div>
        </div>
      </div> */}
        <div className="js-video-modal">
          <div className="js-video-modal-container">
            <div className="video-block">
              <iframe
                src="https://www.youtube.com/embed/VCPGMjCW0is?si=8Isn9pB4fIgvrrG4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="style-two">
          <a className="scroll-to-top-btn" href="#header">
            <i className="ph-bold ph-caret-up"></i>
          </a>
        </div>
      </div>
      <div id="footer">
        <div className="style-two">
          <div className="footer-block bg-black-surface pt-60">
            <div className="container">
              <div className="heading flex-between">
                <div className="footer-company-infor d-flex flex-column gap-20">
                  <a className="logo" href="">
                    <svg
                      width="46"
                      height="34"
                      viewbox="0 0 46 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_8601_1496)">
                        <path
                          d="M0.745605 29.981C1.67613 27.7771 2.54072 25.7314 3.40532 23.6877C6.04243 17.449 8.69272 11.2161 11.3016 4.96611C11.5992 4.25409 11.9495 3.97154 12.7369 4.00168C14.3983 4.06761 16.0653 4.05819 17.7267 4.00356C18.4123 3.98096 18.7118 4.23902 18.9605 4.84367C20.7744 9.25141 22.6148 13.6497 24.4589 18.0462C25.1615 19.7226 25.9243 21.3764 26.5968 23.0642C26.8436 23.6858 27.1638 23.9005 27.8381 23.8968C33.2367 23.8685 38.6371 23.8798 44.0356 23.8779C44.4067 23.8779 44.7759 23.8779 45.1997 23.8779C45.1997 25.9255 45.1997 27.8863 45.1997 29.9339C44.872 29.9508 44.5687 29.981 44.2654 29.981C37.1076 29.9847 29.9516 29.9753 22.7937 29.9979C22.1382 29.9998 21.7709 29.8378 21.5467 29.1842C21.1794 28.118 20.6972 27.0914 20.2998 26.0347C20.1227 25.5619 19.8778 25.3566 19.3391 25.3623C16.4835 25.3905 13.626 25.3585 10.7704 25.4037C10.469 25.4093 10.0301 25.7164 9.89825 25.9989C9.38213 27.1065 8.98845 28.2687 8.49305 29.3857C8.38192 29.6362 8.04286 29.9508 7.80175 29.9546C5.515 29.9979 3.22449 29.981 0.745605 29.981ZM17.9358 19.7867C16.9827 17.3605 16.071 15.038 15.0595 12.463C14.0649 15.0512 13.172 17.3718 12.2453 19.7867C14.176 19.7867 15.9824 19.7867 17.9358 19.7867Z"
                          fill="#3D89FB"
                        ></path>
                        <path
                          d="M45.2506 4.09424C45.2506 5.7688 45.2656 7.36614 45.2355 8.96347C45.2299 9.21023 45.0622 9.49466 44.8889 9.69056C41.7357 13.2601 37.8422 17.4418 34.6513 20.9774C33.3045 20.9755 31.2287 20.9585 29.8423 20.9096C29.8423 20.9096 28.4032 18.4213 28.1847 18.0219C28.2864 17.924 28.3354 17.9278 30.1682 16.0234C31.92 14.2038 33.5268 12.2429 35.3614 10.1596C34.7003 10.1596 34.2482 10.1596 33.7961 10.1596C31.0968 10.1596 28.3976 10.1709 25.6983 10.1389C25.3894 10.1351 24.9091 9.9505 24.8017 9.71505C23.9748 7.89167 23.2213 6.03816 22.4038 4.09424C30.0439 4.09424 37.5785 4.09424 45.2506 4.09424Z"
                          fill="white"
                        ></path>
                      </g>
                      <defs>
                        <clippath id="clip0_8601_1496">
                          <rect
                            width="44.5087"
                            height="26"
                            fill="white"
                            transform="translate(0.745605 4)"
                          ></rect>
                        </clippath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div className="footer-navigate">
                  <ul className="flex-item-center gap-40">
                    <li className="flex-center">
                      <a className="text-subtitle text-white" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="flex-center">
                      <a
                        className="text-subtitle text-white"
                        href="service-one.html"
                      >
                        Services
                      </a>
                    </li>
                    <li className="flex-center">
                      <a className="text-subtitle text-white" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="flex-center">
                      <a className="text-subtitle text-white" href="blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="flex-center">
                      <a
                        className="text-subtitle text-white"
                        href="contact.html"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="list-social flex-item-center gap-12">
                  <a
                    className="item bg-blue button-blue-hover bora-50 w-40 h-40 flex-center"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    <i className="icon-facebook display-block"></i>
                  </a>
                  <a
                    className="item bg-blue button-blue-hover bora-50 w-40 h-40 flex-center"
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    <i className="icon-linkedin fs-14 display-block"></i>
                  </a>
                  <a
                    className="item bg-blue button-blue-hover bora-50 w-40 h-40 flex-center"
                    href="https://www.twitter.com/"
                    target="_blank"
                  >
                    <i className="icon-twitter fs-12 display-block"></i>
                  </a>
                  <a
                    className="item bg-blue button-blue-hover bora-50 w-40 h-40 flex-center"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    <i className="icon-instagram fs-14 display-block"></i>
                  </a>
                  <a
                    className="item bg-blue button-blue-hover bora-50 w-40 h-40 flex-center"
                    href="https://www.youtube.com/"
                    target="_blank"
                  >
                    <i className="icon-youtube fs-12 display-block"></i>
                  </a>
                </div>
              </div>
              <div className="company-contact flex-center gap-16 mt-32 flex-wrap">
                <div className="phone flex-item-center gap-8">
                  <i className="ph ph-phone text-placehover fs-24"></i>
                  <span className="text-button-uppercase text-placehover">
                    012 345 6789
                  </span>
                </div>
                <span className="text-placehover">|</span>
                <div className="mail flex-item-center gap-8">
                  <i className="ph-light ph-envelope text-placehover fs-24"></i>
                  <span className="text-button-uppercase text-placehover">
                    aizan@gmail.com
                  </span>
                </div>
                <span className="text-placehover">|</span>
                <div className="location flex-item-center gap-8">
                  <i className="ph-light ph-map-pin text-placehover fs-24"></i>
                  <span className="text-button-uppercase text-placehover">
                    710 1st St. Easton, PA 18042 | Chester County
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-black-surface mt-32">
              <div className="container bg-black-surface">
                <div className="line-dark"></div>
                <div className="footer-bottom flex-between pt-12 pb-12 flex-wrap">
                  <div className="left-block flex-item-center">
                    <div className="copy-right text-placehover caption1">
                      ©2023 AIZAN. All Rights Reserved.
                    </div>
                  </div>
                  <div className="nav-link flex-item-center gap-8">
                    <a
                      className="text-placehover caption1 hover-underline"
                      href="#!"
                    >
                      Terms Of Services
                    </a>
                    <span className="text-placehover caption1">|</span>
                    <a
                      className="text-placehover caption1 hover-underline"
                      href="#!"
                    >
                      Privacy Policy
                    </a>
                    <span className="text-placehover caption1">|</span>
                    <a
                      className="text-placehover caption1 hover-underline"
                      href="#!"
                    >
                      Cookie Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;

{
  /* <script src="./assets/js/jquery-3.7.0.js"></script>
    <script src="./assets/js/jquery-migrate-3.4.1.js"></script>
    <script src="./assets/js/slick.min.js"></script>
    <script src="./assets/js/scrollreveal.js"></script>
    <script src="./assets/js/swiper-bundle.min.js"></script>
    <script src="./assets/js/bootstrap.bundle.min.js"></script>
    <script src="./assets/js/countUp.min.js"></script>
    <script src="./assets/js/waypoints.min.js"></script>
    <script src="./assets/js/phosphor-icons.js"></script>
    <script src="./assets/js/main.min.js"></script> */
}
