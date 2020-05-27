"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
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
            if (s === "")
                result.push(r);
            return;
        }
        for (let i = 1; i <= maxLengthCount; i++) {
            const currentBlock = s.substr(0, i);
            if (currentBlock.length !== i)
                return;
            if (currentBlock.length !== 1 && currentBlock[0] === "0")
                return;
            if (parseInt(currentBlock) > 255)
                return;
            const rest = s.substr(i);
            step(c === 0 ? currentBlock : r + "." + currentBlock, c + 1, rest);
        }
    }
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.deepStrictEqual(restoreIpAddresses("25525511135").sort(), ["255.255.11.135", "255.255.111.35"].sort());
assert_1.default.deepStrictEqual(restoreIpAddresses("0000").sort(), ["0.0.0.0"].sort());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTMu5aSN5Y6fSVDlnLDlnYAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzkzLuWkjeWOn0lQ5Zyw5Z2ALnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0lBV0k7QUFDSjs7O0dBR0c7QUFDSCxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBUztJQUMxQzs7O1NBR0s7SUFDTCxNQUFNLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDeEIsTUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLE1BQU0sTUFBTSxHQUFhLEVBQUUsQ0FBQztJQUM1QixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNmLE9BQU8sTUFBTSxDQUFDO0lBRWQsU0FBUyxJQUFJLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQzNDLElBQUksQ0FBQyxLQUFLLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNSO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxNQUFNLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFBRSxPQUFPO1lBQ3RDLElBQUksWUFBWSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUc7Z0JBQUUsT0FBTztZQUNqRSxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsR0FBRyxHQUFHO2dCQUFFLE9BQU87WUFDekMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFlBQVksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLGVBQWUsQ0FDcEIsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQ3hDLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FDNUMsQ0FBQztBQUNGLGdCQUFNLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7nu5nlrprkuIDkuKrlj6rljIXlkKvmlbDlrZfnmoTlrZfnrKbkuLLvvIzlpI3ljp/lroPlubbov5Tlm57miYDmnInlj6/og73nmoQgSVAg5Zyw5Z2A5qC85byP44CCXG5cbuekuuS+izpcblxu6L6T5YWlOiBcIjI1NTI1NTExMTM1XCJcbui+k+WHujogW1wiMjU1LjI1NS4xMS4xMzVcIiwgXCIyNTUuMjU1LjExMS4zNVwiXVxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmVzdG9yZS1pcC1hZGRyZXNzZXNcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nW119XG4gKi9cbnZhciByZXN0b3JlSXBBZGRyZXNzZXMgPSBmdW5jdGlvbiAoczogc3RyaW5nKSB7XG4gIC8qKlxuICAgKiBJcHY0IOeahOagvOW8jyAwLjAuMC4wIH4gMjU1LjI1NS4yNTUuMjU1XG4gICAqIOaJgOS7pSDmrrXmlbDlrZcg5LiN6IO9ID4gMjU1IOmZpOS6hiDljZXkuKowIOS4jeiDveS7pSAwIOW8gOWktFxuICAgKiAqL1xuICBjb25zdCBtYXhCbG9ja0NvdW50ID0gNDtcbiAgY29uc3QgbWF4TGVuZ3RoQ291bnQgPSAzO1xuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XG4gIHN0ZXAoXCJcIiwgMCwgcyk7XG4gIHJldHVybiByZXN1bHQ7XG5cbiAgZnVuY3Rpb24gc3RlcChyOiBzdHJpbmcsIGM6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgaWYgKGMgPT09IG1heEJsb2NrQ291bnQpIHtcbiAgICAgIGlmIChzID09PSBcIlwiKSByZXN1bHQucHVzaChyKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBtYXhMZW5ndGhDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50QmxvY2sgPSBzLnN1YnN0cigwLCBpKTtcbiAgICAgIGlmIChjdXJyZW50QmxvY2subGVuZ3RoICE9PSBpKSByZXR1cm47XG4gICAgICBpZiAoY3VycmVudEJsb2NrLmxlbmd0aCAhPT0gMSAmJiBjdXJyZW50QmxvY2tbMF0gPT09IFwiMFwiKSByZXR1cm47XG4gICAgICBpZiAocGFyc2VJbnQoY3VycmVudEJsb2NrKSA+IDI1NSkgcmV0dXJuO1xuICAgICAgY29uc3QgcmVzdCA9IHMuc3Vic3RyKGkpO1xuICAgICAgc3RlcChjID09PSAwID8gY3VycmVudEJsb2NrIDogciArIFwiLlwiICsgY3VycmVudEJsb2NrLCBjICsgMSwgcmVzdCk7XG4gICAgfVxuICB9XG59O1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcblxuYXNzZXJ0LmRlZXBTdHJpY3RFcXVhbChcbiAgcmVzdG9yZUlwQWRkcmVzc2VzKFwiMjU1MjU1MTExMzVcIikuc29ydCgpLFxuICBbXCIyNTUuMjU1LjExLjEzNVwiLCBcIjI1NS4yNTUuMTExLjM1XCJdLnNvcnQoKVxuKTtcbmFzc2VydC5kZWVwU3RyaWN0RXF1YWwocmVzdG9yZUlwQWRkcmVzc2VzKFwiMDAwMFwiKS5zb3J0KCksIFtcIjAuMC4wLjBcIl0uc29ydCgpKTtcbiJdfQ==