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
