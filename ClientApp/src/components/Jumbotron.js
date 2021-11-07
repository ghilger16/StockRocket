import React from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Jumbotron = ({ size }) => {
    return (
        <div class="summary-jumbotron">
            <div class="bg-light">
                    <div class="row">
                        <div class="col-7">
                        {!size && <h1 class="d-flex justify-content-end mt-3 mr-5"><i class="ri-rocket-2-fill mr-4 mt-2"></i>Gregory Hilger - Account Summary</h1>}
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
               
            </div>

        </div>
    );
};

export default Jumbotron