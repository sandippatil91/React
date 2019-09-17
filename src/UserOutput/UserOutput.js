import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

	const nameStyle = {
		fontSize:'20px',
		fontWeight:'bold',
		color:'red'
	};
		return(
			<div className="outupt-mainbox">
				<h2 style={nameStyle}>UserName:&nbsp;{props.name}</h2><br />
				<h1>UserOutput component</h1><br />
				<h3>First Paragraph:</h3>
				<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
				graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
				who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a 
				type specimen book.</p>
				<h3>Second Paragraph:</h3>
				<p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, 
				graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century
				who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a 
				type specimen book.</p>
			</div>
		);
	
}

export default UserOutput;