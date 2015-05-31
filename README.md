# A personal Finance app.

## External Libs
* Banking JS: https://github.com/euforic/banking.js
  * Used to make OFX calls to banks
  * Requires C library on Windows 8.X install VisualStudio 2013

* Electron: https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md
  * Electron is used to build a native desktop apps
  * API: https://github.com/atom/electron/tree/master/docs/api

## Recommended Atom Packages
* editorconfig: https://atom.io/packages/editorconfig
  * Manual configure of style guides
* JSHint: https://atom.io/packages/linter-jshint
  * Catching and fixing JS error
* atom-beautify: https://atom.io/packages/atom-beautify
  * Fixes code styles


## Notes:
The folder structure is that the (APP) is located in /src folder.

To install all dependencies run npm install.

(Windows Only)
To run the app in a command prompt navigate to the root of this project and type 'grunt test'.

## To Do:
- [X] Create App folder structure
- [X] Create grunt build file
- [ ] Build App!
- [ ] Externalize the top menu (json file?)
- [ ] Modify grunt build file to build distributable exe/app
- [ ] Add SQLite
- [ ] Save SQLite database in app data using .db extension (make sure can be read back in)
