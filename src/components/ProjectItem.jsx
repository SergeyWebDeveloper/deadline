import React, {Component} from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';
import {
	TableRow,
	TableRowColumn
} from 'material-ui/Table';

class ProjectItem extends Component{
	constructor(){
		super();
		const minDate = new Date();
		minDate.setFullYear(minDate.getFullYear());
		this.state={
			minDate: minDate
		}
	}
	render(){
		return(
			<TableRow>
				<TableRowColumn>Test Project</TableRowColumn>
				<TableRowColumn>
					<SelectField
						floatingLabelText="Ответственный"
						value={1}
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
						value={1}
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
						defaultDate={this.state.minDate}
					/>
				</TableRowColumn>
			</TableRow>
		)
	}
}

export default ProjectItem;