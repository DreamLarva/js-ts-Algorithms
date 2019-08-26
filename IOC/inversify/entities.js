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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy9pbnZlcnNpZnkvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7Ozs7Ozs7QUFFbkIseUNBQStDO0FBRS9DLG1DQUFnQztBQUdoQyxJQUFNLE1BQU0sR0FBWixNQUFNLE1BQU07SUFDRCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKLENBQUE7QUFKSyxNQUFNO0lBRFgsc0JBQVUsRUFBRTtHQUNQLE1BQU0sQ0FJWDtBQXNDZSx3QkFBTTtBQW5DdEIsSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFRO0lBQ0gsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssUUFBUTtJQURiLHNCQUFVLEVBQUU7R0FDUCxRQUFRLENBSWI7QUErQnVCLDRCQUFRO0FBNUJoQyxJQUFNLEtBQUssR0FBWCxNQUFNLEtBQUs7SUFHQSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNwRCxDQUFBO0FBSnlCO0lBQXJCLGtCQUFNLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQztzQ0FBMEI7QUFDaEI7SUFBOUIsa0JBQU0sQ0FBQyxhQUFLLENBQUMsZUFBZSxDQUFDO3dDQUFxQztBQUZqRSxLQUFLO0lBRFYsc0JBQVUsRUFBRTtHQUNQLEtBQUssQ0FLVjtBQXVCUSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgZW50aXRpZXMudHNcclxuXHJcbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcclxuaW1wb3J0IHsgV2VhcG9uLCBUaHJvd2FibGVXZWFwb24sIFdhcnJpb3IgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCJcclxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5jbGFzcyBLYXRhbmEgaW1wbGVtZW50cyBXZWFwb24ge1xyXG4gICAgcHVibGljIGhpdCgpIHtcclxuICAgICAgICByZXR1cm4gXCJjdXQhXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmplY3RhYmxlKClcclxuY2xhc3MgU2h1cmlrZW4gaW1wbGVtZW50cyBUaHJvd2FibGVXZWFwb24ge1xyXG4gICAgcHVibGljIHRocm93KCkge1xyXG4gICAgICAgIHJldHVybiBcImhpdCFcIjtcclxuICAgIH1cclxufVxyXG5cclxuQGluamVjdGFibGUoKVxyXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xyXG4gICAgQGluamVjdChUWVBFUy5XZWFwb24pIHByaXZhdGUgX2thdGFuYSE6IFdlYXBvbjtcclxuICAgIEBpbmplY3QoVFlQRVMuVGhyb3dhYmxlV2VhcG9uKSBwcml2YXRlIF9zaHVyaWtlbiE6IFRocm93YWJsZVdlYXBvbjtcclxuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxyXG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxyXG59XHJcblxyXG4vKlxyXG5AaW5qZWN0YWJsZSgpXHJcbmNsYXNzIE5pbmphIGltcGxlbWVudHMgV2FycmlvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfa2F0YW5hOiBXZWFwb247XHJcbiAgICBwcml2YXRlIF9zaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBAaW5qZWN0KFRZUEVTLldlYXBvbikga2F0YW5hOiBXZWFwb24sXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHNodXJpa2VuOiBUaHJvd2FibGVXZWFwb25cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2thdGFuYSA9IGthdGFuYTtcclxuICAgICAgICB0aGlzLl9zaHVyaWtlbiA9IHNodXJpa2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxyXG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxyXG5cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IHsgTmluamEsIEthdGFuYSwgU2h1cmlrZW4gfTtcclxuIl19