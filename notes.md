-The current module project uses an older version of Bootstrap.
You'll need to install Bootstrap 4.3.1 using the following command: npm install Bootstrap@4.3.1 -- save.
You should also install Popper 1.16.0 using npm install popper@1.16.0 -- save.
If you receive a dependency error when trying to run the module project solution code, use the command npm install --save --legacy-peer-deps. This will bypass peer dependency auto-installation and allow the code to run as intended.

under index.html - using defer - used for lazy loading, this helps the web to download assest that are needed, example only loading the first image tat appears in th image carousel with the inital page load

npm install -D webpack@4.46.0 webpack-cli@4.6.0

-webpack-cli - provides us with a series of commands we can use to help us more quickly set up our webpack projects "will need both webpack and webpack-cli"

make sure that package.json has the following script

"scripts": {
"webpack": "webpack --watch",
"build": "webpack"
},

--watch we can just terminate the terminal with ctrl + c
