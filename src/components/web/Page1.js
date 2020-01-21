import React from "react";


const Page1 = () => {
    return(
        <div style={{ backgroundColor:"#f2f2f2"}}>

            <br/><br/><br/><br/> 
            <div className="ui container center aligned">
                <div className="doubling stackable ui three column grid">
                    <div className="row">

                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <i className="ui huge paste icon"></i>
                                <h2>All-in-one<br/>finances</h2>
                                <p>We bring all of your money to one<br/> place, from balances and bills to<br/> credit score and more.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <i className="ui huge home icon"></i>
                                <h2>Budgets<br/>made simple</h2>
                                <p>We bring all of your money to one<br/> place, from balances and bills to<br/> credit score and more.</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="ui big green segment cardbtn">
                                <i className="ui huge clock icon"></i>
                                <h2>Unlimited<br/>credit scores</h2>
                                <p>We bring all of your money to one<br/> place, from balances and bills to<br/> credit score and more.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <br/><br/><br/><br/> 



        </div>
    );
}

export default Page1;