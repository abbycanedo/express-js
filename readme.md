# Sample App
## Sample frontend setup using ExpressJS, Jade, Stylus, and React.

## Setup

If you're cloning this project and just want to get started playing with code, just install the npm and bower dependencies.

```
npm install
bower install
```

The app uses nodemon to automatically restart the server, and gulp to build an watch our ```.jsx``` files. So install those as well.

```
npm install -g nodemon
npm install -g gulp
```

And you're done! Run the server via ```nodemon server.js``` and hulp via ```gulp```. You can now access the app via ```localhost:3000``` with the following routes:

* ```/```: default ExpressJS homepage.
* ```/test```: test page for foundation and fontawesome.
* ```/test/stylus```: default test page for stylus.
* ```/test/react```: test page for react.

If you're interested in how to setup the app from scratch, proceed to the following section.

## Manual Setup
### ExpressJS

Install node and npm:

```
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-get install nodejs
sudo npm install -g npm@latest
```

Install the express generator and nodemon. The generator will generate a minimal file structure for our app. Nodemon wil help us automatically restart the server when there's changes in the app.js (and there will be lots since we'll reference the routing here).

```
npm init
sudo npm install express-generator -g
npm install -g nodemon
```

Create the app and install ExpressJS. ExpressJS is a minimalist web framework for Node.js, and we'll be using this to serve our frontend.

```
express app
cd app
npm install express --save
npm install
```

Install the following npm dependencies:

```
bower install --save zurb/bower-foundation      # frontend framework; we'll use this mostly for the grids
bower install --save fontawesome                # icon/glyphs set
sudo npm install --save stylus -g               # CSS pre-processer
npm install react-tools --save-dev              # for React
```

Setup nodemon ([via](https://github.com/remy/nodemon/issues/330)).

Setup stylus ([via](http://code.runnable.com/U_kP7TNQ2DxbGg7d/express-jade-stylus-demo-for-node-js)).

Setup react and gulp tasks ([via](http://www.joshfinnie.com/blog/reactjs-tutorial-part-2/)).

Run the server via ```nodemon server.js```.

### Sublime Plugins

If you're using Sublime Text, you can add the following plugins to make development easier for you:
* Emmet (HTML/CSS snippets)
* GitGutter (shows an icon in the gutter area indicating whether a line has been inserted, modified or deleted)
* Babel (syntax highlighting for ES6 JavaScript with React JSX extensions)
* Jade  (syntax highlighting for Jade)

### Browser Plugins

* JSON Viewer: makes json readable on browsers
* RESTClient: GUI for testing API (alternative to using curl)

## References
* [ExpressJS](http://expressjs.com/starter/hello-world.html): For serving frontend.
* [Jade](http://jade-lang.com/tutorial/): Node template system that comes bundled with Express.
