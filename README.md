# Creating a server with Express

This example offers a pre-setup project for [Express](http://expressjs.com/) that allows you to get up and running in no time!

You can run the following command `now init express` to fetch the example to your local machine.

This Express example features the [`now.json` configuration file](https://zeit.co/docs/v2/deployments/configuration) below.

```json
{
    "version": 2,
    "name": "express",
    "builds": [
        { "src": "**/*.js", "use": "@now/node" }
    ]
}
```

_now.json_

- The `version` property specifies [`Now 2.0`](https://zeit.co/now).
- The `name` property sets the name for the deployment.
- The [`builds` property](https://zeit.co/docs/v2/deployments/builds) allows Now to use a [builder](https://zeit.co/docs/v2/deployments/builders/overview/) with a specific source target.

In this case we are going to use the `@now/node` builder to create a lambda function for every `.js` file in the project.  There are two `.js` files - `index.js` and `about/index.js`, which will be made available at your Now servers' urls `/` and `/about`.

Deploy the app with Now.

```shell
$ now
```

# Using Express with the `@now/node` builder

Note that we won't be creating a server, or using a `listen()` function to start a server, since Now is functioning as the server.  Express is used just for routing and middleware purposes.

Calling `express()` returns a function that takes a standard Node.js [http request object](https://nodejs.org/api/http.html#http_class_http_incomingmessage) and [http response object](https://nodejs.org/api/http.html#http_class_http_serverresponse) as parameters. Typically this function is defined as the variable `app` in an Node.js module, and that function also supports [routing and middleware customization](http://expressjs.com/en/4x/api.html#app).  And ... that function signature - `(req, res)` - is the exact shape that Now expects to be exported from a module. So you can return the result of the `express()` call, adding routing and middleware as you normally would with an express server.

Here's a very small example of using express:

```js
const express = require('express')

const app = express()

app.get('*', (req, res) => {
    res.send(200, '<h1>Hello, world!</h1>')
})

module.exports = app

```

The `req` and `res` objects passed to the callback of `app.get()` will then be [Express Request](http://expressjs.com/en/4x/api.html#req) and [Express Response](http://expressjs.com/en/4x/api.html#res) objects, instead of Node's standard http request and response objects.  So, you can use the Express [`res.send()` method](http://expressjs.com/en/4x/api.html#res.send) instead of the lower-level methods on the standard Node.js response object.

In the actual example code - [`index.js`](index.js) - you'll also note usage of
the [helmet package](https://npmjs.org/package/helmet) in the same way you'd
use it in a typical express server:

```js
app.use(helmet())
```

The helmet package adds extra security-related HTTP headers to HTTP responses sent from the express app.

## Resources

- To find more information on using the **Node.js Builder**, please refer to the [Node.js Builder (@now/node)](https://zeit.co/docs/v2/deployments/official-builders/node-js-now-node/) documentation.

- Check out how to [Deploy any of your applications with ZEIT Now.](https://zeit.co/docs/v2/deployments/basics)
