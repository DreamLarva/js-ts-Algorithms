"use strict";
// file entities.ts
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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
Katana = __decorate([(0, inversify_1.injectable)()], Katana);
exports.Katana = Katana;
let Shuriken = class Shuriken {
  throw() {
    return "hit!";
  }
};
Shuriken = __decorate([(0, inversify_1.injectable)()], Shuriken);
exports.Shuriken = Shuriken;
let Ninja = class Ninja {
  _katana;
  _shuriken;
  fight() {
    return this._katana.hit();
  }
  sneak() {
    return this._shuriken.throw();
  }
};
__decorate(
  [(0, inversify_1.inject)(types_1.TYPES.Weapon)],
  Ninja.prototype,
  "_katana",
  void 0
);
__decorate(
  [(0, inversify_1.inject)(types_1.TYPES.ThrowableWeapon)],
  Ninja.prototype,
  "_shuriken",
  void 0
);
Ninja = __decorate([(0, inversify_1.injectable)()], Ninja);
exports.Ninja = Ninja;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXRpZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy9pbnZlcnNpZnkvZW50aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1CQUFtQjs7Ozs7Ozs7O0FBRW5CLHlDQUErQztBQUUvQyxtQ0FBZ0M7QUFHaEMsSUFBTSxNQUFNLEdBQVosTUFBTSxNQUFNO0lBQ0QsR0FBRztRQUNOLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssTUFBTTtJQURYLElBQUEsc0JBQVUsR0FBRTtHQUNQLE1BQU0sQ0FJWDtBQXNDZSx3QkFBTTtBQW5DdEIsSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFRO0lBQ0gsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSixDQUFBO0FBSkssUUFBUTtJQURiLElBQUEsc0JBQVUsR0FBRTtHQUNQLFFBQVEsQ0FJYjtBQStCdUIsNEJBQVE7QUE1QmhDLElBQU0sS0FBSyxHQUFYLE1BQU0sS0FBSztJQUN1QixPQUFPLENBQVU7SUFDUixTQUFTLENBQW1CO0lBQzVELEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQ3BELENBQUE7QUFKeUI7SUFBckIsSUFBQSxrQkFBTSxFQUFDLGFBQUssQ0FBQyxNQUFNLENBQUM7c0NBQTBCO0FBQ2hCO0lBQTlCLElBQUEsa0JBQU0sRUFBQyxhQUFLLENBQUMsZUFBZSxDQUFDO3dDQUFxQztBQUZqRSxLQUFLO0lBRFYsSUFBQSxzQkFBVSxHQUFFO0dBQ1AsS0FBSyxDQUtWO0FBdUJRLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBlbnRpdGllcy50c1xuXG5pbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tIFwiaW52ZXJzaWZ5XCI7XG5pbXBvcnQgeyBXZWFwb24sIFRocm93YWJsZVdlYXBvbiwgV2FycmlvciB9IGZyb20gXCIuL2ludGVyZmFjZXNcIlxuaW1wb3J0IHsgVFlQRVMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5AaW5qZWN0YWJsZSgpXG5jbGFzcyBLYXRhbmEgaW1wbGVtZW50cyBXZWFwb24ge1xuICAgIHB1YmxpYyBoaXQoKSB7XG4gICAgICAgIHJldHVybiBcImN1dCFcIjtcbiAgICB9XG59XG5cbkBpbmplY3RhYmxlKClcbmNsYXNzIFNodXJpa2VuIGltcGxlbWVudHMgVGhyb3dhYmxlV2VhcG9uIHtcbiAgICBwdWJsaWMgdGhyb3coKSB7XG4gICAgICAgIHJldHVybiBcImhpdCFcIjtcbiAgICB9XG59XG5cbkBpbmplY3RhYmxlKClcbmNsYXNzIE5pbmphIGltcGxlbWVudHMgV2FycmlvciB7XG4gICAgQGluamVjdChUWVBFUy5XZWFwb24pIHByaXZhdGUgX2thdGFuYSE6IFdlYXBvbjtcbiAgICBAaW5qZWN0KFRZUEVTLlRocm93YWJsZVdlYXBvbikgcHJpdmF0ZSBfc2h1cmlrZW4hOiBUaHJvd2FibGVXZWFwb247XG4gICAgcHVibGljIGZpZ2h0KCkgeyByZXR1cm4gdGhpcy5fa2F0YW5hLmhpdCgpOyB9XG4gICAgcHVibGljIHNuZWFrKCkgeyByZXR1cm4gdGhpcy5fc2h1cmlrZW4udGhyb3coKTsgfVxufVxuXG4vKlxuQGluamVjdGFibGUoKVxuY2xhc3MgTmluamEgaW1wbGVtZW50cyBXYXJyaW9yIHtcblxuICAgIHByaXZhdGUgX2thdGFuYTogV2VhcG9uO1xuICAgIHByaXZhdGUgX3NodXJpa2VuOiBUaHJvd2FibGVXZWFwb247XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgICAgIEBpbmplY3QoVFlQRVMuV2VhcG9uKSBrYXRhbmE6IFdlYXBvbixcbiAgICAgICAgQGluamVjdChUWVBFUy5UaHJvd2FibGVXZWFwb24pIHNodXJpa2VuOiBUaHJvd2FibGVXZWFwb25cbiAgICApIHtcbiAgICAgICAgdGhpcy5fa2F0YW5hID0ga2F0YW5hO1xuICAgICAgICB0aGlzLl9zaHVyaWtlbiA9IHNodXJpa2VuO1xuICAgIH1cblxuICAgIHB1YmxpYyBmaWdodCgpIHsgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTsgfVxuICAgIHB1YmxpYyBzbmVhaygpIHsgcmV0dXJuIHRoaXMuX3NodXJpa2VuLnRocm93KCk7IH1cblxufVxuKi9cblxuZXhwb3J0IHsgTmluamEsIEthdGFuYSwgU2h1cmlrZW4gfTtcbiJdfQ==
