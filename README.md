<!-- README.md -->

RAPTORSMACSS
==========================================================================

**R**apid **A**daptive **P**ractical **T**ricked-**O**ut **R**ocket **S****M****A****C****S****S**, or RAPTORSMACSS, is a Sass (SCSS) boilerplate, loosely inspired by the [SMACSS](https://smacss.com/) architecture pattern.
The naming convention is [BEM](https://en.bem.info/method/definitions/) based at its roots, but implemented in a way that the user can use whichever naming convention they prefer.

## Version 1.1.0

## Contents

- [Title](#raptorsmacss)
- [Requirements](#requirements)
- [Download](#download)
  + [Clone](#clone)
  + [ZIP File](#zip-file)
- [Installation](#installation)
  + [Standard Usage](#standard-usage)
  + [Transfer](#transfer)
- [Riding the Raptor](#riding-the-raptor)
- [ToDos](#todos)
- [User Stories, MVP, Specifications, and Pseudocode](#user-stories-mvp-specifications-and-pseudocode)
- [Team Members](#team-members)
- [Humans.txt](#humanstxt)
- [License](#license)
- [Connect](#connect)

## Requirements

- [Ruby](https://www.ruby-lang.org/en/) 1.8.7+
- [Sass](https://github.com/sass/sass) 3.4+

## Download

### Clone
Make a local clone of the RAPTORSMACSS repo.

- To clone with SSH, use the following command:

``` sh
git clone git@github.com:SuitAndCape/RAPTORSMACSS.git
```

- To clone with HTTPS, use the following command:

``` sh
git clone https://github.com/SuitAndCape/RAPTORSMACSS.git
```

### ZIP File

- Click the "Download ZIP" button to do just that

## Installation

### Standard Usage
1. Rename the `RAPTORSMACSS/` directory so that you may use it as the root of your project
2. Rename `demo.html` found in the RAPTORSMACSS root directory to whatever you want (eg. `index.html`)
3. Commence!

### Transfer
1. Create a new project directory
2. Take the `public/` directory from the `RAPTORSMACSS/` directory, and place it in the root of your project
3. Link your HTML file (eg. `index.html`) to the `raptor.min.css` file

``` html
<!-- EXAMPLE -->
<link rel="stylesheet" type="text/css" href="public/css/raptor.min.css" />
```

## Riding the Raptor

- Before making any modifications to the SCSS, change to the root directory of your project, and run the following command:

``` sh
sass --watch public/scss/raptor.scss:public/css/raptor.min.css --style compressed
```

**_NOTE:_** The command above assumes that you went with one of the two recommended [installation](#installation) strategies suggested above, and have the necessary [requirements](#requirements).

## ToDos

- Add instructional `README.md` files to each directory found in `public/scss/`
- Make it easy to install and use for Rails projects
  + Write an easy installation guide for Rails projects usage on repo `README.md` file
- Make it easy to install and use for Django projects
  + Write an easy installation guide for Django projects usage on repo `README.md` file
- Add more comments explaining what things do
- Write thorough documentation explaining how to use everything
- Include logo, when developed
- Include `rapticon-16x16.png` favicon when developed

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
