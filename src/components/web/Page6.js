import React from "react";


const Page6 = () => {
    return(
        <div style={{ backgroundColor:"#fff"}}>

            <br/><br/><br/><br/> 
            <div className="ui container center aligned">
                <h1 className="page6head">Sign up for Mint today</h1>
                <p className="page6para">From budgets and bills to free credit score and more, you’ll discover the effortless way to stay on top of it all.</p> 
                <button className="ui large yellow button">Sign Up Free</button>
                <button className="ui large green basic button">Sign In</button>
            </div>

            <br/><br/><br/><br/> 

            <div className="ui fluid container center aligned page6con"> 
            <br/><br/>
                <h1 className="page6head1">Download our free mobile app</h1>
                <p className="page6para1">Available for iOS and Android.</p> 
                <button className="ui big blue basic button">
                    <i className="apple icon"></i>Download
                </button>
                <button className="ui big green basic button">
                    <i className="play store icon"></i>Download
                </button>
            <br/><br/><br/><br/>
            </div>



        </div>
    );
}

export default Page6;