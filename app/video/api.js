// const { ajax } = require('jquery')
const config = require('../config.js')
const store = require('../store.js')

const index = function () {
	return $.ajax({
		url: config.apiUrl + '/videos',
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

const show = function (videoId) {
	return $.ajax({
		url: config.apiUrl + '/videos/' + videoId,
		method: 'GET',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}

const create = function (videoData) {
	console.log('data: ', videoData)
	return $.ajax({
		url: config.apiUrl + '/videos',
		method: 'POST',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
		data: videoData,
	})
}

const update = function (id, formData) {
	return $.ajax({
		url: config.apiUrl + '/videos/' + id,
		method: 'PATCH',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
		data: formData,
	})
}
const destroy = function (id) {
	return $.ajax({
		url: config.apiUrl + '/videos/' + id,
		method: 'DELETE',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
		},
	})
}


module.exports = {
	index,
	show,
	create,
	update,
	destroy,
}
