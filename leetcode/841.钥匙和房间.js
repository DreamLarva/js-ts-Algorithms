"use strict";
/*
有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。

在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。
钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。

最初，除 0 号房间外的其余所有房间都被锁住。

你可以自由地在房间之间来回走动。

如果能进入每个房间返回 true，否则返回 false。

示例 1：

输入: [[1],[2],[3],[]]
输出: true
解释:
我们从 0 号房间开始，拿到钥匙 1。
之后我们去 1 号房间，拿到钥匙 2。
然后我们去 2 号房间，拿到钥匙 3。
最后我们去了 3 号房间。
由于我们能够进入每个房间，我们返回 true。
示例 2：

输入：[[1,3],[3,0,1],[2],[0]]
输出：false
解释：我们不能进入 2 号房间。
提示：

1 <= rooms.length <= 1000
0 <= rooms[i].length <= 1000
所有房间中的钥匙数量总计不超过 3000。
* */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    // bfs
    let list = [];
    const set = new Set();
    let room_visited = 0;
    list.push(0);
    while (list.length) {
        const room_num = list.shift();
        if (set.has(room_num))
            continue;
        if (rooms[room_num]) {
            list = list.concat(rooms[room_num]);
            set.add(room_num);
            room_visited++;
        }
    }
    return room_visited === rooms.length;
};
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(canVisitAllRooms([[1], [2], [3], []]), true);
assert_1.default.strictEqual(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQxLumSpeWMmeWSjOaIv+mXtC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODQxLumSpeWMmeWSjOaIv+mXtC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxLQUFpQjtJQUNoRCxNQUFNO0lBQ04sSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sR0FBRyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUMvQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQUUsU0FBUztRQUVoQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xCLFlBQVksRUFBRSxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxPQUFPLFlBQVksS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbuaciSBOIOS4quaIv+mXtO+8jOW8gOWni+aXtuS9oOS9jeS6jiAwIOWPt+aIv+mXtOOAguavj+S4quaIv+mXtOacieS4jeWQjOeahOWPt+egge+8mjDvvIwx77yMMu+8jC4uLu+8jE4tMe+8jOW5tuS4lOaIv+mXtOmHjOWPr+iDveacieS4gOS6m+mSpeWMmeiDveS9v+S9oOi/m+WFpeS4i+S4gOS4quaIv+mXtOOAglxyXG5cclxu5Zyo5b2i5byP5LiK77yM5a+55LqO5q+P5Liq5oi/6Ze0IGkg6YO95pyJ5LiA5Liq6ZKl5YyZ5YiX6KGoIHJvb21zW2ld77yM5q+P5Liq6ZKl5YyZIHJvb21zW2ldW2pdIOeUsSBbMCwx77yMLi4u77yMTi0xXSDkuK3nmoTkuIDkuKrmlbTmlbDooajnpLrvvIzlhbbkuK0gTiA9IHJvb21zLmxlbmd0aOOAglxyXG7pkqXljJkgcm9vbXNbaV1bal0gPSB2IOWPr+S7peaJk+W8gOe8luWPt+S4uiB2IOeahOaIv+mXtOOAglxyXG5cclxu5pyA5Yid77yM6ZmkIDAg5Y+35oi/6Ze05aSW55qE5YW25L2Z5omA5pyJ5oi/6Ze06YO96KKr6ZSB5L2P44CCXHJcblxyXG7kvaDlj6/ku6Xoh6rnlLHlnLDlnKjmiL/pl7TkuYvpl7TmnaXlm57otbDliqjjgIJcclxuXHJcbuWmguaenOiDvei/m+WFpeavj+S4quaIv+mXtOi/lOWbniB0cnVl77yM5ZCm5YiZ6L+U5ZueIGZhbHNl44CCXHJcblxyXG7npLrkvosgMe+8mlxyXG5cclxu6L6T5YWlOiBbWzFdLFsyXSxbM10sW11dXHJcbui+k+WHujogdHJ1ZVxyXG7op6Pph4o6XHJcbuaIkeS7rOS7jiAwIOWPt+aIv+mXtOW8gOWni++8jOaLv+WIsOmSpeWMmSAx44CCXHJcbuS5i+WQjuaIkeS7rOWOuyAxIOWPt+aIv+mXtO+8jOaLv+WIsOmSpeWMmSAy44CCXHJcbueEtuWQjuaIkeS7rOWOuyAyIOWPt+aIv+mXtO+8jOaLv+WIsOmSpeWMmSAz44CCXHJcbuacgOWQjuaIkeS7rOWOu+S6hiAzIOWPt+aIv+mXtOOAglxyXG7nlLHkuo7miJHku6zog73lpJ/ov5vlhaXmr4/kuKrmiL/pl7TvvIzmiJHku6zov5Tlm54gdHJ1ZeOAglxyXG7npLrkvosgMu+8mlxyXG5cclxu6L6T5YWl77yaW1sxLDNdLFszLDAsMV0sWzJdLFswXV1cclxu6L6T5Ye677yaZmFsc2Vcclxu6Kej6YeK77ya5oiR5Lus5LiN6IO96L+b5YWlIDIg5Y+35oi/6Ze044CCXHJcbuaPkOekuu+8mlxyXG5cclxuMSA8PSByb29tcy5sZW5ndGggPD0gMTAwMFxyXG4wIDw9IHJvb21zW2ldLmxlbmd0aCA8PSAxMDAwXHJcbuaJgOacieaIv+mXtOS4reeahOmSpeWMmeaVsOmHj+aAu+iuoeS4jei2hei/hyAzMDAw44CCXHJcbiogKi9cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge251bWJlcltdW119IHJvb21zXHJcbiAqIEByZXR1cm4ge2Jvb2xlYW59XHJcbiAqL1xyXG52YXIgY2FuVmlzaXRBbGxSb29tcyA9IGZ1bmN0aW9uIChyb29tczogbnVtYmVyW11bXSkge1xyXG4gIC8vIGJmc1xyXG4gIGxldCBsaXN0OiBudW1iZXJbXSA9IFtdO1xyXG4gIGNvbnN0IHNldDogU2V0PG51bWJlcj4gPSBuZXcgU2V0KCk7XHJcbiAgbGV0IHJvb21fdmlzaXRlZCA9IDA7XHJcbiAgbGlzdC5wdXNoKDApO1xyXG4gIHdoaWxlIChsaXN0Lmxlbmd0aCkge1xyXG4gICAgY29uc3Qgcm9vbV9udW0gPSBsaXN0LnNoaWZ0KCkhO1xyXG4gICAgaWYgKHNldC5oYXMocm9vbV9udW0pKSBjb250aW51ZTtcclxuXHJcbiAgICBpZiAocm9vbXNbcm9vbV9udW1dKSB7XHJcbiAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdChyb29tc1tyb29tX251bV0pO1xyXG4gICAgICBzZXQuYWRkKHJvb21fbnVtKTtcclxuICAgICAgcm9vbV92aXNpdGVkKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vbV92aXNpdGVkID09PSByb29tcy5sZW5ndGg7XHJcbn07XHJcblxyXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcclxuXHJcbmFzc2VydC5zdHJpY3RFcXVhbChjYW5WaXNpdEFsbFJvb21zKFtbMV0sIFsyXSwgWzNdLCBbXV0pLCB0cnVlKTtcclxuYXNzZXJ0LnN0cmljdEVxdWFsKGNhblZpc2l0QWxsUm9vbXMoW1sxLCAzXSwgWzMsIDAsIDFdLCBbMl0sIFswXV0pLCBmYWxzZSk7XHJcbiJdfQ==