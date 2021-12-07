const onCreateVideoSuccess = (responseData) => {
	const video = responseData.video
	console.log(video)
	const videoHtml = `
  <div>
        <h4>Name: ${video.name}<h4/>
        <p>Episode Number: ${video.episodeNumber}</p>
        <p>Description: ${video.description}</p>
        <p>id: ${video._id}</p>
        </div>
  `

	$('#videos-display').html(videoHtml)
	$('form').trigger('reset')
}

const showUpdateVideo = () => {
	$('#popup-update').toggle()
}
const showCreateVideo = () => {
	$('#popup-create').toggle()
}

const onUpdateVideoSuccess = () => {
	$('#videos-display').text('Video was Updated, click get all to see')
	$('#videos-display').addClass('text-success')

	setTimeout(() => {
		
		$('#videos-display').html('')
		
		$('#videos-display').removeClass('text-success')
	}, 5000)

	$('form').trigger('reset')
}

const onIndexVideosSuccess = (responseData) => {
	const videos = responseData.videos
	console.log(responseData)
	let videoHtml = ''
	videos.forEach((video) => {
		videoHtml += `
      <div>
        <h4>Name: ${video.name}<h4/>
        <p>Episode Number: ${video.episodeNumber}</p>
        <p>Description: ${video.description}</p>
        <p>ID: ${video._id}</p>
          <hr>
        </div>  
      `
	})

	$('#videos-display').html(videoHtml)
	
}



const onShowVideoSuccess = function (responseData) {
	const video = responseData.video
	console.log(video)
	const videoHtml = `
  <div>
        <h4>Name: ${video.name}<h4/>
        <p>Episode Number: ${video.episodeNumber}</p>
        <p>Description: ${video.description}</p>
        <p>id: ${video._id}</p>
        </div>
  `

	$('#videos-display').html(videoHtml)
	$('form').trigger('reset')
}

const onDeleteVideoSuccess = function () {
	$('#videos-display').text('Video was Deleted')
	$('#videos-display').addClass('text-success')
	setTimeout(() => {
		$('#videos-display').html('')
		$('#videos-display').removeClass('text-success')
	}, 5000)

	$('form').trigger('reset')
}

const onError = (err) => {
	console.log(err)
	$('#error-message').text('Something went wrong please try again ')
	$('#error-message').addClass('text-danger')

	setTimeout(() => {
		// remove the message from error-message
		$('#error-message').html('')
		// remove the color from error-message
		$('#error-message').removeClass('text-danger')
	}, 5000)

	$('form').trigger('reset')
}
module.exports = {
	onCreateVideoSuccess,
	onUpdateVideoSuccess,
	onIndexVideosSuccess,
	onShowVideoSuccess,
	onDeleteVideoSuccess,
	showUpdateVideo,
	showCreateVideo,
	onError,
}
