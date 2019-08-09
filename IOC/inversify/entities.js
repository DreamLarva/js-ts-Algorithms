"use strict";
// file entities.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./types");
let Katana = class Katana {
    hit() {
        return "cut!";
    }
};
Katana = __decorate([
    inversify_1.injectable()
], Katana);
exports.Katana = Katana;
let Shuriken = class Shuriken {
    throw() {
        return "hit!";
    }
};
Shuriken = __decorate([
    inversify_1.injectable()
], Shuriken);
exports.Shuriken = Shuriken;
let Ninja = class Ninja {
    fight() { return this._katana.hit(); }
    sneak() { return this._shuriken.throw(); }
};
__decorate([
    inversify_1.inject(types_1.TYPES.Weapon)
], Ninja.prototype, "_katana", void 0);
__decorate([
    inversify_1.inject(types_1.TYPES.ThrowableWeapon)
], Ninja.prototype, "_shuriken", void 0);
Ninja = __decorate([
    inversify_1.injectable()
], Ninja);
exports.Ninja = Ninja;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy9pbnZlcnNpZnkvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7Ozs7Ozs7QUFFbkIseUNBQStDO0FBQy9DLDRCQUEwQjtBQUUxQixtQ0FBZ0M7QUFHaEMsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBQ0QsR0FBRztRQUNOLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssTUFBTTtJQURYLHNCQUFVLEVBQUU7R0FDUCxNQUFNLENBSVg7QUFzQ2Usd0JBQU07QUFuQ3RCLElBQU0sUUFBUSxHQUFkLE1BQU0sUUFBUTtJQUNILEtBQUs7UUFDUixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0osQ0FBQTtBQUpLLFFBQVE7SUFEYixzQkFBVSxFQUFFO0dBQ1AsUUFBUSxDQUliO0FBK0J1Qiw0QkFBUTtBQTVCaEMsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBR0EsS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDcEQsQ0FBQTtBQUp5QjtJQUFyQixrQkFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUM7c0NBQTBCO0FBQ2hCO0lBQTlCLGtCQUFNLENBQUMsYUFBSyxDQUFDLGVBQWUsQ0FBQzt3Q0FBcUM7QUFGakUsS0FBSztJQURWLHNCQUFVLEVBQUU7R0FDUCxLQUFLLENBS1Y7QUF1QlEsc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIGVudGl0aWVzLnRzXHJcblxyXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XHJcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcclxuaW1wb3J0IHsgV2VhcG9uLCBUaHJvd2FibGVXZWFwb24sIFdhcnJpb3IgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCJcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5jbGFzcyBLYXRhbmEgaW1wbGVtZW50cyBXZWFwb24ge1xyXG4gICAgcHVibGljIGhpdCgpIHtcclxuICAgICAgICByZXR1cm4gXCJjdXQhXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmplY3RhYmxlKClcclxuY2xhc3MgU2h1cmlrZW4gaW1wbGVtZW50cyBUaHJvd2FibGVXZWFwb24ge1xyXG4gICAgcHVibGljIHRocm93KCkge1xyXG4gICAgICAgIHJldHVybiBcImhpdCFcIjtcclxuICAgIH1cclxufVxyXG5cclxuQGluamVjdGFibGUoKVxyXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xyXG4gICAgQGluamVjdChUWVBFUy5XZWFwb24pIHByaXZhdGUgX2thdGFuYSE6IFdlYXBvbjtcclxuICAgIEBpbmplY3QoVFlQRVMuVGhyb3dhYmxlV2VhcG9uKSBwcml2YXRlIF9zaHVyaWtlbiE6IFRocm93YWJsZVdlYXBvbjtcclxuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxyXG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxyXG59XHJcblxyXG4vKlxyXG5AaW5qZWN0YWJsZSgpXHJcbmNsYXNzIE5pbmphIGltcGxlbWVudHMgV2FycmlvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfa2F0YW5hOiBXZWFwb247XHJcbiAgICBwcml2YXRlIF9zaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBAaW5qZWN0KFRZUEVTLldlYXBvbikga2F0YW5hOiBXZWFwb24sXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHNodXJpa2VuOiBUaHJvd2FibGVXZWFwb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2thdGFuYSA9IGthdGFuYTtcclxuICAgICAgICB0aGlzLl9zaHVyaWtlbiA9IHNodXJpa2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxyXG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxyXG5cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IHsgTmluamEsIEthdGFuYSwgU2h1cmlrZW4gfTtcclxuIl19