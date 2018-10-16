# Next.js + Electron.js Boilerplate

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[TOC]

*Create apps, the morden way*

## Overview

[Next.js](https://nextjs.org/) is a popular framework to create web applications by using the power of [React.js](https://reactjs.org/).

[Electron.js](https://electronjs.org/) is a popular framework to create cross-platform desktop applications.

This project is a spark between Next.js and Electron.js to leverage the power of both great frameworks to help you create cross-platform desktop applications with a breeze.

**Features**

- Zero runtime-dependency
  - Next.js will packup only neccessary codes
  - No more huge `node_modules`
- Robust dev dependencies
  - All dependencies are well maintained and used by thousands of projects
  - Means this boilerplate is production ready
- Hot reloading during development
- Secure file protocol enforced in production
- [Standard](https://standardjs.com) js linter
- Clean script help you clean generated files

## Getting Started

### Install nvm and node.js

**Windows**

Download [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases) and install with installer, then

```cmd
:: in powershell, install node latest version
nvm install latest

:: check installation
node -v

:: basic usages
nvm list
nvm use 10.12.0
```

> Ref: [nvm-windows](https://github.com/coreybutler/nvm-windows)
>
> (Note this is a totally different project from nvm, the latter supports only Mac OS/Linux)

**Mac OS/Linux**

Run following in bash shell

```bash
# install nvm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# install node
nvm install node
# check installation
node -v
# basic usages
nvm ls
nvm use 10.12.0
```

> Ref: [nvm](https://github.com/creationix/nvm)

### Install yarn

Follow the [**installation guide**](https://yarnpkg.com/en/docs/install) to install yarn.

## Usage

### Clone/Fork Repository

``` bash
git clone https://github.com/shadowwalker/next-electron
cd next-electron/src
yarn install
```

### Understand file tree

``` bash
src
├── app                    # next.js based app source folder
│   ├── components         # shared components
│   │   └── Layout.js      # layout component
│   ├── next.config.js     # next.js configuration file
│   ├── pages              # file system path based router (next.js feature)
│   │   └── index.js
│   ├── static             # static resources
│   │   └── img
│   └── utils              # utilitis
│       └── staticUrl.js
├── main                   # used for electron
│   └── main.js            # start point for electron
├── package.json           # !change meta data to your own
├── res                    # resources used when package apps
│   └── icons
├── script
│   └── clean.js           # maintain scripts
├── test
└── yarn.lock
```

### Start

``` bash
yarn start
```

This will start a next server on [http://localhost:3000](http://localhost:3000), and open the main window in `main/main.js`.

Now every change made within `app` folder will be rendered in the main window immediately, that's because Next.js packed with hot reloading feature for you.

**In case you are**

- new to JavaScript: [The Modern JavaScript Tutorial](https://javascript.info/)
- new to React.js: [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- new to Next.js: [Learn Next.js](https://nextjs.org/learn/)
- new to Electron.js: [Electron API Demos](https://github.com/electron/electron-api-demos)
- still confused: there are bunch of good materials out there waiting for you to explore

### Release

``` bash
yarn release-mac
yarn release-windows
yarn release-linux
```

This will first export app into `public` folder then build the packages in `dist` folder based on the platform you choose. Each command above should be run under their own environment.

I know it would be charming to have a `yarn release` to build every platform at once. But the result is not idea even it could. See

>  [*Don’t expect that you can build app for all platforms on one platform*](https://www.electron.build/multi-platform-build)

Basically, if you don't have a windows machine (or VM), don't assume the package built on mac would have proper behaviour on a customer windows enviroment. You always want to test it on windows before shipping out.

### Clean

``` bash
yarn clean
```

## Bonus

### Add .gitignore

Use [add-gitnore](https://github.com/TejasQ/add-gitignore) to generate `.gitignore` file, which use [gitignore.io](https://www.gitignore.io/) web service

``` bash
npx add-gitignore
```

## Reference

- [The Modern JavaScript Tutorial](https://javascript.info/)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Thanks

This project is inspired by the following works

- [Building Electron Apps with Next.js](https://leo.im/2017/electron-next)

App icons borrowed from

- [electron/electron-api-demos](https://github.com/electron/electron-api-demos/tree/master/assets/app-icon)