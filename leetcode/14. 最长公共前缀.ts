/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 *
 * 解释: 输入不存在公共前缀。
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 * */


/**
 * 方案1 暴力1
 * 干 做的超过需求了 要满足全部的
 * */
/**
 * @param {string[]} strs
 * @return {string}
 */
var _longestCommonPrefix = function (strs: string[]) {
    const map = [];
    for (let _len = 1; ; _len++) {
        // 判断要不要继续
        if (map.length !== 0) {
            const lastMap = map[map.length - 1];
            if (Object.keys(lastMap).length === 0 || Object.entries(lastMap).every(([, value]) => value < 2)) {
                break;
            }
        }
        map.push({});
        for (let i = 0; i < strs.length; i++) {
            const lastMap = map[map.length - 1];
            const cur = strs[i];
            // 记录本次循环
            if (strs[i].length >= _len) {
                const prefix = cur.substr(0, _len);
                lastMap[prefix] != null ? lastMap[prefix] += 1 : lastMap[prefix] = 1;
            }

        }
    }
    if (map.length > 2) {
        const _map = map[map.length - 2];
        let result;
        for ([key, value] of Object.entries(_map)) {
            if (result) {
                if (value > result.value) result = [key, value];
            } else {
                result = [key, value];
            }

        }
        return result[0]

    } else {
        return ""
    }
};


var longestCommonPrefix = function (strs: string[]) {
    if (strs.length === 0) {
        return ""
    }

    if (strs.length === 1) {
        return strs[0]
    }
    let result: string;

    outerLoop:
        for (let len = 1; ; len++) {


            if (strs[0].length < len) {
                break;
            }
            let temp_str = strs[0].substr(0, len);
            for (let i = 0; i < strs.length; i++) {
                const cur_str = strs[i];

                if (cur_str.length < len) {
                    break outerLoop;
                }

                if (!cur_str.startsWith(temp_str)) {
                    break outerLoop;
                }
            }

            result = temp_str;
        }

    return result!
};

const {strictEqual} = require("assert");
strictEqual(longestCommonPrefix(["flower", "flow", "flight"]), "fl");
strictEqual(longestCommonPrefix(["dog", "racecar", "car"]), "");
