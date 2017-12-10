var Oscilloscope = require('oscilloscope')

navigator.getUserMedia({
	audio: true
}, (audioElement) => {
	var audioContext = new window.AudioContext()

	// create source from html5 audio element
	var source = audioContext.createMediaStreamSource(audioElement)

	// attach oscilloscope
	var scope = new Oscilloscope(source,{fftSize: 512})

	let width = window.innerWidth
	let height = window.innerHeight

	var canvas = document.getElementById('canvas')
	var context = canvas.getContext('2d')

	canvas.width = width
	canvas.height = height

	context.strokeStyle = '#fff'
	// start default animation loop
	scope.animate(context)
	window.scope = scope
}, (e)=> {
	console.log('something fucked up no logs! :)', e.message)
});
