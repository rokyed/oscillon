const AudioOscilloscope = require('audio-oscilloscope')
window.AudioContext = window.AudioContext || window.webkitAudioContext;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
window.URL = window.URL || window.webkitURL;

var audioContext;
var oscilloscope;

function init() {
	oscilloscope = AudioOscilloscope(document.getElementById('canvas'), {
		canvas: {
			width: function() {
				return window.innerWidth;
			},
			height: function() {
				return window.innerHeight;
			}
		},
		canvasContext: {
			lineWidth: 1,
			fillStyle: 'rgb(0,0,0)',
			strokeStyle: 'green'
		},
		});

		// oscilloscope.on('drawFrame', function(osc) {
		// ar c = osc.canvas;
		// ar ctx = osc.canvasContext;
		// ar gradient = ctx.createLinearGradient(0,0,c.width,0);
		// radient.addColorStop(0, randomColor());
		// radient.addColorStop(0.5, randomColor());
		// radient.addColorStop(1, randomColor());
		// tx.strokeStyle = gradient;
		// });

		oscilloscope.draw();

		try {
			audioContext = new AudioContext();
		} catch (e) {
			alert('No web audio support in this browser!');
		}

		navigator.getUserMedia({
			audio: true
		}, startUserMedia, userMediaError);
	}


	function startUserMedia(stream) {
		var streamSource = audioContext.createMediaStreamSource(stream);
		oscilloscope.addSource(streamSource);
	}

	function userMediaError(error) {
		console.error(error);
	}

	window.onload = init;
