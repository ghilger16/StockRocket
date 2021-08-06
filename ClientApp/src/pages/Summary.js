import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron"
import TabNav from "../components/TabNav"
import Tab from "../components/Tab"
import Home from "./Home"

const Summary = () => {
    const [selected, setSelected] = useState("Performance");
    return (
        <div>
            <Jumbotron />
            <div class="row justify-content-around mt-3">
                <div class="col-1 mt-5">
                    <h1 class="details ml-3">Details</h1>
                </div>
                <div class="col-3">
                    <p>Buy and sell stocks</p>
                 </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-8 ml-5">
            <TabNav tabs={["Performance", "Activity", "Asset Classes", "Holdings"]} selected={selected} setSelected={setSelected}>
                <Tab isSelected={selected === "Performance"}>
                    <h1>Performance</h1>
                </Tab>
                <Tab isSelected={selected === "Activity"}>
                    <h1>Activity</h1>
                        </Tab>
                <Tab isSelected={selected === "Asset Classes"}>
                    <h1>Asset Classes</h1>
                </Tab>
                <Tab isSelected={selected === "Holdings"}>
                    <h1>Holdings</h1>
                </Tab>
                    </TabNav>
                </div>
                </div>
       </div>
    );
};

export default Summary