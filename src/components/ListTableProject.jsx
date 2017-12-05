import React, {Component} from 'react';
import {projectsDB,personalDB} from '../firebase';
import {connect} from 'react-redux';
import {setProjects,setUsers} from '../actions';
import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow
} from 'material-ui/Table';
import ProjectItem from './ProjectItem';





class ListTableProject extends Component{

	constructor(){
		super();
		this.state={
			fixedHeader: true,
			fixedFooter: true,
			stripedRows: false,
			showRowHover: false,
			selectable: true,
			multiSelectable: false,
			enableSelectAll: false,
			deselectOnClickaway: true,
			showCheckboxes: true,
			height: '300px',
		};
	}

	componentDidMount(){
		projectsDB.on('value', snap=>{
			let projects=[];
			snap.forEach((project)=>{
				const {completed,deadline,id,link,name,performers} = project.val();
				const serverKey = project.key;
				projects.push({completed,deadline,id,link,name,performers,serverKey});
			});
			this.props.setProjects(projects);
		});
		personalDB.on('value', snap=>{
			let users=[];
			snap.forEach((user)=>{
				const {active,id,name,post} = user.val();
				const serverKey = user.key;
				users.push({active,id,name,post,serverKey});
			});
			this.props.setUsers(users);
		});
	}

	render(){
		return(
			<div className="table__info">
				{!this.props.projects.length ? 'Загрузка...' : ''}
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
						{
							this.props.projects.map((project)=>{
								return (<ProjectItem key={project.serverKey} project={project} />);
							})
						}
					</TableBody>
				</Table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		projects: state.projects,
		usersCompany: state.usersCompany
	}
}

export default connect(mapStateToProps,{setProjects,setUsers})(ListTableProject);