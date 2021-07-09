# 🗂 Shopify webpack workflow with Online Store 2.0 features

[![GitHub issues](https://img.shields.io/github/issues/younessidbakkasse/shopify-webpack-with-os2-features)](https://GitHub.com/younessidbakkasseshopify-webpack-with-os2-features/issues/)
[![GitHub stars](https://img.shields.io/github/stars/younessidbakkasse/shopify-webpack-with-os2-features)](https://GitHub.com/younessidbakkasseshopify-webpack-with-os2-features/stargazers/)
[![GitHub forks](https://img.shields.io/github/forks/younessidbakkasse/shopify-webpack-with-os2-features)](https://GitHub.com/younessidbakkasseshopify-webpack-with-os2-features/network/)
[![GitHub license](https://img.shields.io/github/license/younessidbakkasse/shopify-webpack-with-os2-features)](https://github.com/younessidbakkasse/shopify-webpack-with-os2-features/blob/master/LICENSE)

[Features](#features) |
[Before you start](#before-you-start) |
[Requirements](#tools) |
[Getting started](#getting-started) |
[Tools](#tools) |
[Commandes](#commandes) |
[Changelog](#changelog) |
[Contributing](#contributing) |
[License](#license)

This workflow was made as a fallow up to the Shopify Unite 2021 event revealing the new theme online store 2.0 that has supports for JSON templates and section everywhere concept and few other features for more infomation check [Online Store 2.0 features](https://www.shopify.com/partners/blog/shopify-online-store).

A Webpack, HTML-first, JavaScript-only-as-needed approach to theme development. It's Shopify's first source available theme with performance, flexibility, and built-in and acts as a reference for building Shopify themes.

## 🔥 Features

### This workflow has loads of features based from hot reloading provided by the new shopify CLI Theme tools to linting assets and liquid files. This setup is totally flexible, you can easly extend it using the config files provided:

- Wabpack 5
- Shopify-CLI
- Shopify github Integration
- ES2021 compiling using Babel
- Shopify lighthouse CI
- Shopify Online Store 2 (Sections everywhere and JSON templates)
- Shopify Linting (Theme Inspector)
- ESlint/Prettier (Linting and formating static assets )
- Precommit linting with Husky (Run linters against staged git files (.liquid, .js) and don't let 💩 slip into your Shopify Theme in the online store channel)
- SCSS/Postcss (Autoprefixer and all postcss plugins)
- Hot Module Reloading for rapid development
- Editorconfig file (for better collaborations)

## ‼️Before you start

### You first need to install the Shopify-cli, it replaces Theme Kit for most Shopify theme development tasks, it also accelerates your theme development process with the following features:

- Safely preview, test, and share changes to themes using development themes
- Hot reload CSS and section changes when previewing a theme
- Push/pull and publish themes from the command line
- Populate test data for your theme, including products, customers, and draft orders
- and more !

#### To install it on macOs use either [RubyGems.org](https://rubygems.org/) or [Homebrew](https://brew.sh/).

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

You should get a version number like 2.0.1

#### To learn how to install Shopify CLI on Windows or Linux refer to the other installation guides [here](https://shopify.dev/themes/tools/cli/installation).

## ⚡️Getting started

To get started, install the templates either by cloning this repository or using the shopify cli init commande like so:

```shell
shopify theme init -u https://github.com/younessidbakkasse/shopify-webpack-with-os2-features
```

This commande will prompt you to choose a Theme name then clones the template to your local machine.

Then all you have to do is to install npm dependencies using the yarn command:

```shell
yarn install
```

After that, run the development server using the command below:

```shell
yarn start
```

## ✅Commandes

## 📝Changelog

## 🙌Contributing

## 📄License

Copyright (c) 2021 Youness Id bakkasse. See [LICENSE](/LICENSE) for further details.
