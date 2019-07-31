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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQxLumSpeWMmeWSjOaIv+mXtC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODQxLumSpeWMmeWSjOaIv+mXtC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxLQUFpQjtJQUM5QyxNQUFNO0lBQ04sSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sR0FBRyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUMvQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQUUsU0FBUztRQUVoQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xCLFlBQVksRUFBRSxDQUFDO1NBQ2xCO0tBQ0o7SUFFRCxPQUFPLFlBQVksS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3pDLENBQUMsQ0FBQztBQUdGLG9EQUE0QjtBQUc1QixnQkFBTSxDQUFDLFdBQVcsQ0FDZCxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQ3JDLElBQUksQ0FDUCxDQUFDO0FBQ0YsZ0JBQU0sQ0FBQyxXQUFXLENBQ2QsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDL0MsS0FBSyxDQUNSLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG7mnIkgTiDkuKrmiL/pl7TvvIzlvIDlp4vml7bkvaDkvY3kuo4gMCDlj7fmiL/pl7TjgILmr4/kuKrmiL/pl7TmnInkuI3lkIznmoTlj7fnoIHvvJow77yMMe+8jDLvvIwuLi7vvIxOLTHvvIzlubbkuJTmiL/pl7Tph4zlj6/og73mnInkuIDkupvpkqXljJnog73kvb/kvaDov5vlhaXkuIvkuIDkuKrmiL/pl7TjgIJcclxuXHJcbuWcqOW9ouW8j+S4iu+8jOWvueS6juavj+S4quaIv+mXtCBpIOmDveacieS4gOS4qumSpeWMmeWIl+ihqCByb29tc1tpXe+8jOavj+S4qumSpeWMmSByb29tc1tpXVtqXSDnlLEgWzAsMe+8jC4uLu+8jE4tMV0g5Lit55qE5LiA5Liq5pW05pWw6KGo56S677yM5YW25LitIE4gPSByb29tcy5sZW5ndGjjgIJcclxu6ZKl5YyZIHJvb21zW2ldW2pdID0gdiDlj6/ku6XmiZPlvIDnvJblj7fkuLogdiDnmoTmiL/pl7TjgIJcclxuXHJcbuacgOWIne+8jOmZpCAwIOWPt+aIv+mXtOWklueahOWFtuS9meaJgOacieaIv+mXtOmDveiiq+mUgeS9j+OAglxyXG5cclxu5L2g5Y+v5Lul6Ieq55Sx5Zyw5Zyo5oi/6Ze05LmL6Ze05p2l5Zue6LWw5Yqo44CCXHJcblxyXG7lpoLmnpzog73ov5vlhaXmr4/kuKrmiL/pl7Tov5Tlm54gdHJ1Ze+8jOWQpuWImei/lOWbniBmYWxzZeOAglxyXG5cclxu56S65L6LIDHvvJpcclxuXHJcbui+k+WFpTogW1sxXSxbMl0sWzNdLFtdXVxyXG7ovpPlh7o6IHRydWVcclxu6Kej6YeKOlxyXG7miJHku6zku44gMCDlj7fmiL/pl7TlvIDlp4vvvIzmi7/liLDpkqXljJkgMeOAglxyXG7kuYvlkI7miJHku6zljrsgMSDlj7fmiL/pl7TvvIzmi7/liLDpkqXljJkgMuOAglxyXG7nhLblkI7miJHku6zljrsgMiDlj7fmiL/pl7TvvIzmi7/liLDpkqXljJkgM+OAglxyXG7mnIDlkI7miJHku6zljrvkuoYgMyDlj7fmiL/pl7TjgIJcclxu55Sx5LqO5oiR5Lus6IO95aSf6L+b5YWl5q+P5Liq5oi/6Ze077yM5oiR5Lus6L+U5ZueIHRydWXjgIJcclxu56S65L6LIDLvvJpcclxuXHJcbui+k+WFpe+8mltbMSwzXSxbMywwLDFdLFsyXSxbMF1dXHJcbui+k+WHuu+8mmZhbHNlXHJcbuino+mHiu+8muaIkeS7rOS4jeiDvei/m+WFpSAyIOWPt+aIv+mXtOOAglxyXG7mj5DnpLrvvJpcclxuXHJcbjEgPD0gcm9vbXMubGVuZ3RoIDw9IDEwMDBcclxuMCA8PSByb29tc1tpXS5sZW5ndGggPD0gMTAwMFxyXG7miYDmnInmiL/pl7TkuK3nmoTpkqXljJnmlbDph4/mgLvorqHkuI3otoXov4cgMzAwMOOAglxyXG4qICovXHJcblxyXG4vKipcclxuICogQHBhcmFtIHtudW1iZXJbXVtdfSByb29tc1xyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxudmFyIGNhblZpc2l0QWxsUm9vbXMgPSBmdW5jdGlvbiAocm9vbXM6IG51bWJlcltdW10pIHtcclxuICAgIC8vIGJmc1xyXG4gICAgbGV0IGxpc3Q6IG51bWJlcltdID0gW107XHJcbiAgICBjb25zdCBzZXQ6IFNldDxudW1iZXI+ID0gbmV3IFNldCgpO1xyXG4gICAgbGV0IHJvb21fdmlzaXRlZCA9IDA7XHJcbiAgICBsaXN0LnB1c2goMCk7XHJcbiAgICB3aGlsZSAobGlzdC5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCByb29tX251bSA9IGxpc3Quc2hpZnQoKSE7XHJcbiAgICAgICAgaWYgKHNldC5oYXMocm9vbV9udW0pKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgaWYgKHJvb21zW3Jvb21fbnVtXSkge1xyXG4gICAgICAgICAgICBsaXN0ID0gbGlzdC5jb25jYXQocm9vbXNbcm9vbV9udW1dKTtcclxuICAgICAgICAgICAgc2V0LmFkZChyb29tX251bSk7XHJcbiAgICAgICAgICAgIHJvb21fdmlzaXRlZCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcm9vbV92aXNpdGVkID09PSByb29tcy5sZW5ndGg7XHJcbn07XHJcblxyXG5cclxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XHJcblxyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKFxyXG4gICAgY2FuVmlzaXRBbGxSb29tcyhbWzFdLCBbMl0sIFszXSwgW11dKSxcclxuICAgIHRydWUsXHJcbik7XHJcbmFzc2VydC5zdHJpY3RFcXVhbChcclxuICAgIGNhblZpc2l0QWxsUm9vbXMoW1sxLCAzXSwgWzMsIDAsIDFdLCBbMl0sIFswXV0pLFxyXG4gICAgZmFsc2UsXHJcbik7XHJcbiJdfQ==