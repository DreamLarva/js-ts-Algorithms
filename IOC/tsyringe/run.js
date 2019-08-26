"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const entities_1 = require("./entities");
const tsyringe_config_1 = require("./tsyringe.config");
const assert_1 = __importDefault(require("assert"));
const ninja = tsyringe_config_1.myContainer.resolve(entities_1.Ninja);
assert_1.default.strictEqual(ninja.fight(), "cut!"); // true
assert_1.default.strictEqual(ninja.sneak(), "hit!"); // true
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVuLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvdHN5cmluZ2UvcnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsNEJBQTBCO0FBSTFCLHlDQUFpQztBQUNqQyx1REFBOEM7QUFDOUMsb0RBQTRCO0FBRTVCLE1BQU0sS0FBSyxHQUFHLDZCQUFXLENBQUMsT0FBTyxDQUFVLGdCQUFLLENBQUMsQ0FBQztBQUVsRCxnQkFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPO0FBQ2xELGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XHJcblxyXG5cclxuaW1wb3J0IHtXYXJyaW9yfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7TmluamF9IGZyb20gXCIuL2VudGl0aWVzXCI7XHJcbmltcG9ydCB7bXlDb250YWluZXJ9IGZyb20gXCIuL3RzeXJpbmdlLmNvbmZpZ1wiO1xyXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ2Fzc2VydCc7XHJcblxyXG5jb25zdCBuaW5qYSA9IG15Q29udGFpbmVyLnJlc29sdmU8V2Fycmlvcj4oTmluamEpO1xyXG5cclxuYXNzZXJ0LnN0cmljdEVxdWFsKG5pbmphLmZpZ2h0KCksIFwiY3V0IVwiKTsgLy8gdHJ1ZVxyXG5hc3NlcnQuc3RyaWN0RXF1YWwobmluamEuc25lYWsoKSwgXCJoaXQhXCIpOyAvLyB0cnVlXHJcblxyXG4iXX0=