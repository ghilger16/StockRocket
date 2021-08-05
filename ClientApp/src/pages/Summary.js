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
            <TabNav tabs={["Performance", "Activity", "Asset Classes", "Holdings"]} selected={selected} setSelected={setSelected}>
                <Tab isSelected={selected === "Performance"}>
                    <Jumbotron />
                </Tab>
                <Tab isSelected={selected === "Activity"}>
                    <Home />
                </Tab>
                </TabNav>
       </div>
    );
};

export default Summary