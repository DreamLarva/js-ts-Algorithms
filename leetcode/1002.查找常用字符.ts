/*
给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。

你可以按任意顺序返回答案。

 

示例 1：

输入：["bella","label","roller"]
输出：["e","l","l"]
示例 2：

输入：["cool","lock","cook"]
输出：["c","o"]
 

提示：

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] 是小写字母

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-common-characters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string[]} A
 * @return {string[]}
 */
import _ from "lodash";

var commonChars = function (A: string[]) {
    const map: { [key: string]: number } = {};

    for (const character of A[0]) {
        map[character] = map[character] == null ? 1 : map[character] + 1;
    }
    if (A.length !== 1) {
        for (let i = 1; i < A.length; i++) {
            const _map: { [key: string]: number } = {};
            for (const character of A[i]) {
                _map[character] = _map[character] == null ? 1 : _map[character] + 1;
            }

            for (const [key, value] of Object.entries(map)) {
                map[key] = Math.min(value, _map[key] || 0);
            }

        }
    }

    const result: string[] = [];
    for (const [key, value] of Object.entries(map)) {
        _.times(value, () => result.push(key));

    }

    return result;
};

import assert from "assert";

assert.deepStrictEqual(
    commonChars(["bella","label","roller"]),
    ["e","l","l"]
);
assert.deepStrictEqual(
    commonChars(["cool","lock","cook"]),
    ["c","o"]
);
assert.deepStrictEqual(
    commonChars(["bcaddcdd","cbcdccdd","ddccbdda","dacbbdad","dababdcb","bccbdaad","dbccbabd","accdddda"]),
    ["c","d","d"]
);
