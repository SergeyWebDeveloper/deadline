import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectUsers from './SelectUsers';
import * as firebase from 'firebase';
import {
	TableRow,
	TableRowColumn
} from 'material-ui/Table';

class ProjectItem extends Component{

	handleDate(e,time){
		let updates = {};
		updates['/deadline']=time;
		firebase.database().ref(`/projects/${this.props.project.serverKey}`).update(updates);
	}

	render(){
		const {link,name,performers,deadline,serverKey} = this.props.project;
		return(
			<TableRow>
				<TableRowColumn><a href={link}>{name}</a></TableRowColumn>
				<TableRowColumn>
					<SelectUsers keyProject={serverKey} id='main' title="Ответственные" person={performers.main}/>
				</TableRowColumn>
				<TableRowColumn>
					<SelectUsers keyProject={serverKey} id='inside' title="Ответственные" person={performers.inside} />
				</TableRowColumn>
				<TableRowColumn>
					<DatePicker
						floatingLabelText="Срок"
						defaultDate={new Date(deadline)}
					  onChange={(e,time)=>this.handleDate(e,time)}
					/>
				</TableRowColumn>
			</TableRow>
		)
	}
}

export default ProjectItem;