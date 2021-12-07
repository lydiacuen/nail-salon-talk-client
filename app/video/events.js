const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onIndexVideos = (event) => {
	event.preventDefault()
	console.log('all videos coming right up!')
	api.index().then(ui.onIndexVideosSuccess).catch(ui.onError)
}

const onShowVideo = (event) => {
	event.preventDefault()
	console.log('onShowVideo ran!')
	const data = getFormFields(event.target)
	const videoId = data.video.id
	console.log(data)
	api.show(videoId).then(ui.onShowVideoSuccess).catch(ui.onError)
}

const onCreateVideo = (event) => {
	event.preventDefault()
	console.log('Video was Created')
	const data = getFormFields(event.target)
	api.create(data).then(ui.onCreateVideoSuccess).catch(ui.onError)
}

const onUpdateVideo = (event) => {
	event.preventDefault()
	console.log('On Update video ran!')
	const data = getFormFields(event.target)
	const id = data.video.id
	api.update(id, data).then(ui.onUpdateVideoSuccess).catch(ui.onError)
}

const onDestroyVideo = (event) => {
	event.preventDefault()
	console.log('On Delete Worked')
	const data = getFormFields(event.target)
	const videoId = data.video.id
	api.destroy(videoId).then(ui.onDeleteVideoSuccess).catch(ui.onError)
}

const onDynamicDestroyVideo = (event) => {
	const id = $(event.target).data('id')
	console.log(id)
	api.destroy(id).then(ui.onDeleteVideoSuccess).catch(ui.onError)
}

const onDynamicUpdateVideo = (event) => {
	event.preventDefault()
	const data = getFormFields(event.target)
	console.log(data)
	const videoId = $(event.target).data('id')
	api.update(videoId, data).then(ui.onUpdateVideoSuccess).catch(ui.onError)
}

module.exports = {
	onIndexVideos,
	onShowVideo,
	onCreateVideo,
	onDestroyVideo,
	onDynamicDestroyVideo,
	onDynamicUpdateVideo,
	onUpdateVideo,
}
