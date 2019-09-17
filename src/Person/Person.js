import React from 'react';
import './Person.css';

const person = (props) => {
	return (
		<div className="person-box">
		<h3> My name is {props.name} and i am {props.age} year old. </h3>
		<p> {props.children} </p>
		<input type="text" onChange={props.changed} />
		</div>
		);
		
}

export default person;