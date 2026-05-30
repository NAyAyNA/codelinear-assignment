import './Digital.css'
import wave from "../../assets/wave.png";
import icon from "../../assets/banner-icon.png";
import arrow from "../../assets/arrow.svg";
import Contact from "../Contact/Contact";
import DigitalCard from "./DigitalCard";
import digitalData from "./digitalData";


function Digital() {

    return (
        <>
        <section className="digital-section">

            <div className="section-banner">
                <span><img src={icon} /></span>
                <span className='banner-text d-logo'>N7</span>
                <span><img src={icon} /></span>
                <span className='banner-text'>Say <img className='banner-wave' src={wave} /> to the new way of banking</span>
                <span><img src={icon} /></span>
                <span className='banner-text d-logo'>CB7</span>
                <span><img src={icon} /></span>
                <span className='banner-text'>Say</span>
            </div>

            <div className="digital-main">

                {/* LEFT */}
                <div className="digital-left">
                    <h2 className="digital-heading">
                        Digital banking <br />out-of-the-box
                    </h2>

                    <p className="digital-description">
                        N7 helps your financial institution improve the client<br /> experience, automate and optimize procedures.
                    </p>

                    <button className="digital-btn">
                        REQUEST DEMO
                    </button>

                    <a href="#" className="digital-link">
                        LEARN MORE <img src={arrow} />
                    </a>

                </div>

                {/* RIGHT */}
                <div className="digital-right">

                    {digitalData.map(
                    (item, index) => (
                        <DigitalCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        desc={item.desc}
                        points={item.points}
                        reverse={index % 2 === 1 ? false : true}
                        />
                    )
                    )}

                </div>

            </div>
            <div className='digital-bottom'>
                <Contact />
            </div>

        </section>



        
    </>
    )
  }
  
  export default Digital;