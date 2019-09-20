import React from 'react';
import './Showmore.css';


const Showmore = () => {
	return(
	<section className="showmore-section">
		<div className="container-fluid remove-space" >
		<div className="row pb-5 no-gutters">
			<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 ">
				<div className="card" style={{ backgroundImage:"url('./images/background11.jpg')"}}>
				  <div className="card-body">
				    <h5 className="card-title">Showcases</h5>
				    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
				    <a href="#" className="">View More</a>
				  </div>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
				<div className="card" style= {{backgroundImage:"url('./images/background22.jpg')"}}>
				  <div className="card-body">
				    <h5 className="card-title">Coverage</h5>
				    <p className="card-text">				    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
				     <a href="#" className="">View More</a>
				  </div>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
				<div className="card" style= {{ backgroundImage: "url('./images/background30.jpg')"}}>
				  <div className="card-body">
				    <h5 className="card-title">Photography</h5>
				    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
				     <a href="#" className="">View More</a>
				  </div>
				</div>
			</div>
			<div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
				<div className="card" style={{ backgroundImage:"url('./images/background43.jpg')"}}>
				  <div className="card-body">
				    <h5 className="card-title">Occasions</h5>
				    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac feugiat neque.</p>
				     <a href="#" className="">View More</a>
				  </div>
				</div>
			</div>
		</div>
		</div>
		</section>
	);
}

export default Showmore;