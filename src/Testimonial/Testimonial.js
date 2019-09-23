import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
	return(
			<section className="section-testimonial">
			<div className="row pt-5 pb-5">
				<div className="col-12 col-md-12 col-lg-12">

				<div className="container">
					<div className="row">
						<div className="col-md-8 col-center m-auto">
						
							<div id="myCarousel" className="carousel slide" data-ride="carousel">
								  
								<div className="carousel-inner">
									<div className="item carousel-item active">
										<div className="img-box"><img src="./images/profile-1.jpg" alt="" /></div>
										<p className="testimonial">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at, luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Idac bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.</p>
										<p className="overview"><b>Paula Wilson</b>, Media Analyst</p>
									</div>
									<div className="item carousel-item">
										<div className="img-box"><img src="./images/profile-2.jpg" alt="" /></div>
										<p className="testimonial">Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis. Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio.</p>
										<p className="overview"><b>Antonio Moreno</b>, Web Developer</p>
									</div>
									<div className="item carousel-item">
										<div className="img-box"><img src="./images/profile-3.jpg" alt="" /></div>
										<p className="testimonial">Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus, volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.</p>
										<p className="overview"><b>Michael Holz</b>, Seo Analyst</p>
									</div>
								</div>
								<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
									<i className="fa fa-angle-left"></i>
								</a>
								<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
									<i className="fa fa-angle-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				</div>
			</div>
			</section>
	);
}

export default Testimonial;