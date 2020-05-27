"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
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
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length === 0)
        return true;
    if (ransomNote.length > magazine.length)
        return false;
    const hashTable = {};
    for (const character of ransomNote) {
        const count = hashTable[character];
        if (count) {
            hashTable[character]++;
        }
        else {
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
assert_1.default.strictEqual(canConstruct("a", "b"), false);
assert_1.default.strictEqual(canConstruct("aa", "ab"), false);
assert_1.default.strictEqual(canConstruct("aa", "aab"), true);
assert_1.default.strictEqual(canConstruct("", ""), true);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzgzLui1jumHkeS/oS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvMzgzLui1jumHkeS/oS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUU1Qjs7Ozs7Ozs7Ozs7OztJQWFJO0FBQ0o7Ozs7R0FJRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsVUFBa0IsRUFBRSxRQUFnQjtJQUMvRCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQztRQUFFLE9BQU8sSUFBSSxDQUFDO0lBQ3pDLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtRQUFFLE9BQU8sS0FBSyxDQUFDO0lBRXRELE1BQU0sU0FBUyxHQUFjLEVBQUUsQ0FBQztJQUVoQyxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtRQUNsQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkMsSUFBSSxLQUFLLEVBQUU7WUFDVCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztTQUN4QjthQUFNO1lBQ0wsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNGO0lBRUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxRQUFRLEVBQUU7UUFDaEMsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksS0FBSyxFQUFFO1lBQ1QsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7U0FDeEI7S0FDRjtJQUVELE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQztBQUVGLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFnQ0U7QUFFRixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRWxELGdCQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFcEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG4vKlxyXG7nu5nlrprkuIDkuKrotY7ph5Hkv6EgKHJhbnNvbSkg5a2X56ym5Liy5ZKM5LiA5Liq5p2C5b+XKG1hZ2F6aW5lKeWtl+espuS4su+8jOWIpOaWreesrOS4gOS4quWtl+espuS4snJhbnNvbeiDveS4jeiDveeUseesrOS6jOS4quWtl+espuS4sm1hZ2F6aW5lc+mHjOmdoueahOWtl+espuaehOaIkOOAglxyXG7lpoLmnpzlj6/ku6XmnoTmiJDvvIzov5Tlm54gdHJ1ZSDvvJvlkKbliJnov5Tlm54gZmFsc2XjgIJcclxuXHJcbijpopjnm67or7TmmI7vvJrkuLrkuobkuI3mmrTpnLLotY7ph5Hkv6HlrZfov7nvvIzopoHku47mnYLlv5fkuIrmkJzntKLlkITkuKrpnIDopoHnmoTlrZfmr43vvIznu4TmiJDljZXor43mnaXooajovr7mhI/mgJ3jgIIpXHJcblxyXG7ms6jmhI/vvJpcclxuXHJcbuS9oOWPr+S7peWBh+iuvuS4pOS4quWtl+espuS4suWdh+WPquWQq+acieWwj+WGmeWtl+avjeOAglxyXG5cclxuY2FuQ29uc3RydWN0KFwiYVwiLCBcImJcIikgLT4gZmFsc2VcclxuY2FuQ29uc3RydWN0KFwiYWFcIiwgXCJhYlwiKSAtPiBmYWxzZVxyXG5jYW5Db25zdHJ1Y3QoXCJhYVwiLCBcImFhYlwiKSAtPiB0cnVlXHJcbiogKi9cclxuLyoqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSByYW5zb21Ob3RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWdhemluZVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGNhbkNvbnN0cnVjdCA9IGZ1bmN0aW9uIChyYW5zb21Ob3RlOiBzdHJpbmcsIG1hZ2F6aW5lOiBzdHJpbmcpIHtcclxuICBpZiAocmFuc29tTm90ZS5sZW5ndGggPT09IDApIHJldHVybiB0cnVlO1xyXG4gIGlmIChyYW5zb21Ob3RlLmxlbmd0aCA+IG1hZ2F6aW5lLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xyXG4gIHR5cGUgaGFzaFRhYmxlID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfTtcclxuICBjb25zdCBoYXNoVGFibGU6IGhhc2hUYWJsZSA9IHt9O1xyXG5cclxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiByYW5zb21Ob3RlKSB7XHJcbiAgICBjb25zdCBjb3VudCA9IGhhc2hUYWJsZVtjaGFyYWN0ZXJdO1xyXG4gICAgaWYgKGNvdW50KSB7XHJcbiAgICAgIGhhc2hUYWJsZVtjaGFyYWN0ZXJdKys7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBoYXNoVGFibGVbY2hhcmFjdGVyXSA9IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBtYWdhemluZSkge1xyXG4gICAgY29uc3QgY291bnQgPSBoYXNoVGFibGVbY2hhcmFjdGVyXTtcclxuICAgIGlmIChjb3VudCkge1xyXG4gICAgICBoYXNoVGFibGVbY2hhcmFjdGVyXS0tO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuICFPYmplY3QudmFsdWVzKGhhc2hUYWJsZSkuc29tZSgodikgPT4gdiA+IDApO1xyXG59O1xyXG5cclxuLy8g5Y+M5ZOI5biM6KGo5L2g5Liq6ay86aKdXHJcbi8qXHJcbnZhciBjYW5Db25zdHJ1Y3QgPSBmdW5jdGlvbiAocmFuc29tTm90ZTogc3RyaW5nLCBtYWdhemluZTogc3RyaW5nKSB7XHJcbiAgICBpZiAocmFuc29tTm90ZS5sZW5ndGggPiBtYWdhemluZS5sZW5ndGgpIHJldHVybiBmYWxzZTtcclxuICAgIHR5cGUgaGFzaFRhYmxlID0geyBba2V5OiBzdHJpbmddOiBudW1iZXIgfVxyXG4gICAgLy8g5Y+M5ZOI5biM6KGoXHJcbiAgICBjb25zdCByYW5zb21Ob3RlX2hhc2hfdGFibGU6IGhhc2hUYWJsZSA9IHt9O1xyXG4gICAgY29uc3QgbWFnYXppbmVfaGFzaF90YWJsZTogaGFzaFRhYmxlID0ge307XHJcblxyXG4gICAgZm9yIChjb25zdCBjaGFyYWN0ZXIgb2YgcmFuc29tTm90ZSkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gcmFuc29tTm90ZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl07XHJcbiAgICAgICAgaWYgKGNvdW50KSB7XHJcbiAgICAgICAgICAgIHJhbnNvbU5vdGVfaGFzaF90YWJsZVtjaGFyYWN0ZXJdKys7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuc29tTm90ZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiBtYWdhemluZSkge1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gbWFnYXppbmVfaGFzaF90YWJsZVtjaGFyYWN0ZXJdO1xyXG4gICAgICAgIGlmIChjb3VudCkge1xyXG4gICAgICAgICAgICBtYWdhemluZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl0rKztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtYWdhemluZV9oYXNoX3RhYmxlW2NoYXJhY3Rlcl0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhyYW5zb21Ob3RlX2hhc2hfdGFibGUpKSB7XHJcbiAgICAgICAgaWYgKChtYWdhemluZV9oYXNoX3RhYmxlW2tleV0gfHwgMCkgPCB2YWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG59O1xyXG4qL1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNhbkNvbnN0cnVjdChcImFcIiwgXCJiXCIpLCBmYWxzZSk7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwoY2FuQ29uc3RydWN0KFwiYWFcIiwgXCJhYlwiKSwgZmFsc2UpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNhbkNvbnN0cnVjdChcImFhXCIsIFwiYWFiXCIpLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNhbkNvbnN0cnVjdChcIlwiLCBcIlwiKSwgdHJ1ZSk7XHJcbiJdfQ==