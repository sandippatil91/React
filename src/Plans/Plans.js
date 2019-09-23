import React from 'react';
import './plans.css';

const Plans = () => {
	return(
			<section className="section-plans pt-5 pb-5" style={{ backgroundImage:"url('./images/plans-background.jpg')"}}>
				<div  className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card card1">
						   <div className="card-header">
						    <h3 className="pt-2 pb-2">Basic</h3>
						    <h4><sup>$</sup><h5>10</h5><sup>99</sup></h4>
						    <p >monthly</p>
						   </div>
						  <div className="card-body">
						    <h5 className="card-title"></h5>
						    <p className="card-text">Engagement session</p>
						     <p className="card-text">20 - 8x10 prints of your choosing</p>
						      <p className="card-text">16x20 gallery wrapped canvas!</p>
						       <p className="card-text">High resolution digital images</p>
						        <p className="card-text">Full rights to prints</p>

						    <a href="www.google.com" className="purchase-btn">Purchase</a>
						  </div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card card2">
						   <div className="card-header">
						    <h3 className="pt-2 pb-2">Premium</h3>
						    <h4><sup>$</sup><h5>30</h5><sup>99</sup></h4>
						    <p >monthly</p>
						   </div>
						  <div className="card-body">
						    <h5 className="card-title"></h5>
						    <p className="card-text">Engagement session</p>
						     <p className="card-text">20 - 8x10 prints of your choosing</p>
						      <p className="card-text">16x20 gallery wrapped canvas!</p>
						       <p className="card-text">High resolution digital images</p>
						        <p className="card-text">Full rights to prints</p>
						        <p className="card-text">Free retouching!</p>
						        

						    <a href="www.google.com" className="purchase-btn">Purchase</a>
						  </div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card card3">
						   <div className="card-header">
						    <h3 className="pt-2 pb-2">Standard</h3>
						    <h4><sup>$</sup><h5>20</h5><sup>99</sup></h4>
						    <p >monthly</p>
						   </div>
						  <div className="card-body">
						    <h5 className="card-title"></h5>
						    <p className="card-text">Engagement session</p>
						     <p className="card-text">20 - 8x10 prints of your choosing</p>
						      <p className="card-text">16x20 gallery wrapped canvas!</p>
						       <p className="card-text">High resolution digital images</p>
						        <p className="card-text">Full rights to prints</p>

						    <a href="www.google.com" className="purchase-btn">Purchase</a>
						  </div>
						</div>
					</div>

				</div>
				</div>
			</section>
	);
}

export default Plans;