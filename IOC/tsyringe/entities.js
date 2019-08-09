"use strict";
// file entities.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const types_1 = require("./types");
const tsyringe_1 = require("tsyringe");
class Katana {
    hit() {
        return "cut!";
    }
}
exports.Katana = Katana;
class Shuriken {
    throw() {
        return "hit!";
    }
}
exports.Shuriken = Shuriken;
let Ninja = class Ninja {
    constructor(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    fight() {
        return this._katana.hit();
    }
    sneak() {
        return this._shuriken.throw();
    }
};
Ninja = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject(types_1.TYPES.Weapon)),
    __param(1, tsyringe_1.inject(types_1.TYPES.ThrowableWeapon))
], Ninja);
exports.Ninja = Ninja;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS9lbnRpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COzs7Ozs7Ozs7OztBQUVuQiw0QkFBMEI7QUFFMUIsbUNBQThCO0FBQzlCLHVDQUE0QztBQUU1QyxNQUFNLE1BQU07SUFDRCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBaUNjLHdCQUFNO0FBL0JyQixNQUFNLFFBQVE7SUFDSCxLQUFLO1FBQ1IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBMkJzQiw0QkFBUTtBQXZCL0IsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBS1AsWUFDMEIsTUFBYyxFQUNMLFFBQXlCO1FBRXhELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQzlCLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTSxLQUFLO1FBQ1IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FFSixDQUFBO0FBckJLLEtBQUs7SUFEVixxQkFBVSxFQUFFO0lBT0osV0FBQSxpQkFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwQixXQUFBLGlCQUFNLENBQUMsYUFBSyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0dBUGhDLEtBQUssQ0FxQlY7QUFFTyxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgZW50aXRpZXMudHNcclxuXHJcbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcclxuaW1wb3J0IHtXZWFwb24sIFRocm93YWJsZVdlYXBvbiwgV2Fycmlvcn0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQge2luamVjdGFibGUsIGluamVjdH0gZnJvbSBcInRzeXJpbmdlXCI7XHJcblxyXG5jbGFzcyBLYXRhbmEgaW1wbGVtZW50cyBXZWFwb24ge1xyXG4gICAgcHVibGljIGhpdCgpIHtcclxuICAgICAgICByZXR1cm4gXCJjdXQhXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFNodXJpa2VuIGltcGxlbWVudHMgVGhyb3dhYmxlV2VhcG9uIHtcclxuICAgIHB1YmxpYyB0aHJvdygpIHtcclxuICAgICAgICByZXR1cm4gXCJoaXQhXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmNsYXNzIE5pbmphIGltcGxlbWVudHMgV2FycmlvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfa2F0YW5hOiBXZWFwb247XHJcbiAgICBwcml2YXRlIF9zaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBAaW5qZWN0KFRZUEVTLldlYXBvbikga2F0YW5hOiBXZWFwb24sXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHNodXJpa2VuOiBUaHJvd2FibGVXZWFwb24sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLl9rYXRhbmEgPSBrYXRhbmE7XHJcbiAgICAgICAgdGhpcy5fc2h1cmlrZW4gPSBzaHVyaWtlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc25lYWsoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NodXJpa2VuLnRocm93KCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQge05pbmphLCBLYXRhbmEsIFNodXJpa2VufTtcclxuIl19