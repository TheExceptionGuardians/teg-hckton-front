<p align="center">
<img src="https://raw.githubusercontent.com/serenity-frontstack/angular-basic/develop/docs/Front-Stack-Angular-Big.png"/>
</p>

# Angular Basic v1.3

> Provides fast, reliable and extensible starter for the development of Angular 1.X projects.

Changelog can be found at <a href="CHANGELOG.md" target="_blank">Link</a> 

## Demo

 * Link to the application demo:  [https://serenity-frontstack.github.io/angular-basic/](https://serenity-frontstack.github.io/angular-basic/)


# Prerequisites

Before we can start to develop an angular application, we need to prepare the system and install some tools that facilitate and automate the development process:
 * Install [NodeJS]( https://nodejs.org/en/) (ensure check npm package in the installation process), which is the Node package manager for server-side components.
 * Install [Bower](https://bower.io/), which is the client-side package manager.
 * Install gulp-cli globally with: `npm install --global gulp-cli`

The next prerequisites depends of your user privileges defined as follow:
* <a href="prerequisites.md#with-admin-privileges" target="_blank">Prerequisites with Admin privileges</a>
* <a href="prerequisites.md#without-admin-privileges" target="_blank">Prerequisites without Admin privileges</a>

In case of having a corporative Proxy in the local network, the environment need to be configured. 
 * [In the next tutorial could be found the process to setup the environment](prerequisites.md#proxy-setup).

## Browser Compatibility 
1. Angular 1.6.X 
    * IE9 or higher.
    * Safari
    * Chrome
    * Firefox
    * Opera 15 or higher.
    * mobile browsers (Android, Chrome Mobile, iOS Safari, Windows phone ie)
    [source](https://code.angularjs.org/1.5.6/docs/misc/faq)

2. ECMAScript
    * Check [here](http://kangax.github.io/compat-table/es5/) ECMAScript compatibility

3. CSS3
    * [Support list](http://www.w3schools.com/cssref/css3_browsersupport.asp)
    * [Test your browser](http://css3test.com/)

4. HTML5
    * [Test your browser](https://html5test.com/)

# Getting Started

## Installing

Download of the Starter Kit project:
```
git clone https://github.com/Serenity-fronstack/angular-basic.git
```

Installing NPM and Bower packages:
```
npm install & bower install
```

## Running
Runs locally, no database required.

`npm run serve` and the browser will open `http://localhost:3000`
It uses BrowserSync that provides live reload which refresh the application in the browser with any changes produced on the source.   

## Testing

### Unit testing

`npm run test` or  `npm run test:auto` to launch the unit tests defined with Jasmine (testing framework) and Karma (test Runner).

### Javascript code linting

`npm run test` or `npm run test:auto` to launch the rule-lint tests defined with Eslint.

### CSS code linting

`npm run css_test` to launch the rule-lint tests defined with CSSlint.
  
### E2E testing
> Note: e2e testing needs to have jdk installed. 
[download here](http://www.oracle.com/technetwork/java/javase/downloads)

`npm run protractor`  to run the end to end tests with protractor framework, the web driver of Selenium integrated with Angular. 

> If you are under a proxy, npm run protractor task needs update a webdriver manually

`webdriver-manager --proxy http://[IP_PROXY]:[PORT] update`

## Build

`npm run` or `npm run build` compile and optimize the sources in /dist directory ready to be published in *Production*. Thus generates the api documentation inside the docs/api folder.  

## Structure

This project follows our [best Practice Recommendations for Angular App Structure](https://github.com/Serenity-fronstack/angular-styleguide/blob/master/README.md)


The root directory of the application:

```
├──  bower_components/
├──  e2e/
├──  docs/
├──  conf/
├──  gulp/
├──  nodes_modules/
│
├──  src/
│   ├──  app/
│   │	├──  components/
│   │   │
│   │   │   └──  coverImage/
│   │   │       ├──  coverImage.component.js
│   │   │       ├──  coverImage.css
│   │   │       ├──  coverImage.html
│   │   │
│   │   │   └──  guideItem/
│   │   │       ├──  guideItem.component.js
│   │   │       ├──  guideItem.css
│   │   │       ├──  guideItem.html
│   │   │       ├──  guideItem.spec.js
│   │   │       ├──  guideItems.service.js
│   │   │       ├──  guideItems.service.spec.js
│   │   │
│   │   │   └──  navbar/
│   │   │       ├──  navbar.component.js
│   │   │       ├──  navbar.css
│   │   │       ├──  navbar.html
│   │   │       ├──  navbar.spec.js
│   │   │
│   │   │   └──  serenityLine/
│   │   │       ├──  serenityLine.component.js
│   │   │       ├──  serenityLine.css
│   │   │       ├──  serenityLine.html
│   │   │       ├──  serenityLine.spec.js
│   │   │       ├──  serenityLines.service.js
│   │   │       ├──  serenityLines.service.spec.js
│   │   │
│   │   ├──  features/
│   │   │
│   │   │   └──  about/
│   │   │       ├──  about.component.js
│   │   │       ├──  about.html
│   │   │       ├──  about.route.js
│   │   │       ├──  about.spec.js
│   │   │
│   │   │   └──  home/
│   │   │       ├──  home.component.js
│   │   │       ├──  home.html
│   │   │       ├──  home.route.js
│   │   │       ├──  home.spec.js    
│   │   │
│   │   └──  app.config.js
│   │   └──  app.constants.js
│   │   └──  app.module.js
│   │   └──  app.route.js
│   │   └──  app.run.js
|   |
│   ├──  assets/
│   │   ├──  images/
│   │   └──  css/
│   │       └──  index.css
│   ├──  favico.ico
│   └──  index.html
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  .csslintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
└──  protractor.conf.js
```
## Configuration

The different gulp modules could be configured through a series of config files available in the `/config` folder. Settings such as Karma, Protractor or Coverage definition could be setup with these files.

### Environment configuration

At the same time, in this project is defined two different environments `Development and Production`. Each one have gulp tasks and module setups adapted to their requirements.

You can build or serve the application depending each environment you can add the flag --dev --pro defined app.config.js
This takes the constanst key value defined in that file , example:
```javascript
npm run serve --dev
npm run serve --pro
npm run serve:dist --dev
npm run serve:dist --pro
npm run build --dev
npm run build --pro
```
In `conf/app.config.json`, can be define the following parameters by environment: 
 * **environment_constants**: Parameters that be transform in an Angular module **src/app/app.environment.js** defining the list of constant available to Angular.
 * **coverage_threshold**: Minimum coverage limit necessary to perform a build.    

## Full list of Gulp tasks

* `npm run` or `npm run build` to build an optimized version of your application in `/dist`
* `npm run serve` to launch a browser sync server on your source 
* `npm run serve:dist` to launch a server on your production-ready application 
* `npm run serve:apidoc` to launch a browser sync server on your api documentation				
* `npm run test` to launch your unit tests with Karma 		
* `npm run css_test` to launch your css tests with CssLint 									
* `npm run test:auto` to launch your unit tests with Karma in watch mode 
* `npm run protractor` to launch your e2e tests with protractor 							
* `npm run protractor:dist` to launch your e2e tests with Protractor on the dist files   	
* `npm run zip` to zip the built and optimized version of your application from `/dist` to a zip file in same folder

### Features included in the gulpfile
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *autoprefixer* : add vendor prefixes to CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *eslint* : The pluggable linting utility for JavaScript
* *csslint* : The pluggable linting utility for CSS
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application

## Angular Modules
* *uiRouter* : Provides routing and deeplinking services and directives for angular apps.
* *ngMaterial* : Provides a set of reusable, well-tested, and accessible UI components based on Material Design.
* *toastr* : A simple javascript toast notifications.

### SOURCES

* [John Papa Angular Styleguide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
* [Todd Motto Angular Styleguide](https://github.com/toddmotto/angular-styleguide#comment-standards) 
* [Angular style guide](https://github.com/mgechev/angularjs-style-guide) 
* [Generator Angular](https://github.com/yeoman/generator-angular)
* [Generator Gulp Angular](https://github.com/FountainJS/generator-fountain-webapp)
* [Angular Official Website](https://angularjs.org/)

## Acknowledgments

* [Samuel Documet](https://github.com/samdofe) : Valuable build and configuration process contributor.

## Social

* [twitter](https://twitter.com/serenityFront)
* [youtube](https://www.youtube.com/channel/UCVKdSP47XahRYJpvfA7inmg)
