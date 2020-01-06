import React,{ Component} from 'react';
import './form.css';
class Multiinput extends Component{ 
	constructor(props){
		super(props);
		this.state = {
			username:'',
			age:null,
			email:'',
			phone:null,
			usernameerrmessage:'',
			ageerrmessage:'',
			emailerrmessage:'',
			phoneerrmessage:'',
		};

	}
	validateFields(){
		let empty = '';
		if(this.state.username == "" ){
			empty = <strong>This field can not be empty </strong>;
			this.setState({usernameerrmessage:empty});
			empty="";
		}
		if(this.state.age == null ){
			empty = <strong>This field can not be empty </strong>;
			this.setState({ageerrmessage:empty});
			empty="";
		}
		if(this.state.email == "" ){
			empty = <strong>This field can not be empty </strong>;
			this.setState({emailerrmessage:empty});
			empty="";
		}
		if(this.state.phone == null ){
			empty = <strong>This field can not be empty </strong>;
			this.setState({phoneerrmessage:empty});
			empty="";
		}
	}
	formSubmitHandler = (event) => {
		event.preventDefault();
		this.validateFields();
		
	}


	onChangeHandler = (event) => {
		let num = event.target.name;
		let val = event.target.value;
		let usernameerr,ageerr,emailerr,phoneerr = '';
		switch(num){
			case 'username':
					if(num !="" && Number(val)){
						usernameerr = <strong>Username must be a string</strong>;
					}
					if(val == "" ){
						usernameerr = <strong>This field can not be empty</strong>;
					}
					this.setState({usernameerrmessage:usernameerr});
					break;
			case 'age':
					if(num != "" && !Number(val)){
						ageerr = <strong>Your age must be a number</strong>;
					}
					if(val == "" ){
						ageerr = <strong>This field can not be empty</strong>;
					}
					this.setState({ageerrmessage:ageerr});
					break;
			case 'email':
					if(val == "" ){
						emailerr = <strong>This field can not be empty</strong>;
					}
					this.setState({emailerrmessage:emailerr});
					break;
			case 'phone':
					if(num !="" && !Number(val)){
						phoneerr = <strong>Phone must be a number </strong>;
					}
					if(val == "" ){
						phoneerr = <strong>This field can not be empty</strong>;
					}
					this.setState({phoneerrmessage:phoneerr});
					break;


		}
		
		
		this.setState({[num]:val});
	}
	render(){
		return(
			<div className="container pt-1 pb-5">
			<div className="row pt-3 pb-5">
			<div className="col-md-12 text-left">
			<h2>Multiple Form Element </h2>
			<h3>Username:{this.state.username} and Age: {this.state.age}</h3>
			<form className="needs-validation" novalidate="novalidate" onSubmit={this.formSubmitHandler}>
				  <div className="form-row">
				   
				    <div className="form-group col-md-6">
				      <label>Username</label>
				      <input type="text" className="form-control" name="username" id="" onChange={this.onChangeHandler} required="required" />
				    	{this.state.usernameerrmessage}
				    </div>
				    <div className="form-group col-md-6">
				      <label>Age</label>
				      <input type="tel" className="form-control" name="age" id="" onChange={this.onChangeHandler} required="required" />
				      {this.state.ageerrmessage}
				    </div>
				    <div className="form-group col-md-6">
				      <label>Email</label>
				      <input type="email" className="form-control" name="email" id="" onChange={this.onChangeHandler} required="required" />
				      {this.state.emailerrmessage}
				    </div>
				    <div className="form-group col-md-6">
				      <label>Mobile No</label>
				      <input type="tel" className="form-control" name="phone" id="" onChange={this.onChangeHandler} required="required" />
				      {this.state.phoneerrmessage}
				    </div>
				  </div>
				 
				  <button type="submit" className="btn btn-success">Submit</button>
				 
				</form>
				</div>
				</div>
				</div>
		);
	}
}

export default Multiinput;