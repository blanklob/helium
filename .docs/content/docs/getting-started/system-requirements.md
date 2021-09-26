---
title: "System requirements"
description: "Workflow is compatible with Apple silicon and latest Shopify tools."
lead: "Workflow is compatible with Apple silicon and latest Shopify tools."
date: 2021-08-06T08:48:45+00:00
lastmod: 2021-08-06T08:48:45+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 100
toc: true
---

## Operating system

Workflow is developed and is most stable on MacOS compatible with M1 chip. We hope to officially extend support to Windows and Linux in future.


## Nodejs

You will need the current LTS (long-term support) release which you can download directly from the Node [website](https://nodejs.org/).

### Yarn or npm

Follow the instructions on how to get started with [Yarn v1.22+](https://yarnpkg.com/) or npm, make sure you’re using the latest version.

We highly recommend using YARN for installing dependencies which making it easy to update build tooling, plugins, and build scripts and makes projects fast and reliable.

It’s important to note, both of these package managers have their ups and downs and many of the fantastic features that initially launched with Yarn are now available with npm 5+, so feel free to use the one you are most comfortable with, if you want to use NPM you must delete the ```yarn.lock``` file before running the install command ```npm install```.


## Shopify CLI

You also need to install the Shopify CLI, it replaces Theme Kit for most Shopify theme development tasks, it also accelerates your theme development process with the following features:

- Safely preview, test, and share changes to themes using development themes.
- Hot reload changes when previewing a theme.
- Push/pull and publish themes from the command line.
- Populate test data for your theme, including products, customers, and draft orders.

Follow these steps to install [Shopify CLI v2.5+](https://shopify.dev/themes/tools/cli/installation) first.


## Feedback 

Your feedback is important to us. Let us know your feedback by creating an issue in the GitHub repository [here](https://github.com/younessidbakkasse/workflow/issues).

We also recommend that you join the Github discussions to ask questions.

## What's next ?

Start the development server 🔥 in the quick start [guide →]({{< relref "quick-start" >}})
