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
        this.katana = katana;
        this.shuriken = shuriken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS9lbnRpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COzs7Ozs7Ozs7OztBQUVuQiw0QkFBMEI7QUFFMUIsbUNBQThCO0FBQzlCLHVDQUE0QztBQUU1QyxNQUFNLE1BQU07SUFDRCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBaUNjLHdCQUFNO0FBL0JyQixNQUFNLFFBQVE7SUFDSCxLQUFLO1FBQ1IsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBMkJzQiw0QkFBUTtBQXZCL0IsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBS1AsWUFDa0MsTUFBYyxFQUNMLFFBQXlCO1FBRGxDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDTCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUVoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBRUosQ0FBQTtBQXJCSyxLQUFLO0lBRFYscUJBQVUsRUFBRTtJQU9KLFdBQUEsaUJBQU0sQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDcEIsV0FBQSxpQkFBTSxDQUFDLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtHQVBoQyxLQUFLLENBcUJWO0FBRU8sc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIGVudGl0aWVzLnRzXHJcblxyXG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XHJcbmltcG9ydCB7V2VhcG9uLCBUaHJvd2FibGVXZWFwb24sIFdhcnJpb3J9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtUWVBFU30gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHtpbmplY3RhYmxlLCBpbmplY3R9IGZyb20gXCJ0c3lyaW5nZVwiO1xyXG5cclxuY2xhc3MgS2F0YW5hIGltcGxlbWVudHMgV2VhcG9uIHtcclxuICAgIHB1YmxpYyBoaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY3V0IVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTaHVyaWtlbiBpbXBsZW1lbnRzIFRocm93YWJsZVdlYXBvbiB7XHJcbiAgICBwdWJsaWMgdGhyb3coKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiaGl0IVwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQGluamVjdGFibGUoKVxyXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xyXG5cclxuICAgIHByaXZhdGUgX2thdGFuYTogV2VhcG9uO1xyXG4gICAgcHJpdmF0ZSBfc2h1cmlrZW46IFRocm93YWJsZVdlYXBvbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5XZWFwb24pIHByaXZhdGUga2F0YW5hOiBXZWFwb24sXHJcbiAgICAgICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHByaXZhdGUgc2h1cmlrZW46IFRocm93YWJsZVdlYXBvbixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuX2thdGFuYSA9IGthdGFuYTtcclxuICAgICAgICB0aGlzLl9zaHVyaWtlbiA9IHNodXJpa2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fa2F0YW5hLmhpdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzbmVhaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7TmluamEsIEthdGFuYSwgU2h1cmlrZW59O1xyXG4iXX0=