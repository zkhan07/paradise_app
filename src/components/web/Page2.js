import React from "react";
import Accordion from "./Accordion";

const Page2 = () => {
    return(
        <div style={{ backgroundColor:"#fff"}}>

            <br/><br/><br/><br/>
            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="row">

                        <div className="column">
                            <div className="ui large image">
                                <img src="mob5.jpeg" />
                            </div>
                        </div>

                        <div className="column">
                            <h1>All your money<br/>in one place</h1>
                            <p>We bring together all of your accounts, bills and more, <br/>so you can conveniently manage your finances from <br/> one dashboard.</p>
                            <Accordion />
                            <br/>
                            <button className="ui large green basic button">Sign Up for free</button>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>

        </div>
    );
}

export default Page2;