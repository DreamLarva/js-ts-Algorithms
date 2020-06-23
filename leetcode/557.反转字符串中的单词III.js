"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:

输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc"
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/reverse-words-in-a-string-iii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const words = s.match(/\S+/g);
    return words
        ? words.map((s) => s.split("").reverse().join("")).join(" ")
        : "";
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(reverseWords("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTU3LuWPjei9rOWtl+espuS4suS4reeahOWNleivjUlJSS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNTU3LuWPjei9rOWtl+espuS4suS4reeahOWNleivjUlJSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7SUFZSTtBQUNKOzs7R0FHRztBQUNILElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBUztJQUNwQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlCLE9BQU8sS0FBSztRQUNWLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FDaEIsWUFBWSxDQUFDLDZCQUE2QixDQUFDLEVBQzNDLDZCQUE2QixDQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbue7meWumuS4gOS4quWtl+espuS4su+8jOS9oOmcgOimgeWPjei9rOWtl+espuS4suS4reavj+S4quWNleivjeeahOWtl+espumhuuW6j++8jOWQjOaXtuS7jeS/neeVmeepuuagvOWSjOWNleivjeeahOWIneWni+mhuuW6j+OAglxuXG7npLrkvovCoDE6XG5cbui+k+WFpTogXCJMZXQncyB0YWtlIExlZXRDb2RlIGNvbnRlc3RcIlxu6L6T5Ye6OiBcInMndGVMIGVrYXQgZWRvQ3RlZUwgdHNldG5vY1wiwqBcbuazqOaEj++8muWcqOWtl+espuS4suS4re+8jOavj+S4quWNleivjeeUseWNleS4quepuuagvOWIhumalO+8jOW5tuS4lOWtl+espuS4suS4reS4jeS8muacieS7u+S9lemineWklueahOepuuagvOOAglxuXG7mnaXmupDvvJrlipvmiaPvvIhMZWV0Q29kZe+8iVxu6ZO+5o6l77yaaHR0cHM6Ly9sZWV0Y29kZS1jbi5jb20vcHJvYmxlbXMvcmV2ZXJzZS13b3Jkcy1pbi1hLXN0cmluZy1paWlcbuiRl+S9nOadg+W9kumihuaJo+e9kee7nOaJgOacieOAguWVhuS4mui9rOi9veivt+iBlOezu+WumOaWueaOiOadg++8jOmdnuWVhuS4mui9rOi9veivt+azqOaYjuWHuuWkhOOAglxuKiAqL1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgcmV2ZXJzZVdvcmRzID0gZnVuY3Rpb24gKHM6IHN0cmluZykge1xuICBjb25zdCB3b3JkcyA9IHMubWF0Y2goL1xcUysvZyk7XG4gIHJldHVybiB3b3Jkc1xuICAgID8gd29yZHMubWFwKChzKSA9PiBzLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKS5qb2luKFwiIFwiKVxuICAgIDogXCJcIjtcbn07XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuXG5hc3NlcnQuc3RyaWN0RXF1YWwoXG4gIHJldmVyc2VXb3JkcyhcIkxldCdzIHRha2UgTGVldENvZGUgY29udGVzdFwiKSxcbiAgXCJzJ3RlTCBla2F0IGVkb0N0ZWVMIHRzZXRub2NcIlxuKTtcbiJdfQ==