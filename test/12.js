const util = require("util");

console.log(util.types.isPromise(Promise.resolve(42)));
