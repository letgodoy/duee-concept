import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import './assets/sass/main.scss'


const SomosLeoes = () => (
  <Layout>
    <SEO title="Page two" />
    {/* <!-- Header --> */}
			<section id="header" class="dark">
				<header>
					<h1>Welcome to Tessellate</h1>
					<p>A free responsive site template by <a href="http://html5up.net">HTML5 UP</a></p>
				</header>
				<footer>
					<a href="#first" class="button scrolly">Proceed to second phase</a>
				</footer>
			</section>

		{/* <!-- First --> */}
			{/* <section id="first" class="main">
				<header>
					<div class="container">
						<h2>Tessellate is a free responsive site template</h2>
						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
					</div>
				</header>
				<div class="content dark style1 featured">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-narrow">
								<section>
									<span class="feature-icon"><span class="icon fa-clock"></span></span>
									<header>
										<h3>Gravida</h3>
									</header>
									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
									Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
									ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
									accumsan vivamus.</p>
								</section>
							</div>
							<div class="col-4 col-12-narrow">
								<section>
									<span class="feature-icon"><span class="icon solid fa-bolt"></span></span>
									<header>
										<h3>Vivamus</h3>
									</header>
									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
									Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
									ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
									accumsan vivamus.</p>
								</section>
							</div>
							<div class="col-4 col-12-narrow">
								<section>
									<span class="feature-icon"><span class="icon solid fa-cloud"></span></span>
									<header>
										<h3>Accumsan</h3>
									</header>
									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales.
									Diam tempor dui lacinia accumsan vivamus. Gravida dis placerat lectus
									ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
									accumsan vivamus.</p>
								</section>
							</div>
							<div class="col-12">
								<footer>
									<a href="#second" class="button scrolly">Gravida tempor lacinia</a>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</section> */}

		{/* <!-- Second --> */}
			{/* <section id="second" class="main">
				<header>
					<div class="container">
						<h2>Euismod sed feugiat lorem tempus magna</h2>
						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
					</div>
				</header>
				<div class="content dark style2">
					<div class="container">
						<div class="row">
							<div class="col-4 col-12-narrow">
								<section>
									<h3>Augue vivamus sed ipsum commodo lorem dolor</h3>
									<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
									tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
									vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
									augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
									lorem ipsum dolor placerat magna tempus feugiat.</p>
									<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
									accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
									euismod lorem ipsum dolor.</p>
									<footer>
										<a href="#third" class="button scrolly">Accumsan nisi tempor</a>
									</footer>
								</section>
							</div>
							<div class="col-8 col-12-narrow">
								<div class="row">
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic01.jpg" alt="" /></a></div>
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic02.jpg" alt="" /></a></div>
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic03.jpg" alt="" /></a></div>
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic04.jpg" alt="" /></a></div>
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic05.jpg" alt="" /></a></div>
									<div class="col-6"><a href="#" class="image fit"><img src="images/pic06.jpg" alt="" /></a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section> */}

		{/* <!-- Third --> */}
			{/* <section id="third" class="main">
				<header>
					<div class="container">
						<h2>Ornare varius lorem ipsum ante lectus</h2>
						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
					</div>
				</header>
				<div class="content dark style3">
					<div class="container">
						<span class="image featured"><img src="images/pic07.jpg" alt="" /></span>
						<div class="row">
							<div class="col-4 col-12-narrow">
								<h3>Diam vivamus turpis lorem sodales lectus ornare</h3>
								<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
								tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
								vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
								augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
								lorem ipsum dolor placerat magna tempus feugiat.</p>
								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
								accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
								euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu eget ornare varius
								gravida dolore euismod lorem ipsum dolor sit amet consequat. vivamus nisi eu
								eget ornare et magna.</p>
							</div>
							<div class="col-4 col-12-narrow">
								<p>Gravida dis placerat lectus ante vel nunc euismod est turpis sodales. Diam
								tempor dui lacinia eget ornare varius gravida. Gravida dis placerat lectus ante
								vel nunc euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus
								augue cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
								lorem ipsum dolor placerat magna tempus feugiat.</p>
								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
								accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida dolore
								euismod lorem ipsum dolor sit amet consequat eget ornare varius gravida euismod.
								Gravida dis lorem ipsum dolor placerat magna tempus feugiat magna tempus lorem.</p>
								<p>Lectus ante vel nunc euismod est turpis sodales. Diam tempor dui lacinia
								accumsan vivamus augue cubilia.</p>
							</div>
							<div class="col-4 col-12-narrow">
								<p>Placerat lectus ante vel nunc euismod est turpis sodales. Diam tempor dui
								lacinia eget ornare varius gravida. Gravida dis placerat lectus ante vel nunc
								euismod est turpis sodales. Diam tempor dui lacinia accumsan vivamus augue
								cubilia vivamus nisi eu eget ornare varius gravida euismod.  Gravida dis
								lorem ipsum dolor placerat magna tempus feugiat. Lectus ante vel nunc euismod
								est turpis sodales. Diam tempor dui lacinia dolore.</p>
								<p>Accumsan vivamus augue cubilia vivamus nisi eu eget ornare varius gravida
								dolore euismod lorem ipsum dolor sit amet conseismod lorem ipsum dolor sit amet
								consequat lorem ipsum consequat feugiat sed tempus euismod feugiat veroeros.</p>
								<footer>
									<a href="#fourth" class="button scrolly">Ipsum ornare lorem dolor</a>
								</footer>
							</div>
						</div>
					</div>
				</div>
			</section> */}

		{/* <!-- Basic Elements -->
		<!--
			<section class="main">
				<header>
					<div class="container">
						<h2>A Whole Lotta Elements</h2>
						<p>General purpose elements for every general purpose. Or something like that.</p>
					</div>
				</header>
				<div class="content style1 dark">
					<div class="container">
						<section>
							<header>
								<h3>Paragraph</h3>
								<p>This is a byline</p>
							</header>
							<p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
							habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
							leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
							amet risus elit.</p>
						</section>
						<section>
							<header>
								<h3>Blockquote</h3>
							</header>
							<blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
							tempus euismod. Vestibulum ante ipsum primis in faucibus. Cras sit amet urna eros, id egestas
							tempus ante ipsum primis in faucibus orci luctus et ultrices.</blockquote>
						</section>
						<section>
							<header>
								<h3>Divider</h3>
							</header>
							<p>Donec consectetur <a href="#">vestibulum dolor et pulvinar</a>. Etiam vel felis enim, at viverra
							ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
							facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
							tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia.</p>
							<hr />
							<p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
							ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
							facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
							tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
							posuere cubilia.</p>
						</section>
						<section>
							<header>
								<h3>Unordered List</h3>
							</header>
							<ul class="default">
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
							</ul>
						</section>
						<section>
							<header>
								<h3>Ordered List</h3>
							</header>
							<ol class="default">
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
								<li>Donec consectetur vestibulum dolor et vel felis enim at viverra ligula. Ut porttitor sagittis lorem.</li>
							</ol>
						</section>
						<section>
							<header>
								<h3>Table</h3>
							</header>
							<div class="table-wrapper">
								<table class="default">
									<thead>
										<tr>
											<th>ID</th>
											<th>Name</th>
											<th>Description</th>
											<th>Price</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>00001</td>
											<td>Lorem ipsum dolor</td>
											<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>00002</td>
											<td>Sit amet nullam</td>
											<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>00003</td>
											<td>Feugiat felis viverra</td>
											<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
											<td>29.99</td>
										</tr>
										<tr>
											<td>00004</td>
											<td>Sagittis enim felis</td>
											<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
											<td>19.99</td>
										</tr>
										<tr>
											<td>00005</td>
											<td>Nullam sed vestibulum</td>
											<td>Ut porttitor sagittis lorem quis nisi ornare.</td>
											<td>19.99</td>
										</tr>
									</tbody>
									<tfoot>
										<tr>
											<td colspan="3"></td>
											<td>100.00</td>
										</tr>
									</tfoot>
								</table>
							</div>
						</section>
						<section>
							<header>
								<h3>Form</h3>
							</header>
							<form method="post" action="#">
								<div class="row gtr-50">
									<div class="col-6 col-12-narrow">
										<input type="text" name="name" id="name" value="" placeholder="John Doe" />
									</div>
									<div class="col-6 col-12-narrow">
										<input type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
									</div>
									<div class="col-12">
										<div class="select" tabindex="-1">
											<select name="department" id="department">
												<option value="">Choose a department</option>
												<option value="1">Manufacturing</option>
												<option value="2">Administration</option>
												<option value="3">Support</option>
											</select>
										</div>
									</div>
									<div class="col-12">
										<input type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
									</div>
									<div class="col-12">
										<textarea name="message" id="message" placeholder="Enter your message"></textarea>
									</div>
									<div class="col-12">
										<ul class="actions">
											<li><input type="submit" class="button" value="Send Message" /></li>
											<li><input type="reset" class="button alt" value="Clear Form" /></li>
										</ul>
									</div>
								</div>
							</form>
						</section>
					</div>
				</div>
			</section>
		--> */}

		{/* <!-- Fourth --> */}
			{/* <section id="fourth" class="main">
				<header>
					<div class="container">
						<h2>Sed feugiat ipsum consequat</h2>
						<p>Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet consequat<br />
						feugiat. Gravida dis placerat lectus ante vel nunc euismod eget ornare varius gravida euismod lorem ipsum dolor sit amet.</p>
					</div>
				</header>
				<div class="content style4 featured">
					<div class="container medium">
						<form method="post" action="#">
							<div class="row gtr-50">
								<div class="col-6 col-12-mobile"><input type="text" placeholder="Name" /></div>
								<div class="col-6 col-12-mobile"><input type="text" placeholder="Email" /></div>
								<div class="col-12"><textarea name="message" placeholder="Message"></textarea></div>
								<div class="col-12">
									<ul class="actions special">
										<li><input type="submit" class="button" value="Send Message" /></li>
										<li><input type="reset" class="button alt" value="Clear Form" /></li>
									</ul>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section> */}

		{/* <!-- Footer --> */}
			{/* <section id="footer">
				<ul class="icons">
					<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
					<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
					<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
					<li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
					<li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
				</ul>
				<div class="copyright">
					<ul class="menu">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</section> */}
      
      {/* <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-5">
                <h2 class="footer-heading mb-4">About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
              </div>
              <div class="col-md-3 ">
                <h2 class="footer-heading mb-4">Quick Links</h2>
                <ul class="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-md-4">
                <h2 class="footer-heading mb-4">Follow Us</h2>
                <a href="#" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-twitter"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-instagram"></span></a>
                <a href="#" class="pl-3 pr-3"><span class="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
          <div class="col-md-3 ml-auto">
            <h2 class="footer-heading mb-4">Featured Product</h2>
            <a href="#"><img src="images/product_1_bg.jpg" alt="Image" class="img-fluid mb-3"/></a>
            <h4 class="h5">Leather Brown Shoe</h4>
            <strong class="text-black mb-3 d-inline-block">$60.00</strong>
            <p><a href="#" class="btn btn-black rounded-0">Add to Cart</a></p>
          </div>
        </div>
        <div class="row pt-5 mt-5 text-center">
          <div class="col-md-12">
            <div class="border-top pt-5">
            <p>
        Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>

      </p>
            </div>
          </div>
          
        </div>
      </div> */}
      <script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
  
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)


export default SomosLeoes