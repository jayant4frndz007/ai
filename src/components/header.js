import React, { Component } from 'react';
import '../css/myCss.css';

export default class Header extends Component{
    render(){
        return(<React.Fragment>
            <div className="header">
               
                <img src={'../images/Rectangle1.jpg'} alt="Header image cap"/>
                <img src={'../images/DAN_AGENCY.png'} alt="DAN image cap" className="headerimg" height="50px" />
                <img src={'../images/Vector_Smart_Object.png'} alt="subHeader" className="subheaderimg" height="500" width="500"/>
                <div className="sidecontent">
                    <label>Get more from life with agency</label>
                    <p>It is a long established fact that a reader will distracted by to the readable content of a page when</p>
                    <button>Get Started</button>
                </div>
                <div className="headermenu">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>
                <div className="bubbles">
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                       <div className="bubble"></div>
                </div>
            </div>
        </React.Fragment>)
    }
}