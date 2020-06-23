import _ from "lodash";

export function sortDeep(arr: any[]) {
  step(arr);
  return arr;

  function step(data: any) {
    if (Array.isArray(data)) {
      data.forEach((data) => step(data));
      data.sort((a, b) => a - b);
    }
  }
}

import assert from "assert";

assert.deepStrictEqual(sortDeep([1, 2, 3]), sortDeep([3, 2, 1]));
assert.deepStrictEqual(
  sortDeep([
    [1, 2, 3],
    [1, 3, 2],
    [2, 3, 1],
    [2, 1, 3],
    [3, 2, 1],
    [3, 1, 2],
  ]),
  sortDeep(
    _.shuffle([
      [1, 2, 3],
      [1, 3, 2],
      [2, 3, 1],
      [2, 1, 3],
      [3, 2, 1],
      [3, 1, 2],
    ])
  )
);

{
  const data = [1, 2, 3];
  const layer1 = new Array(5).fill(0).map(() => _.shuffle(data));
  const sample1 = new Array(5).fill(0).map(() => _.shuffle(layer1));
  const sample2 = new Array(5).fill(0).map(() => _.shuffle(layer1));

  assert.deepStrictEqual(sortDeep(sample1), sortDeep(sample2));
}
