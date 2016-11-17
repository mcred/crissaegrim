const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const {ipcMain} = require('electron')
const {dialog} = require('electron')

const path = require('path')
const url = require('url')
const fs = require('fs')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 620})

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

ipcMain.on('showOpenDialog', () => {
  dialog.showOpenDialog((function (fileNames) {
    if (fileNames === undefined) {
      console.log('No file selected');
    } else {
      fs.readFile(fileNames[0], 'hex', (function (err, data) {
        if (err) {
          this.alert(`An error ocurred reading the file : ${err.message}`);
          return;
        }
        mainWindow.webContents.send('getFile', data);
      }));
    }
  }));
});
