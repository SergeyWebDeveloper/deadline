import {SIGNED_IN} from '../constants';

export default (state={},action)=>{
	switch(action.type){
		case SIGNED_IN:
			return action.payload;
		default:
			return state;
	}
}