import React from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";


const Summary = () => {
    return (
        <div class="summary-jumbotron">
            
            <div class="container-fluid bg-light">
                <div class="row align-items-start">
                    <div class="col-7">
                        <h1 class="d-flex justify-content-end mt-1 ml-5"><i class="ri-rocket-2-fill mr-4"></i>Gregory Hilger - Account Summary</h1>
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
                    <div class="row align-items-center">
                        <div class="col-6">
                        <h2 class="d-flex justify-content-center">Earnings</h2>
                        <p class="d-flex justify-content-center">300</p>
                    </div>
                    <div class="col-1">
                        <h2 class="d-flex justify-content-center">Earnings</h2>
                        <p class="d-flex justify-content-center">300</p>
                    </div>                    
                    </div>
                </div>
            
        </div>
    );
};

export default Summary