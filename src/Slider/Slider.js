import React from 'react';
import './Slider.css';

const Slider = () => {
	const sliderSection = {
		height:'auto',
		width:'100%'
	}
	const sliderBox = {
		width:'100%',
		height:'250px',
		display:'inline-block'
	}
	const imgHeight = {
		height:'450px'
	}
		return(
				<section style={sliderSection}>
				<div className="bd-example" style={sliderBox}>
				  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				    <ol className="carousel-indicators">
				      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
				      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				    </ol>
				    <div className="carousel-inner">
				      <div className="carousel-item active">
				        <img style={imgHeight} src="./images/1.jpg" className="d-block w-100" alt="" />
				        <div className="carousel-caption d-none d-md-block">
				          <h5>First slide label</h5>
				          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				        </div>
				      </div>
				     
				      <div className="carousel-item">
				        <img style={imgHeight} src="./images/3.jpg" className="d-block w-100" alt="" />
				        <div className="carousel-caption d-none d-md-block">
				          <h5>Third slide label</h5>
				          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				        </div>
				      </div>
				    </div>
				    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				      <span className="sr-only">Previous</span>
				    </a>
				    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				      <span className="carousel-control-next-icon" aria-hidden="true"></span>
				      <span className="sr-only">Next</span>
				    </a>
				  </div>
				</div>
				</section>
		);
}
export default Slider;