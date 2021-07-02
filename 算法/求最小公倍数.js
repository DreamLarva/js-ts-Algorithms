"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ______1 = __importDefault(require("./\u6C42\u6700\u5927\u516C\u7EA6\u6570"));
/**
 * 最小公倍数等于 a * b / 最大公约数
 * */
function lcm(a, b) {
    return (a * b) / ______1.default(a, b);
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lcm(18, 24), 72);
assert_1.default.strictEqual(lcm(20, 2100), 2100);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5rGC5pyA5bCP5YWs5YCN5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5rGC5pyA5bCP5YWs5YCN5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUZBQTJCO0FBRTNCOztLQUVLO0FBRUwsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDZixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGVBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0IsQ0FBQztBQUVELG9EQUE0QjtBQUM1QixnQkFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2NkIGZyb20gXCIuL+axguacgOWkp+WFrOe6puaVsFwiO1xuXG4vKipcbiAqIOacgOWwj+WFrOWAjeaVsOetieS6jiBhICogYiAvIOacgOWkp+WFrOe6puaVsFxuICogKi9cblxuZnVuY3Rpb24gbGNtKGEsIGIpIHtcbiAgcmV0dXJuIChhICogYikgLyBnY2QoYSwgYik7XG59XG5cbmltcG9ydCBhc3NlcnQgZnJvbSBcImFzc2VydFwiO1xuYXNzZXJ0LnN0cmljdEVxdWFsKGxjbSgxOCwgMjQpLCA3Mik7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGNtKDIwLCAyMTAwKSwgMjEwMCk7XG4iXX0=