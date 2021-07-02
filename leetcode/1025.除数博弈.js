"use strict";
/*
1025. 除数博弈
爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

选出任一 x，满足 0 < x < N 且 N % x == 0 。
用 N - x 替换黑板上的数字 N 。
如果玩家无法执行这些操作，就会输掉游戏。

只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。



示例 1：

输入：2
输出：true
解释：爱丽丝选择 1，鲍勃无法进行操作。
示例 2：

输入：3
输出：false
解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。


提示：

1 <= N <= 1000
* */
function divisorGame(N) {
    /**
     * 逻辑很简单
     * 因为 至少可以取 1 所以 最终决出胜负的时候是 谁取到1 就输了
     * 奇数的时候 至少可以 -1 , 偶数的时候至少可以 -2 或者 -1
     * 是奇数的时候 只有 减去 奇数这一种选择 最终给出一个偶数
     * 是偶数的时候 有 种选择 减去奇数 返回奇数 ,减去偶数 返回偶数
     * 所以开始拿偶数的人 有优先权 决定 另一个人一直保持 奇偶性,让另一个人 一直保持奇数一直到1
     * */
    return N % 2 === 0;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAyNS7pmaTmlbDljZrlvIguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImxlZXRjb2RlLzEwMjUu6Zmk5pWw5Y2a5byILnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2Qkk7QUFDSixTQUFTLFdBQVcsQ0FBQyxDQUFTO0lBQzFCOzs7Ozs7O1NBT0s7SUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuMTAyNS4g6Zmk5pWw5Y2a5byIXG7niLHkuL3kuJ3lkozpso3li4PkuIDotbfnjqnmuLjmiI/vvIzku5bku6zova7mtYHooYzliqjjgILniLHkuL3kuJ3lhYjmiYvlvIDlsYDjgIJcblxu5pyA5Yid77yM6buR5p2/5LiK5pyJ5LiA5Liq5pWw5a2XIE4g44CC5Zyo5q+P5Liq546p5a6255qE5Zue5ZCI77yM546p5a626ZyA6KaB5omn6KGM5Lul5LiL5pON5L2c77yaXG5cbumAieWHuuS7u+S4gCB477yM5ruh6LazIDAgPCB4IDwgTiDkuJQgTiAlIHggPT0gMCDjgIJcbueUqCBOIC0geCDmm7/mjaLpu5Hmnb/kuIrnmoTmlbDlrZcgTiDjgIJcbuWmguaenOeOqeWutuaXoOazleaJp+ihjOi/meS6m+aTjeS9nO+8jOWwseS8mui+k+aOiea4uOaIj+OAglxuXG7lj6rmnInlnKjniLHkuL3kuJ3lnKjmuLjmiI/kuK3lj5blvpfog5zliKnml7bmiY3ov5Tlm54gVHJ1Ze+8jOWQpuWImei/lOWbniBmYWxzZeOAguWBh+iuvuS4pOS4queOqeWutumDveS7peacgOS9s+eKtuaAgeWPguS4jua4uOaIj+OAglxuXG5cblxu56S65L6LIDHvvJpcblxu6L6T5YWl77yaMlxu6L6T5Ye677yadHJ1ZVxu6Kej6YeK77ya54ix5Li95Lid6YCJ5oupIDHvvIzpso3li4Pml6Dms5Xov5vooYzmk43kvZzjgIJcbuekuuS+iyAy77yaXG5cbui+k+WFpe+8mjNcbui+k+WHuu+8mmZhbHNlXG7op6Pph4rvvJrniLHkuL3kuJ3pgInmi6kgMe+8jOmyjeWLg+S5n+mAieaLqSAx77yM54S25ZCO54ix5Li95Lid5peg5rOV6L+b6KGM5pON5L2c44CCXG5cblxu5o+Q56S677yaXG5cbjEgPD0gTiA8PSAxMDAwXG4qICovXG5mdW5jdGlvbiBkaXZpc29yR2FtZShOOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAvKipcbiAgICAgKiDpgLvovpHlvojnroDljZVcbiAgICAgKiDlm6DkuLog6Iez5bCR5Y+v5Lul5Y+WIDEg5omA5LulIOacgOe7iOWGs+WHuuiDnOi0n+eahOaXtuWAmeaYryDosIHlj5bliLAxIOWwsei+k+S6hlxuICAgICAqIOWlh+aVsOeahOaXtuWAmSDoh7PlsJHlj6/ku6UgLTEgLCDlgbbmlbDnmoTml7blgJnoh7PlsJHlj6/ku6UgLTIg5oiW6ICFIC0xXG4gICAgICog5piv5aWH5pWw55qE5pe25YCZIOWPquaciSDlh4/ljrsg5aWH5pWw6L+Z5LiA56eN6YCJ5oupIOacgOe7iOe7meWHuuS4gOS4quWBtuaVsFxuICAgICAqIOaYr+WBtuaVsOeahOaXtuWAmSDmnIkg56eN6YCJ5oupIOWHj+WOu+Wlh+aVsCDov5Tlm57lpYfmlbAgLOWHj+WOu+WBtuaVsCDov5Tlm57lgbbmlbBcbiAgICAgKiDmiYDku6XlvIDlp4vmi7/lgbbmlbDnmoTkurog5pyJ5LyY5YWI5p2DIOWGs+WumiDlj6bkuIDkuKrkurrkuIDnm7Tkv53mjIEg5aWH5YG25oCnLOiuqeWPpuS4gOS4quS6uiDkuIDnm7Tkv53mjIHlpYfmlbDkuIDnm7TliLAxXG4gICAgICogKi9cbiAgICByZXR1cm4gTiAlIDIgPT09IDBcbn1cbiJdfQ==