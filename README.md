<!-- README.md -->

RAPTORSMACSS
===============================================================================

**R**apid **A**daptive **P**ractical **T**ricked-**O**ut **R**ocket **S****M****A****C****S****S**, or RAPTORSMACSS, is a highly modular and organized Sass (SCSS) boilerplate.  It is loosely inspired by the [SMACSS](https://smacss.com/) architecture pattern, with some layout liberties taken.

## Contents

- [Title](#raptorsmacss)
- [Usage](#usage)
- [Riding the Raptor](#riding-the-raptor)
- [ToDos](#todos)
- [Team](#team)
- [License](#license)
- [Connect](#connect)

## Usage

### Requirements
[Ruby](https://www.ruby-lang.org/en/) 1.8.7+ & [Sass](https://github.com/sass/sass) 3.4.0+, or a Ruby Sass alternative.

### Installation
1. Create a new project directory
2. Place the `assets/` and `source/` directories from the `RAPTORSMACSS/` directory, into the base directory of your project
3. Optionally, repeat the previous step with the other files found in the `RAPTORSMACSS/` directory (`index.html`, `.gitignore`, `rapticon-16x16.png` & `.ico`, etc.)
4. Link your base file (eg. `index.html`) to the `raptor.min.css` or `raptor.css` stylesheet

``` html
<!-- EXAMPLE -->
<link rel="stylesheet" type="text/css" href="assets/stylesheets/raptor.min.css" />
```
5. Commence Raptoring!

## Riding the Raptor

### Sass Watch
Before making any modifications to the SCSS files, change to the base directory of your project, and run one of the following commands...

- To watch and compile minified CSS and sourcemaps:

``` sh
sass --watch source/scss/raptor.scss:assets/stylesheets/raptor.min.css --style compressed
```

- To watch and compile standard CSS and sourcemaps:

``` sh
sass --watch source/scss/raptor.scss:assets/stylesheets/raptor.css
```

## ToDos

- Write thorough documentation or instructional `.md` file(s) explaining how to use everything
- Include logo, when developed
- Update `rapticon-16x16.png` and `rapticon-16x16.ico` favicons, when developed
- Create `apple-touch-icon` and `og:image`

-------------------------------------------------------------------------------

## Team

[The humans responsible and technology colophon](https://github.com/SuitAndCape/RAPTORSMACSS/blob/Info/humans.txt).

- **Ali Esmaili** _(Developer & Designer)_: [AESM](https://github.com/AESM)
- **Molly Allison-Baker** _(Consultant)_: [hermitina](https://github.com/hermitina)
- **Eric Lawrence Dapp** _(Consultant)_: [e-dapp](https://github.com/e-dapp)

## License

This [project](#raptorsmacss) is copyright © 2015 Ali Esmaili | SuitAndCape.  It is free software that may be redistributed under the terms specified in the [LICENSE](https://github.com/SuitAndCape/RAPTORSMACSS/blob/Info/LICENSE).

This is based on [The MIT License (MIT)](http://opensource.org/licenses/MIT).  For more information, visit the [Open Source Initiative](http://opensource.org/) website.

## Connect

|               :tophat:               |               :rocket:               |
| ------------------------------------ | ------------------------------------ |
**_SuitAndCape GitHub_** | https://github.com/SuitAndCape
**_Personal GitHub_**    | https://github.com/AESM
**_Website_**            | https://SuitAndCape.github.io/
**_LinkedIn_**           | https://www.linkedin.com/in/SuitAndCape
**_Twitter_**            | https://twitter.com/SuitAndCape
