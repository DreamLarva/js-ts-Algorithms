"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

示例:

输入: "25525511135"
输出: ["255.255.11.135", "255.255.111.35"]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/restore-ip-addresses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  /**
   * Ipv4 的格式 0.0.0.0 ~ 255.255.255.255
   * 所以 段数字 不能 > 255 除了 单个0 不能以 0 开头
   * */
  const maxBlockCount = 4;
  const maxLengthCount = 3;
  const result = [];
  step("", 0, s);
  return result;
  function step(r, c, s) {
    if (c === maxBlockCount) {
      if (s === "") result.push(r);
      return;
    }
    for (let i = 1; i <= maxLengthCount; i++) {
      const currentBlock = s.substr(0, i);
      if (currentBlock.length !== i) return;
      if (currentBlock.length !== 1 && currentBlock[0] === "0") return;
      if (parseInt(currentBlock) > 255) return;
      const rest = s.substr(i);
      step(c === 0 ? currentBlock : r + "." + currentBlock, c + 1, rest);
    }
  }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(
  restoreIpAddresses("25525511135").sort(),
  ["255.255.11.135", "255.255.111.35"].sort()
);
assert_1.default.deepStrictEqual(
  restoreIpAddresses("0000").sort(),
  ["0.0.0.0"].sort()
);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTMu5aSN5Y6fSVDlnLDlnYAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzkzLuWkjeWOn0lQ5Zyw5Z2ALnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0lBV0k7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBUztJQUN4Qzs7O1NBR0s7SUFDTCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDeEIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBRXpDLElBQUksQ0FBQyxLQUFLLGFBQWEsRUFBRTtZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNWO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0QyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQ3RDLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsT0FBTztZQUNqRSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHO2dCQUFFLE9BQU87WUFDekMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQ0EsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFDL0MsQ0FBQyxHQUFHLENBQUMsRUFDTCxJQUFJLENBQ1AsQ0FBQztTQUNMO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDbEIsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ3hDLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDOUMsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUNsQixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFDakMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDckIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlj6rljIXlkKvmlbDlrZfnmoTlrZfnrKbkuLLvvIzlpI3ljp/lroPlubbov5Tlm57miYDmnInlj6/og73nmoQgSVAg5Zyw5Z2A5qC85byP44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBcIjI1NTI1NTExMTM1XCJcbui+k+WHujogW1wiMjU1LjI1NS4xMS4xMzVcIiwgXCIyNTUuMjU1LjExMS4zNVwiXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmVzdG9yZS1pcC1hZGRyZXNzZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciByZXN0b3JlSXBBZGRyZXNzZXMgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gICAgLyoqXG4gICAgICogSXB2NCDnmoTmoLzlvI8gMC4wLjAuMCB+IDI1NS4yNTUuMjU1LjI1NVxuICAgICAqIOaJgOS7pSDmrrXmlbDlrZcg5LiN6IO9ID4gMjU1IOmZpOS6hiDljZXkuKowIOS4jeiDveS7pSAwIOW8gOWktFxuICAgICAqICovXG4gICAgY29uc3QgbWF4QmxvY2tDb3VudCA9IDQ7XG4gICAgY29uc3QgbWF4TGVuZ3RoQ291bnQgPSAzO1xuICAgIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcbiAgICBzdGVwKFwiXCIsIDAsIHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBmdW5jdGlvbiBzdGVwKHI6IHN0cmluZywgYzogbnVtYmVyLCBzOiBzdHJpbmcpIHtcblxuICAgICAgICBpZiAoYyA9PT0gbWF4QmxvY2tDb3VudCkge1xuICAgICAgICAgICAgaWYgKHMgPT09IFwiXCIpIHJlc3VsdC5wdXNoKHIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbWF4TGVuZ3RoQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJsb2NrID0gcy5zdWJzdHIoMCwgaSk7XG4gICAgICAgICAgICBpZiAoY3VycmVudEJsb2NrLmxlbmd0aCAhPT0gaSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRCbG9jay5sZW5ndGggIT09IDEgJiYgY3VycmVudEJsb2NrWzBdID09PSBcIjBcIikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KGN1cnJlbnRCbG9jaykgPiAyNTUpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHJlc3QgPSBzLnN1YnN0cihpKTtcbiAgICAgICAgICAgIHN0ZXAoXG4gICAgICAgICAgICAgICAgYyA9PT0gMCA/IGN1cnJlbnRCbG9jayA6IHIgKyBcIi5cIiArIGN1cnJlbnRCbG9jayxcbiAgICAgICAgICAgICAgICBjICsgMSxcbiAgICAgICAgICAgICAgICByZXN0LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHJlc3RvcmVJcEFkZHJlc3NlcyhcIjI1NTI1NTExMTM1XCIpLnNvcnQoKSxcbiAgICBbXCIyNTUuMjU1LjExLjEzNVwiLCBcIjI1NS4yNTUuMTExLjM1XCJdLnNvcnQoKSxcbik7XG5hc3NlcnQuZGVlcFN0cmljdEVxdWFsKFxuICAgIHJlc3RvcmVJcEFkZHJlc3NlcyhcIjAwMDBcIikuc29ydCgpLFxuICAgIFtcIjAuMC4wLjBcIl0uc29ydCgpLFxuKTtcbiJdfQ==
