# A personal Finance app.

## External Libs
Banking JS: https://github.com/euforic/banking.js
Used to make OFX calls to banks
Requires C library on Windows 8.X install VisualStudio 2013

Electron: https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md
Electron is used to build a native desktop apps

## Recommended Atom Packages
* editorconfig: https://atom.io/packages/editorconfig
  * Manual configure of style guides
* JSHint: https://atom.io/packages/linter-jshint
  * Catching and fixing JS error
* atom-beautify: https://atom.io/packages/atom-beautify
  * Fixes code styles


## Notes (Windows Only):
Until grunt package is setup you will need to manually run electron apps. You can do this multiple ways.

https://github.com/atom/electron/blob/master/docs/tutorial/application-distribution.md

You can also type electron into the command line and it will launch the electron app which you can drag/drop the source folder or run the command (it gives you a formatted command to run)

Currently the folder structure us setup so that this repo is the /app folder. This will be changed.

## To Do:
- [ ] Create App folder structure
- [ ] Create grunt build file
- [ ] Build App!
