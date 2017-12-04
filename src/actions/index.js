import {SIGNED_IN} from '../constants';



export function infoUserSignIn(name, email) {
	return {
		type: SIGNED_IN,
		payload: {
			name,
			email
		}
	}
}