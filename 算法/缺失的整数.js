const _ = require("lodash");
const assert = require("assert");

/**
 * 一个无序数组里的如干个正整数,范围从1~100,其中99个整数都出现了欧数次,只有一个整数出现了奇数次,如何找到这个出现奇数次的整数
 * */
{
    // 位或同一个 数偶数次 则这个值不会变 最后留下的值就是 奇数次的值
    function solution1(arr) {
        return arr.reduce((pre, cur) => pre ^ cur)
    }

    const sample1 = [..._.range(1, 101), ..._.range(1, 101), 99];
    assert.strictEqual(solution1(sample1), 99);
}


/**
 * 一个无序数组里的如干个正整数,范围从1~100,其中98个整数都出现了偶数次,只有2个整数出现了奇数次,如何找到这两个出现奇数次的整
 * */
{
    /**
     * 如果同样 使用 ^ 来操作所有的值得话 只有那两个 出现奇数次的值会互相干扰
     * 所以只要将 需要 ^ 的内容分成 互不影响的 块就可以
     * 又因为 出现偶数次的 不会影响 所以只需要区分 出现奇数次的即可
     * 区分的方法 为 由于处理为 2 进制后 执行^ 操作 留下 二进制位 为 1 的就是 说明 两个数为不同
     * */
    //这个方法的返回值用来区分两个数，参数num是两个数的异或运算值
    function getShedNum(num) {
        var numShift = 1;

        /**
         * 这个while用来判断num从右往左数哪一位出现了1：
         * 假如num的值是 10 = parseInt('1010',2),numShift的值是 1 = parseInt('0001'，2)
         * 执行numShift = numShift<<1; 将numShift左位移一位得到 2 = numShift = parseInt('0010',2)
         * 直到& 结果不为零得到使两个数异或运算结果不为1的那个数，两个数分别&numShift 得到的结果是0或1
         */
        while ((num & numShift) === 0) {
            numShift = numShift << 1;
        }

        return numShift;
    }

    function findOutMissingDigits2(arr) {
        var A = 0;
        var B = 0;
        var result = arr.reduce((pre, cur) => pre ^ cur);
        //从两个数的异或结果，获得数组分治的“分水岭”
        var shedNum = getShedNum(result);//tips:到这以后如果想用右位移吧1和0放到最后一位的话就计算shedNum转成字符串的字符串长度，右移长度-1位
        for (var data of arr) {
            if ((data & shedNum) === 0)
                A ^= data;
            else
                B ^= data
        }
        return [A, B];
    }

    const sample2 = [..._.range(1, 101), ..._.range(1, 101), 99, 97];
    assert.deepStrictEqual(findOutMissingDigits2(sample2), [97, 99]);

}
