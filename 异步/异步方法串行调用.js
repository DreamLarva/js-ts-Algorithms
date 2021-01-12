function sleep(count) {
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log(count);
      resolve();
    }, count)
  );
}

function sync(fun) {
  let queue = Promise.resolve();

  return function (...args) {
    return (queue = queue.then(
      () => fun(...args),
      () => fun(...args)
    ));
  };
}

const test = sync(sleep);

test(1000);
test(1000);
test(1000);
test(1000);
test(1000);
