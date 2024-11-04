import React from 'react'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <>
    
   {/* <!-- body --> */}
   <div className="main-layout inner_page">
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
                           <Link to="index.html"><img src="images/logo.png" alt="abc" /></Link>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-8 col-sm-12">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                     </button>
                     <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                              <Link className="nav-link" to="/">Home</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/about">About</Link>
                           </li>
                           <li className="nav-item">
                              <Link className="nav-link" to="/sketing">skating</Link>
                           </li>
                           <li className="nav-item active">
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
      </div>
    </>
  )
}

export default Shop