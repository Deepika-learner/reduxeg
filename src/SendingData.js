import React from 'react'
import axios from 'axios'
class SendingData extends React.Component{
	constructor(){
		super();
		this.state={
			username:"",
			password:""
		}
		}
		handleChange=(e)=>{
			this.setState({
				[e.target.name]:e.target.value
			})
		}
		handleClick=()=>{
			console.log(this.state.username,this.state.password)
			axios.post("http://localhost:4000/register",
				{email:this.state.username,
					passcode:this.state.password})
			this.setState({
				username:"",
				password:""
			})
		}
		render(){
			return(
				<div>
					<p><input
					name="username"
					value={this.state.usernmae}
					onChange={this.handleChange} 
					placeholder="Enter username"/></p>
					<p><input
					name="password"
					value={this.state.password}
					onChange={this.handleChange} 
					placeholder="Enter password"/></p>
					<button onClick={this.handleClick}>Send</button>
				</div>
				)
		}
	}
export default SendingData