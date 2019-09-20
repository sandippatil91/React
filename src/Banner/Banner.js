import React from 'react';
import './Banner.css';

const Banner = () => {
	return(
		<section className="banner-section" style ={{ backgroundImage: "url('./images/bg-background.jpg')" }}>
		<div className="banner-overlay"></div>
		<div className="banner-text">
		<h2>Photographer</h2>
		<h5>Photography Portfolio Websites</h5>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula. 
		Proin interdum vehicula neque sit amet scelerisque. Nulla imperdiet mollis libero, in efficitur ligula.</p>
		</div>
		</section>
		
	);
}

export default Banner;