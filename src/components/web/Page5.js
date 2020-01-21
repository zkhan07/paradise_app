import React from "react";


const Page5 = () => {
    return(
        <div style={{ backgroundColor:"#f2f2f2"}}>

            <br/><br/><br/><br/> 
            <div className="ui container center aligned">
                <h1 className="page5head">Intuitive features, powerful results</h1>
                <p className="page5para">Mint is versatile enough to help anyone’s money make sense without much effort. There’s no wrong way to use it, and nothing to lose getting started. You’ll be surprised how life-changing something so simple can be.</p> 
                <a><h3>Learn more</h3></a>
                <br/><br/><br/><br/>
                <div className="doubling stackable ui three column grid">
                    <div className="row">

                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <div className="ui image">
                                    <img src="hotel.jpg" />
                                </div>
                                <h2>Budgets that work</h2>
                                <p>Create budgets you can actually stick to, see how you’re spending your money.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <div className="ui image">
                                    <img src="hotel.jpg" />
                                </div>
                                <h2>One step at a time</h2>
                                <p>Get personalized tips and advice for maximizing your money every day.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <div className="ui image">
                                    <img src="hotel.jpg" />
                                </div>
                                <h2>Money on the go</h2>
                                <p>Phone & tablet apps to manage your money from wherever you are.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/><br/><br/> 



        </div>
    );
}

export default Page5;