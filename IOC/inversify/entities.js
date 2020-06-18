"use strict";
// file entities.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shuriken = exports.Katana = exports.Ninja = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy9pbnZlcnNpZnkvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7Ozs7Ozs7O0FBRW5CLHlDQUErQztBQUUvQyxtQ0FBZ0M7QUFHaEMsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBQ0QsR0FBRztRQUNOLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssTUFBTTtJQURYLHNCQUFVLEVBQUU7R0FDUCxNQUFNLENBSVg7QUFzQ2Usd0JBQU07QUFuQ3RCLElBQU0sUUFBUSxHQUFkLE1BQU0sUUFBUTtJQUNILEtBQUs7UUFDUixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0NBQ0osQ0FBQTtBQUpLLFFBQVE7SUFEYixzQkFBVSxFQUFFO0dBQ1AsUUFBUSxDQUliO0FBK0J1Qiw0QkFBUTtBQTVCaEMsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBR0EsS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEMsS0FBSyxLQUFLLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDcEQsQ0FBQTtBQUp5QjtJQUFyQixrQkFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUM7c0NBQTBCO0FBQ2hCO0lBQTlCLGtCQUFNLENBQUMsYUFBSyxDQUFDLGVBQWUsQ0FBQzt3Q0FBcUM7QUFGakUsS0FBSztJQURWLHNCQUFVLEVBQUU7R0FDUCxLQUFLLENBS1Y7QUF1QlEsc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlIGVudGl0aWVzLnRzXG5cbmltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJpbnZlcnNpZnlcIjtcbmltcG9ydCB7IFdlYXBvbiwgVGhyb3dhYmxlV2VhcG9uLCBXYXJyaW9yIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiXG5pbXBvcnQgeyBUWVBFUyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbkBpbmplY3RhYmxlKClcbmNsYXNzIEthdGFuYSBpbXBsZW1lbnRzIFdlYXBvbiB7XG4gICAgcHVibGljIGhpdCgpIHtcbiAgICAgICAgcmV0dXJuIFwiY3V0IVwiO1xuICAgIH1cbn1cblxuQGluamVjdGFibGUoKVxuY2xhc3MgU2h1cmlrZW4gaW1wbGVtZW50cyBUaHJvd2FibGVXZWFwb24ge1xuICAgIHB1YmxpYyB0aHJvdygpIHtcbiAgICAgICAgcmV0dXJuIFwiaGl0IVwiO1xuICAgIH1cbn1cblxuQGluamVjdGFibGUoKVxuY2xhc3MgTmluamEgaW1wbGVtZW50cyBXYXJyaW9yIHtcbiAgICBAaW5qZWN0KFRZUEVTLldlYXBvbikgcHJpdmF0ZSBfa2F0YW5hITogV2VhcG9uO1xuICAgIEBpbmplY3QoVFlQRVMuVGhyb3dhYmxlV2VhcG9uKSBwcml2YXRlIF9zaHVyaWtlbiE6IFRocm93YWJsZVdlYXBvbjtcbiAgICBwdWJsaWMgZmlnaHQoKSB7IHJldHVybiB0aGlzLl9rYXRhbmEuaGl0KCk7IH1cbiAgICBwdWJsaWMgc25lYWsoKSB7IHJldHVybiB0aGlzLl9zaHVyaWtlbi50aHJvdygpOyB9XG59XG5cbi8qXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBOaW5qYSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xuXG4gICAgcHJpdmF0ZSBfa2F0YW5hOiBXZWFwb247XG4gICAgcHJpdmF0ZSBfc2h1cmlrZW46IFRocm93YWJsZVdlYXBvbjtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICAgICAgQGluamVjdChUWVBFUy5XZWFwb24pIGthdGFuYTogV2VhcG9uLFxuICAgICAgICBAaW5qZWN0KFRZUEVTLlRocm93YWJsZVdlYXBvbikgc2h1cmlrZW46IFRocm93YWJsZVdlYXBvblxuICAgICkge1xuICAgICAgICB0aGlzLl9rYXRhbmEgPSBrYXRhbmE7XG4gICAgICAgIHRoaXMuX3NodXJpa2VuID0gc2h1cmlrZW47XG4gICAgfVxuXG4gICAgcHVibGljIGZpZ2h0KCkgeyByZXR1cm4gdGhpcy5fa2F0YW5hLmhpdCgpOyB9XG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxuXG59XG4qL1xuXG5leHBvcnQgeyBOaW5qYSwgS2F0YW5hLCBTaHVyaWtlbiB9O1xuIl19