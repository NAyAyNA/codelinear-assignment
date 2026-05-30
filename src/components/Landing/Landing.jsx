import "./Landing.css";
import heroImg from "../../assets/hero-img.png";
import ActImg from "../../assets/hero-activity.png";
import BalImg from "../../assets/hero-balance.png";
import logo1 from "../../assets/t-logo-1.png";
import logo2 from "../../assets/t-logo-2.png";
import logo3 from "../../assets/t-logo-3.png";
import logo4 from "../../assets/t-logo-4.png";
import logo5 from "../../assets/t-logo-5.png";
import logo6 from "../../assets/t-logo-6.png";

function Landing() {

    return (
      <div className="landing">
  
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo">N7</div>

          <div className="nav-right"> 
            <ul className="nav-links">
              <li>SOLUTIONS</li>
              <li>RESOURCES</li>
              <li>ABOUT US</li>
            </ul>
    
            <button className="nav-btn">
              REQUEST DEMO
            </button>
          </div>
        </nav>
  
  
        {/* HERO SECTION */}
        <section className="hero-section">
  
          {/* LEFT CONTENT */}
          <div className="hero-left">

            <div className="hero-header"> 
              <h1 className="hero-t">
                The new foundation <br />of modern banking
              </h1>
    
              <p className="hero-d">
                We drive innovation and growth, provide seamless<br />
                customer experience and operational excellence
              </p>
            </div>
  
            <div className="hero-btns">
              <button className="primary-btn">
                REQUEST DEMO
              </button>
  
              <button className="secondary-btn">
                CONTACT US
              </button>
            </div>
  
          </div>

          
          {/* RIGHT CONTENT */}
          <div className="hero-right">
            <div className="img-container">
              <img
                src={heroImg}
                alt="hero"
                className="hero-img"
              />

             
                <img
                  src={ActImg}
                  alt="activity"
                  className="hero-activity"
                />
              

                <img
                  src={BalImg}
                  alt="balance"
                  className="hero-balance"
                />
            </div>  

            
          </div>
  
        </section>

        <div className="trusted-section">
  
          <p className="trusted-text">
            Trusted By:
          </p>
  
          <div className="trusted-logos">
            <span><img src={logo1} /></span>
            <span><img src={logo2} /></span>
            <span><img src={logo3} /></span>
            <span><img src={logo4} /></span>
            <span><img src={logo5} /></span>
            <span><img src={logo6} /></span>
            
          </div>
  
        </div>
  
      </div>
    )
};


  
export default Landing;