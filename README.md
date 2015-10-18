# bundle-angular-for-web-worker

Read [Run Angular in Web Worker](http://glebbahmutov.com/blog/run-angular-in-web-worker/) and
see demo in [bahmutov/angular-in-web-worker](https://github.com/bahmutov/angular-in-web-worker).

## To make new Angular WebWorker bundle

* Execute `npm run bundle` command. This creates `bundle.js` file.
    * If there are problems, like not finding a module `jade` under `benv`,
    go inside each module (`benv`, `benv/node_modules/rewrite`) and execute `npm install` to
    install the dev modules in addition to production.
* Edit `bundle.js` file
    * Comment out block `var xhrHttp = (function () {`
    * Comment out after `caching original wrapper` the references to the wrappers to be like
    
    // caching original wrapper
    var moduleWrapper0, // = Module.wrapper[0],
        moduleWrapper1, // = Module.wrapper[1],
        originalExtensions = {},
        nodeRequire,
        currentModule;

* Comment out line `// delete require.cache[__filename]`

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.
