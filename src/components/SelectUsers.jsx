import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux';
import * as firebase from 'firebase';


class SelectUsers extends Component{

	handleChange(e,data,key){
		let updates = {};
		if(this.props.id==='main'){
			updates['/main']=key;
		} else if(this.props.id==='inside'){
			updates['/inside']=key;
		}
		firebase.database().ref(`/projects/${this.props.keyProject}/performers`).update(updates);
	}

	render(){
		const {title,person,usersCompany} = this.props;
		return(
			<SelectField
				floatingLabelText={title}
				value={person}
			  onChange={(e,data,key)=>this.handleChange(e,data,key)}
			>
				{this.props.usersCompany.map((user)=>{
					return <MenuItem key={user.serverKey} value={user.serverKey} primaryText={user.name} />;
				})}
			</SelectField>
		)
	}
}

function mapStateToProps(state) {
	return {
		usersCompany: state.usersCompany
	}
}

export default connect(mapStateToProps,null)(SelectUsers);