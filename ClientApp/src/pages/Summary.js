import React, { useState, useEffect } from "react"
import Jumbotron from "../components/Jumbotron"
import TabNav from "../components/TabNav"
import Tab from "../components/Tab"
import Modal from "../components/Modal";
import TradingModal from "../components/TradingModal"
import Holdings from "../components/Holdings"

const Summary = () => {
    const [showSmallJumbotron, setShowSmallJumbotron] = useState(false);
    const [selected, setSelected] = useState("Performance");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setShowSmallJumbotron(false);
            } else if (window.innerWidth < 991) {
                setShowSmallJumbotron(true);
            }
    };
        window.addEventListener('resize', handleResize);
        handleResize();
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
 
    return (
        
        <div class="summary">
            
            <Jumbotron showSmallJumbotron={showSmallJumbotron} open={showModal} setShowModal={setShowModal} />
          
            <div class="row justify-content-end mt-3 mr-5">
   
               
                    {!showSmallJumbotron &&
                    <p class="nav-item" onClick={(e) => setShowModal(true)} ><i class="ri-add-line" /> Buy and sell stocks</p>}
                    <Modal open={showModal} onClose={() => setShowModal(false)}>
                        <TradingModal />
                    </Modal>

            </div>
            
                <div class="row justify-content-center">
                <h1 class="">Details</h1>
                </div>
                        
             

        
        <div class="row justify-content-center">
                

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
            
    );
};

export default Summary