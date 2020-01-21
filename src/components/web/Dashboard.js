import React from "react";

import Navbar from "./navbar/Navbar";
import Card from "./Card";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Card1 from "./Card1";
import Page6 from "./Page6";
import Footer from "./Footer";


const Dashboard = () => {
    return(
        <div>

            <Navbar />
            <Card />
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Card1 />
            <Page6 />
            <Footer />

        </div>
    );
}

export default Dashboard;