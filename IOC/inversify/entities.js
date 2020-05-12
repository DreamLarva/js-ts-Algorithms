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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy9pbnZlcnNpZnkvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7Ozs7Ozs7QUFFbkIseUNBQStDO0FBRS9DLG1DQUFnQztBQUdoQyxJQUFNLE1BQU0sR0FBWixNQUFNLE1BQU07SUFDRCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKLENBQUE7QUFKSyxNQUFNO0lBRFgsc0JBQVUsRUFBRTtHQUNQLE1BQU0sQ0FJWDtBQXNDZSx3QkFBTTtBQW5DdEIsSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFRO0lBQ0gsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssUUFBUTtJQURiLHNCQUFVLEVBQUU7R0FDUCxRQUFRLENBSWI7QUErQnVCLDRCQUFRO0FBNUJoQyxJQUFNLEtBQUssR0FBWCxNQUFNLEtBQUs7SUFHQSxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxLQUFLLEtBQUssT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztDQUNwRCxDQUFBO0FBSnlCO0lBQXJCLGtCQUFNLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQztzQ0FBMEI7QUFDaEI7SUFBOUIsa0JBQU0sQ0FBQyxhQUFLLENBQUMsZUFBZSxDQUFDO3dDQUFxQztBQUZqRSxLQUFLO0lBRFYsc0JBQVUsRUFBRTtHQUNQLEtBQUssQ0FLVjtBQXVCUSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgZW50aXRpZXMudHNcblxuaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSBcImludmVyc2lmeVwiO1xuaW1wb3J0IHsgV2VhcG9uLCBUaHJvd2FibGVXZWFwb24sIFdhcnJpb3IgfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCJcbmltcG9ydCB7IFRZUEVTIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuQGluamVjdGFibGUoKVxuY2xhc3MgS2F0YW5hIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgICBwdWJsaWMgaGl0KCkge1xuICAgICAgICByZXR1cm4gXCJjdXQhXCI7XG4gICAgfVxufVxuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBTaHVyaWtlbiBpbXBsZW1lbnRzIFRocm93YWJsZVdlYXBvbiB7XG4gICAgcHVibGljIHRocm93KCkge1xuICAgICAgICByZXR1cm4gXCJoaXQhXCI7XG4gICAgfVxufVxuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xuICAgIEBpbmplY3QoVFlQRVMuV2VhcG9uKSBwcml2YXRlIF9rYXRhbmEhOiBXZWFwb247XG4gICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHByaXZhdGUgX3NodXJpa2VuITogVGhyb3dhYmxlV2VhcG9uO1xuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxuICAgIHB1YmxpYyBzbmVhaygpIHsgcmV0dXJuIHRoaXMuX3NodXJpa2VuLnRocm93KCk7IH1cbn1cblxuLypcbkBpbmplY3RhYmxlKClcbmNsYXNzIE5pbmphIGltcGxlbWVudHMgV2FycmlvciB7XG5cbiAgICBwcml2YXRlIF9rYXRhbmE6IFdlYXBvbjtcbiAgICBwcml2YXRlIF9zaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgICAgICBAaW5qZWN0KFRZUEVTLldlYXBvbikga2F0YW5hOiBXZWFwb24sXG4gICAgICAgIEBpbmplY3QoVFlQRVMuVGhyb3dhYmxlV2VhcG9uKSBzaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2thdGFuYSA9IGthdGFuYTtcbiAgICAgICAgdGhpcy5fc2h1cmlrZW4gPSBzaHVyaWtlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlnaHQoKSB7IHJldHVybiB0aGlzLl9rYXRhbmEuaGl0KCk7IH1cbiAgICBwdWJsaWMgc25lYWsoKSB7IHJldHVybiB0aGlzLl9zaHVyaWtlbi50aHJvdygpOyB9XG5cbn1cbiovXG5cbmV4cG9ydCB7IE5pbmphLCBLYXRhbmEsIFNodXJpa2VuIH07XG4iXX0=