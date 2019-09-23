import React from 'react';
import './Progress.css';

const Progress = () => {
	return(
			<section className="progress-section">
			<div className="container">
				<div className="row pt-3 pb-5" id="counter">
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card">
						  <i className="fa fa-globe" aria-hidden="true"></i>
						  <div className="card-body">
						  	<h1><span className="counter-value" data-count="2937">0</span></h1>
						    <h5 className="card-title">Photography</h5>
						    <p className="card-text">
						    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum.</p>
						    
						  </div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<div className="card" >
						  <i className="fa fa-industry" aria-hidden="true"></i>
						  <div className="card-body">
						  	<h1><span className="counter-value" data-count="1286">0</span></h1>
						    <h5 className="card-title">Videography</h5>
						    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum.</p>
						    
						  </div>
						</div>
					</div>
					<div className="col-12 col-md-12 col-lg-4">
						<div className="title-wrap">
							<div className="progress-title">Photography</div>
							<div className="progress_value">100%</div>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-primary" role="progressbar" style={{ width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
						</div><br />
						<div className="title-wrap">
							<div className="progress-title">Design</div>
							<div className="progress_value">90%</div>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
						</div><br />
						<div className="title-wrap">
							<div className="progress-title">Art</div>
							<div className="progress_value">80%</div>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '80%'}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
						</div><br />
						<div className="title-wrap">
							<div className="progress-title">Coverage</div>
							<div className="progress_value">70%</div>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{ width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
						</div><br />
						<div className="title-wrap">
							<div className="progress-title">Videography</div>
							<div className="progress_value">60%</div>
						</div>
						<div className="progress">
						  <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
						</div>
					</div>

				</div>
			</div>
			</section>
	);
}

export default Progress ;