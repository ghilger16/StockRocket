import React from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Modal from "../components/Modal";
import TradingModal from "../components/TradingModal"

const Jumbotron = ({ showSmallJumbotron ,showModal, setShowModal }) => {
    return (
        
        <div class="summary-jumbotron">
            {!showSmallJumbotron ?
            <div class="bg-light">
                <div class="row">
                    <div class="col-7">
                        <h1 class="d-flex justify-content-end mt-3 mr-5"><i class="ri-rocket-2-fill mr-4 mt-2"></i>Gregory Hilger - Account Summary</h1>
                    </div>
                    <div class="col-2 ml-5">
                        <div class="container mt-4 ml-5">
                            <Card class="card">
                                <Card.Body>
                                    <p>Balance</p>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <h6 class="d-flex justify-content-end">Earnings</h6>
                        <p class="d-flex justify-content-end">300</p>
                    </div>
                    <div class="col-2">
                        <h6 class="d-flex justify-content-center">Returns</h6>
                        <p class="d-flex justify-content-center">300</p>
                    </div>
                </div>

            </div> :
                <div class="bg-light">
                    
                    <div class="row d-flex justify-content-center">
                        <i class="ri-rocket-2-fill mr-4 mt-3"></i>
                    </div>
                    <div class="row d-flex justify-content-center mt-4">
                            <h1>Gregory Hilger - Account Summary</h1>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-3 mr-5">
                            <div class="container mt-4 ml-5">
                                <Card class="card">
                                    <Card.Body>
                                        <p>Balance</p>
                                    </Card.Body>
                                </Card>
                                </div>
                        </div>
                        </div>
                        
                    
                    <div class="row mt-5">
                        <div class="col-6">
                            <h6 class="d-flex justify-content-center">Earnings</h6>
                            </div>
                        <div class="col-6">
                            <p class="d-flex justify-content-center">300</p>
                            </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <h6 class="d-flex justify-content-center">Returns</h6>
                        </div>
                        <div class="col-6">
                            <p class="d-flex justify-content-center">300</p>
                            </div>  
                    </div>
                    <div class="row d-flex justify-content-end mr-5">
                        <p class="nav-item" onClick={(e) => setShowModal(true)} ><i class="ri-add-line" /> Buy and sell stocks</p>
                        <Modal open={showModal} onClose={() => setShowModal(false)}>
                            <TradingModal />
                        </Modal>
                        </div>
                </div> }
        </div >

    );
};

export default Jumbotron