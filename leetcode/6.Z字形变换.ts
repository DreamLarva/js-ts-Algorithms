/*
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

L     D     R
E   O E   I I
E C   I H   N
T     S     G
* */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

function convert(s: string, numRows: number) {
    if (s.length === 0 || numRows === 1) return s;
    const arr: string[][] = new Array(numRows).fill(1).map(() => []);
    const strLen = s.length;
    const loopArr = explainLoopArr(numRows);
    for (let i = 0, k = 0; i < strLen; k++) {
        let {loopTime, startIndex, order} = byStep(loopArr, k);
        // console.log(byStep(loopArr, k));
        for (let j = 0; j < loopTime && i < strLen; j++) {
            arr[startIndex].push(s[i]);
            startIndex += order;
            i++;
        }
        // console.log(arr.join("\n"));
    }


    return Array.prototype.concat.apply([], arr).join("");
}


function explainLoopArr(num: number): number[] {
    const result = [];
    let times = 2;
    while (num >= 1 && times-- > 0) {
        result.push(num);
        num -= 2;
    }
    return [...result, ...result.slice(1, -1)];
}

function byStep(arr: number[], k: number) {
    const arrLength = arr.length;

    const loopTime = k % arrLength;

    const order = k % 2 === 0 || arrLength === 1 ? 1 : -1;
    const startIndex = k % 2 === 0 || arrLength === 1 ?
        (arr[0] - arr[loopTime]) / 2 :
        (arr[0] - 1) - (arr[0] - arr[loopTime]) / 2;


    return {
        loopTime: arr[loopTime],
        startIndex,
        order,
    };
}
