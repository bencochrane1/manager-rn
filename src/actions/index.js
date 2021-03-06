import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
	return {
		type: EMAIL_CHANGED,
		payload: text
	}
}

export const passwordChanged = (text) => {
	return {
		type: PASSWORD_CHANGED,
		payload: text
	}
}

export const loginUser = ({ email, password }) => {

	// return (dispatch) => {
	// 	firebase.auth().signInWithEmailAndPassword(email, password)
	// 	.then(user => {
	// 		dispatch({ type: 'LOGIN_USER_SUCCESS', payload: user });
	// 	});
	// }

	return async (dispatch) => {
		try {
			const user = await firebase.auth().signInWithEmailAndPassword(email, password);
			dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
		} catch(err) {
			console.error(err);
		}
	}
};