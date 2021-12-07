'use strict'
const config = require('../config')
// require the store file so we have access to the store object
// thats where the token is stored when making authenticated request
const store = require('../store')

// formData will be our credentials object w/email, password, and confirmation
const signUp = (formData) => {
	// make a request to POST /sign-up
	return $.ajax({
		url: `${config.apiUrl}/sign-up`,
		method: 'POST',
		// make sure to send the formData along as the body of our request
		// this is similar to the form data in our curlscript
		data: formData,
	})
}

const signIn = (formData) => {
	return $.ajax({
		url: `${config.apiUrl}/sign-in`,
		method: 'POST',
		// make sure to send the formData along as the body of our request
		// this is similar to the form data in our curlscript
		data: formData,
	})
}
// formData will be our passwords object w /old and new passwords
const changePassword = (formData) => {
	return $.ajax({
		url: `${config.apiUrl}/change-password`,
		method: 'PATCH',
		// make sure to send the formData along as the body of our request
		// this is similar to the form data in our curlscript
		data: formData,
		// Add our authorization header so the api can use the token so they can know
		// which user wants to change there password
		headers: {
			Authorization: `Bearer ${store.user.token}`,
		},
	})
}

const signOut = () => {
	return $.ajax({
		url: `${config.apiUrl}/sign-out`,
		method: 'DELETE',
		// make sure to send the formData along as the body of our request
		// this is similar to the form data in our curlscript
		// Add our authorization header so the api can use the token so they can know
		// which user wants to change there password
		headers: {
			Authorization: `Bearer ${store.user.token}`,
		},
	})
}

module.exports = {
	signUp,
	signIn,
	changePassword,
	signOut,
}
