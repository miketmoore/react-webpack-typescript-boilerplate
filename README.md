# React, Webpack, and TypeScript Boilerplate

## Description

I built this so that I could have a reference and a "starter kit" for projects that use [React](https://reactjs.org/), [webpack](https://webpack.js.org/), and [TypeScript](https://www.typescriptlang.org/). Hopefully this is useful to others, too.

It also uses [Prettier](https://prettier.io/) and some other libraries/tools such as [emotion](https://emotion.sh/) (CSS-in-JS), [Styled System](http://jxnblk.com/styled-system/), and [polished](https://polished.js.org/).

I started building this by following [this guide](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html) on the TypeScript website.

## Install

### Clone Repository

```
git clone https://github.com/miketmoore/react-webpack-typescript-boilerplate.git
```

### Install Dependencies

I recommend using [yarn](https://yarnpkg.com/en/), but you could also use [npm](https://www.npmjs.com/). I used yarn, so you can make use of the lock file specific to yarn that is in this repository.

```
yarn install
```

## Start Server

```
yarn start:dev
```

This will make http://localhost:3000 available. There isn't anything to see there, but it is a blank canvas for your awesome project. Note: the port is configurable via [webpack.config.js](webpack.config.js).

## Build && Start Storybook

[Storybook](https://storybook.js.org/) is an amazing tool for rapidly prototyping UI components. I have setup a starter version of it that works with TypeScript. 

```
yarn build-storybook && yarn storybook
```

This will make http://localhost:6006 available. There should be a simple "hello, world" story.
