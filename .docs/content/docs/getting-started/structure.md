---
title: "Structure"
description: "Workflow follow a sections & components based file structure."
lead: ""
date: 2021-08-06T08:48:45+00:00
lastmod: 2021-08-06T08:48:45+00:00
draft: false
images: []
menu:
  docs:
    parent: "getting-started"
weight: 120
toc: true
---

## Root structure

The default starting point when generating a new theme with __Workflow__ includes several files and folders listed that are optional and can be omitted from your project like ```.docs``` and ```.vscode``` for example.

```
workflow/                         📁 root of the theme
├─ .config/                       📁 development environment files and config
│  ├─ .husky/                     📁 husky folder for git hooks
│  ├─ webpack/                    
│  │   ├─ utils/                  📁 webpack utilities folder
│  │   ├─ webpack.config.js       📄 webpack configuration file
│  │   └─ ...   
│  ├─ .prettierignore             📄 files and directories ignored by prettier
│  ├─ .theme-check.yml            📄 shopify theme check configuration
│  ├─ postcss.config.js           📄 postcss configuration
│  ├─ prettier.config.js          📄 prettier configuration
│  └─ ...                         
├─ .docs/                         📁 workflow docs
├─ .github/                       📁 github ci workflows and changelog...
├─ .vscode/                       📁 shopify vscode extensions recommendations
├─ assets/                        📁 assets shopify directory
├─ layout/                        📁 layouts shopify directory
├─ locales/                       📁 locales shopify directory
├─ config/                        📁 config shopify directory
├─ sections/                      📁 sections shopify directory
├─ snippets/                      📁 snippets shopify directory
├─ templates/                     📁 templates shopify directory
│    ├─ index.json                📄 index json template for homepage
│    └─ ...                  
├─ src/                           📁 source folder processed by webpack
│    ├─ base/                     📁 base styles and scripts directory
│    ├─ sections/                 📁 sections styles and scripts directory
│    ├─ components/               📁 components styles and scripts directory
│    └─ shared/                   📁 shared other assets 
├─ .editorconfig                  📄 editorconfig configuration
├─ .gitignore                     📄 files and directories ignored by git
├─ .shopifyignore                 📄 files and directories ignored by shopify cli
├─ package.json                   📄 node dependencies and tasks
├─ translation.yml                📄 shopify translation and locals configuration
└─ ...
```

## Source structure

Workflow's source directory follow a sections & components based file structure. The base folder containes all core style and script files that will be compiled to ```base.css```and ```base.js``` bundled files, which in turn shall be fetched for all shopify theme routes.

```
workflow/                          📁 root of the theme
├─ ...  
├─ templates/                      📁 templates shopify directory
├─ src/                            📁 root source folder processed by webpack
│    ├─ base/                      📁 base source directory
│    │   ├─ scripts/               📁 base scripts
│    │   └─ styles/                📁 base styles
│    ├─ sections/                  📁 sections source directory
│    │   ├─ scripts/               📁 sections scripts
│    │   └─ styles/                📁 sections styles
│    ├─ components/                📁 components source directory
│    │   ├─ scripts/               📁 components scripts
│    │   └─ styles/                📁 components styles
│    └─ shared/                    📁 shared assets directory          
└─ ...
```

### 1. Base

```
workflow/                          📁 root of the theme
├─ ...  
├─ templates/                      📁 templates shopify directory
├─ src/                            📁 root source folder processed by webpack
│    ├─ base/                      📁 base source directory
│    │   ├─ scripts/               📁 base scripts 
│    │   │   ├─ base.js             
│    │   │   ├─ components/        
│    │   │   ├─ utils/
│    │   │   └─ vendors/
│    │   └─ styles/                📁 base styles 
│    │       ├─ base.scss
│    │       ├─ components/
│    │       ├─ sections/
│    │       ├─ generic/
│    │       ├─ settings/
│    │       ├─ tools/
│    │       ├─ utilities/
│    │       ├─ vendors/
│    │       └─ objects/
│    └─ ...                    
└─ ...
```

### 2. Sections

Every ```<my-section>.scss``` file is compiled to a separate ```<my-section>.css``` file, which will be fetched in the ```<my-section>.liquid```, same for javascript. This way, if a section is not used within a template, the browser won't fetch it's styles and scripts rules, which is great for both performance and reusability.

```
workflow/                             📁 root of the theme
├─ ...  
├─ templates/                         📁 templates shopify directory
├─ src/                               📁 root source folder processed by webpack
│    ├─ base/                         📁 base source directory
│    ├─ sections/                     📁 sections source directory
│    │   ├─ scripts/                  📁 sections scripts 
│    │   │   └─ welcome.js            📄 welcome section script file
│    │   └─ styles/
│    │       ├─ main-404.scss         📄 main 404 section style file
│    │       ├─ main-cart.scss        📄 main cart section style file
│    │       ├─ main-collection.scss  📄 main collection section style file
│    │       ├─ main-account.scss     📄 main account section style file
│    │       ├─ main-product.scss     📄 main product section style file
│    │       ├─ main-article.scss     📄 main article section style file
│    │       ├─ ...
│    │       └─ welcome.scss          📄 welcome section style file
│    └─ ...                    
└─ ...
```

### 3. Components

Same for components, every ```<my-component>.scss``` file is compiled to a separate ```<my-component>.css``` file, which will be fetched by sections that use the component. 

```
workflow/                              📁 root of the theme
├─ ...  
├─ templates/                          📁 templates shopify directory
├─ src/                                📁 root source folder processed by webpack
│    ├─ ...                          
│    ├─ components/                    📁 components source directory
│    │   ├─ scripts/                   📁 components scripts
│    │   │   └─ simple-greeting.js     📄 simple-greeting reusable component script file
│    │   └─ styles/                    📁 components styles
│    │       └─ simple-greeting.scss   📄 simple-greeting reusable component style file
│    └─ shared/                        📁 shared assets directory
└─ ...
```

### 4. Shared

Shared assets are files other than ```.css``` or ```.js```, like images, typefaces and manifests..., all the files within this folder, will be copied automatically upon build to the assets Shopify directory.

```
workflow/                             📁 root of the theme
├─ ...  
├─ templates/                         📁 templates shopify directory
├─ src/                               📁 root source folder processed by webpack
│    ├─ ...  
│    ├─ components/                   📁 components source directory
│    └─ shared/                       📁 shared assets directory          
│        ├─ manifest.json             📄 example shared file 
│        └─ ...             
└─ ...
```

## What's next ?

Workflow comes with other commands 🧰 for common tasks. [Check commands here →]({{< relref "structure" >}})
