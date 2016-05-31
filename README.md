# Inodesta

[![Build Status](https://travis-ci.org/SLedunois/inodesta.svg?branch=dev)](https://travis-ci.org/SLedunois/inodesta)
[![Coverage Status](https://coveralls.io/repos/github/SLedunois/inodesta/badge.svg?branch=dev)](https://coveralls.io/github/SLedunois/inodesta?branch=dev)
[![codecov](https://codecov.io/gh/SLedunois/inodesta/branch/dev/graph/badge.svg)](https://codecov.io/gh/SLedunois/inodesta)

Instagram nodeJS API Package

## Easy to use

Inodesta is designed to be the simplest way possible to use Instagram api. 

## Installation

```
npm install inodesta
```

Create an object containing inodesta parameters 

```
{
  "client_id" : "<client_id>",
  "client_secret" : "<client_secret>",
  "redirect_uri" : "<redirect_uri>"
}
```

Then import inodesta in your projet and pass the object structure in paramters

```
var inodesta = require('inodesta').inodesta(inodesta_params);
```
You can now call inodesta to interact with instagram.

## Docs

* [oAuth](https://github.com/SLedunois/inodesta/tree/master/docs/oAuth)
* [User](https://github.com/SLedunois/inodesta/tree/master/docs/user)
* [Relationship](https://github.com/SLedunois/inodesta/tree/master/docs/relationship)
* [Media](https://github.com/SLedunois/inodesta/tree/master/docs/media)
* [Comments](https://github.com/SLedunois/inodesta/tree/master/docs/comments)
* [Likes](https://github.com/SLedunois/inodesta/tree/master/docs/likes)
* [Tags](https://github.com/SLedunois/inodesta/tree/master/docs/tags)
* [Location](https://github.com/SLedunois/inodesta/tree/master/docs/locations)