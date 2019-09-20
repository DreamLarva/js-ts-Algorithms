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
var restoreIpAddresses = function (s: string) {
    /**
     * Ipv4 的格式 0.0.0.0 ~ 255.255.255.255
     * 所以 段数字 不能 > 255 除了 单个0 不能以 0 开头
     * */
    const maxBlockCount = 4;
    const maxLengthCount = 3;
    const result: string[] = [];
    step("", 0, s);
    return result;

    function step(r: string, c: number, s: string) {

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
            step(
                c === 0 ? currentBlock : r + "." + currentBlock,
                c + 1,
                rest,
            );
        }
    }
};

import assert from "assert";

assert.deepStrictEqual(
    restoreIpAddresses("25525511135").sort(),
    ["255.255.11.135", "255.255.111.35"].sort(),
);
assert.deepStrictEqual(
    restoreIpAddresses("0000").sort(),
    ["0.0.0.0"].sort(),
);
