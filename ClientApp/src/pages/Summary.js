import React, { useState } from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron"
import TabNav from "../components/TabNav"
import Tab from "../components/Tab"
import Home from "./Home"
import Modal from "../components/Modal";
import TradingModal from "../components/TradingModal"
import Holdings from "../components/Holdings"

const Summary = () => {
    const [selected, setSelected] = useState("Performance");
    const [showModal, setShowModal] = useState(true);
 
    return (
        <>
        <div class="summary">
            
            <Jumbotron />
          
         <div class="row justify-content-around mt-3">
                    <div class="col-1 mt-5">

                        <h1 class="ml-3">Details</h1>

                </div>
                    <div class="col-3">

                    <p class="nav-item"onClick={() => setShowModal(true)} ><i class="ri-add-line" /> Buy and sell stocks</p>
                        <Modal open={showModal} onClose={() => setShowModal(false)}>
                            <TradingModal />
                        </Modal>

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
                            <Holdings />
                        </Tab>
                    </TabNav>

                </div>
        </div>
        
            </div>
            </>
    );
};

export default Summary