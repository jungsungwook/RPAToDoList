const {app, BrowserWindow} = require('electron')
// --type = "product" or "development"
function createWindow () {
  // Create the browser window.
    let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        nodeIntegration: true
    }
    })
    process.env.REACT_APP_ENV === 'development' ? win.loadURL('http://localhost:3000') : win.loadFile('./public/index.html')

    // Open the DevTools.
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})