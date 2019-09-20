import React from 'react';
import './Story.css';

const Story = () => {
	return (
		<section className="story-section">
		<div className="container-fluid">
			<div className="row remove-space">
				<div className="col-12 col-md-6 col-lg-6 col-xl-6 ">
					<div className="story-left-box">
						<img src="./images/story-img.jpg" alt="story_image" />
					</div>
				</div>
				<div className="col-12 col-md-6 col-lg-6 col-xl-6">
					<div className="story-right-box pt-5">
						<h2 className="pt-5 pb-3">My Story</h2>
						<h3 className="pt-1 pb-3">Creative Photography</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. 
						Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique. 
						In augue diam, pellentesque nec pulvinar in, sagittis ac nulla. Sed eu lectus vitae justo vehicula viverra. 
						Aenean vel urna vitae massa consequat blandit. 
						Quisque sodales sapien vitae malesuada ultricies. Curabitur pretium ipsum non nunc facilisis semper.</p>
						<a href="www.google.com">View More</a>
					</div>
				</div>
			</div>
		</div>			
		</section>
	);
}

export default Story;