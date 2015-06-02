# The Vault

## External Libs
* Banking JS: https://github.com/euforic/banking.js
  * Used to make OFX calls to banks
  * Requires C library on Windows 8.X install VisualStudio 2013

* Electron: https://github.com/atom/electron/blob/master/docs/tutorial/quick-start.md
  * Electron is used to build a native desktop apps
  * API: https://github.com/atom/electron/tree/master/docs/api

* Winston Logger https://github.com/winstonjs/winston
  * Used as our log generator (logger)
  * Docs: https://github.com/winstonjs/winston#usage

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
  - [ ] Figure out waht methods are needed for database.js (create, load, update, insert, select, run query, etc)
  - [ ] Save SQLite database in app data using .db extension (make sure can be read back in)
  - [ ] Read in bank statements ('Add Bank Statement' aka file open);
- [X] Add logging to config.js
- [X] Add logging to index.html
- [ ] Adjust logging to roll logs ever X minutes or at specific size
- [ ] Log cleanup (delete after 5 days?)
- [ ] Figure out what methods are needed for config.js (load, update, etc)
