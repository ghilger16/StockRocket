import React from "react"
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Jumbotron = () => {
    return (
        <div class="summary-jumbotron">
            <div class="bg-light">
                <div class="row">
                    <div class="col-7">
                        <h1 class="d-flex justify-content-end mt-1 ml-5"><i class="ri-rocket-2-fill mr-4 mt-3"></i>Gregory Hilger - Account Summary</h1>
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
                        <h3 class="d-flex justify-content-end">Earnings</h3>
                        <p class="d-flex justify-content-end">300</p>
                    </div>
                    <div class="col-2">
                        <h3 class="d-flex justify-content-center">Returns</h3>
                        <p class="d-flex justify-content-center">300</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Jumbotron