# Appy HTML

HTML landing page template designed by Cruip.

This HTML template is shipped with Webpack as build tool, and it's based on a custom version of (Eric Alli's Static Site Boilerplate)[https://staticsiteboilerplate.com/].

* [Getting started](#getting-started)
* [Deploy with Netlify](#deploy-with-netlify)

## Getting started

* First, ensure that node.js & npm are both installed. If not, choose your OS and installation method from [this page](https://nodejs.org/en/download/package-manager/) and follow the instructions.
* Next, use your command line to enter your project directory.
* This template comes with a ready-to-use package file called `package.json`. You just need to run `npm install` to install all of the dependencies into your project.
* When `npm` has finished with the install, run `npm run build` to generate the output files into the `dist` folder.

You're ready to go! The most useful task for rapid development is `npm start`. It will start a new server, open up a browser and watch for any SCSS or JS changes; once it compiles those changes, the browser will automatically inject the changed file(s)!

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

## Deploy with Netlify
Premium HTML templates come with a ready-made `netlify.toml` file to allow you deploying with Netlify and go live in a few clicks. You just need to create a repository and copy the whole content of the `HTML`folder. Then, create a new site from Git in Netlify and deploy the app.

## Build tool integrations

#### Google Analytics integration
Google Analytics tracking code will automatically be inserted to the optimal position of all of your HTML pages. You can specify your analytics tracking ID by updating the `googleAnalyticsUA` config variable in the `config/site.config.js` file.

#### Favicon generation
Favicons will automatically be generated from a single source file. Your favicon source file to be located at src/images/favicon.png. The name and location of this file can be changed by updating the favicon config variable in the config/site.config.js file. A 512x512px image file is recommended.

## Weback and support
We are shipping our templates with Webpack to let you quickly get into the development process, but we don't discourage you from using any other build tool. So, please note that any request dealing with Webpack (e.g. extra features, customisations, et cetera) is to be considered out of the support scope.

For more information about what support covers, please see our (FAQs)[https://cruip.com/faq/].