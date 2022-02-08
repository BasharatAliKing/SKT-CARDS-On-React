import carousel from 'carousel';
import React, { Component } from 'react';
import "./App.css";
import { Carousel } from 'react-bootstrap';
import Home from './Home-card';
import Card from './Card';
import Media from './Media';
import "./Responcive.css";
export default class App extends Component {
  render() {
    return <>
      {/* Header Section Start Here */}
      <section id="header">
        <div className="container">
          <nav className="navbar navbar-dark navbar-expand-lg">
            <a href="">
              <img src={process.env.PUBLIC_URL + "/logo.png"} width="100%" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
            <ul className='navbar-nav'>
              <li className='nav-item active'><a href="" className='nav-link'>Home</a></li>
              <li className='nav-item'><a href="" className='nav-link'>About</a></li>
              <li className='nav-item'><a href="" className='nav-link'>Services</a></li>
              <li className='nav-item'><a href="" className='nav-link'>Pages</a></li>
              <li className='nav-item'><a href="" className='nav-link'>Cards</a></li>
              <li className='nav-item'><a href="" className='nav-link'>Blog</a></li>
              <li className='nav-item'><a href="" className='nav-link'>Contact</a></li>
            </ul>
            </div>
          </nav>
        </div>
      </section>

      <section id="home">
        <Carousel>
          <Carousel.Item>
            <img src={process.env.PUBLIC_URL + "./slider1.jpg"} alt="My-Pic" width="100%" />
            <div className="container">
              <Home h4="Wedding Cards" h1="Make a Best" subh1="Wedding Card" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={process.env.PUBLIC_URL + "./slider2.jpg"} alt="My-Pic" width="100%" />
            <div className="container">
              <Home h4="Business Card" h1="Make a Best" subh1="Business Card" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={process.env.PUBLIC_URL + "./slider3.jpg"} alt="My-Pic" width="100%" />
            <div className="container">
              <Home h4="Post Card" h1="Make a Best" subh1="Post Card" />
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section id="unique-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <h1>Our Unique Cards Features</h1>
            </div>
            <div className="col-md-8 ">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <Card cardname="card-1" image={process.env.PUBLIC_URL + "./category-img-2.png"} heading1="Business Card" />
                </div>
                <div className="col-md-4 col-sm-6">
                  <Card cardname="card-2" image={process.env.PUBLIC_URL + "./category-img-3.png"} heading1="Business Card" />
                </div>
                <div className="col-md-4 col-sm-6">
                  <Card cardname="card-3" image={process.env.PUBLIC_URL + "./category-img-1.png"} heading1="Business Card" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="professional-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-5 shadow">
              <img src={process.env.PUBLIC_URL + "/professional-card.jpg"} alt="My-Pic" width="100%" />
            </div>
            <div className=" offset-md-1 col-md-6">
              <h1>PROFESSIONAL</h1>
              <h1>CARDS PRINTING.</h1>
              <p className=''>Aenean efficitur ligula a sapien auctor, eget tristique quam euis mod. Pellentesque euismod magna vel dui dictum, at pulvinary nunc pretium. Ut ornare magna nulla, eget dignissim nisl maxie mus ut. Mauris euismod orci eros.</p>
              <h3>DOWNLOAD A DESIGN GUIDELINE</h3>
            </div>
            <div className="col-md-9 d-sm-flex">
              <div className="a">
                <h1>Ps</h1>
                <h4>PHOTOSHOP FILE</h4>
              </div>
              <div className="a">
                <h1>AI</h1>
                <h4>ILLUSTRATOR FILE</h4>
              </div>
              <div className="a">
                <h1>ID</h1>
                <h4>INDESIGN FILE</h4>
              </div>
              <div className="a">
                <h1>JPG</h1>
                <h4>JPEG FILE</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className="container">
          <div className="row">
            <div className="col-md-12"> <h1>WHAT ARE THE BENEFITS OF WEDDING CARDS</h1></div>
            <div className="col-md-4">
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img1.png"} h3="Quality Printing" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img2.png"} h3="100+ Wedding Cards" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img3.png"} h3="Timely Delievery" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
            </div>
            <div className="col-md-4">
              <img src={process.env.PUBLIC_URL + "/card-benefits.png"} alt="My-Pic" width="100%" />
            </div>
            <div className="col-md-4">
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img4.png"} h3="Follow Tips and Expert" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img5.png"} h3="It is Fast and Easy to Use" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
              <Media image={process.env.PUBLIC_URL + "/card-benefits-img6.png"} h3="Money Back Guaranteed" para="Aenean vulputate keleifenig tellus. Aenean leo ligula, por consequat vitae" />
            </div>
          </div>
        </div>
      </section>
      <section id="offer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <h1>WE OFFER A WIDE RANGE OF SERVICES</h1>
            </div>
            <div className="offset-md-3 col-md-4  ">
              <button>VIEW ALL SERVICES</button>
            </div>
          </div>
          <div className="cards">
            <div className="container">
              <div className="row">
                <div className=" col-lg-4 col-sm-6 ">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img1.png"} heading1="Wedding Cards" heading2="Read More" />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img2.png"} heading1="Business Cards" heading2="Read More" />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img3.png"} heading1="Posters & Envelops " heading2="Read More" />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img4.png"} heading1="Booklets & Books " heading2="Read More" />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img5.png"} heading1="Seminor Workbooks" heading2="Read More" />
                </div>
                <div className="col-lg-4 col-sm-6">
                  <Card cardname="card-4" image={process.env.PUBLIC_URL + "/services-img6.png"} heading1="Quality Printing " heading2="Read More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="business-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={process.env.PUBLIC_URL + "/business-card-img.png"} alt="My-Pic" width="100%" />
            </div>
            <div className=" offset-md-1 col-md-6 mt-5">
              <h5>SPECIAL OFFER</h5>
              <h2>1500 FULL COLOR</h2>
              <h1>BUSINESS CARDS</h1>
              <h2>ONLY $50</h2>
              <button>SHOP NOW</button>
            </div>
          </div>
        </div>
      </section>

      <section id="meet">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <h2>OUR PROFESSIONALS</h2>
              <h1>MEET OUR AWESOME TEAM</h1>
              <button>VIEW ALL TEAM</button>
            </div>
            <div className="col-lg-3 col-sm-6">
              <Card cardname="card-5" image={process.env.PUBLIC_URL + "/team-member-img4.jpg"} heading1="Martin Doe" heading2="Designer" />
            </div>
            <div className="col-lg-3 col-sm-6">
             <Card cardname="card-5" image={process.env.PUBLIC_URL + "/team-member-img1.jpg"} heading1="Jennifer Doe" heading2="CEO-Founder" />
            </div>
            <div className="col-lg-3 col-sm-6">
          <Card cardname="card-5" image={process.env.PUBLIC_URL + "/team-member-img2.jpg"} heading1="John Doe" heading2="Designer" />
            </div>
          </div>
        </div>
      </section>
      <section id="sample-cards">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>SOME CARDS SAMPLES</h2>
            </div>
            <div className="offset-md-5 col-md-4">
              <button>VIEW ALL CARDS</button>
            </div>
          </div>
          <div className="row gx-3">
            <div className="col-md-4 col-sm-6">
              <div >
                <img src={process.env.PUBLIC_URL + "/product-img2.jpg"} alt="My-Pic" width="100%" />
                <h2>CHINOCTEAGE BLOSSEM</h2>
                <p>$15.00</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div> <img src={process.env.PUBLIC_URL + "/product-img3.jpg"} alt="My-Pic" width="100%" />
                <h2>FLORAL CANOPY</h2>  <p>$150.00</p> </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div> <img src={process.env.PUBLIC_URL + "/product-img4.jpg"} alt="My-Pic" width="100%" />
                <h2>PRESSED BLOSSOMS</h2>  <p>$15.00</p> </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div> <img src={process.env.PUBLIC_URL + "/product-img5.jpg"} alt="My-Pic" width="100%" />
                <h2>PRESSED BLOSSOMS-YELLOW</h2> <p>$150.00</p> </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className=""> <img src={process.env.PUBLIC_URL + "/product-img6.jpg"} alt="My-Pic" width="100%" />
                <h2>ROMANTIC CARD</h2> <p>$15.00</p> </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className=""> <img src={process.env.PUBLIC_URL + "/product-img3.jpg"} alt="My-Pic" width="100%" />
                <h2>RUSTIC CARD</h2>  <p>$150.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="wedding-cards">
        <div className="container">
          <div className="row">
            <h4>HOW IT WORKS</h4>
            <h1>BUILD YOUR WEDDING CARDS FAST AND EASY.</h1>

          </div>
        </div>
      </section>
      <section id="how-works">
        <div className="container">
          <div className="row">
            <div className="box-1">
              <div className="row ">
                <div className="col-lg-5 col-sm-12 box1">
                  <h2>HOW IT WORKS</h2>
                  <p>Don’t sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates</p>
                </div>
                <div className=" offset-lg-1  col-lg-2 col-sm-6 circle1 ">
                  <h1>01</h1>
                </div>
                <div className=" offset-lg-1  col-lg-3 col-sm-6">
                  <img src={process.env.PUBLIC_URL + "/build-cards-img.png"} alt="My-Pic" width="70%" />
                </div>
              </div>
            </div>

            <div className="box-2">
              <div className="row">
                <div className="offset-lg-1  col-lg-3 col-sm-6">
                  <img src={process.env.PUBLIC_URL + "/build-cards-img2.png"} alt="My-Pic" width="70%" />
                </div>
                <div className="  col-lg-2 col-sm-6 circle2 ">
                  <h1>02</h1>
                </div>
                <div className="offset-lg-1  col-lg-5 col-sm-12 box2">
                  <h2>CUSTOMIZE YOUR CARDS</h2>
                  <p>Make the resume template truly your own. Customize the layout based on your experience level.</p>
                </div>
              </div>
            </div>
            <div className="box-3">
              <div className="row">
                <div className=" col-lg-5 col-sm-12 box3">
                  <h2>FILL IN THE BLANKS</h2>
                  <p>Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.</p>
                </div>
                <div className="offset-lg-1   col-lg-2 col-sm-6 circle3 ">
                  <h1>03</h1>
                </div>
                <div className="offset-lg-1  col-lg-3 col-sm-6">
                  <img src={process.env.PUBLIC_URL + "/build-cards-img3.png"} alt="My-Pic" width="70%" />
                </div>

              </div>
            </div>
            <div className="box-4">
              <div className="row">
                <div className="offset-lg-1  col-lg-3 col-sm-6">
                  <img src={process.env.PUBLIC_URL + "/build-cards-img4.png"} alt="My-Pic" width="70%" />
                </div>
                <div className="  col-lg-2 col-sm-6 circle4 ">
                  <h1>04</h1>
                </div>
                <div className="offset-lg-1  col-lg-5 col-sm-12 box4">
                  <h2>CARDS READY</h2>
                  <p>And yes, it’s free! We don’t hit you with a paywall once you’ve completed your resume in the Basic Account.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="container">
          <hr />
          <div className="row pb-5">
            <div className="col-lg-3 col-sm-6">
              <img src={process.env.PUBLIC_URL + "/footer-logo.png"} alt="" />
              <p>Posuere tellus imperdiet facilisis Curabitur vaucbusy tellusesem pernunc finibus placerat. Suspe Posuere tellus imperdiet facilisis Curabitur vaucbusy tellusesem pernunc finibus placerat</p>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h3>COMPANY</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Home</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> About</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Services</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Shop</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Blog</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h3>CARDS</h3>
              <ul className="navbar-nav">
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Chincoteague Blossom</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Floral canopy</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Rustic Card</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Romantic Card</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Pressed Blossoms</a></li>
                <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-chevron-right"></i> Pressed Blossoms – Yellow</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 contact">
              <h3>CONTACT INFO</h3>
             <address>
              Main Bazar Sheikhum. Tehsil : Pattoki , District: Kasur
             </address>
             <p>Phone: +92 303 69 39 413</p>
             <p>E-mail: basharatalidogar14@gmail.com</p>
             <div className="icons">
               <i className="fa fa-facebook"></i>
               <i className="fa fa-twitter"></i>
               <i className="fa fa-youtube"></i>
               <i className="fa fa-pinterest-p"></i>
             </div>
            </div>
          </div>
          <hr/>
          <div className="row">
            <footer>
             Copyright  &copy; basharatalidogar14@gmail.com. All Right Reversed!
            </footer>
          </div>
        </div>
      </section>
      
    </>;
  }
}
