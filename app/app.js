// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const videoEvents = require('./video/events')
const videoUi = require('./video/ui')
$(() => {
	// your JS code goes here
	authEvents.addHandlers()

	$('#videos-index').on('click', videoEvents.onIndexVideos)
	$('#videos-show').on('submit', videoEvents.onShowVideo)
	$('#videos-create').on('submit', videoEvents.onCreateVideo)
	$('#updateVidBtn').on('click', videoUi.showUpdateVideo)
	$('#createVidBtn').on('click', videoUi.showCreateVideo)

	$('#videos-update').on('submit', videoEvents.onUpdateVideo)
	$('#delete-video').on('submit', videoEvents.onDestroyVideo)
	$('#videos-display').on(
		'click',
		'.videos-destroy-dynamic',
		videoEvents.onDynamicDestroyVideo
	)
	$('#videos-display').on(
		'submit',
		'.videos-update-dynamic',
		videoEvents.onDynamicUpdateVideo
	)
})
