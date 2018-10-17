// Packages
const { shell, BrowserWindow } = require('electron')

module.exports = class {
  constructor (isDev) {
    this.isDev = isDev
    this.win = null
  }

  create () {
    // main window is singleton
    if (this.win !== null) {
      return
    }

    // https://github.com/electron/electron/blob/master/docs/api/browser-window.md
    this.win = new BrowserWindow({
      width: 1080,
      height: 540,
      resizable: false
    })

    if (this.isDev) {
      this.win.webContents.openDevTools()

      const port = process.env.PORT
      this.win.loadURL('http://localhost:' + port)
    } else {
      this.win.loadFile('public/index.html')
    }

    // links need to be open in system default browser instead of the window
    this.win.webContents.on('will-navigate', (event, url) => {
      if (url !== event.sender.getURL()) {
        event.preventDefault()
        shell.openExternal(url)
      }
    })

    this.win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      this.win = null
    })
  }

  destroy () {
    this.win = null
  }
}
