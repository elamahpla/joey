:fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire:
# Lean Plate SCSS

[Lean Plate](https://github.com/elamahpla/LeanPlateSCSS) is an incredibly lean boilerplate for [React](https://reactjs.org/) which makes use of [Scss](https://sass-lang.com/) as its preprocessor. I wanted to make a boilerplate that doesn't have a huge footprint, but that can also use [Scss](https://sass-lang.com/) so the solution was simple; Make my own.

# Tools:

This boilerplate comes ready with the following tools:
* [react-router](https://reacttraining.com/react-router/core/guides/philosophy)
* [Webpack](https://webpack.js.org/)
* [Babel](https://babeljs.io/)
* [Scss](https://sass-lang.com/)

These are the most basic tools needed to get you started. You can add other libraries and tools as you see fit, but this was designed to be incredibly simple to get up and running. 

# Usage: 

To use this you either need to download or clone the repo:
<p align="center">
  <img src="https://s3-us-west-2.amazonaws.com/mypersonalimages/forreporeadme.png" alt="Clone or Download Repo">
</p>
Aftewards, you'll want to CD into the folder and do the following:

```
npm install
```
then:
```
npm start
```
If an error occurs, try the following:
```
npm install -g node-sass
or
npm install --global webpack
```
Should an error **STILL** show, you'll have to submit a bug report or issue.

# Post-Download:

Once you have it setup, you can check to file and folder structure to change it as you see fit. A word of warning: **IF YOU WANT TO CHANGE THE NAME OF THE INDEX.JS FILE, YOU HAVE TO DO SO IN THE PACKAGE.JSON AND WEBPACK.CONFIG.JS FILE**

# Production Build:
Once you feel satisfied with your project, go to your command line and type the following commands:
```
npm run compile:sass
```
then
```
npm run build:prod
```
There you go, you'll have a minified bundle.js file afterwards.

# Contact:
* Email: joeyrobinsondev@gmail.com
* Twitter: [@joeyrobinsondev](https://twitter.com/joeyrobinsondev)

# Feedback:
All feedback is welcome :smile:. Feel free to message me via contact or leave something here. 

# License
MIT