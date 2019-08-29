"use strict";
// file inversify.config.ts
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const types_1 = require("./types");
const entities_1 = require("./entities");
// container.register<Weapon>(TYPES.Weapon, {useClass: Katana});
// container.register<ThrowableWeapon>(TYPES.ThrowableWeapon, {useClass: Shuriken});
// 生成一个 独立作用域的 子容器
const myContainer = tsyringe_1.container.createChildContainer();
exports.myContainer = myContainer;
myContainer.register(types_1.TYPES.Weapon, { useClass: entities_1.Katana });
myContainer.register(types_1.TYPES.ThrowableWeapon, { useClass: entities_1.Shuriken });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHN5cmluZ2UuY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvdHN5cmluZ2UvdHN5cmluZ2UuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQkFBMkI7O0FBRTNCLHVDQUFtQztBQUNuQyxtQ0FBOEI7QUFFOUIseUNBQW1EO0FBRW5ELGdFQUFnRTtBQUNoRSxvRkFBb0Y7QUFFcEYsa0JBQWtCO0FBQ2xCLE1BQU0sV0FBVyxHQUFHLG9CQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUs3QyxrQ0FBVztBQUpuQixXQUFXLENBQUMsUUFBUSxDQUFTLGFBQUssQ0FBQyxNQUFNLEVBQUUsRUFBQyxRQUFRLEVBQUUsaUJBQU0sRUFBQyxDQUFDLENBQUM7QUFDL0QsV0FBVyxDQUFDLFFBQVEsQ0FBa0IsYUFBSyxDQUFDLGVBQWUsRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBUSxFQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgaW52ZXJzaWZ5LmNvbmZpZy50c1xyXG5cclxuaW1wb3J0IHtjb250YWluZXJ9IGZyb20gXCJ0c3lyaW5nZVwiO1xyXG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQge1dhcnJpb3IsIFdlYXBvbiwgVGhyb3dhYmxlV2VhcG9ufSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7TmluamEsIEthdGFuYSwgU2h1cmlrZW59IGZyb20gXCIuL2VudGl0aWVzXCI7XHJcblxyXG4vLyBjb250YWluZXIucmVnaXN0ZXI8V2VhcG9uPihUWVBFUy5XZWFwb24sIHt1c2VDbGFzczogS2F0YW5hfSk7XHJcbi8vIGNvbnRhaW5lci5yZWdpc3RlcjxUaHJvd2FibGVXZWFwb24+KFRZUEVTLlRocm93YWJsZVdlYXBvbiwge3VzZUNsYXNzOiBTaHVyaWtlbn0pO1xyXG5cclxuLy8g55Sf5oiQ5LiA5LiqIOeLrOeri+S9nOeUqOWfn+eahCDlrZDlrrnlmahcclxuY29uc3QgbXlDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlQ2hpbGRDb250YWluZXIoKTtcclxubXlDb250YWluZXIucmVnaXN0ZXI8V2VhcG9uPihUWVBFUy5XZWFwb24sIHt1c2VDbGFzczogS2F0YW5hfSk7XHJcbm15Q29udGFpbmVyLnJlZ2lzdGVyPFRocm93YWJsZVdlYXBvbj4oVFlQRVMuVGhyb3dhYmxlV2VhcG9uLCB7dXNlQ2xhc3M6IFNodXJpa2VufSk7XHJcblxyXG5cclxuZXhwb3J0IHtteUNvbnRhaW5lcn07XHJcbiJdfQ==