import React from 'react';
import '../css/myCss.css';


function Footer() {
  return (
    <React.Fragment>
     <div className="footer">
        <img src="../images/Rectangle_10.jpg" alt="footer"/>
        <div className="footerdata">
        <div className="data">
                
                </div>
                <div className="data">
                <img src={'../images/DAN_AGENCY.png'} alt="DAN image cap"   />
                
                <p>Paid hill fine ten now love leaf.Supplied feeling mr of dissuable recurred no  it offering honounred
                    Am of in collecting devonshire favourable excellence
                </p>
                </div>
                <div className="data">
                    <h4>NEED HELP</h4>
                    <ul className="uldata">
                        <li>Shipping & Return Policy</li>
                        <li>Installation & Assembly</li>
                        <li>Our Brochure</li>
                        <li>help</li>
                    </ul>
                </div>
                <div className="data">
                    <h4>USEFUL LINK</h4>
                    <ul className="uldata">
                        <li>Create Account</li>
                        <li>Shopping Cart</li>
                        <li>Privacy Policy</li>
                        <li>Press Releases</li>
                    </ul>
                </div>
                
        </div>
        </div>
     
     </React.Fragment>
  );
}

export default Footer;
