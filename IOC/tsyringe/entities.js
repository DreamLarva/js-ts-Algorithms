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
let Ninja = /** @class */ (() => {
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
    return Ninja;
})();
exports.Ninja = Ninja;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS9lbnRpdGllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsbUJBQW1COzs7Ozs7Ozs7Ozs7QUFFbkIsNEJBQTBCO0FBRTFCLG1DQUE4QjtBQUM5Qix1Q0FBNEM7QUFFNUMsTUFBTSxNQUFNO0lBQ0QsR0FBRztRQUNOLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQWlDYyx3QkFBTTtBQS9CckIsTUFBTSxRQUFRO0lBQ0gsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQTJCc0IsNEJBQVE7QUF2Qi9CO0lBQUEsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO1FBS1AsWUFDa0MsTUFBYyxFQUNMLFFBQXlCO1lBRGxDLFdBQU0sR0FBTixNQUFNLENBQVE7WUFDTCxhQUFRLEdBQVIsUUFBUSxDQUFpQjtZQUVoRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUM5QixDQUFDO1FBRU0sS0FBSztZQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUM5QixDQUFDO1FBRU0sS0FBSztZQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsQyxDQUFDO0tBRUosQ0FBQTtJQXJCSyxLQUFLO1FBRFYscUJBQVUsRUFBRTtRQU9KLFdBQUEsaUJBQU0sQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEIsV0FBQSxpQkFBTSxDQUFDLGFBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQTtPQVBoQyxLQUFLLENBcUJWO0lBQUQsWUFBQztLQUFBO0FBRU8sc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIGVudGl0aWVzLnRzXG5cbmltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcbmltcG9ydCB7V2VhcG9uLCBUaHJvd2FibGVXZWFwb24sIFdhcnJpb3J9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7VFlQRVN9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQge2luamVjdGFibGUsIGluamVjdH0gZnJvbSBcInRzeXJpbmdlXCI7XG5cbmNsYXNzIEthdGFuYSBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gICAgcHVibGljIGhpdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiY3V0IVwiO1xuICAgIH1cbn1cblxuY2xhc3MgU2h1cmlrZW4gaW1wbGVtZW50cyBUaHJvd2FibGVXZWFwb24ge1xuICAgIHB1YmxpYyB0aHJvdygpIHtcbiAgICAgICAgcmV0dXJuIFwiaGl0IVwiO1xuICAgIH1cbn1cblxuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xuXG4gICAgcHJpdmF0ZSBfa2F0YW5hOiBXZWFwb247XG4gICAgcHJpdmF0ZSBfc2h1cmlrZW46IFRocm93YWJsZVdlYXBvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgQGluamVjdChUWVBFUy5XZWFwb24pIHByaXZhdGUga2F0YW5hOiBXZWFwb24sXG4gICAgICAgIEBpbmplY3QoVFlQRVMuVGhyb3dhYmxlV2VhcG9uKSBwcml2YXRlIHNodXJpa2VuOiBUaHJvd2FibGVXZWFwb24sXG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2thdGFuYSA9IGthdGFuYTtcbiAgICAgICAgdGhpcy5fc2h1cmlrZW4gPSBzaHVyaWtlbjtcbiAgICB9XG5cbiAgICBwdWJsaWMgZmlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9rYXRhbmEuaGl0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNuZWFrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IHtOaW5qYSwgS2F0YW5hLCBTaHVyaWtlbn07XG4iXX0=