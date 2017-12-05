import React, {Component} from 'react';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';




class ListTableProject extends Component{

	constructor(){
		super();
		const minDate = new Date();
		minDate.setFullYear(minDate.getFullYear());
		this.state={
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: false,
			showRowHover: true,
			selectable: false,
			multiSelectable: false,
			enableSelectAll: false,
			showCheckboxes: true,
			height: '300px',
			minDate: minDate
		};
	}

	render(){
		return(
			<div className="table__info">
				<Table
					height={this.state.height}
					fixedHeader={this.state.fixedHeader}
					fixedFooter={this.state.fixedFooter}
					selectable={this.state.selectable}
					multiSelectable={this.state.multiSelectable}
				>
					<TableHeader
						displaySelectAll={this.state.showCheckboxes}
						adjustForCheckbox={this.state.showCheckboxes}
						enableSelectAll={this.state.enableSelectAll}
					>
						<TableRow>
							<TableHeaderColumn>Проект</TableHeaderColumn>
							<TableHeaderColumn>Ответственный за главную</TableHeaderColumn>
							<TableHeaderColumn>Ответственный за внутренние</TableHeaderColumn>
							<TableHeaderColumn>DeadLine</TableHeaderColumn>
						</TableRow>
					</TableHeader>
					<TableBody>
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
					</TableBody>
				</Table>
			</div>
		)
	}
}

export default ListTableProject;