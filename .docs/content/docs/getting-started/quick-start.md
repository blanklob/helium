---
title: "Quick start"
description: "The quick starter guide to install Workflow for your next Shopify theme development project."
lead: "The quick starter guide to install Workflow for your next Shopify theme development project."
date: 2021-08-06T08:48:45+00:00
lastmod: 2021-08-06T08:48:45+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 110
toc: true
---


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
