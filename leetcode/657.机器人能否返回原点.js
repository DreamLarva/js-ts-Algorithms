"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
/*
657. 机器人能否返回原点
在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。

移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。



示例 1:

输入: "UD"
输出: true
解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。
示例 2:

输入: "LL"
输出: false
解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。
* */
function judgeCircle(moves) {
  const moveMap = {
    U: 0,
    D: 0,
    L: 0,
    R: 0,
  };
  for (const move of moves) {
    moveMap[move]++;
  }
  const { D, L, R, U } = moveMap;
  return U === D && R === L;
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(judgeCircle("UD"), true);
assert_1.default.strictEqual(judgeCircle("LL"), false);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjU3LuacuuWZqOS6uuiDveWQpui/lOWbnuWOn+eCuS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibGVldGNvZGUvNjU3LuacuuWZqOS6uuiDveWQpui/lOWbnuWOn+eCuS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQW9CSTtBQUNKLFNBQVMsV0FBVyxDQUFDLEtBQWE7SUFDaEMsTUFBTSxPQUFPLEdBQUc7UUFDZCxDQUFDLEVBQUUsQ0FBQztRQUNKLENBQUMsRUFBRSxDQUFDO1FBQ0osQ0FBQyxFQUFFLENBQUM7UUFDSixDQUFDLEVBQUUsQ0FBQztLQUNMLENBQUM7SUFDRixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtRQUN4QixPQUFPLENBQUMsSUFBNEIsQ0FBQyxFQUFFLENBQUM7S0FDekM7SUFFRCxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBQy9CLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLENBQUM7QUFFRCxvREFBNEI7QUFDNUIsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVDLGdCQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG42NTcuIOacuuWZqOS6uuiDveWQpui/lOWbnuWOn+eCuVxu5Zyo5LqM57u05bmz6Z2i5LiK77yM5pyJ5LiA5Liq5py65Zmo5Lq65LuO5Y6f54K5ICgwLCAwKSDlvIDlp4vjgILnu5nlh7rlroPnmoTnp7vliqjpobrluo/vvIzliKTmlq3ov5nkuKrmnLrlmajkurrlnKjlrozmiJDnp7vliqjlkI7mmK/lkKblnKggKDAsIDApIOWkhOe7k+adn+OAglxuXG7np7vliqjpobrluo/nlLHlrZfnrKbkuLLooajnpLrjgILlrZfnrKYgbW92ZVtpXSDooajnpLrlhbbnrKwgaSDmrKHnp7vliqjjgILmnLrlmajkurrnmoTmnInmlYjliqjkvZzmnIkgUu+8iOWPs++8ie+8jEzvvIjlt6bvvInvvIxV77yI5LiK77yJ5ZKMIETvvIjkuIvvvInjgILlpoLmnpzmnLrlmajkurrlnKjlrozmiJDmiYDmnInliqjkvZzlkI7ov5Tlm57ljp/ngrnvvIzliJnov5Tlm54gdHJ1ZeOAguWQpuWIme+8jOi/lOWbniBmYWxzZeOAglxuXG7ms6jmhI/vvJrmnLrlmajkurrigJzpnaLmnJ3igJ3nmoTmlrnlkJHml6DlhbPntKfopoHjgIIg4oCcUuKAnSDlsIblp4vnu4jkvb/mnLrlmajkurrlkJHlj7Pnp7vliqjkuIDmrKHvvIzigJxM4oCdIOWwhuWni+e7iOWQkeW3puenu+WKqOetieOAguatpOWklu+8jOWBh+iuvuavj+asoeenu+WKqOacuuWZqOS6uueahOenu+WKqOW5heW6puebuOWQjOOAglxuXG5cblxu56S65L6LIDE6XG5cbui+k+WFpTogXCJVRFwiXG7ovpPlh7o6IHRydWVcbuino+mHiu+8muacuuWZqOS6uuWQkeS4iuenu+WKqOS4gOasoe+8jOeEtuWQjuWQkeS4i+enu+WKqOS4gOasoeOAguaJgOacieWKqOS9nOmDveWFt+acieebuOWQjOeahOW5heW6pu+8jOWboOatpOWug+acgOe7iOWbnuWIsOWug+W8gOWni+eahOWOn+eCueOAguWboOatpO+8jOaIkeS7rOi/lOWbniB0cnVl44CCXG7npLrkvosgMjpcblxu6L6T5YWlOiBcIkxMXCJcbui+k+WHujogZmFsc2Vcbuino+mHiu+8muacuuWZqOS6uuWQkeW3puenu+WKqOS4pOasoeOAguWug+acgOe7iOS9jeS6juWOn+eCueeahOW3puS+p++8jOi3neWOn+eCueacieS4pOasoSDigJznp7vliqjigJ0g55qE6Led56a744CC5oiR5Lus6L+U5ZueIGZhbHNl77yM5Zug5Li65a6D5Zyo56e75Yqo57uT5p2f5pe25rKh5pyJ6L+U5Zue5Y6f54K544CCXG4qICovXG5mdW5jdGlvbiBqdWRnZUNpcmNsZShtb3Zlczogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IG1vdmVNYXAgPSB7XG4gICAgVTogMCxcbiAgICBEOiAwLFxuICAgIEw6IDAsXG4gICAgUjogMCxcbiAgfTtcbiAgZm9yIChjb25zdCBtb3ZlIG9mIG1vdmVzKSB7XG4gICAgbW92ZU1hcFttb3ZlIGFzIGtleW9mIHR5cGVvZiBtb3ZlTWFwXSsrO1xuICB9XG5cbiAgY29uc3QgeyBELCBMLCBSLCBVIH0gPSBtb3ZlTWFwO1xuICByZXR1cm4gVSA9PT0gRCAmJiBSID09PSBMO1xufVxuXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJhc3NlcnRcIjtcbmFzc2VydC5zdHJpY3RFcXVhbChqdWRnZUNpcmNsZShcIlVEXCIpLCB0cnVlKTtcbmFzc2VydC5zdHJpY3RFcXVhbChqdWRnZUNpcmNsZShcIkxMXCIpLCBmYWxzZSk7XG5cbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbiJdfQ==
