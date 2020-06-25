import React, { Component } from 'react';
import '../css/myCss.css';
import axios from 'axios';

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            dataDisplay:[],
            hideshow:true
        }
        
       
    }
    componentWillMount(){
        console.log('will mount')
        
           this.checkCookie();
    }
    setCookie=(cname,cvalue,exdays)=>{
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        axios.post('https://assignment-concerto.herokuapp.com/assignment/guest_hit',{
    
            guest_type :"existing",
        
            guest_id :cvalue
        
    
    }).then((data)=>{
        console.log('else',data.data.message,cvalue);
    })
    }
    getCookie=(cname)=>{
        var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                    }
                }
                return "";
    }
    checkCookie=()=>{
        var user=this.getCookie("user_id");
  if (user != "") {
    console.log("Welcome again " + user);
    axios.post('https://assignment-concerto.herokuapp.com/assignment/guest_hit',{
    
            guest_type :"new",
        
            guest_id :user
        
    
    }).then((data)=>{
        console.log('if',data.data.message,user);
    })
  } else {
     user = Math.floor(Math.random()*89999999999999 + 10000000000000);;
     if (user != "" && user != null) {
       this.setCookie("user_id", user, 30);
      
     }
  }
}
    
    hideData=(val)=>{
        document.getElementById(val).style.display='none';
    }
    showData=(val)=>{
        document.getElementById(val).style.display='block';
    }
    componentDidMount(){

        axios.get('https://assignment-concerto.herokuapp.com/assignment/services').then((res)=>{
                console.log(res);
                this.setState({dataDisplay:res.data});
                
        })
            
    }
    
    render(){
        const data=[{name:"jayant",address:"argora"},{name:"jayant",address:"argora"},{name:"jayant",address:"argora"}]
        return(<React.Fragment>
            <div  style={{backgroundColor:'white'}}>
                        <div className="main">
                            <div className="sidemain">
                            <label>Service we'r Provide?</label>
                            <p>It is a long established fact that a render will be distracted by to
                                        the readable content of the page </p>
                                <div className="mainbtn"><button className="btn">Get Started</button></div>
                            </div>
                            <div className=" boxdata">
                                {/* <div className="box">a</div>
                                <div className="box">b</div>
                                <div className="box">c</div>
                                <div className="box">d</div> */}
                                {this.state.dataDisplay.map((data)=>{
                                    return <div >
                                    <div className="card card1" onMouseEnter={this.hideData.bind(this,data.service)} onMouseLeave={this.showData.bind(this,data.service)}>
                                    <div className="card-body" >
                                            <img className="card-img-top" src={(data.logo_img)} alt="Card image cap" />
                                           <br/>
                                           <br/>
                                           <br/>
                                                <h3 className="card-text textdisplay" id={data.service}>{this.state.hideshow && data.service}</h3>
                                                <br/>
                                                <br/>
                                                <p>It is a long established fact that a render will be distracted by to
                                        the readable content of the page</p>
                                             </div>
                                    </div>
                                    </div>
                                })}
                            </div>
                               
                        </div>
                        <div className="main1">
                                <img src="../images/undraw_developer_activity_bv83.png" alt="main1" height="350" width="650"/>
                                <div className="main1content">
                                    <label>Dan Agency give you Best business solution</label>
                                    <p>It is a long established fact that a render will be distracted by to
                                        the readable content of the page when. It is a long established fact that a render will be distracted by to
                                        the readable content of the page.
                                        It is a long established fact that a render will be distracted by to
                                        the readable content of the page.
                                     </p>
                                     <p>It is a long established fact that a render will be distracted by to
                                        the readable content of the page</p>

                                        <button className="btn" >View More</button>
                                </div>
                        </div>
            </div>
            <div className="teamheader">
                <img src="../images/Rectangle_6.png" alt="teams" />
                <div className="team">
                    <div className="teamin">
                    <label>100+</label>
                    <p>Clients</p>
                    </div>

                    <div className="teamin">
                    <label>250+</label>
                    <p>Project Completed</p>
                    </div>

                    <div className="teamin">
                    <label>100+</label>
                    <p>Satisfied Clients</p>
                    </div>

                    <div className="teamin">
                    <label>100+</label>
                    <p>Awards</p>
                    </div>
                </div>
            </div>
            <div className="work">
               <label>Work we have done</label>
               <br/>
               <p>It is a long established fact that a render will be distracted by to
                                        the readable content of the page that a render will be distracted by to
                                        the readable content of the page</p>
            </div>
            <div className="imgseries">
                <div className="boxseries">
                <img src={"../images/undraw_hiking_d24r.png"} 
                />
                </div>
                <div className="boxseries">
                <img src={"../images/undraw_fitness_tracker_3033.png"} />
                </div>
                <div className="boxseries">
                <img src={"../images/undraw_career_progress_ivdb.png"} />
                </div>
                <div className="boxseries">
                <img src={"../images/undraw_christmas_tree_56sw.png"} />
                </div>
                     
            </div>
            <div className="btnpart"><button className="btn">See All</button></div>
        </React.Fragment>)
    }
}