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
                            <a href="#first" class="arrow scrolly"
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


            <section id="second">
                <header>
                    <h2>"A Great Introduction to the Stock Market"</h2>
                </header>
                <div class="content">
                    <p>
                        <strong>Stock Rocket</strong> allows users to build virtual portfolios using the stock market at no acual cost.  This will help users build confidence in the market and assist with finding their own personal approach to investing.
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
                        <header>
                            <h2>Sign Up / Log In</h2>
                        </header>
                        <div class="content">
                            <p>
                                <strong>Auctor commodo</strong> interdum et malesuada fames ac ante
                                ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet
                                 dolor mattis sagittis.
                             </p>
                            <form>
                                <div class="fields">
                                    <div class="field half">
                                        <input type="text" name="name" id="name" placeholder="Name" />
                                    </div>
                                    <div class="field half">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div class="field">
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message"
                                            rows="7"
                                        ></textarea>
                                    </div>
                                </div>
                                <ul class="actions">
                                    <li>
                                        <input
                                            type="submit"
                                            value="Send Message"
                                            class="button primary"
                                        />
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default Home
