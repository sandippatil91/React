import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

		const mainHeading = {
			color:'skyblue',
			fontSize:'18px',
			fontWeight:'bold'
		};

		return(
				<div className="userinput-mainbox">
				<h1 style={mainHeading}> UserInput Component</h1><br />
				First Field:&nbsp;<input type="text" onChange={props.changed} value={props.currentName} /> <br /><br />
				Second Field:&nbsp;<input type="text" onChange={props.changed} />
				</div>
			);
	
} 
export default UserInput;