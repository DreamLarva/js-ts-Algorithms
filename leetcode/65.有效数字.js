"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
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
function isNumber(s) {
  let State;
  (function (State) {
    State[(State["\u521D\u59CB\u72B6\u6001"] = 0)] = "\u521D\u59CB\u72B6\u6001";
    State[(State["\u6709\u7B26\u53F7\u6574\u6570"] = 1)] =
      "\u6709\u7B26\u53F7\u6574\u6570";
    State[(State["\u65E0\u7B26\u53F7\u6574\u6570"] = 2)] =
      "\u65E0\u7B26\u53F7\u6574\u6570";
    State[
      (State["\u5DE6\u4FA7\u6709\u6574\u6570\u7684\u5C0F\u6570\u70B9"] = 3)
    ] = "\u5DE6\u4FA7\u6709\u6574\u6570\u7684\u5C0F\u6570\u70B9";
    State[
      (State["\u5DE6\u4FA7\u65E0\u6574\u6570\u7684\u5C0F\u6570\u70B9"] = 4)
    ] = "\u5DE6\u4FA7\u65E0\u6574\u6570\u7684\u5C0F\u6570\u70B9";
    State[(State["\u5C0F\u6570\u90E8\u5206"] = 5)] = "\u5C0F\u6570\u90E8\u5206";
    State[(State["\u5B57\u7B26e"] = 6)] = "\u5B57\u7B26e";
    State[(State["\u6307\u6570\u90E8\u5206\u7684\u7B26\u53F7\u4F4D"] = 7)] =
      "\u6307\u6570\u90E8\u5206\u7684\u7B26\u53F7\u4F4D";
    State[
      (State["\u6307\u6570\u90E8\u5206\u7684\u6574\u6570\u90E8\u5206"] = 8)
    ] = "\u6307\u6570\u90E8\u5206\u7684\u6574\u6570\u90E8\u5206";
    State[(State["\u7ED3\u675F\u72B6\u6001"] = 9)] = "\u7ED3\u675F\u72B6\u6001";
  })(State || (State = {}));
  let CharType;
  (function (CharType) {
    CharType[(CharType["\u6570\u5B57"] = 0)] = "\u6570\u5B57";
    CharType[(CharType["\u5B57\u7B26e"] = 1)] = "\u5B57\u7B26e";
    CharType[(CharType["\u5C0F\u6570\u70B9"] = 2)] = "\u5C0F\u6570\u70B9";
    CharType[(CharType["\u7B26\u53F7"] = 3)] = "\u7B26\u53F7";
    CharType[(CharType["\u4E0D\u5408\u6CD5\u5B57\u7B26"] = 4)] =
      "\u4E0D\u5408\u6CD5\u5B57\u7B26";
  })(CharType || (CharType = {}));
  const toCharType = (ch) => {
    if (!isNaN(ch)) {
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
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(isNumber("."), false);
assert_1.default.strictEqual(isNumber(".1"), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjUu5pyJ5pWI5pWw5a2XLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJsZWV0Y29kZS82NS7mnInmlYjmlbDlrZcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlESTtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFrQkk7QUFDSjs7Ozs7Ozs7O0tBU0s7QUFDTCxTQUFTLFFBQVEsQ0FBQyxDQUFTO0lBQ3pCLElBQUssS0FXSjtJQVhELFdBQUssS0FBSztRQUNSLHlFQUFJLENBQUE7UUFDSixxRkFBSyxDQUFBO1FBQ0wscUZBQUssQ0FBQTtRQUNMLHFJQUFTLENBQUE7UUFDVCxxSUFBUyxDQUFBO1FBQ1QseUVBQUksQ0FBQTtRQUNKLG1EQUFHLENBQUE7UUFDSCx5SEFBUSxDQUFBO1FBQ1IscUlBQVMsQ0FBQTtRQUNULHlFQUFJLENBQUE7SUFDTixDQUFDLEVBWEksS0FBSyxLQUFMLEtBQUssUUFXVDtJQUVELElBQUssUUFNSjtJQU5ELFdBQUssUUFBUTtRQUNYLHVEQUFFLENBQUE7UUFDRix5REFBRyxDQUFBO1FBQ0gsbUVBQUcsQ0FBQTtRQUNILHVEQUFFLENBQUE7UUFDRiwyRkFBSyxDQUFBO0lBQ1AsQ0FBQyxFQU5JLFFBQVEsS0FBUixRQUFRLFFBTVo7SUFFRCxNQUFNLFVBQVUsR0FBRyxDQUFDLEVBQVUsRUFBRSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBdUIsQ0FBQyxFQUFFO1lBQ25DLE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUNwQjthQUFNLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsRUFBRTtZQUNuQyxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7U0FDckI7YUFBTSxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDckIsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJLEVBQUUsS0FBSyxHQUFHLEVBQUU7WUFDbkMsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDdkI7SUFDSCxDQUFDLENBQUM7SUFFRixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBRTNCLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzdCLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztJQUV0QyxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzNCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFeEMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ3JDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQUVsRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQzlCLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFdEMsTUFBTSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUN6QixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWhDLE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7SUFDN0IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFekMsTUFBTSxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUU1QyxNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ3hCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFFdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMvQixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QztLQUNGO0lBRUQsT0FBTztRQUNMLEtBQUssQ0FBQyxLQUFLO1FBQ1gsS0FBSyxDQUFDLFNBQVM7UUFDZixLQUFLLENBQUMsSUFBSTtRQUNWLEtBQUssQ0FBQyxTQUFTO1FBQ2YsS0FBSyxDQUFDLElBQUk7S0FDWCxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6QyxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuNjUuIOacieaViOaVsOWtl1xu5pyJ5pWI5pWw5a2X77yI5oyJ6aG65bqP77yJ5Y+v5Lul5YiG5oiQ5Lul5LiL5Yeg5Liq6YOo5YiG77yaXG5cbuS4gOS4qiDlsI/mlbAg5oiW6ICFIOaVtOaVsFxu77yI5Y+v6YCJ77yJ5LiA5LiqICdlJyDmiJYgJ0UnIO+8jOWQjumdoui3n+edgOS4gOS4qiDmlbTmlbBcbuWwj+aVsO+8iOaMiemhuuW6j++8ieWPr+S7peWIhuaIkOS7peS4i+WHoOS4qumDqOWIhu+8mlxuXG7vvIjlj6/pgInvvInkuIDkuKrnrKblj7flrZfnrKbvvIgnKycg5oiWICctJ++8iVxu5LiL6L+w5qC85byP5LmL5LiA77yaXG7oh7PlsJHkuIDkvY3mlbDlrZfvvIzlkI7pnaLot5/nnYDkuIDkuKrngrkgJy4nXG7oh7PlsJHkuIDkvY3mlbDlrZfvvIzlkI7pnaLot5/nnYDkuIDkuKrngrkgJy4nIO+8jOWQjumdouWGjei3n+edgOiHs+WwkeS4gOS9jeaVsOWtl1xu5LiA5Liq54K5ICcuJyDvvIzlkI7pnaLot5/nnYDoh7PlsJHkuIDkvY3mlbDlrZdcbuaVtOaVsO+8iOaMiemhuuW6j++8ieWPr+S7peWIhuaIkOS7peS4i+WHoOS4qumDqOWIhu+8mlxuXG7vvIjlj6/pgInvvInkuIDkuKrnrKblj7flrZfnrKbvvIgnKycg5oiWICctJ++8iVxu6Iez5bCR5LiA5L2N5pWw5a2XXG7pg6jliIbmnInmlYjmlbDlrZfliJfkuL7lpoLkuIvvvJpcblxuW1wiMlwiLCBcIjAwODlcIiwgXCItMC4xXCIsIFwiKzMuMTRcIiwgXCI0LlwiLCBcIi0uOVwiLCBcIjJlMTBcIiwgXCItOTBFM1wiLCBcIjNlKzdcIiwgXCIrNmUtMVwiLCBcIjUzLjVlOTNcIiwgXCItMTIzLjQ1NmU3ODlcIl1cbumDqOWIhuaXoOaViOaVsOWtl+WIl+S4vuWmguS4i++8mlxuXG5bXCJhYmNcIiwgXCIxYVwiLCBcIjFlXCIsIFwiZTNcIiwgXCI5OWUyLjVcIiwgXCItLTZcIiwgXCItKzNcIiwgXCI5NWE1NGU1M1wiXVxu57uZ5L2g5LiA5Liq5a2X56ym5LiyIHMg77yM5aaC5p6cIHMg5piv5LiA5LiqIOacieaViOaVsOWtlyDvvIzor7fov5Tlm54gdHJ1ZSDjgIJcblxuXG5cbuekuuS+iyAx77yaXG5cbui+k+WFpe+8mnMgPSBcIjBcIlxu6L6T5Ye677yadHJ1ZVxu56S65L6LIDLvvJpcblxu6L6T5YWl77yacyA9IFwiZVwiXG7ovpPlh7rvvJpmYWxzZVxu56S65L6LIDPvvJpcblxu6L6T5YWl77yacyA9IFwiLlwiXG7ovpPlh7rvvJpmYWxzZVxu56S65L6LIDTvvJpcblxu6L6T5YWl77yacyA9IFwiLjFcIlxu6L6T5Ye677yadHJ1ZVxuXG5cbuaPkOekuu+8mlxuXG4xIDw9IHMubGVuZ3RoIDw9IDIwXG5zIOS7heWQq+iLseaWh+Wtl+avje+8iOWkp+WGmeWSjOWwj+WGme+8ie+8jOaVsOWtl++8iDAtOe+8ie+8jOWKoOWPtyAnKycg77yM5YeP5Y+3ICctJyDvvIzmiJbogIXngrkgJy4nIOOAglxuKiAqL1xuLypcbumihOWkh+efpeivhlxuXG7noa7lrprmnInpmZDnirbmgIHoh6rliqjmnLrvvIjku6XkuIvnroDnp7DjgIzoh6rliqjmnLrjgI3vvInmmK/kuIDnsbvorqHnrpfmqKHlnovjgILlroPljIXlkKvkuIDns7vliJfnirbmgIHvvIzov5nkupvnirbmgIHkuK3vvJpcblxu5pyJ5LiA5Liq54m55q6K55qE54q25oCB77yM6KKr56ew5L2c44CM5Yid5aeL54q25oCB44CN44CCXG7ov5jmnInkuIDns7vliJfnirbmgIHooqvnp7DkuLrjgIzmjqXlj5fnirbmgIHjgI3vvIzlroPku6znu4TmiJDkuobkuIDkuKrnibnmrornmoTpm4blkIjjgILlhbbkuK3vvIzkuIDkuKrnirbmgIHlj6/og73ml6LmmK/jgIzliJ3lp4vnirbmgIHjgI3vvIzkuZ/mmK/jgIzmjqXlj5fnirbmgIHjgI3jgIJcbui1t+WIne+8jOi/meS4quiHquWKqOacuuWkhOS6juOAjOWIneWni+eKtuaAgeOAjeOAgumaj+WQju+8jOWug+mhuuW6j+WcsOivu+WPluWtl+espuS4suS4reeahOavj+S4gOS4quWtl+espu+8jOW5tuagueaNruW9k+WJjeeKtuaAgeWSjOivu+WFpeeahOWtl+espu+8jOaMieeFp+afkOS4quS6i+WFiOe6puWumuWlveeahOOAjOi9rOenu+inhOWImeOAje+8jFxu5LuO5b2T5YmN54q25oCB6L2s56e75Yiw5LiL5LiA5Liq54q25oCB77yb5b2T54q25oCB6L2s56e75a6M5oiQ5ZCO77yM5a6D5bCx6K+75Y+W5LiL5LiA5Liq5a2X56ym44CC5b2T5a2X56ym5Liy5YWo6YOo6K+75Y+W5a6M5q+V5ZCO77yM5aaC5p6c6Ieq5Yqo5py65aSE5LqO5p+Q5Liq44CM5o6l5Y+X54q25oCB44CN77yM5YiZ5Yik5a6a6K+l5a2X56ym5Liy44CM6KKr5o6l5Y+X44CN77yb5ZCm5YiZ77yM5Yik5a6a6K+l5a2X56ym5Liy44CM6KKr5ouS57ud44CN44CCXG5cbuazqOaEj++8muWmguaenOi+k+WFpeeahOi/h+eoi+S4reafkOS4gOatpei9rOenu+Wksei0peS6hu+8jOWNs+S4jeWtmOWcqOWvueW6lOeahOOAjOi9rOenu+inhOWImeOAje+8jOatpOaXtuiuoeeul+WwhuaPkOWJjeS4reatouOAguWcqOi/meenjeaDheWGteS4i+aIkeS7rOS5n+WIpOWumuivpeWtl+espuS4suOAjOiiq+aLkue7neOAjeOAglxuXG7kuIDkuKroh6rliqjmnLrvvIzmgLvog73lpJ/lm57nrZTmn5Dnp43lvaLlvI/nmoTjgIzlr7nkuo7nu5nlrprnmoTovpPlhaXlrZfnrKbkuLIgU++8jOWIpOaWreWFtuaYr+WQpua7oei2s+adoeS7tiBQ44CN55qE6Zeu6aKY44CC5Zyo5pys6aKY5Lit77yM5p2h5Lu2IFAg5Y2z5Li644CM5p6E5oiQ5ZCI5rOV55qE6KGo56S65pWw5YC855qE5a2X56ym5Liy44CN44CCXG5cbuiHquWKqOacuumpseWKqOeahOe8lueoi++8jOWPr+S7peiiq+eci+WBmuS4gOenjeaatOWKm+aemuS4vuaWueazleeahOW7tuS8uO+8muWug+ept+WwveS6huWcqOS7u+S9leS4gOenjeaDheWGteS4i++8jOWvueW6lOS7u+S9leeahOi+k+WFpe+8jOmcgOimgeWBmueahOS6i+aDheOAglxuXG7oh6rliqjmnLrlnKjorqHnrpfmnLrnp5Hlrabpoobln5/mnInnnYDlub/ms5vnmoTlupTnlKjjgILlnKjnrpfms5Xpoobln5/vvIzlroPkuI7lpKflkI3pvI7pvI7nmoTlrZfnrKbkuLLmn6Xmib7nrpfms5XjgIxLTVAg566X5rOV44CN5pyJ552A5a+G5YiH55qE5YWz6IGU77yb5Zyo5bel56iL6aKG5Z+f77yM5a6D5piv5a6e546w44CM5q2j5YiZ6KGo6L6+5byP44CN55qE5Z+656GA44CCXG5cbiogKi9cbi8qKlxuICog56ym5Y+35L2NXG4gKiDmlbTmlbDpg6jliIZcbiAqIOW3puS+p+acieaVtOaVsOeahOWwj+aVsOeCuVxuICog5bem5L6n5peg5pW05pWw55qE5bCP5pWw54K577yI5qC55o2u5YmN6Z2i55qE56ys5LqM5p2h6aKd5aSW6KeE5YiZ77yM6ZyA6KaB5a+55bem5L6n5pyJ5peg5pW05pWw55qE5Lik56eN5bCP5pWw54K55YGa5Yy65YiG77yJXG4gKiDlsI/mlbDpg6jliIZcbiAqIOWtl+espiBlXG4gKiDmjIfmlbDpg6jliIbnmoTnrKblj7fkvY1cbiAqIOaMh+aVsOmDqOWIhueahOaVtOaVsOmDqOWIhlxuICogKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHM6IHN0cmluZykge1xuICBlbnVtIFN0YXRlIHtcbiAgICDliJ3lp4vnirbmgIEsXG4gICAg5pyJ56ym5Y+35pW05pWwLFxuICAgIOaXoOespuWPt+aVtOaVsCxcbiAgICDlt6bkvqfmnInmlbTmlbDnmoTlsI/mlbDngrksXG4gICAg5bem5L6n5peg5pW05pWw55qE5bCP5pWw54K5LFxuICAgIOWwj+aVsOmDqOWIhixcbiAgICDlrZfnrKZlLFxuICAgIOaMh+aVsOmDqOWIhueahOespuWPt+S9jSxcbiAgICDmjIfmlbDpg6jliIbnmoTmlbTmlbDpg6jliIYsXG4gICAg57uT5p2f54q25oCBLFxuICB9XG5cbiAgZW51bSBDaGFyVHlwZSB7XG4gICAg5pWw5a2XLFxuICAgIOWtl+espmUsXG4gICAg5bCP5pWw54K5LFxuICAgIOespuWPtyxcbiAgICDkuI3lkIjms5XlrZfnrKYsXG4gIH1cblxuICBjb25zdCB0b0NoYXJUeXBlID0gKGNoOiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWlzTmFOKGNoIGFzIHVua25vd24gYXMgbnVtYmVyKSkge1xuICAgICAgcmV0dXJuIENoYXJUeXBlLuaVsOWtlztcbiAgICB9IGVsc2UgaWYgKGNoLnRvTG93ZXJDYXNlKCkgPT09IFwiZVwiKSB7XG4gICAgICByZXR1cm4gQ2hhclR5cGUu5a2X56ymZTtcbiAgICB9IGVsc2UgaWYgKGNoID09PSBcIi5cIikge1xuICAgICAgcmV0dXJuIENoYXJUeXBlLuWwj+aVsOeCuTtcbiAgICB9IGVsc2UgaWYgKGNoID09PSBcIitcIiB8fCBjaCA9PT0gXCItXCIpIHtcbiAgICAgIHJldHVybiBDaGFyVHlwZS7nrKblj7c7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDaGFyVHlwZS7kuI3lkIjms5XlrZfnrKY7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRyYW5zZmVyID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0IGluaXRpYWxNYXAgPSBuZXcgTWFwKCk7XG4gIGluaXRpYWxNYXAuc2V0KENoYXJUeXBlLuaVsOWtlywgU3RhdGUu5peg56ym5Y+35pW05pWwKTtcbiAgaW5pdGlhbE1hcC5zZXQoQ2hhclR5cGUu5bCP5pWw54K5LCBTdGF0ZS7lt6bkvqfml6DmlbTmlbDnmoTlsI/mlbDngrkpO1xuICBpbml0aWFsTWFwLnNldChDaGFyVHlwZS7nrKblj7csIFN0YXRlLuacieespuWPt+aVtOaVsCk7XG4gIHRyYW5zZmVyLnNldChTdGF0ZS7liJ3lp4vnirbmgIEsIGluaXRpYWxNYXApO1xuXG4gIGNvbnN0IGludFNpZ25NYXAgPSBuZXcgTWFwKCk7XG4gIGludFNpZ25NYXAuc2V0KENoYXJUeXBlLuaVsOWtlywgU3RhdGUu5peg56ym5Y+35pW05pWwKTtcbiAgaW50U2lnbk1hcC5zZXQoQ2hhclR5cGUu5bCP5pWw54K5LCBTdGF0ZS7lt6bkvqfml6DmlbTmlbDnmoTlsI/mlbDngrkpO1xuICB0cmFuc2Zlci5zZXQoU3RhdGUu5pyJ56ym5Y+35pW05pWwLCBpbnRTaWduTWFwKTtcblxuICBjb25zdCBpbnRlZ2VyTWFwID0gbmV3IE1hcCgpO1xuICBpbnRlZ2VyTWFwLnNldChDaGFyVHlwZS7mlbDlrZcsIFN0YXRlLuaXoOespuWPt+aVtOaVsCk7XG4gIGludGVnZXJNYXAuc2V0KENoYXJUeXBlLuWtl+espmUsIFN0YXRlLuWtl+espmUpO1xuICBpbnRlZ2VyTWFwLnNldChDaGFyVHlwZS7lsI/mlbDngrksIFN0YXRlLuW3puS+p+acieaVtOaVsOeahOWwj+aVsOeCuSk7XG4gIHRyYW5zZmVyLnNldChTdGF0ZS7ml6DnrKblj7fmlbTmlbAsIGludGVnZXJNYXApO1xuXG4gIGNvbnN0IHBvaW50TWFwID0gbmV3IE1hcCgpO1xuICBwb2ludE1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7lsI/mlbDpg6jliIYpO1xuICBwb2ludE1hcC5zZXQoQ2hhclR5cGUu5a2X56ymZSwgU3RhdGUu5a2X56ymZSk7XG4gIHRyYW5zZmVyLnNldChTdGF0ZS7lt6bkvqfmnInmlbTmlbDnmoTlsI/mlbDngrksIHBvaW50TWFwKTtcblxuICBjb25zdCBwb2ludFdpdGhvdXRJbnRNYXAgPSBuZXcgTWFwKCk7XG4gIHBvaW50V2l0aG91dEludE1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7lsI/mlbDpg6jliIYpO1xuICB0cmFuc2Zlci5zZXQoU3RhdGUu5bem5L6n5peg5pW05pWw55qE5bCP5pWw54K5LCBwb2ludFdpdGhvdXRJbnRNYXApO1xuXG4gIGNvbnN0IGZyYWN0aW9uTWFwID0gbmV3IE1hcCgpO1xuICBmcmFjdGlvbk1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7lsI/mlbDpg6jliIYpO1xuICBmcmFjdGlvbk1hcC5zZXQoQ2hhclR5cGUu5a2X56ymZSwgU3RhdGUu5a2X56ymZSk7XG4gIHRyYW5zZmVyLnNldChTdGF0ZS7lsI/mlbDpg6jliIYsIGZyYWN0aW9uTWFwKTtcblxuICBjb25zdCBleHBNYXAgPSBuZXcgTWFwKCk7XG4gIGV4cE1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7mjIfmlbDpg6jliIbnmoTmlbTmlbDpg6jliIYpO1xuICBleHBNYXAuc2V0KENoYXJUeXBlLuespuWPtywgU3RhdGUu5oyH5pWw6YOo5YiG55qE56ym5Y+35L2NKTtcbiAgdHJhbnNmZXIuc2V0KFN0YXRlLuWtl+espmUsIGV4cE1hcCk7XG5cbiAgY29uc3QgZXhwU2lnbk1hcCA9IG5ldyBNYXAoKTtcbiAgZXhwU2lnbk1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7mjIfmlbDpg6jliIbnmoTmlbTmlbDpg6jliIYpO1xuICB0cmFuc2Zlci5zZXQoU3RhdGUu5oyH5pWw6YOo5YiG55qE56ym5Y+35L2NLCBleHBTaWduTWFwKTtcblxuICBjb25zdCBleHBOdW1iZXJNYXAgPSBuZXcgTWFwKCk7XG4gIGV4cE51bWJlck1hcC5zZXQoQ2hhclR5cGUu5pWw5a2XLCBTdGF0ZS7mjIfmlbDpg6jliIbnmoTmlbTmlbDpg6jliIYpO1xuICB0cmFuc2Zlci5zZXQoU3RhdGUu5oyH5pWw6YOo5YiG55qE5pW05pWw6YOo5YiGLCBleHBOdW1iZXJNYXApO1xuXG4gIGNvbnN0IGxlbmd0aCA9IHMubGVuZ3RoO1xuICBsZXQgc3RhdGUgPSBTdGF0ZS7liJ3lp4vnirbmgIE7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHR5cGUgPSB0b0NoYXJUeXBlKHNbaV0pO1xuICAgIGlmICghdHJhbnNmZXIuZ2V0KHN0YXRlKS5oYXModHlwZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSB0cmFuc2Zlci5nZXQoc3RhdGUpLmdldCh0eXBlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW1xuICAgIFN0YXRlLuaXoOespuWPt+aVtOaVsCxcbiAgICBTdGF0ZS7lt6bkvqfmnInmlbTmlbDnmoTlsI/mlbDngrksXG4gICAgU3RhdGUu5bCP5pWw6YOo5YiGLFxuICAgIFN0YXRlLuaMh+aVsOmDqOWIhueahOaVtOaVsOmDqOWIhixcbiAgICBTdGF0ZS7nu5PmnZ/nirbmgIEsXG4gIF0uaW5jbHVkZXMoc3RhdGUpO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChpc051bWJlcihcIi5cIiksIGZhbHNlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChpc051bWJlcihcIi4xXCIpLCB0cnVlKTtcbiJdfQ==
