// In the main process.
const {BrowserWindow, app} = require('electron')

// Or use `remote` from the renderer process.
// const {BrowserWindow} = require('electron').remote

app.on('ready',()=>{
	let win = new BrowserWindow({width: 800, height: 600})

	win.on('closed', () => {
	  win = null
	})


	// Or load a local HTML file
	win.loadURL(`file://${__dirname}/oscillon-core/index.html`)
})
