import React from "react";
import Accordion from "./Accordion";

const Page3 = () => {
    return(
        <div style={{ backgroundColor:"#fff"}}>

            <br/><br/><br/><br/>
            <div className="ui container">
                <div className="doubling stackable ui two column grid">
                    <div className="row">

                        <div className="column">
                            <h1 className="page1head">Effortlessly stay<br/>on top of bills</h1>
                            <p className="page1para">Bills are now easier than ever to track. Simply add them to your <br/>dashboard to see and monitor them all at once.</p>
                            <Accordion />
                            <br/>
                            <button className="ui large green basic button">Learn more</button>
                        </div>

                        <div className="column center aligned">
                            <div className="ui massive image page3img">
                                <img src="mob8.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/><br/><br/>

        </div>
    );
}

export default Page3;