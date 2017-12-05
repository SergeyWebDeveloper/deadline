import {SIGNED_IN, SET_PROJECTS, SET_USERS} from '../constants';



export function infoUserSignIn(name, email) {
	return {
		type: SIGNED_IN,
		payload: {
			name,
			email
		}
	}
}

export function setProjects(projects) {
	return {
		type: SET_PROJECTS,
		projects
	}
}

export function setUsers(users) {
	return {
		type: SET_USERS,
		users
	}
}