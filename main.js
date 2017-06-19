// const g6 = require('./g6')
// const j6 = require('j6')

const {app, BrowserWindow} = require('electron')

let mainWindow

// const console = require('console');

// app.console.log('hello')
// console.log('hello')
// console.log('argv=%j', process.argv)

console.log('your output to command prompt console or node js ')
// process.stdout.write('your output to command prompt console or node js ')

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin')
    app.quit()
})


// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});
//  mainWindow = new BrowserWindow({width: 1000, height: 700});

//  var scriptFile = process.argv[2]
// Open the DevTools.
//  mainWindow.webContents.openDevTools()
  
  console.log('file://' + __dirname + '/g6.html')

  var scriptFile = process.argv[2]
  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/g6.html#' + scriptFile);
//  mainWindow.console.log('mainWindow.console.log...')

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
