import assert from "assert";

/*
给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串ransom能不能由第二个字符串magazines里面的字符构成。
如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。)

注意：

你可以假设两个字符串均只含有小写字母。

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
* */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote: string, magazine: string) {
  if (ransomNote.length === 0) return true;
  if (ransomNote.length > magazine.length) return false;
  type hashTable = { [key: string]: number };
  const hashTable: hashTable = {};

  for (const character of ransomNote) {
    const count = hashTable[character];
    if (count) {
      hashTable[character]++;
    } else {
      hashTable[character] = 1;
    }
  }

  for (const character of magazine) {
    const count = hashTable[character];
    if (count) {
      hashTable[character]--;
    }
  }

  return !Object.values(hashTable).some((v) => v > 0);
};

// 双哈希表你个鬼额
/*
var canConstruct = function (ransomNote: string, magazine: string) {
    if (ransomNote.length > magazine.length) return false;
    type hashTable = { [key: string]: number }
    // 双哈希表
    const ransomNote_hash_table: hashTable = {};
    const magazine_hash_table: hashTable = {};

    for (const character of ransomNote) {
        const count = ransomNote_hash_table[character];
        if (count) {
            ransomNote_hash_table[character]++;
        } else {
            ransomNote_hash_table[character] = 1;
        }
    }

    for (const character of magazine) {
        const count = magazine_hash_table[character];
        if (count) {
            magazine_hash_table[character]++;
        } else {
            magazine_hash_table[character] = 1;
        }
    }

    for (const [key, value] of Object.entries(ransomNote_hash_table)) {
        if ((magazine_hash_table[key] || 0) < value) return false;
    }

    return true;
};
*/

assert.strictEqual(canConstruct("a", "b"), false);

assert.strictEqual(canConstruct("aa", "ab"), false);

assert.strictEqual(canConstruct("aa", "aab"), true);
assert.strictEqual(canConstruct("", ""), true);
