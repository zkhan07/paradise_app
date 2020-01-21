import React from "react";
import Accordion from "./Accordion";

const Page4 = () => {
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
                            <h1 className="page1head">We’re serious<br/>about security</h1>
                            <p className="page1para">We’re committed to keeping your data secure. With multiple safety measures like secure encryption and multi-factor authentication, we work to keep your information protected.</p>
                            <Accordion />
                            <br/>
                            <button className="ui large green basic button">Learn more</button>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>

        </div>
    );
}

export default Page4;