---
title: "Quick Start"
description: "The quick starter guide to install Workflow for your next Shopify theme development project."
lead: "The quick starter guide to install Workflow for your next Shopify theme development project."
date: 2021-08-06T08:48:45+00:00
lastmod: 2021-08-06T08:48:45+00:00
draft: false
images: []
menu:
  docs:
    parent: "introduction"
weight: 110
toc: true
---

## Requirements

### Nodejs

Workflow uses yarn to centralize dependency management, making it easy to update build tooling, plugins, and build scripts:

- Download and install [NodeJS v14+](https://nodejs.org/).
- Download and install [Yarn v1.22+](https://yarnpkg.com/) for your platform.


### Shopify CLI

You also need to install the Shopify CLI, it replaces Theme Kit for most Shopify theme development tasks, it also accelerates your theme development process with the following features

- Safely preview, test, and share changes to themes using development themes.
- Hot reload changes when previewing a theme.
- Push/pull and publish themes from the command line.
- Populate test data for your theme, including products, customers, and draft orders.

Follow these steps to install [Shopify CLI v2.22+](https://shopify.dev/themes/tools/cli/installation) first.


## Installation

### Create development store

After creating your development store by following [these steps.](https://shopify.dev/themes/tools/development-stores#create-a-development-store-to-build-and-test-your-theme)

1. You need to login into the development store using the Shopify CLI.

```bash
shopify login --store <your-store.myshopify.com>
```

2. Clone the Workflow with git or simply use the Shopify CLI commande.

```bash
shopify theme init -u https://github.com/younessidbakkasse/workflow
```

### Start development server
Install Node dependencies and run the start development script.

```bash
yarn install
yarn start
```

Workflow will start the theme development webserver accessible by default at `http://localhost:9292`. Saved changes will live reload in the browser.

## Other commands

Workflow comes with other commands for common tasks. [Commands →]({{< relref "commands" >}})
