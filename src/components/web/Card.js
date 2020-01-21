import React from "react";
import "./Style.css";

const Card = () => {
    return(
        <div className="cardcon">

 
            {/* <div className="ui fluid container navbar">
                <div className="ui secondary inverted top massive pointing menu">
                    <div className="item">
                        <div className="ui mini image center aligned">
                            <img src="logo1.png" />
                        </div>
                        <h2><i className="clock icon"></i>intuit mint</h2>
                    </div>

                    <div class="ui simple dropdown item">
                    How it works
                        <i class="dropdown icon"></i>
                        <div class="menu">
                        <div class="item">What is mint</div>
                        <div class="item">Bill payment tracker</div>
                        <div class="item">Budgeting</div>
                        <div class="item">Free credit card score</div>
                        <div class="item">Alerts</div>
                        <div class="item">BUdget Categaration</div>
                        <div class="item">Investment</div>
                        <div class="item">Security</div>
                        </div>
                    </div>
                    <a className="item">
                        Credit Card & More
                    </a>
                    <div class="ui simple dropdown item">
                    Investing
                        <i class="dropdown icon"></i>
                        <div class="menu">
                        <div class="item">Investment Account</div>
                        <div class="item">Brokegae Account</div>
                        <div class="item">IRA Rollover Account</div>
                        <div class="item">IRA </div>
                        </div>
                    </div>
                    <a className="item">
                        Loans
                    </a>
                    <div class="ui simple dropdown item">
                    Resources
                        <i class="dropdown icon"></i>
                        <div class="menu">
                        <div class="item">Support</div>
                        <div class="item">Blog</div>
                        </div>
                    </div>
                 
                
                    <div className="right item">
                        <div className="ui buttons">
                            <button className="ui button black">
                                <i className="sign in icon"></i>Login
                            </button>
                            <div className="or"></div>
                            <button className="ui button green">
                                <i className="users icon"></i> Sign Up
                            </button>
                        </div>
                    </div>

                </div>
            </div> */}


            
      <div className="ui fluid container">
         
          <h1 className="cardhead">It’s all coming<br/>together</h1>
          <p className="cardpara">When you’re on top of your money,<br/> life is good. We help you  effortlessly<br/> manage your finances in one place.</p>
          <button className="ui big white button cardbtn1">Sign Up for free</button> 

            <div className="field cardbtn2">
                <button className="ui submit black container animated big button" tabindex="0">
                    <div className="visible content">Let's Go</div>
                    <div className="hidden content">PARADISE TRADERS</div>
                </button>
            </div>

          <img className="cardimg" src="zaid.png" />

      </div>







          


        </div>
    );
}

export default Card;