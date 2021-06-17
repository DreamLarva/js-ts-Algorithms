/*
65. 有效数字
有效数字（按顺序）可以分成以下几个部分：

一个 小数 或者 整数
（可选）一个 'e' 或 'E' ，后面跟着一个 整数
小数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
下述格式之一：
至少一位数字，后面跟着一个点 '.'
至少一位数字，后面跟着一个点 '.' ，后面再跟着至少一位数字
一个点 '.' ，后面跟着至少一位数字
整数（按顺序）可以分成以下几个部分：

（可选）一个符号字符（'+' 或 '-'）
至少一位数字
部分有效数字列举如下：

["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"]
部分无效数字列举如下：

["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"]
给你一个字符串 s ，如果 s 是一个 有效数字 ，请返回 true 。



示例 1：

输入：s = "0"
输出：true
示例 2：

输入：s = "e"
输出：false
示例 3：

输入：s = "."
输出：false
示例 4：

输入：s = ".1"
输出：true


提示：

1 <= s.length <= 20
s 仅含英文字母（大写和小写），数字（0-9），加号 '+' ，减号 '-' ，或者点 '.' 。
* */
/*
预备知识

确定有限状态自动机（以下简称「自动机」）是一类计算模型。它包含一系列状态，这些状态中：

有一个特殊的状态，被称作「初始状态」。
还有一系列状态被称为「接受状态」，它们组成了一个特殊的集合。其中，一个状态可能既是「初始状态」，也是「接受状态」。
起初，这个自动机处于「初始状态」。随后，它顺序地读取字符串中的每一个字符，并根据当前状态和读入的字符，按照某个事先约定好的「转移规则」，
从当前状态转移到下一个状态；当状态转移完成后，它就读取下一个字符。当字符串全部读取完毕后，如果自动机处于某个「接受状态」，则判定该字符串「被接受」；否则，判定该字符串「被拒绝」。

注意：如果输入的过程中某一步转移失败了，即不存在对应的「转移规则」，此时计算将提前中止。在这种情况下我们也判定该字符串「被拒绝」。

一个自动机，总能够回答某种形式的「对于给定的输入字符串 S，判断其是否满足条件 P」的问题。在本题中，条件 P 即为「构成合法的表示数值的字符串」。

自动机驱动的编程，可以被看做一种暴力枚举方法的延伸：它穷尽了在任何一种情况下，对应任何的输入，需要做的事情。

自动机在计算机科学领域有着广泛的应用。在算法领域，它与大名鼎鼎的字符串查找算法「KMP 算法」有着密切的关联；在工程领域，它是实现「正则表达式」的基础。

* */
/**
 * 符号位
 * 整数部分
 * 左侧有整数的小数点
 * 左侧无整数的小数点（根据前面的第二条额外规则，需要对左侧有无整数的两种小数点做区分）
 * 小数部分
 * 字符 e
 * 指数部分的符号位
 * 指数部分的整数部分
 * */
function isNumber(s: string) {
  enum State {
    初始状态,
    有符号整数,
    无符号整数,
    左侧有整数的小数点,
    左侧无整数的小数点,
    小数部分,
    字符e,
    指数部分的符号位,
    指数部分的整数部分,
    结束状态,
  }

  enum CharType {
    数字,
    字符e,
    小数点,
    符号,
    不合法字符,
  }

  const toCharType = (ch: string) => {
    if (!isNaN(ch as unknown as number)) {
      return CharType.数字;
    } else if (ch.toLowerCase() === "e") {
      return CharType.字符e;
    } else if (ch === ".") {
      return CharType.小数点;
    } else if (ch === "+" || ch === "-") {
      return CharType.符号;
    } else {
      return CharType.不合法字符;
    }
  };

  const transfer = new Map();

  const initialMap = new Map();
  initialMap.set(CharType.数字, State.无符号整数);
  initialMap.set(CharType.小数点, State.左侧无整数的小数点);
  initialMap.set(CharType.符号, State.有符号整数);
  transfer.set(State.初始状态, initialMap);

  const intSignMap = new Map();
  intSignMap.set(CharType.数字, State.无符号整数);
  intSignMap.set(CharType.小数点, State.左侧无整数的小数点);
  transfer.set(State.有符号整数, intSignMap);

  const integerMap = new Map();
  integerMap.set(CharType.数字, State.无符号整数);
  integerMap.set(CharType.字符e, State.字符e);
  integerMap.set(CharType.小数点, State.左侧有整数的小数点);
  transfer.set(State.无符号整数, integerMap);

  const pointMap = new Map();
  pointMap.set(CharType.数字, State.小数部分);
  pointMap.set(CharType.字符e, State.字符e);
  transfer.set(State.左侧有整数的小数点, pointMap);

  const pointWithoutIntMap = new Map();
  pointWithoutIntMap.set(CharType.数字, State.小数部分);
  transfer.set(State.左侧无整数的小数点, pointWithoutIntMap);

  const fractionMap = new Map();
  fractionMap.set(CharType.数字, State.小数部分);
  fractionMap.set(CharType.字符e, State.字符e);
  transfer.set(State.小数部分, fractionMap);

  const expMap = new Map();
  expMap.set(CharType.数字, State.指数部分的整数部分);
  expMap.set(CharType.符号, State.指数部分的符号位);
  transfer.set(State.字符e, expMap);

  const expSignMap = new Map();
  expSignMap.set(CharType.数字, State.指数部分的整数部分);
  transfer.set(State.指数部分的符号位, expSignMap);

  const expNumberMap = new Map();
  expNumberMap.set(CharType.数字, State.指数部分的整数部分);
  transfer.set(State.指数部分的整数部分, expNumberMap);

  const length = s.length;
  let state = State.初始状态;

  for (let i = 0; i < length; i++) {
    const type = toCharType(s[i]);
    if (!transfer.get(state).has(type)) {
      return false;
    } else {
      state = transfer.get(state).get(type);
    }
  }

  return [
    State.无符号整数,
    State.左侧有整数的小数点,
    State.小数部分,
    State.指数部分的整数部分,
    State.结束状态,
  ].includes(state);
}

import assert from "assert";
assert.strictEqual(isNumber("."), false);
assert.strictEqual(isNumber(".1"), true);
