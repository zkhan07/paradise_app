import React from 'react';
import { Link } from "react-router-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo">
          <Link to="/"> 
          <div className="ui mini image">
            <img src="zaid.png" height="150" width="200" />
          </div>
              PARADISE TRADERS 
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          

                
              <div class="ui container">
              <div class="ui secondary menu">
          
                    <div class="item">
                      <Link to="/"> Home </Link>
                    </div>

                    <div class="ui simple dropdown item">
                        <a>How it works</a>
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
                        <a>Credit Card & More</a>
                    </a>
                    <div class="ui simple dropdown item">
                        <a>Investing</a>
                        <i class="dropdown icon"></i>
                        <div class="menu">
                        <div class="item">Investment Account</div>
                        <div class="item">Brokegae Account</div>
                        <div class="item">IRA Rollover Account</div>
                        <div class="item">IRA </div>
                        </div>
                    </div>
                    <a className="item">
                        <a>Loans</a>
                    </a>
                    <div class="ui simple dropdown item">
                        <a>Resources</a>
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
      </div>




        </div>
    </nav>
  </header>
);

export default toolbar;
