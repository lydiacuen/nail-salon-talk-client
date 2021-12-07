'use strict'
// require the get fromfields function to get data
const getFormFields = require('../../lib/get-form-fields')

// required our api uth functions and ui functions to update the page
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
	event.preventDefault()
	//   event.target is the from that caused the submit event
	const form = event.target
	//   get the data from the form element
	const formData = getFormFields(form)
	// make a post /signup request, pass it the email/password/confirmation
	api
		.signUp(formData)
		//   if our sign up is successful run the then function
		.then(ui.signUpSuccess)
		// if our sign up fails run the catch
		.catch(ui.signUpFailure)
}

//   if our sign up is successful run the then function
const onSignIn = (event) => {
	event.preventDefault()
	//   event.target is the from that caused the submit event
	const form = event.target
	//   get the data from the form element
	const formData = getFormFields(form)
	// make a post /signup request, pass it the email/password/confirmation
	api
		.signIn(formData)
		.then(ui.signInSuccess)
		// if our sign up fails run the catch
		.catch(ui.signInFailure)
}

const onChangePassword = (event) => {
	event.preventDefault()
	//   event.target is the from that caused the submit event
	const form = event.target
	//   get the data from the form element
	const formData = getFormFields(form)
	// make a Patch /change-password request, pass it the old password/new password
	api
		.changePassword(formData)
		//   if our sign up is successful run the then function
		.then(ui.changePasswordSuccess)
		// if our sign up fails run the catch
		.catch(ui.changePasswordFailure)
}

const onSignOut = (event) => {
	event.preventDefault()
	//   event.target is the from that caused the submit event
	const form = event.target
	//   get the data from the form element
	// const formData = getFormFields(form)
	// make a Patch /change-password request, pass it the old password/new password
	api
		.signOut(form)
		//   if our sign up is successful run the then function
		.then(ui.signOutSuccess)
		// if our sign up fails run the catch
		.catch(ui.signOutFailure)
}

// this add all the methods in one function
const addHandlers = () => {
	$('#sign-up').on('submit', onSignUp)
	$('#sign-in').on('submit', onSignIn)
	$('#sign-out').on('submit', onSignOut)
	$('#change-password').on('submit', onChangePassword)
}

// export our event handler functions so we can use them in app.js
module.exports = {
	addHandlers,
}
