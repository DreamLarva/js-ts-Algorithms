"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
const assert_1 = __importDefault(require("assert"));
const ninja = inversify_config_1.myContainer.get(types_1.TYPES.Warrior);
assert_1.default.strictEqual(ninja.fight(), "cut!"); // true
assert_1.default.strictEqual(ninja.sneak(), "hit!"); // true
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvaW52ZXJzaWZ5L3J1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQix5REFBK0M7QUFDL0MsbUNBQThCO0FBRTlCLG9EQUE0QjtBQUU1QixNQUFNLEtBQUssR0FBRyw4QkFBVyxDQUFDLEdBQUcsQ0FBVSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTztBQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xyXG5pbXBvcnQge215Q29udGFpbmVyfSBmcm9tIFwiLi9pbnZlcnNpZnkuY29uZmlnXCI7XHJcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7VGhyb3dhYmxlV2VhcG9uLCBXYXJyaW9yLCBXZWFwb259IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IGFzc2VydCBmcm9tICdhc3NlcnQnO1xyXG5cclxuY29uc3QgbmluamEgPSBteUNvbnRhaW5lci5nZXQ8V2Fycmlvcj4oVFlQRVMuV2Fycmlvcik7XHJcblxyXG5hc3NlcnQuc3RyaWN0RXF1YWwobmluamEuZmlnaHQoKSwgXCJjdXQhXCIpOyAvLyB0cnVlXHJcbmFzc2VydC5zdHJpY3RFcXVhbChuaW5qYS5zbmVhaygpLCBcImhpdCFcIik7IC8vIHRydWVcclxuXHJcbiJdfQ==