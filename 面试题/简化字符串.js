/**
 * var str  = new Array{"1","2","3","5","7","10","11","13","15"};
 * 最后输出：1-3,5,7,10-11,13,15
 * */

const arr = [1, 2, 3, 5, 6, 7, 10, 11, 13, 15, 17, 18, 20, 21, 33, 34, 55, 56, 78, 79, 100];

function test(arr, joinStr = "-") {
    const result = [];
    arr.reduce(function (pre, cur, index) {
        if (index === 1) {
            result.push(pre)
        }
        if (cur === pre + 1) {
            let resultLastItem = result[result.length - 1];
            if (Array.isArray(resultLastItem)) {
                resultLastItem.push(cur)
            } else {
                result[result.length - 1] = [resultLastItem, cur]
            }
        } else {
            result.push(cur)
        }
        return cur
    });

    return result.length ? result.map(v => Array.isArray(v) ? v[0] + joinStr + v[v.length - 1] : String(v)) : []
}

console.log(test(arr).join(","));
