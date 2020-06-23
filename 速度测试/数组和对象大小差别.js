function memoryUsage(fun) {
  const start = process.memoryUsage();
  fun();
  const end = process.memoryUsage();
  console.table({
    heapTotal: (end.heapTotal - start.heapTotal) / 1024 / 1024 + "MB",
    heapUsed: (end.heapUsed - start.heapUsed) / 1024 / 1024 + "MB",
  });
}

memoryUsage(() => {
  const array = [];
  for (let i = 0; i < 9999999; i++) {
    array.push(i);
  }
});

memoryUsage(() => {});

memoryUsage(() => {
  const obj = {};
  for (let i = 0; i < 9999999; i++) {
    obj[i] = 1;
  }
});

memoryUsage(() => {});

memoryUsage(() => {
  const set = new Set();
  for (let i = 0; i < 9999999; i++) {
    set.add(i);
  }
});

memoryUsage(() => {});

memoryUsage(() => {
  const map = new Map();
  for (let i = 0; i < 9999999; i++) {
    map.set(i, 0);
  }
});
