"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const entities_1 = require("./entities");
const tsyringe_config_1 = require("./tsyringe.config");
const assert_1 = __importDefault(require("assert"));
const ninja = tsyringe_config_1.myContainer.resolve(entities_1.Ninja);
assert_1.default.strictEqual(ninja.fight(), "cut!"); // true
assert_1.default.strictEqual(ninja.sneak(), "hit!"); // true
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvdHN5cmluZ2UvcnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNEJBQTBCO0FBSTFCLHlDQUFpQztBQUNqQyx1REFBOEM7QUFDOUMsb0RBQTRCO0FBRTVCLE1BQU0sS0FBSyxHQUFHLDZCQUFXLENBQUMsT0FBTyxDQUFVLGdCQUFLLENBQUMsQ0FBQztBQUVsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5cblxuaW1wb3J0IHtXYXJyaW9yfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge05pbmphfSBmcm9tIFwiLi9lbnRpdGllc1wiO1xuaW1wb3J0IHtteUNvbnRhaW5lcn0gZnJvbSBcIi4vdHN5cmluZ2UuY29uZmlnXCI7XG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XG5cbmNvbnN0IG5pbmphID0gbXlDb250YWluZXIucmVzb2x2ZTxXYXJyaW9yPihOaW5qYSk7XG5cbmFzc2VydC5zdHJpY3RFcXVhbChuaW5qYS5maWdodCgpLCBcImN1dCFcIik7IC8vIHRydWVcbmFzc2VydC5zdHJpY3RFcXVhbChuaW5qYS5zbmVhaygpLCBcImhpdCFcIik7IC8vIHRydWVcblxuIl19
