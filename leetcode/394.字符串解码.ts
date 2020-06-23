/*
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
* */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s: string) {
  // 老实的使用栈
  const num_str = "1234567890";
  const alphabet_reg = /^[a-zA-Z]+$/; // 有[]嵌套就有可能有多个 符
  const stack = [];
  for (const char of s) {
    if (char === "]") {
      // 找到 对应的 [ 和 他之前的数字
      let num = "";
      let str = "";
      while (stack[stack.length - 1]) {
        const pop_data = stack[stack.length - 1];

        if (num_str.indexOf(pop_data) !== -1) {
          num = pop_data + num;
        }
        // 数字之前的 数据
        else if (num !== "") break;
        else {
          if (alphabet_reg.test(pop_data)) {
            str = pop_data + str;
          }
        }
        stack.pop();
      }

      stack.push(str.repeat(parseInt(num)));
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};

/**
 * 使用正则 真是逆天了
 * */
var decodeString1 = function (s: string) {
  while (/\[/.test(s)) {
    s = s.replace(/(\d+)\[([^\[\]]+)]/, (match, num, str) => str.repeat(num));
  }
  return s;
};

import assert from "assert";

assert.strictEqual(decodeString("3[a]2[bc]"), "aaabcbc");
assert.strictEqual(decodeString("3[a2[c]]"), "accaccacc");
assert.strictEqual(decodeString("2[abc]3[cd]ef"), "abcabccdcdcdef");
assert.strictEqual(decodeString1("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc");
assert.strictEqual(decodeString1("3[a]2[bc]"), "aaabcbc");
assert.strictEqual(decodeString1("3[a2[c]]"), "accaccacc");
assert.strictEqual(decodeString1("2[abc]3[cd]ef"), "abcabccdcdcdef");
assert.strictEqual(decodeString1("3[a]2[b4[F]c]"), "aaabFFFFcbFFFFc");

import Benchmark from "benchmark";

const suite = new Benchmark.Suite();
suite
  .add("stack", function () {
    decodeString("3[a]2[b4[F]c]");
  })
  .add("regexp", function () {
    decodeString1("3[a]2[b4[F]c]");
  })
  .on("cycle", function (event: Benchmark.Event) {
    console.log(String(event.target));
  })
  .on("complete", function (this: Benchmark.Suite) {
    // console.log('Fastest is ' + this.filter('fastest').map( 'name'));
  })
  // run async
  .run({ async: false });
