import React, {Component} from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
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
					<SelectField
						floatingLabelText="Ответственный"
						value={performers.main}
					>
						<MenuItem value={1} primaryText="Never" />
						<MenuItem value={2} primaryText="Every Night" />
						<MenuItem value={3} primaryText="Weeknights" />
						<MenuItem value={4} primaryText="Weekends" />
						<MenuItem value={5} primaryText="Weekly" />
					</SelectField>
				</TableRowColumn>
				<TableRowColumn>
					<SelectField
						floatingLabelText="Ответственный"
						value={performers.inside}
					>
						<MenuItem value={1} primaryText="Never" />
						<MenuItem value={2} primaryText="Every Night" />
						<MenuItem value={3} primaryText="Weeknights" />
						<MenuItem value={4} primaryText="Weekends" />
						<MenuItem value={5} primaryText="Weekly" />
					</SelectField>
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