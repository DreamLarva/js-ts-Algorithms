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
    return (a * b) / (0, ______1.default)(a, b);
}
const assert_1 = __importDefault(require("assert"));
assert_1.default.strictEqual(lcm(18, 24), 72);
assert_1.default.strictEqual(lcm(20, 2100), 2100);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoi5rGC5pyA5bCP5YWs5YCN5pWwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyLnrpfms5Uv5rGC5pyA5bCP5YWs5YCN5pWwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbUZBQTJCO0FBRTNCOztLQUVLO0FBRUwsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDZixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUEsZUFBRyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsb0RBQTRCO0FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDcEMsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnY2QgZnJvbSBcIi4v5rGC5pyA5aSn5YWs57qm5pWwXCI7XG5cbi8qKlxuICog5pyA5bCP5YWs5YCN5pWw562J5LqOIGEgKiBiIC8g5pyA5aSn5YWs57qm5pWwXG4gKiAqL1xuXG5mdW5jdGlvbiBsY20oYSwgYikge1xuICByZXR1cm4gKGEgKiBiKSAvIGdjZChhLCBiKTtcbn1cblxuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCI7XG5hc3NlcnQuc3RyaWN0RXF1YWwobGNtKDE4LCAyNCksIDcyKTtcbmFzc2VydC5zdHJpY3RFcXVhbChsY20oMjAsIDIxMDApLCAyMTAwKTtcbiJdfQ==