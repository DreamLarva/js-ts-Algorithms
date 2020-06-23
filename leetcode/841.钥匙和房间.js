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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQxLumSpeWMmeWSjOaIv+mXtC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvODQxLumSpeWMmeWSjOaIv+mXtC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZ0NJOzs7OztBQUVKOzs7R0FHRztBQUNILElBQUksZ0JBQWdCLEdBQUcsVUFBVSxLQUFpQjtJQUNoRCxNQUFNO0lBQ04sSUFBSSxJQUFJLEdBQWEsRUFBRSxDQUFDO0lBQ3hCLE1BQU0sR0FBRyxHQUFnQixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25DLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2IsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUcsQ0FBQztRQUMvQixJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1lBQUUsU0FBUztRQUVoQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNuQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xCLFlBQVksRUFBRSxDQUFDO1NBQ2hCO0tBQ0Y7SUFFRCxPQUFPLFlBQVksS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQztBQUVGLG9EQUE0QjtBQUU1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG7mnIkgTiDkuKrmiL/pl7TvvIzlvIDlp4vml7bkvaDkvY3kuo4gMCDlj7fmiL/pl7TjgILmr4/kuKrmiL/pl7TmnInkuI3lkIznmoTlj7fnoIHvvJow77yMMe+8jDLvvIwuLi7vvIxOLTHvvIzlubbkuJTmiL/pl7Tph4zlj6/og73mnInkuIDkupvpkqXljJnog73kvb/kvaDov5vlhaXkuIvkuIDkuKrmiL/pl7TjgIJcblxu5Zyo5b2i5byP5LiK77yM5a+55LqO5q+P5Liq5oi/6Ze0IGkg6YO95pyJ5LiA5Liq6ZKl5YyZ5YiX6KGoIHJvb21zW2ld77yM5q+P5Liq6ZKl5YyZIHJvb21zW2ldW2pdIOeUsSBbMCwx77yMLi4u77yMTi0xXSDkuK3nmoTkuIDkuKrmlbTmlbDooajnpLrvvIzlhbbkuK0gTiA9IHJvb21zLmxlbmd0aOOAglxu6ZKl5YyZIHJvb21zW2ldW2pdID0gdiDlj6/ku6XmiZPlvIDnvJblj7fkuLogdiDnmoTmiL/pl7TjgIJcblxu5pyA5Yid77yM6ZmkIDAg5Y+35oi/6Ze05aSW55qE5YW25L2Z5omA5pyJ5oi/6Ze06YO96KKr6ZSB5L2P44CCXG5cbuS9oOWPr+S7peiHqueUseWcsOWcqOaIv+mXtOS5i+mXtOadpeWbnui1sOWKqOOAglxuXG7lpoLmnpzog73ov5vlhaXmr4/kuKrmiL/pl7Tov5Tlm54gdHJ1Ze+8jOWQpuWImei/lOWbniBmYWxzZeOAglxuXG7npLrkvosgMe+8mlxuXG7ovpPlhaU6IFtbMV0sWzJdLFszXSxbXV1cbui+k+WHujogdHJ1ZVxu6Kej6YeKOlxu5oiR5Lus5LuOIDAg5Y+35oi/6Ze05byA5aeL77yM5ou/5Yiw6ZKl5YyZIDHjgIJcbuS5i+WQjuaIkeS7rOWOuyAxIOWPt+aIv+mXtO+8jOaLv+WIsOmSpeWMmSAy44CCXG7nhLblkI7miJHku6zljrsgMiDlj7fmiL/pl7TvvIzmi7/liLDpkqXljJkgM+OAglxu5pyA5ZCO5oiR5Lus5Y675LqGIDMg5Y+35oi/6Ze044CCXG7nlLHkuo7miJHku6zog73lpJ/ov5vlhaXmr4/kuKrmiL/pl7TvvIzmiJHku6zov5Tlm54gdHJ1ZeOAglxu56S65L6LIDLvvJpcblxu6L6T5YWl77yaW1sxLDNdLFszLDAsMV0sWzJdLFswXV1cbui+k+WHuu+8mmZhbHNlXG7op6Pph4rvvJrmiJHku6zkuI3og73ov5vlhaUgMiDlj7fmiL/pl7TjgIJcbuaPkOekuu+8mlxuXG4xIDw9IHJvb21zLmxlbmd0aCA8PSAxMDAwXG4wIDw9IHJvb21zW2ldLmxlbmd0aCA8PSAxMDAwXG7miYDmnInmiL/pl7TkuK3nmoTpkqXljJnmlbDph4/mgLvorqHkuI3otoXov4cgMzAwMOOAglxuKiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyW11bXX0gcm9vbXNcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnZhciBjYW5WaXNpdEFsbFJvb21zID0gZnVuY3Rpb24gKHJvb21zOiBudW1iZXJbXVtdKSB7XG4gIC8vIGJmc1xuICBsZXQgbGlzdDogbnVtYmVyW10gPSBbXTtcbiAgY29uc3Qgc2V0OiBTZXQ8bnVtYmVyPiA9IG5ldyBTZXQoKTtcbiAgbGV0IHJvb21fdmlzaXRlZCA9IDA7XG4gIGxpc3QucHVzaCgwKTtcbiAgd2hpbGUgKGxpc3QubGVuZ3RoKSB7XG4gICAgY29uc3Qgcm9vbV9udW0gPSBsaXN0LnNoaWZ0KCkhO1xuICAgIGlmIChzZXQuaGFzKHJvb21fbnVtKSkgY29udGludWU7XG5cbiAgICBpZiAocm9vbXNbcm9vbV9udW1dKSB7XG4gICAgICBsaXN0ID0gbGlzdC5jb25jYXQocm9vbXNbcm9vbV9udW1dKTtcbiAgICAgIHNldC5hZGQocm9vbV9udW0pO1xuICAgICAgcm9vbV92aXNpdGVkKys7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJvb21fdmlzaXRlZCA9PT0gcm9vbXMubGVuZ3RoO1xufTtcblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChjYW5WaXNpdEFsbFJvb21zKFtbMV0sIFsyXSwgWzNdLCBbXV0pLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChjYW5WaXNpdEFsbFJvb21zKFtbMSwgM10sIFszLCAwLCAxXSwgWzJdLCBbMF1dKSwgZmFsc2UpO1xuIl19