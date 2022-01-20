const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    })

    win.loadURL('http://localhost:3000') //: `file://${path.join(__dirname, '../build/index.html')}`)

    if (true) {
        win.webContents.openDevTools({ mode: 'detach' })
    }
}

ipcMain.on('close-me', () => {
    app.quit()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.whenReady().then(() => {
    createWindow()
})
