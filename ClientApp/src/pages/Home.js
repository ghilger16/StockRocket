import React from 'react';

const Home = () => {
	return (
        <div>
			<section class="intro">
				<header>
					<h1>Stock Rocket <i class="ri-rocket-2-fill"></i></h1>
					<p>Try your hand at the stock market with no risk</p>
					<ul>
						<li><a href="#first" class="arrow scrolly"></a></li>
					</ul>
				</header>
				<div class="image">
					<span class="image fill"><img src="images/pic01.jpg" alt="" /></span>
				</div>
			</section>

			<section id="first" class="first">
				<header>
					<h1>Stock Rocket<i class="ri-rocket-2-fill"></i></h1>
					<p>A free responsive site template designed by</p>
					<ul class="actions">
						<li><a href="#first" class="arrow scrolly"><span class="label"></span></a></li>
					</ul>
				</header>
				<div class="image">
					<span class="image fill" data-position="center"><img src="images/pic02.jpg" alt="" /></span>
				</div>
			</section>
			


		
		</div>

    );
}

export default Home
