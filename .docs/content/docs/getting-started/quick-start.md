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


## Development store

A development store is a free Shopify store that comes with limitations. As a Shopify Partner, you can create an unlimited number of development stores.

We will use a development store to build our theme with Workflow. Development stores can be used with tools like Shopify CLI and the Shopify GitHub integration so that you can preview, test, and share themes that you're building.

### Create a development store

To create or access a development store, you need a [Shopify Partner account](https://www.shopify.com/partners).

After creating your development store by following [these steps.](https://shopify.dev/themes/tools/development-stores#create-a-development-store-to-build-and-test-your-theme)

1. You need to login into the development store using the Shopify CLI.

```bash
shopify login --store <your-store.myshopify.com>
```

2. Clone the Workflow with git or simply use the Shopify CLI command.

```bash
shopify theme init -u https://github.com/younessidbakkasse/workflow
```

This Shopify CLI command will prompt you to choose a name for your theme, you can also use Git to install __Workflow__, by simply running the Git clone command.

```bash
git clone https://github.com/younessidbakkasse/workflow
```

## Start developing

Now comes the fun part 🌈, To begin developing your very own theme with Workflow's development pipeline, you will first need to install Node dependencies, to do so run the command below.

```bash
yarn install
```

Then __finally__ start the development server ⚡️ with the task.

```bash
yarn start
```

> or, if you're using npm, ```npm run start```

Workflow will start the theme development server accessible by default at `http://localhost:9292` and Webpack watch mode in parallel, so every saved changes, will be compiled into the assets folder and live reload in the browser.

## What's next ?

Workflow follow a predetermined file structure 🗂, [Learn more here →]({{< relref "structure" >}})
