import React from 'react';
import Signup from "../components/Signup"

const Home = () => {
    return (
        <div id="wrapper">
            
            <section class="intro">
                <header>
                    <h1>Stock Rocket<i class="ri-rocket-2-fill"></i></h1>
                    <p>Try your hand at the stock market with no risk</p>
                    <ul class="actions">
                        <li>
                            <a class="arrow scrolly"
                            ><span class="label">Next</span></a
                            >
                        </li>
                    </ul>
                </header>
                <div class="content">
                    <span class="image fill" data-position="center"
                    ><img src="images/pic01.jpg" alt=""
                        /></span>
                </div>
            </section>


            <section id="first">
                <header>
                    <h2>"A Great Introduction to the Stock Market"</h2>
                </header>
                <div class="content">
                    <p>
                        <strong>Stock Rocket</strong> allows users to build virtual portfolios using the stock market without risking any capital.  This will help users build confidence in the market and assist with finding a personal approach to investing.  Join Stock Rocket and get your financial feet wet!
                    </p>
                    <span class="image main"><img src="images/pic02.jpg" alt="" /></span>
                </div>
            </section>


            <section>
                <header>
                    <h2>Let's get Started!</h2>
                </header>
                <div class="content">

                    <section>
                        <div class="content">
                            <Signup />
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Home
