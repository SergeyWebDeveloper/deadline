import React, {Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import SelectUsers from './SelectUsers';
import {
	TableRow,
	TableRowColumn
} from 'material-ui/Table';

class ProjectItem extends Component{
	render(){
		const {link,name,performers,deadline} = this.props.project;
		return(
			<TableRow>
				<TableRowColumn><a href={link}>{name}</a></TableRowColumn>
				<TableRowColumn>
					<SelectUsers title="Ответственные" person={performers.main}/>
				</TableRowColumn>
				<TableRowColumn>
					<SelectUsers title="Ответственные" person={performers.inside} />
				</TableRowColumn>
				<TableRowColumn>
					<DatePicker
						floatingLabelText="Дата"
						defaultDate={new Date(deadline)}
					/>
				</TableRowColumn>
			</TableRow>
		)
	}
}

export default ProjectItem;