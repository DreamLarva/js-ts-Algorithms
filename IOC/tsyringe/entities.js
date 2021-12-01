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
exports.Shuriken = exports.Katana = exports.Ninja = void 0;
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
    katana;
    shuriken;
    _katana;
    _shuriken;
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
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)(types_1.TYPES.Weapon)),
    __param(1, (0, tsyringe_1.inject)(types_1.TYPES.ThrowableWeapon))
], Ninja);
exports.Ninja = Ninja;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS9lbnRpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COzs7Ozs7Ozs7Ozs7QUFFbkIsNEJBQTBCO0FBRTFCLG1DQUE4QjtBQUM5Qix1Q0FBNEM7QUFFNUMsTUFBTSxNQUFNO0lBQ0QsR0FBRztRQUNOLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQWlDYyx3QkFBTTtBQS9CckIsTUFBTSxRQUFRO0lBQ0gsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQTJCc0IsNEJBQVE7QUF2Qi9CLElBQU0sS0FBSyxHQUFYLE1BQU0sS0FBSztJQU0yQjtJQUNTO0lBTG5DLE9BQU8sQ0FBUztJQUNoQixTQUFTLENBQWtCO0lBRW5DLFlBQ2tDLE1BQWMsRUFDTCxRQUF5QjtRQURsQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ0wsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFFaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUVKLENBQUE7QUFyQkssS0FBSztJQURWLElBQUEscUJBQVUsR0FBRTtJQU9KLFdBQUEsSUFBQSxpQkFBTSxFQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwQixXQUFBLElBQUEsaUJBQU0sRUFBQyxhQUFLLENBQUMsZUFBZSxDQUFDLENBQUE7R0FQaEMsS0FBSyxDQXFCVjtBQUVPLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBlbnRpdGllcy50c1xuXG5pbXBvcnQgXCJyZWZsZWN0LW1ldGFkYXRhXCI7XG5pbXBvcnQge1dlYXBvbiwgVGhyb3dhYmxlV2VhcG9uLCBXYXJyaW9yfSBmcm9tIFwiLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHtpbmplY3RhYmxlLCBpbmplY3R9IGZyb20gXCJ0c3lyaW5nZVwiO1xuXG5jbGFzcyBLYXRhbmEgaW1wbGVtZW50cyBXZWFwb24ge1xuICAgIHB1YmxpYyBoaXQoKSB7XG4gICAgICAgIHJldHVybiBcImN1dCFcIjtcbiAgICB9XG59XG5cbmNsYXNzIFNodXJpa2VuIGltcGxlbWVudHMgVGhyb3dhYmxlV2VhcG9uIHtcbiAgICBwdWJsaWMgdGhyb3coKSB7XG4gICAgICAgIHJldHVybiBcImhpdCFcIjtcbiAgICB9XG59XG5cblxuQGluamVjdGFibGUoKVxuY2xhc3MgTmluamEgaW1wbGVtZW50cyBXYXJyaW9yIHtcblxuICAgIHByaXZhdGUgX2thdGFuYTogV2VhcG9uO1xuICAgIHByaXZhdGUgX3NodXJpa2VuOiBUaHJvd2FibGVXZWFwb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoVFlQRVMuV2VhcG9uKSBwcml2YXRlIGthdGFuYTogV2VhcG9uLFxuICAgICAgICBAaW5qZWN0KFRZUEVTLlRocm93YWJsZVdlYXBvbikgcHJpdmF0ZSBzaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uLFxuICAgICkge1xuICAgICAgICB0aGlzLl9rYXRhbmEgPSBrYXRhbmE7XG4gICAgICAgIHRoaXMuX3NodXJpa2VuID0gc2h1cmlrZW47XG4gICAgfVxuXG4gICAgcHVibGljIGZpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2F0YW5hLmhpdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbmVhaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NodXJpa2VuLnRocm93KCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCB7TmluamEsIEthdGFuYSwgU2h1cmlrZW59O1xuIl19