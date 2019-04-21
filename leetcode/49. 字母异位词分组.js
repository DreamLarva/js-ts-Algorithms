/*
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。
* */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const primeFloatArr = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        89,
        97,
        103,
        109,
        113,
        127,
    ];

    const cache = {};
    for (let i = 0; i < strs.length; i++) {
        if(strs[i] === ""){
            if (cache[""]) {
                cache[""].push(strs[i]);
            } else {
                cache[""] = [strs[i]]
            }
            continue
        }
        const hash = strs[i]
            .split("")
            .map(v => primeFloatArr[v.charCodeAt(0) - 97])
            .reduce((pre, cur) =>  pre * cur);

        if (cache[hash]) {
            cache[hash].push(strs[i]);
        } else {
            cache[hash] = [strs[i]]
        }
    }
    console.log(cache)
    return Object.values(cache)

};

// console.log(groupAnagrams(["and", "dan"]))
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([
    "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzy",
    "yzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
    ]))
