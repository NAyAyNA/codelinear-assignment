import "./Footer.css";

import logo from "../../assets/N7.png";
import arrow from "../../assets/arrow.svg";

import footerData from "./footerData";

function Footer() {
  return (
    <footer className="footer">

        <div className="footer-top">
            {/* LOGO */}
            <div className="footer-logo-section">
                <img src={logo} alt="N7" className="footer-logo" />
            </div>

            {/* FOOTER CONTENT */}
            <div className="footer-content">

                <div className="footer-grid">

                    {footerData.map((column, index) => (

                    <div className="footer-column" key={index}>

                        <div className="footer-top-content">

                            <h4>{column.topTitle}</h4>
                            <p>{column.topContent}</p>

                        </div>

                        <div className="footer-bottom-content">

                            <h4>{column.bottomTitle}</h4>
                            <ul>

                                {column.bottomLinks.map((link, idx) => (
                                <li key={idx}>
                                    {link} <img src={arrow} className="arrow" />
                                    
                                </li>
                                ))}

                            </ul>
                        </div>

                    </div>
                    ))}

                </div>

            </div>

        </div>
        {/* COPYRIGHT */}
        <p className="footer-copyright">
            Copyright © 2022 by Linktia Infosystems Limited —
            [CB7 and N7 as Commercial Brand] —
            [Registered under the Companies Act 2006
            in England and Wales | Number of
            Incorporation 13100992]
        </p>

    </footer>
  );
}

export default Footer;