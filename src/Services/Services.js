import React from 'react';
import './Services.css';

const Services = () => {
	return(
		<section className="service-section pt-5 pb-5">
		<div className="container pt-5 pb-5">
		<div className="row">
			<div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<div className="card">
				 <i className="fa fa-camera"></i>
				  <div className="card-body">
				    <h5 className="card-title">Photo Sessions</h5>
				    <p className="card-text">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
				    <a href="www.google.com" className="read-text">Read More</a>
				  </div>
				</div>
			</div>
			<div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<div className="card">
				  <i className="fa fa-flag"></i>
				  <div className="card-body">
				    <h5 className="card-title">Occasions</h5>
				    <p className="card-text">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
				    <a href="www.google.com" className="read-text">Read More</a>
				  </div>
				</div>
			</div>
			<div className="col-12 col-md-4 col-lg-4 col-xl-4 text-center">
				<div className="card">
				  <i className="fa fa-glass"></i>
				  <div className="card-body">
				    <h5 className="card-title">Coverage</h5>
				    <p className="card-text">
				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
				    <a href="www.google.com" className="read-text">Read More</a>
				  </div>
				</div>
			</div>
		</div>
		</div>
		</section>
	);
}

export default Services;