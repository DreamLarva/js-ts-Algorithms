const _ = require("lodash");

/**
 * 同样的参数的 调用在 还没有返回前就会使用接下来公用一个回调结果
 * */
function lock(fun, resolver) {
  const memoizeFun = _.memoize((...args) => {
    // 拿到 memoize 存的 key 值, 用于删除
    const key = resolver ? resolver.apply(this, args) : args[0];
    return fun.apply(this, args).then(
      (v) => resolve(v, key),
      (v) => reject(v, key)
    );
  }, resolver);

  // 成功和失败 都把 cache 的值清理掉
  function resolve(args, key) {
    memoizeFun.cache.delete(key);
    return args;
  }

  function reject(args, key) {
    memoizeFun.cache.delete(key);
    return Promise.reject(args);
  }

  return function (...args) {
    return memoizeFun.call(this, ...args);
  };
}

const test = (count) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(count), count);
  });

const test2 = lock(test);

test2(2000).then(console.log);
test2(3000).then(console.log);
test2(4000).then(console.log);
test2(2000).then(console.log);
test2(2000).then(console.log);
test2(2000).then(console.log);
test2(3000).then(console.log);
test2(3000).then(console.log);
test2(3000).then(console.log);
test2(4000).then(console.log);

setTimeout(() => {
  console.log("after 4000");
  test2(2000).then(console.log);
  test2(2000).then(console.log);
  test2(2000).then(console.log);
}, 4000);

