# Food Festival -(PWA, Progressive Web App)

## Description

Help a client with an existing web application designed for a food festival. Because event attendees will use the app on their phones, it needs to be fast and performant, especially on mobile. But the application loads very slowly when the client tries to simulate a 4G internet connection using Chrome DevTools. Optimize the app by minifying assets, adding offline functionality, and turning it into a Progressive Web Application, or PWA.

Deployed link: https://benyeung4.github.io/Food_Festival/

## Table of Content

- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)
- [Questions](#Questions)

## Installation:

Please install the following dependencies to run the application properly:

- npm init -y
- npm install -D webpack@4.46.0 webpack-cli@4.6.0

make sure that package.json has the folowing:

"scripts": {
"webpack": "webpack --watch",
"build": "webpack"
},

- npm i jquery - in the case that webpack bundled our code and cerated a dependency graph, to make sure the neceary code is pulled in and bulded with code it depends on.

- npm install bootstrap@4.3.1 --save

- npm install popper.js@1.16.0 -- save -
  additional assistance:

https://imagecompressor.com/ - helps reduce image size

https://www.toptal.com/developers/javascript-minifier - helpse reduce javascript code size, "placed under dist/script.min.js"

## Usage:

- to test out of webpack is installed properly run the following in the terminal:

  webpack -v

  if states an error, run the following:

  npm run webpack -v

- execute the webpack.config.js file:

npm run build

## Tests:

No testing is currently set up

## Questions

If you have any questions, please open a issue or contact the following:

Github Profile Contact: https://github.com/BenYeung4

Email Contact: byeungis@gmail.com
