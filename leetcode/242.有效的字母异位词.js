/*
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的一个字母异位词。

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
* */
/**
 * 字母异位词:包含相同数量的相同类型的字母 只是次序不同
 * */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // 如果存数组 就初始化 26个0 之后对比
    // 存哈希表 可以存任何字符 不过对比的时候需要对比 key 的数量是否一致
    const map_s = getCharCount(s);
    const map_t = getCharCount(t);
    if (Object.keys(map_s).length !== Object.keys(map_t).length) return false;
    for (const [key, value] of Object.entries(map_s)) {
        if (map_t[key] !== value) return false
    }
    return true
};

function getCharCount(str) {
    return Array.from(str).reduce((res, char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res
    }, {})
}


const assert = require("assert");
assert.ok(isAnagram("anagram", "nagaram"));
