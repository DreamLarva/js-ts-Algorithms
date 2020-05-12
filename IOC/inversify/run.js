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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvaW52ZXJzaWZ5L3J1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUEwQjtBQUMxQix5REFBK0M7QUFDL0MsbUNBQThCO0FBRTlCLG9EQUE0QjtBQUU1QixNQUFNLEtBQUssR0FBRyw4QkFBVyxDQUFDLEdBQUcsQ0FBVSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFdEQsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTztBQUNsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuaW1wb3J0IHtteUNvbnRhaW5lcn0gZnJvbSBcIi4vaW52ZXJzaWZ5LmNvbmZpZ1wiO1xuaW1wb3J0IHtUWVBFU30gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7VGhyb3dhYmxlV2VhcG9uLCBXYXJyaW9yLCBXZWFwb259IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCBhc3NlcnQgZnJvbSAnYXNzZXJ0JztcblxuY29uc3QgbmluamEgPSBteUNvbnRhaW5lci5nZXQ8V2Fycmlvcj4oVFlQRVMuV2Fycmlvcik7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChuaW5qYS5maWdodCgpLCBcImN1dCFcIik7IC8vIHRydWVcbmFzc2VydC5zdHJpY3RFcXVhbChuaW5qYS5zbmVhaygpLCBcImhpdCFcIik7IC8vIHRydWVcblxuIl19