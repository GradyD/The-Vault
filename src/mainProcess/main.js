var app = require('app'); // Module to control application life.
var BrowserWindow = require('browser-window'); // Module to create native browser window.
var ipc = require('ipc'); // Handles asynchronous and synchronous message sent from a renderer process (web page)
var Menu = require('menu');
var MenuItem = require('menu-item');

// Report crashes to our server.
// require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;
var menu = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // and load the index.html of the app.

  // This is a hack to get the correct path until we figure out a better/proper way
  var url = __dirname;
  if (url.substr(-1) == '/') {
    url = url.substr(0, url.length - 2);
  }
  url = url.split('\\');
  url.pop();
  url = url.join('\\');

  mainWindow.loadUrl('file://' + url + '/index.html');
  mainWindow.focus();

  // Open the devtools.
  mainWindow.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // darwin = mac
  if (process.platform == 'darwin') {
   var template = [
     {
       label: 'Electron',
       submenu: [
         {
           label: 'About Electron',
           selector: 'orderFrontStandardAboutPanel:'
         },
         {
           type: 'separator'
         },
         {
           label: 'Services',
           submenu: []
         },
         {
           type: 'separator'
         },
         {
           label: 'Hide Electron',
           accelerator: 'Command+H',
           selector: 'hide:'
         },
         {
           label: 'Hide Others',
           accelerator: 'Command+Shift+H',
           selector: 'hideOtherApplications:'
         },
         {
           label: 'Show All',
           selector: 'unhideAllApplications:'
         },
         {
           type: 'separator'
         },
         {
           label: 'Quit',
           accelerator: 'Command+Q',
           click: function() { app.quit(); }
         },
       ]
     },
     {
       label: 'Edit',
       submenu: [
         {
           label: 'Undo',
           accelerator: 'Command+Z',
           selector: 'undo:'
         },
         {
           label: 'Redo',
           accelerator: 'Shift+Command+Z',
           selector: 'redo:'
         },
         {
           type: 'separator'
         },
         {
           label: 'Cut',
           accelerator: 'Command+X',
           selector: 'cut:'
         },
         {
           label: 'Copy',
           accelerator: 'Command+C',
           selector: 'copy:'
         },
         {
           label: 'Paste',
           accelerator: 'Command+V',
           selector: 'paste:'
         },
         {
           label: 'Select All',
           accelerator: 'Command+A',
           selector: 'selectAll:'
         },
       ]
     },
     {
       label: 'View',
       submenu: [
         {
           label: 'Reload',
           accelerator: 'Command+R',
           click: function() { mainWindow.restart(); }
         },
         {
           label: 'Toggle Full Screen',
           accelerator: 'Ctrl+Command+F',
           click: function() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
         },
         {
           label: 'Toggle Developer Tools',
           accelerator: 'Alt+Command+I',
           click: function() { mainWindow.toggleDevTools(); }
         },
       ]
     },
     {
       label: 'Window',
       submenu: [
         {
           label: 'Minimize',
           accelerator: 'Command+M',
           selector: 'performMiniaturize:'
         },
         {
           label: 'Close',
           accelerator: 'Command+W',
           selector: 'performClose:'
         },
         {
           type: 'separator'
         },
         {
           label: 'Bring All to Front',
           selector: 'arrangeInFront:'
         },
       ]
     },
     {
       label: 'Help',
       submenu: [
         {
           label: 'Learn More',
           click: function() { require('shell').openExternal('http://electron.atom.io'); }
         },
         {
           label: 'Documentation',
           click: function() { require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme'); }
         },
         {
           label: 'Community Discussions',
           click: function() { require('shell').openExternal('https://discuss.atom.io/c/electron'); }
         },
         {
           label: 'Search Issues',
           click: function() { require('shell').openExternal('https://github.com/atom/electron/issues'); }
         }
       ]
     }
   ];

   menu = Menu.buildFromTemplate(template);
   Menu.setApplicationMenu(menu);
 } else {
   var template = [
     {
       label: '&App',
       submenu: [
         {
           label: "&Login",
           accelerator: "Ctrl+L",
           click: function() { console.log('this will eventually open a login menu'); }
         },
         {
           label: '&Close',
           accelerator: 'Ctrl+W',
           click: function() { mainWindow.close(); }
         },
       ]
     },
     {
       label: '&View',
       submenu: [
         {
           label: '&Reload',
           accelerator: 'Ctrl+R',
           click: function() { mainWindow.restart(); }
         },
         {
           label: 'Toggle &Full Screen',
           accelerator: 'F11',
           click: function() { mainWindow.setFullScreen(!mainWindow.isFullScreen()); }
         },
         {
           label: 'Toggle &Developer Tools',
           accelerator: 'Alt+Ctrl+I',
           click: function() { mainWindow.toggleDevTools(); }
         },
       ]
     },
     {
       label: 'Help',
       submenu: [
         {
           label: 'Learn More',
           click: function() { require('shell').openExternal('http://electron.atom.io'); }
         },
         {
           label: 'Documentation',
           click: function() { require('shell').openExternal('https://github.com/atom/electron/tree/master/docs#readme'); }
         },
         {
           label: 'Community Discussions',
           click: function() { require('shell').openExternal('https://discuss.atom.io/c/electron'); }
         },
         {
           label: 'Search Issues',
           click: function() { require('shell').openExternal('https://github.com/atom/electron/issues'); }
         }
       ]
     }
   ];

   menu = Menu.buildFromTemplate(template);
   mainWindow.setMenu(menu);
 }
});

// Synchronously returns the path to name where name is one of https://github.com/atom/electron/blob/master/docs/api/app.md#appgetpathname
ipc.on('sync-getPath', function(event, pathName) {
  event.returnValue = app.getPath(pathName);
});

// Asynchronously returns the path to name where name is one of https://github.com/atom/electron/blob/master/docs/api/app.md#appgetpathname
ipc.on('async-getPath', function(event, pathName) {
  event.sender.send('async-returnPath', app.getPath(pathName));
});

// Example code taken from https://github.com/atom/electron/blob/master/docs/api/ipc-main-process.md
// ipc.on('asynchronous-message', function(event, arg) {
//   console.log(arg);  // prints "ping"
//   event.sender.send('asynchronous-reply', 'pong');
// });
//
// ipc.on('synchronous-message', function(event, arg) {
//   console.log(arg);  // prints "ping"
//   event.returnValue = 'pong';
// });
