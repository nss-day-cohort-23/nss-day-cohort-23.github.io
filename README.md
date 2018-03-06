# Blank Grunt project

An empty Grunt-running setup including:

![](https://img.shields.io/badge/updated-mar_6th_2018-green.svg)
![](https://img.shields.io/badge/handlebars-v4.0.11-orange.svg)
![](https://img.shields.io/badge/browserify-v5.2.0-ff69b4.svg)
![](https://img.shields.io/badge/grunt-v1.0.2-yellow.svg)

# Using this repo

### Initialize an `npm` project for use with Grunt

In the root:

```bash
npm init -y
```

`-y` says yes to every question `npm init` would otherwise ask you.

### Install necessary `npm` modules

These are listed as dependencies in `package.json` already.

```bash
npm install
```

### Run server locally

```bash
hs -o
```

### File structure

```
root
 |--assets
 |   |--css
 |   |--js
 |   |--sass
 |   `--templates
 |       `--partials
 |
 |--dist
 |   `--bundle.js
 |
 |--.gitignore
 |--Gruntfile.js
 |--package.json
 `--index.html
```