import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
	state = {
			persons: [
			{ name:'Max' , age:28 },
			{ name:'Manu' , age:29 },
			{ name:'Santosh' , age:18 }
			],
			nameDetails: [
				{ name: 'Suraj'},
				{ name: 'Kumar'}
			],
			otherState:'Some other value',
			showPerson:false
		};
		
	clickme = (event) =>{
		this.setState({
			persons: [
			{ name:'Maximum' , age:28 },
			{ name:'Manu', age:29 },
			{ name:'Santosh' , age:20 }
			]
		});
	}

	newNameHandler = (event) => {
		this.setState({
			persons:[
			{name:'Manu', age:26},
			{name:event.target.value,age:28},
			{name:'Santosh',age:29}
			]
		});
	}

	changeName = (event) =>{
		
		this.setState({
			nameDetails:[
				{ name: 'Sita'},
				{ name:'Pravin'}
			]
		});
	}

	editName = (event) => {
		this.setState({
			nameDetails:[
				{ name:event.target.value},
				{ name:event.target.value}
			]
		});
	}

	togglePersonHandler = () => {
		const tog = this.state.showPerson;
		this.setState({showPerson:!tog});
	}


	

	render(){

		let person = null;

		if(this.state.showPerson){

			person = (
				<div>
			     <UserOutput name={this.state.nameDetails[0].name} />
			     <UserOutput name={this.state.nameDetails[1].name} />
			    </div>
			);
			
		}

	return (
	    <div className="App">
	     <h2>Welcome to React Js</h2>
	     <button onClick={this.clickme}>Switch Users</button>	<br />    
	     <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
	     <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.newNameHandler}> My hobbies:Racing </Person>
	     <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
	     <UserInput changed={this.editName} currentName={this.state.nameDetails[0].name}/>
	     <br /><button onClick={this.changeName}> Change Name </button><br /><br />
	     <button onClick={this.togglePersonHandler}>Show/Hide Content</button><br /><br />
	     {person?person:<div><p>Click on Show/Hide button for view content</p></div>}
	    </div>
	  );

	}
}

export default App;
