import {SET_PROJECTS} from '../constants';

export default (state=[],action)=>{
	switch (action.type){
		case SET_PROJECTS:
			return action.projects;
		default:
			return state;
	}
}
