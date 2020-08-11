/**
 * 在 O(n)时间复杂度下 判断回文字符串
 * */
export declare function manacher1(s: string): string;
/**
 * 获取所有 字符串中 是回文的 前缀和后缀
 * @example  abcdd =>  [ [ 1 ], [], [], [ <1 empty item>, 1 ], [ <1 empty item>, 1 ] ]
 * @description 首尾的点 自带折叠 可以 以左1 为例 以a 为重点的 回文可以使  ddcbabcdd
 * [a,b] a表示 a到左侧是回文 b代表b到右侧是回文
 * */
export declare function manacher2(s: string): [(number | undefined)?, (number | undefined)?][];
