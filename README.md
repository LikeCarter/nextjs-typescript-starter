# nextjs-typescript-starter

![Version](https://img.shields.io/github/package-json/v/likecarter/nextjs-typescript-starter)
![GitHub](https://img.shields.io/github/license/likecarter/nextjs-typescript-starter)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/46f2f24a1e5244899f14e9c446f4447e)](https://www.codacy.com/app/LikeCarter/nextjs-typescript-starter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=LikeCarter/nextjs-typescript-starter&amp;utm_campaign=Badge_Grade)

Typescript starter template for NextJS. Comes with Apollo authentication and a simple Jest test suite.

You can see this demo app running on: [https://nextjs-typescript-starter.cartersprigings.now.sh/](https://nextjs-typescript-starter.cartersprigings.now.sh/)

## Setup

### Prerequisites

-  [Node.js](http://nodejs.org/) >= 10.x.
-  [Yarn](https://yarnpkg.com/)
-  Account at [GraphCool](https://www.graph.cool/)

### Configuration

[graph.cool](https://www.graph.cool/) can be setup with many different authentication providers, the most basic of which is email-password authentication. Once email-password authentication is enabled for your graph.cool project, you are provided with 2 useful mutations: createUser and signinUser.

To get this starter running locally, you will need to create a graph.cool account, and provide the `project.graphcool` schema.

When creating an account, both the createUser and signinUser mutations are executed on graph.cool, which returns a token that can be used to authenticate the user for future requests. The token is stored in a cookie for easy access (note: This may have security implications. *Please understand XSS and JWT before deploying this to production).*

### Install dependencies

```
yarn
```

### Running Tests

```bash
yarn test
```

### Run locally

```bash
yarn dev
```

### Build and run in production

```bash
yarn build
```

and then run...

```bash
yarn start
```

### Deploy to [ZEIT](https://zeit.co/)

The simplest way to test and deploy this project is to use ZEIT. 

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/likecarter/nextjs-typescript-starter)

## Thanks

**nextjs-typescript-starter** © 2019+, Carter Sprigings. Released under the MIT License.<br>
Authored and maintained by Carter Sprigings with help from contributors ([list][contributors]).

> [okatee.com](http://okatee.com) &nbsp;&middot;&nbsp;
> GitHub [@likecarter](https://github.com/likecarter)

[license]: http://mit-license.org/
[contributors]: http://github.com/likecarter/nextjs-typescript-starter/contributors