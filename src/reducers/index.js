import {combineReducers} from 'redux';
import user from './reducer_user';
import usersCompany from './reducer_setuser';
import projects from './reducer_setprojects';

export default combineReducers({
	user,
	usersCompany,
	projects
});