const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 450,
    resizable: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})