import React, { Component } from 'react';
import axios from 'axios';
import config from '../assets/json/config.json';
import SchoolService from '../services/SchoolService';

class MyAccount extends Component{
	
	constructor(props){
		super(props);
		this.state = {items:''};
		this.SchoolService = new SchoolService();
	}
    
    componentWillMount(){
    	let loggedInUser   = JSON.parse(localStorage.getItem('loggedInUser'));
    	if(!loggedInUser)
	    {
	       loggedInUser = {};
	    }
    	let school_id = loggedInUser.school_id;
	      axios.get(config.api_url+':'+config.port+'/schools/school_details?school_id='+school_id+'&token='+config.api_token)
	      .then(
	      	response => { window.global.fclog(response);
	      	window.global.fclog(config);
	        this.setState({ items: response.data.school_details[0] });
	      })
	      .catch(function (error) {
	        window.global.fclog(error);
	      })
    } 

	render(){
		let loggedInUser   = JSON.parse(localStorage.getItem('loggedInUser'));
	    if(!loggedInUser)
	    {
	       loggedInUser = {};
	    }
	    let school_details = this.state.items;
		return(
			<div className="col-md-9  admin-content" id="profile">
			    <div class="panel panel-info  border-p" >
				<div class="panel-heading  head-title">
					<h3 class="panel-title">User details</h3>
				</div>
				<div class="panel-body">			   
			      <table className="table table-bordered table-striped">
			        <tbody>
			            <tr>
			                <th>Name:</th>
			                <td>{loggedInUser.name}</td>
			            </tr>
			            <tr>
			                <th>Email:</th>
			                <td>{loggedInUser.email}</td>
			            </tr>
			            <tr>
			                <th>ID:</th>
			                <td>{loggedInUser.member_no}</td>
			            </tr>
			            <tr>
			                <th>Cell Number:</th>
			                <td>{loggedInUser.phone}</td>
			            </tr>
			            <tr>
			                <th>Age:</th>
			                <td>{loggedInUser.age}</td>
			            </tr>
			        </tbody>
			    </table>
				</div>
				</div>
				<div class="panel panel-info   border-p">
					<div class="panel-heading   head-title">
						<h3 class="panel-title">School Details</h3>
					</div>
					<div class="panel-body">			    
						<table className="table table-bordered table-striped">
							<tbody>
								<tr>
									<th>School:</th>
									<td>{school_details.school_name}</td>
								</tr>
								<tr>
									<th>Web Url:</th>
									<td>{school_details.web_url}</td>
								</tr>
								<tr>
									<th>Address:</th>
									<td>{school_details.address}</td>
								</tr>
								<tr>
									<th>City:</th>
									<td>{school_details.city}</td>
								</tr>
								<tr>
									<th>State:</th>
									<td>{school_details.state}</td>
								</tr>
								<tr>
									<th>Country:</th>
									<td>{school_details.country}</td>
								</tr>
								<tr>
									<th>Pin code:</th>
									<td>{school_details.pincode}</td>
								</tr>
								<tr>
									<th>Phone:</th>
									<td>{school_details.phone}</td>
								</tr>
							</tbody>
						</table>
				</div>
				</div>
			</div>
		);
	}
}

export default MyAccount;