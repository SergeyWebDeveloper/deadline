import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {connect} from 'react-redux'


class SelectUsers extends Component{

	handleChange(e,data,key){
		console.log(key);
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