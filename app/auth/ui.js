'use strict'
// required the store object, we will use it to share data between different files
const store = require('../store')

const signUpSuccess = (responseData) => {
	// tell the user it was successful
	$('#videos-display').text('Signed up successfully!')
	//   removes all classes, then adds the green text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-success')
	// clear (reset) all form fields
	$('form').trigger('reset')
	console.log('responseData is :', responseData)
}

// tell the user it was a failure
const signUpFailure = (e) => {
	// tell the user it was failure
	$('#videos-display').text('Signed up Failure!')
	//   removes all classes, then adds the red text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-danger')

	console.error('error is ', e)
}

const signInSuccess = (responseData) => {
	// we are going to add the user we got back in our responses data
	// to the store object. so we can access the users token later
	// in api.js
	store.user = responseData.user
	console.log(store)

	// tell the user it was successful
	$('#videos-display').text('Signed In successfully!')
	//   removes all classes, then adds the green text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-success')
	// clear (reset) all form fields
	$('form').trigger('reset')
	// after we sign in hide the section with the id before sign in
	$('#before-sign-in').hide()
	// display elements after you sign in
	$('#after-sign-in').show()

	console.log('responseData is :', responseData)
}

// tell the user it was a failure
const signInFailure = (e) => {
	// tell the user it was failure
	$('#videos-display').text('Signed In Failure!')
	//   removes all classes, then adds the red text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-danger')

	console.error('error is ', e)
}

const changePasswordSuccess = (responseData) => {
	// tell the user it was successful
	$('#videos-display').text('Changed Password successfully!')
	//   removes all classes, then adds the green text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-success')
	// clear (reset) all form fields
	$('form').trigger('reset')
	console.log('responseData is :', responseData)
}

// tell the user it was a failure
const changePasswordFailure = (e) => {
	// tell the user it was failure
	$('#videos-display').text('Changing Passwords Failed!')
	//   removes all classes, then adds the red text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-danger')

	console.error('error is ', e)
}

const signOutSuccess = (responseData) => {
	// tell the user it was successful
	$('#videos-display').text('Signed Out successfully!')
	//   removes all classes, then adds the green text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-success')
	// clear (reset) all form fields
	
	$('#before-sign-in').show()
	// display elements after you sign in
	$('#after-sign-in').hide()
	
	console.log('responseData is :', responseData)
	$('form').trigger('reset')
}

// tell the user it was a failure
const signOutFailure = (e) => {
	// tell the user it was failure
	$('#videos-display').text('SignOut Failed!')
	//   removes all classes, then adds the red text success class
	// from bootstrap
	$('#videos-display').removeClass()
	$('#videos-display').addClass('text-danger')

	console.error('error is ', e)
}

module.exports = {
	signUpSuccess,
	signUpFailure,
	signInSuccess,
	signInFailure,
	changePasswordSuccess,
	changePasswordFailure,
	signOutSuccess,
	signOutFailure,
}
