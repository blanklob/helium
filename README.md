# Workflow ⚙️: Modern developement Boilerplate on Shopify

[![GitHub issues](https://img.shields.io/github/issues/younessidbakkasse/workflow)](https://GitHub.com/younessidbakkasse/workflow/issues/)
[![GitHub stars](https://img.shields.io/github/stars/younessidbakkasse/workflow)](https://GitHub.com/younessidbakkasse/workflow/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/younessidbakkasse/workflow)](https://GitHub.com/younessidbakkasse/workflow/network/)
[![GitHub license](https://img.shields.io/github/license/younessidbakkasse/workflow)](https://github.com/younessidbakkasse/workflow/blob/master/LICENSE)
[![Shopify Theme Check CI](https://github.com/younessidbakkasse/workflow/actions/workflows/theme-check-ci.yml/badge.svg)](https://github.com/younessidbakkasse/workflow/actions/workflows/theme-check-ci.yml)

[Features](#features) |
[Before you start](#before-you-start) |
[Getting started](#getting-started) |
[Commands](#commands) |
[Contributing](#contributing) |
[License](#license)

This workflow was made as a follow-up to the Shopify Unite 2021 event revealing the new theme online store 2.0 that has supports for JSON templates and section everywhere concept and few other features for more information check [Online Store 2.0 features](https://www.shopify.com/partners/blog/shopify-online-store).

A Webpack, HTML-first, Typescript-only-as-needed approach to theme development. It's Shopify's first open source boilerplate available after 2.0 update with performance, flexibility, and built-in and acts as a reference for building Shopify themes.

## 🔥 Features

### This workflow has loads of features based from hot reloading provided by the new shopify CLI Theme tools to linting assets and liquid files. This setup is totally flexible, you can easily extend it using the config files provided:

- Webpack 5
- Shopify-CLI
- Shopify github Integration
- Modern ES6 syntax & features compiled to legacy code using the Babel.
- Shopify lighthouse CI Github actions
- Shopify Online Store 2 (Sections everywhere and JSON templates)
- Shopify Linting (Theme Check)
- Prettier (Formatting static assets) and Editorconfig file (for better collaborations)
- SCSS/PostCSS (Autoprefixer and all PostCSS plugins)
- Hot Module Reloading on sass/modern ES6 file changes for rapid development
- Extensible, scalable, Sass-based, OOCSS and BEM architecture for large and long-lasting UI projects.
- Built with SEO and Accessibilty in mind.
- Media queries code splitting built in.
- Dependencies free, Progressively enhance Javascript and component based.

## ‼️Before you start

### You first need to install the Shopify-cli, it replaces Theme Kit for most Shopify theme development tasks, it also accelerates your theme development process with the following features:

- Safely preview, test, and share changes to themes using development themes
- Hot reload SCSS and section changes when previewing a theme
- Push/pull and publish themes from the command line
- Populate test data for your theme, including products, customers, and draft orders
- and more !

#### To install it on macOS use either [RubyGems.org](https://rubygems.org/) or [Homebrew](https://brew.sh/).

#### **RubyGems.org**

In a new terminal window, navigate to your home directory and run the following command:

```shell
gem install shopify-cli
```

#### **Homebrew**

You need to add Shopify's third-party repositories to Homebrew before you can install Shopify CLI.

```shell
brew tap shopify/shopify
brew install shopify-cli
```

**Verify the installation**

To verify that Shopify CLI is installed properly, run the following command:

```shell
shopify version
```

#### To learn how to install Shopify CLI on Windows or Linux refer to the other installation guides [here](https://shopify.dev/themes/tools/cli/installation).

## ⚡️Getting started

To get started, install the templates either by cloning this repository or using the shopify cli init command like so:

```shell
shopify theme init -u https://github.com/younessidbakkasse/workflow
```

This command will prompt you to choose a Theme name then clones the template to your local machine.

Then all you have to do is to install npm dependencies using the yarn command:

```shell
yarn install
```

After that, run the development server using the command below:

```shell
yarn start
```

## ✅Commands

- To run the shopify development server and watch for file transformation changes.

```shell
yarn start
```

- To only run the shopify development server, same as `shopify theme serve`

```shell
yarn serve
```

- To watch over static file changes, this will run webpack bundling for the development configuration.

```shell
yarn watch
```

- To build static files for production (minification, ...) run the command below.

```shell
yarn build
```

- To run shopify theme linting use the command.

```shell
yarn lint
```

- This command packages your local theme files into a ZIP file that can be uploaded to Shopify.

```shell
yarn zip
```

- Run Shopify theme linting manually.

```shell
yarn format
```

- Fix auto simple liquid bugs same as `shopify theme check -a`.

```shell
yarn fix
```

- Saves all the settings that you've made in the Shopify cutomizer editor, so next time you restart the server you will continue where you left.

```shell
yarn pull
```

- Push and saves the theme to Shopify online store, same as `shopify theme push`.

```shell
yarn push
```

- Format and build files for production then pushes the theme to Shopify servers.

```shell
yarn deploy
```

## 🙌Contributing

Contributions and PRs are welcomed.

## 📄License

Copyright (c) 2021 Youness Id bakkasse. See [LICENSE](/LICENSE) for further details.
