import React from 'react'
import { Link } from 'react-router-dom'


function Index() {
  return (
    <>
   
   {/* <!-- body --> */}
   <div className="main-layout">
      {/* <!-- loader  --> */}
      <div className="loader_bg">
         <div className="loader"><img src="images/loading.gif" alt="abc"/></div>
      </div>
      {/* <!-- end loader --> */}
      {/* <!-- header --> */}
      <div className="header">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className=" col-md-2 col-sm-3 col logo_section">
                  <div className="full">
                     <div className="center-desk">
                        <div className="logo">
                           <Link to="/"><img src="images/logo.png" alt="abc" /></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-8 col-sm-12">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item active">
                              <Link className="nav-link" to="/">Home</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/sketing">skating</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/shop">shop</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/contact">Contact Us</Link>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </div>
               <div className="col-md-2">
                  <ul className="email text_align_right">
                     <li className="d_none"><Link to="#!"><i className="fa fa-user" aria-hidden="true"></i></Link></li>
                     <li className="d_none"> <Link to="#!"><i className="fa fa-search" style={{cursor: "pointer"}} aria-hidden="true"></i></Link> </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end header inner --> */}
      {/* <!-- end header --> */}
      {/* <!-- top --> */}
      <div className="full_bg">
         <div className="slider_main">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-12">
                     {/* <!-- carousel code --> */}
                     <div id="carouselExampleIndicators" className="carousel slide">
                        <ol className="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                           {/* <!-- first slide --> */}
                           <div className="carousel-item active">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <i><img src="images/top_icon.png" alt="abc"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <Link className="read_more" to="#!">Read More   <span></span></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png" alt="abc"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- second slide --> */}
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <i><img src="images/top_icon.png" alt="abc"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <Link className="read_more" to="#!">Read More   <span></span></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png" alt="abc"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!-- third slide--> */}
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div  className="col-md-5">
                                       <div className="board">
                                          <i><img src="images/top_icon.png" alt="abc"/></i>
                                          <h3>
                                             Skating<br/> Board<br/> School
                                          </h3>
                                          <div className="link_btn">
                                             <Link className="read_more" to="#!">Read More   <span></span></Link>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-md-7">
                                       <div className="banner_img">
                                          <figure><img className="img_responsive" src="images/banner_img.png" alt="abc"/></figure>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* <!-- controls --> */}
                        <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </Link>
                        <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end banner --> */}
      {/* <!-- our className --> */}
      <div className="className">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>Our Skating className</h2>
                     <p>There are many variations of passages of Lorem</p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/class1.png" alt="abc"/></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <Link className="read_more" to="#!">Read More</Link>
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="className_box blue text_align_center">
                     <i><img src="images/class2.png" alt="abc"/></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <Link className="read_more" to="#!">Read More</Link>
               </div>
               <div className="col-md-4 margi_bottom">
                  <div className="className_box text_align_center">
                     <i><img src="images/class3.png" alt="abc"/></i>
                     <h3>Skateboard</h3>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations </p>
                  </div>
                  <Link className="read_more" to="#!">Read More</Link>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end our className --> */}
      {/* <!-- about --> */}
      <div className="about">
         <div className="container-fluid">
            <div className="row d_flex">
               <div className="col-md-6">
                  <div className="titlepage text_align_left">
                     <h2>About <br/>Skating <br/> school</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns
                     </p>
                     <div className="link_btn">
                        <Link className="read_more" to="/about">Read More</Link>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div className="about_img text_align_center">
                     <figure><img src="images/about.png" alt="abc"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end about --> */}
      {/* <!-- skating --> */}
      <div className="skating">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage text_align_center">
                     <h2>Skating  Video</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="skating-box ">
                     <figure><img src="images/sakt1.png" alt="abc"/></figure>
                     <div className="link_btn">
                        <Link className="read_more" to="#!">See More</Link>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="skating-box">
                     <figure><img src="images/sakt2.png" alt="abc"/></figure>
                     <div className="link_btn">
                        <Link className="read_more" to="#!">See More</Link>
                     </div>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="skating-box">
                     <figure><img src="images/sakt3.png" alt="abc"/></figure>
                     <div className="link_btn">
                        <Link className="read_more" to="#!">See More</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end skating --> */}
      {/* <!-- shop --> */}
      <div className="shop">
         <div className="container-fluid">
            <div className="row d_flex d_grid">
               <div className="col-md-7">
                  <div className="shop_img text_align_center" data-aos="fade-right">
                     <figure><img className="img_responsive" src="images/shop.png" alt="abc"/></figure>
                  </div>
               </div>
               <div className="col-md-5 order_1_mobile">
                  <div className="titlepage text_align_left ">
                     <h2>Our  Skate <br/>Shop</h2>
                     <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variatioThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variationsns
                     </p>
                     <Link className="read_more" to="/shop">Buy Now</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end shop --> */}
      {/* <!-- testimonial --> */}
      <div className="testimonial">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage text_align_center">
                     <h2>Testimonial</h2>
                  </div>
               </div>
            </div>
            {/* <!-- start slider section --> */}
            <div className="row">
               <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test1.png" alt="abc"/></span>
                                          <h4>Jone Lo</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="test_box white_bg text_align_center">
                                          <span><img src="images/test2.png" alt="abc"/></span>
                                          <h4>Michale</h4>
                                          <img className="img_responsive" src="images/te2.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                       </div>
                                    </div>
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test3.png" alt="abc"/></span>
                                          <h4>Disol</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test2.png" alt="abc"/></span>
                                          <h4>Michale</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="test_box white_bg text_align_center">
                                          <span><img src="images/test3.png" alt="abc"/></span>
                                          <h4>Disol</h4>
                                          <img className="img_responsive" src="images/te2.png" alt="abc"/>
                                          <p> humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                       </div>
                                    </div>
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test1.png" alt="abc"/></span>
                                          <h4>Jone Lo</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="row d_flex">
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test3.png" alt="abc"/></span>
                                          <h4>Disol</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                    <div className="col-md-6">
                                       <div className="test_box  white_bg text_align_center">
                                          <span><img src="images/test1.png" alt="abc"/></span>
                                          <h4>Jone Lo</h4>
                                          <img className="img_responsive" src="images/te2.png" alt="abc"/>
                                          <p> humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure</p>
                                       </div>
                                    </div>
                                    <div className="col-md-3">
                                       <div className="test_box text_align_center">
                                          <span><img src="images/test2.png" alt="abc"/></span>
                                          <h4>Michale</h4>
                                          <img className="img_responsive" src="images/te.png" alt="abc"/>
                                          <p>humour, or randomised words which don't look even slightly believable. If you are</p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </Link>
                     <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- end testimonial --> */}
      {/* <!--  footer --> */}
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 ">
                     <div className="infoma">
                        <h3>Contact Us</h3>
                        <ul className="conta">
                           <li><i className="fa fa-map-marker" aria-hidden="true"></i>Locations 
                           </li>
                           <li><i className="fa fa-phone" aria-hidden="true"></i>Call +01 1234567890</li>
                           <li> <i className="fa fa-envelope" aria-hidden="true"></i><Link to="#!"> demo@gmail.com</Link></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-8">
                     <div className="row border_left">
                        <div className="col-md-12">
                           <div className="infoma">
                              <h3>Newsletter</h3>
                              <form className="form_subscri">
                                 <div className="row">
                                    <div className="col-md-12">
                                    </div>
                                    <div className="col-md-4">
                                       <input className="newsl" placeholder="Enter your email" type="text" name="Enter your email"/>
                                    </div>
                                    <div className="col-md-4">
                                       <input className="newsl" placeholder="Enter your email" type="text" name="Enter your email"/>
                                    </div>
                                    <div className="col-md-4">
                                       <button className="subsci_btn">subscribe</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-9">
                           <div className="infoma">
                              <h3>Useful Link</h3>
                              <ul className="fullink">
                                 <li><Link to="/">Home</Link></li>
                                 <li><Link to="/about">About</Link></li>
                                 <li><Link to="/skating">Skating</Link></li>
                                 <li><Link to="/shop">Shop</Link></li>
                                 <li><Link to="/contact">Contact Us</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="infoma text_align_left">
                              <ul className="social_icon">
                                 <li><Link to="#!"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                                 <li><Link to="#!"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                                 <li><Link to="#!"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link></li>
                                 <li><Link to="#!"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2020 All Rights Reserved. Design by <Link to="https://html.design/"> Free html Templates</Link></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
      {/* <!-- end footer --> */}
      {/* <!-- Javascript files--> */}
   </div>
    </>
  )
}

export default Index