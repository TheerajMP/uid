import React from 'react'
import './assets/css/main.css'
import  './home.css'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/noscript.css'
import {Link} from 'react-router-dom'
import image1 from './images/product-1-720x480.jpg'
import image2 from './images/product-2-720x480.jpg'
import image3 from './images/product-3-720x480.jpg'
import image4 from './images/product-4-720x480.jpg'
import image5 from './images/product-5-720x480.jpg'
import image6 from './images/product-6-720x480.jpg'
const Home = () => {
	return (
		<div>

			<div class="body is-preload">
				<div id="wrapper">
					<header id="header" class="alt">
						<a href="index.html" class="logo"><strong>Job PORTAL</strong> <span>Website</span></a>
						<nav>
						<ul class="links">
							<li > <Link  className='link' to="/"><span>HOME</span></Link> </li>
							<li> <Link className='link' to="/Signup"><span>SIGNUP</span></Link></li>
							<li> <Link className='link' to="/Login"><span>LOGIN</span></Link></li>
							<li> <Link className='link' to="/Postjob"><span>POST JOB</span></Link></li>
							<li> <Link className='link' to="/displayjob"><span>DISPLAY JOBS</span></Link></li>
							
						</ul>
						</nav>
					</header>
					
					<section id="banner" class="major">
						<div class="inner">
							<header class="major">
								<h1>All our dreams can come true
									,if we have the courage to pursue them.
								</h1>
							</header>
							<div class="content">
								<p>Dont'fear your job is here!!!!!!!!!!!!! 😉</p>
								<ul class="actions">
									<li><a href="#footer" class="button next scrolly">Contact Us</a></li>
								</ul>
							</div>
						</div>
					</section>
					<div id="main">
						<section>
							<div class="inner">
								<header class="major">
									<h2>About us</h2>
								</header>
								<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
								<ul class="actions">
									<li><a href="about-us.html" class="button next">Read more</a></li>
								</ul>
							</div>
						</section>
						<section class="tiles">
							<article>
								<span class="image">
									<img src={image1}alt=""/>
								</span>
								<header class="major">
									<p>
										<i class="fa fa-file"></i> Contract;
										<i class="fa fa-map-marker"></i> ERODE
									</p>
									<h3>COOKING</h3>
									<p><strong>₹.60 000</strong></p>
									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>
							<article>
							<span class="image">
								<img src={image1} alt="" />
							</span>
								<header class="major">
									<p>
										<i class="fa fa-file"></i> Contract 
										<i class="fa fa-map-marker"></i> SALEM
									</p>
									<h3>CIVIL ENGINEER</h3>
									<p><strong>₹.70 000</strong></p>
									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>
							<article>
								<span class="image">
									<img src={image3} alt="" />
								</span>
								<header class="major">
									<p>
										<i class="fa fa-file"></i> Contract &nbsp;&nbsp;
										<i class="fa fa-map-marker"></i> OOTY
									</p>
									<h3>TEACHING</h3>
									<p><strong>₹.30 000</strong></p>
									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>
							<article>
								<span class="image">
									<img src={image4} alt="" />
								</span>
								<header class="major">
									<p>
										<i class="fa fa-file"></i> Contract &nbsp;&nbsp;
										<i class="fa fa-map-marker"></i> TANJORE
									</p>
									<h3>AUTOMOBILE ENGINEER</h3>
									<p><strong>₹.1 00 000</strong></p>
									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>
							<article>
								<span class="image">
									<img src={image5} alt="" />
								</span>

								<header class="major">
									<p>

										<i class="fa fa-file"></i> Contract &nbsp;&nbsp;
										<i class="fa fa-map-marker"></i> MADURAI
									</p>

									<h3>FIRE FIGHTING JOBS</h3>

									<p><strong>₹.55 000</strong></p>


									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>

							<article>
								<span class="image">
									<img src={image6} alt="" />
								</span>

								<header class="major">
									<p>

										<i class="fa fa-file"></i> Contract &nbsp;&nbsp;
										<i class="fa fa-map-marker"></i> CHENNAI
									</p>

									<h3>SOFTWARE ENGINEER</h3>

									<p><strong>₹.1 50 000</strong></p>


									<div class="major-actions">
										<Link to="job-details.html" class="button small next">View Job</Link>
									</div>
								</header>
							</article>
						</section>
						<footer id="footer">
							<div class="inner">
								<ul class="icons">
									<li><a href="#" class="icon alt fa-twitter"><span class="label">Twitter</span></a></li>
									<li><a href="#" class="icon alt fa-facebook"><span class="label">Facebook</span></a></li>
									<li><a href="#" class="icon alt fa-instagram"><span class="label">Instagram</span></a></li>
									<li><a href="#" class="icon alt fa-linkedin"><span class="label">LinkedIn</span></a></li>
								</ul>
								<ul class="copyright">
									<li>Copyright © 2022 Company Name - Website by:</li>
									<li style={{ "fontFamily": "cursive" }}> THEERAJ SHARMI</li>
								</ul>
							</div>
						</footer>
					</div>
				</div>
				

			</div>

		</div>

	)
}

export default Home