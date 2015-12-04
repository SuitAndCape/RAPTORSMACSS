<!-- README.md -->

RAPTORSMACSS
==========================================================================

**R**apid **A**daptive **P**ractical **T**ricked-**O**ut **R**ocket **S****M****A****C****S****S**, or RAPTORSMACSS, is a highly modular and organized Sass (SCSS) boilerplate.  It is loosely inspired by the [SMACSS](https://smacss.com/) architecture pattern, with some layout liberties taken.
The Harry Roberts' style [BEM](https://en.bem.info/method/definitions/) naming convention is only implemented at RAPTORSMACSS' roots, so the user can use whichever naming convention they prefer.

## Contents

- [Title](#raptorsmacss)
- [Requirements](#requirements)
- [Installation](#installation)
  + [Standard Usage](#standard-usage)
  + [Transfer](#transfer)
- [Riding the Raptor](#riding-the-raptor)
  + [Sass Watch](#sass-watch)
  + [Gulp Watch](#gulp-watch)
    * [Gulp Requirements](#gulp-requirements)
- [ToDos](#todos)
- [User Stories, MVP, Specifications, and Pseudocode](#user-stories-mvp-specifications-and-pseudocode)
- [Team Members](#team-members)
- [Humans.txt](#humanstxt)
- [License](#license)
- [Connect](#connect)

## Requirements

- [Ruby](https://www.ruby-lang.org/en/) 1.8.7+
- [Sass](https://github.com/sass/sass) 3.4.0+

## Installation

### Standard Usage
1. Rename the `RAPTORSMACSS/` directory
2. Use this directory as the root of your project
3. Raptor away!

### Transfer
1. Create a new project directory
2. Take the `public/` and `source/` directories from the `RAPTORSMACSS/` directory, and place them in the root of your project
3. Link your HTML file (eg. `index.html`) to the `raptor.min.css` stylesheet

``` html
<!-- EXAMPLE -->
<link rel="stylesheet" type="text/css" href="public/assets/stylesheets/raptor.min.css" />
```
4. Commence Raptoring!

## Riding the Raptor

**_NOTE:_** The commands below assume that you went with one of the two recommended [installation](#installation) strategies suggested above, and have the necessary [requirements](#requirements).

### Sass Watch
Before making any modifications to the SCSS files, change to the root directory of your project, and run one of the following commands...

- To compile minified CSS:

``` sh
sass --watch source/scss/raptor.scss:public/assets/stylesheets/raptor.min.css --style compressed
```

- To compile standard CSS:

``` sh
sass --watch source/scss/raptor.scss:public/assets/stylesheets/raptor.css
```

### Gulp Watch
For [Gulp](http://gulpjs.com/) enthusiasts, an optional `gulpfile.js` file has been included.  This file should be in the root directory of your project.
Before making any modifications to the SCSS or JavaScript files, change to any directory in your project (preferably the root), and run the following command...

- To have Gulp compile minified CSS and JavaScripts, standard CSS and JavaScripts, minified CSS sourcemaps, and standard CSS and JavaScript sourcemaps:

``` sh
gulp
```

#### Gulp Requirements
These are the requirements to use the `gulpfile.js` file, as is...

- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) 3.0.0+
- [Gulp](https://github.com/gulpjs/gulp) 3.9.0
- [Gulp-Concat](https://github.com/contra/gulp-concat) 2.6.0
- [Gulp-Minify-CSS](https://github.com/murphydanger/gulp-minify-css) 1.2.1
- [Gulp-Rename](https://github.com/hparra/gulp-rename) 1.2.2
- [Gulp-Sass](https://github.com/dlmanning/gulp-sass) 2.1.0
- [Gulp-Sourcemaps](https://github.com/floridoo/gulp-sourcemaps) 1.6.0
- [Gulp-Uglify](https://github.com/terinjokes/gulp-uglify)
- [Gulp-Util](https://github.com/gulpjs/gulp-util) 3.0.7

## ToDos

- Write thorough documentation or instructional `.md` file(s) explaining how to use everything
- Include logo, when developed
- Update `rapticon-16x16.png` and `rapticon-16x16.ico` favicons, when developed
- Create [FunkyAnimatronicMixologyHenchmen](https://github.com/SuitAndCape/FunkyAnimatronicMixologyHenchmen) tie-in repo

--------------------------------------------------------------------------

## User Stories, MVP, Specifications, and Pseudocode

To see the process that has been documented for this project, [click here](https://github.com/SuitAndCape/RAPTORSMACSS/blob/master/SMSP.md).

## Team Members:

- **Ali Esmaili** _(Meticulous Developer)_: [AESM](https://github.com/AESM)
- **Molly Allison-Baker** _(Brainstormer and Peer-Reviewer)_: [hermitina](https://github.com/hermitina)
- **Eric Lawrence Dapp** _(Name and Logo Generator)_: [e-dapp](https://github.com/e-dapp)

## Humans.txt

[We Are People.  Get to Know Us.](https://github.com/SuitAndCape/RAPTORSMACSS/blob/master/humans.txt)

The humans.txt movement is all about getting to know the people behind a website or project.  To find out more, visit [humanstxt.org](http://humanstxt.org/).

## License

This [project](#raptorsmacss) is copyright © 2015 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/SuitAndCape/RAPTORSMACSS/blob/master/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|              :tophat:             |              :rocket:             |
| --------------------------------- | --------------------------------- |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | https://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Dribbble_**           | https://dribbble.com/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
