---
title: "Commands"
description: "Workflow comes with commandes for common development tasks."
lead: "Workflow comes with commandes for common development tasks."
date: 2021-08-06T08:48:45+00:00
lastmod: 2021-08-06T08:48:45+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 130
toc: true
---

{{< alert icon="💡" text="You can change the commands in the scripts section of `./package.json`." />}}

## init

Initialize git and remove generated files:

```bash
yarn init
```

## clean

Delete generated asset files from the assets folder:

```bash
yarn clean
```

## watch

Watch source file and compile on changes:

```bash
yarn watch
```

## build

Build assets for production website:

```bash
yarn build
```


## serve

Start local theme development server on port ```9292```

```bash
yarn serve
```

Same as ```shopify theme serve```. Check [Shopify refrence](https://shopify.dev/themes/tools/cli/theme-commands#serve) for more infos.


## lint
Check theme liquid files for errors:

```bash
yarn lint
```

Same as ```shopify theme check```, it uses Shopify Theme Check under the hood. Check [Shopify refrence](https://shopify.dev/themes/tools/cli/theme-commands#check) for more infos.

## format
Run Prettier formating on source files:

```bash
yarn format
```

## pull
Retrieves theme files from Shopify. Choose [developement] theme if you want to save local editor settings.


```bash
yarn pull
```

Make sure you saved the customizer settings if you use this commande to save local theme editor settings. Same as ```shopify theme pull``` Check [Shopify refrence](https://shopify.dev/themes/tools/cli/theme-commands#pull) for more infos.

## push
Uploads your local theme files to Shopify, overwriting the remote theme if specified. it ignores all directories in the .shopifyignore file and the files in the ```config/*.json``` in order to prevent the overwriting of data when changed in the online theme customizer by the merchant.

```bash
yarn push
```

Same as ```shopify theme push``` Check [Shopify refrence](https://shopify.dev/themes/tools/cli/theme-commands#push) for more infos.


## deploy
Runs ```format```, ```build``` and ```push``` to deploy a tested and minified theme to Shopify servers.

```bash
yarn deploy
```

## zip
Packages your local theme files into a ZIP file that can be uploaded to Shopify, it ignores all directories in the .shopifyignore file.

```bash
yarn zip
```

The generated ZIP uses the name ```theme_name-theme_version.zip```, based on parameters in your ```settings_schema.json``` file., Same as ```shopify theme package``` Check [Shopify refrence](https://shopify.dev/themes/tools/cli/theme-commands#package) for more infos.

## create

Runs ```format``` and ```build``` to minify and build a ZIP file that is then deployed to Shopify in a new unpublished theme.

Requires use of `yarn run`, since `yarn create` is a standard Yarn command.

```bash
yarn run create
```
