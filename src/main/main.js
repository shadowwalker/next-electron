// Packages
const { app, BrowserWindow } = require('electron')
// Constants
const isDev = !app.isPackaged

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function main () {
  function createMainWindow () {
    mainWindow = new BrowserWindow({
      width: 1080,
      height: 840,
      minWidth: 800,
      minHeight: 600
    })

    if (isDev) {
      // Open the DevTools.
      mainWindow.webContents.openDevTools()

      const port = process.env.PORT
      mainWindow.loadURL('http://localhost:' + port)
    } else {
      mainWindow.loadFile('public/index.html')
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null
    })
  }

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {
    createMainWindow()
  })

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
      createMainWindow()
    }
  })
}

main()
