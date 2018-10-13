# Next.js + Electron.js Boilerplate

[TOC]

**Making apps, the morden way**

## Getting Started

#### Install nvm and node.js

**Windows**

Download [nvm-setup.zip](https://github.com/coreybutler/nvm-windows/releases) and install with installer, then

```cmd
:: in cmd, install node latest version
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

## Tips

### Add .gitignore

Use [add-gitnore](https://github.com/TejasQ/add-gitignore) to generate `.gitignore` file, which use [gitignore.io](https://www.gitignore.io/) web service

``` bash
npx add-gitignore
```