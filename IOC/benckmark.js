"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const inversify_config_1 = require("./inversify/inversify.config");
const types_1 = require("./inversify/types");
const tsyringe_config_1 = require("./tsyringe/tsyringe.config");
const entities_1 = require("./tsyringe/entities");
class KatanaNative {
    hit() {
        return "cut!";
    }
}
class ShurikenNative {
    throw() {
        return "hit!";
    }
}
class NinjaNative {
    constructor(_katana, _shuriken) {
        this._katana = _katana;
        this._shuriken = _shuriken;
    }
    fight() {
        return this._katana.hit();
    }
    sneak() {
        return this._shuriken.throw();
    }
}
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
suite
    .add('inversify', function () {
    inversify_config_1.myContainer.get(types_1.TYPES.Warrior);
})
    .add('tsyringe', function () {
    tsyringe_config_1.myContainer.resolve(entities_1.Ninja);
})
    .add('native', function () {
    new NinjaNative(new KatanaNative(), new ShurikenNative());
})
    // add listeners
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
    // run async
    .run({ 'async': false });
/**
 * inversify    x 163,053 ops/sec ±3.46% (90 runs sampled)
 * tsyringe     x 3,034,294 ops/sec ±1.71% (90 runs sampled)
 * native       x 692,454,958 ops/sec ±1.10% (91 runs sampled)
 * Fastest is native
 *
 * tsyringe 容器更轻量化
 * 还有一个 库叫做 awilix 虽然功能全 但是没有 修饰器
 * */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuY2ttYXJrLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvYmVuY2ttYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRzFCLG1FQUErRTtBQUMvRSw2Q0FBd0M7QUFDeEMsZ0VBQTRFO0FBQzVFLGtEQUEwQztBQUcxQyxNQUFNLFlBQVk7SUFDUCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBRUQsTUFBTSxjQUFjO0lBQ1QsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUVELE1BQU0sV0FBVztJQUNiLFlBQ1ksT0FBZSxFQUNmLFNBQTBCO1FBRDFCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUd0QyxDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sS0FBSztRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0o7QUFHRCxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDO0FBQ2xDLEtBQUs7S0FDQSxHQUFHLENBQUMsV0FBVyxFQUFFO0lBQ2QsOEJBQWtCLENBQUMsR0FBRyxDQUFVLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNuRCxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsVUFBVSxFQUFFO0lBQ2IsNkJBQWlCLENBQUMsT0FBTyxDQUFVLGdCQUFLLENBQUMsQ0FBQztBQUM5QyxDQUFDLENBQUM7S0FDRCxHQUFHLENBQUMsUUFBUSxFQUFFO0lBQ1gsSUFBSSxXQUFXLENBQUMsSUFBSSxZQUFZLEVBQUUsRUFBRSxJQUFJLGNBQWMsRUFBRSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDO0lBQ0YsZ0JBQWdCO0tBQ2YsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEtBQVU7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDcEUsQ0FBQyxDQUFDO0lBQ0YsWUFBWTtLQUNYLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0FBRTNCOzs7Ozs7OztLQVFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiO1xuXG5pbXBvcnQge1Rocm93YWJsZVdlYXBvbiwgV2FycmlvciwgV2VhcG9ufSBmcm9tIFwiLi9pbnZlcnNpZnkvaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHtteUNvbnRhaW5lciBhcyBpbnZlcnNpZnlDb250YWluZXJ9IGZyb20gXCIuL2ludmVyc2lmeS9pbnZlcnNpZnkuY29uZmlnXCI7XG5pbXBvcnQge1RZUEVTfSBmcm9tIFwiLi9pbnZlcnNpZnkvdHlwZXNcIjtcbmltcG9ydCB7bXlDb250YWluZXIgYXMgdHN5cmluZ2VDb250YWluZXJ9IGZyb20gXCIuL3RzeXJpbmdlL3RzeXJpbmdlLmNvbmZpZ1wiO1xuaW1wb3J0IHtOaW5qYX0gZnJvbSBcIi4vdHN5cmluZ2UvZW50aXRpZXNcIjtcblxuXG5jbGFzcyBLYXRhbmFOYXRpdmUgaW1wbGVtZW50cyBXZWFwb24ge1xuICAgIHB1YmxpYyBoaXQoKSB7XG4gICAgICAgIHJldHVybiBcImN1dCFcIjtcbiAgICB9XG59XG5cbmNsYXNzIFNodXJpa2VuTmF0aXZlIGltcGxlbWVudHMgVGhyb3dhYmxlV2VhcG9uIHtcbiAgICBwdWJsaWMgdGhyb3coKSB7XG4gICAgICAgIHJldHVybiBcImhpdCFcIjtcbiAgICB9XG59XG5cbmNsYXNzIE5pbmphTmF0aXZlIGltcGxlbWVudHMgV2FycmlvciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2thdGFuYTogV2VhcG9uLFxuICAgICAgICBwcml2YXRlIF9zaHVyaWtlbjogVGhyb3dhYmxlV2VhcG9uLFxuICAgICkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGZpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fa2F0YW5hLmhpdCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzbmVhaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NodXJpa2VuLnRocm93KCk7XG4gICAgfVxufVxuXG5cbmNvbnN0IEJlbmNobWFyayA9IHJlcXVpcmUoJ2JlbmNobWFyaycpO1xuY29uc3Qgc3VpdGUgPSBuZXcgQmVuY2htYXJrLlN1aXRlO1xuc3VpdGVcbiAgICAuYWRkKCdpbnZlcnNpZnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGludmVyc2lmeUNvbnRhaW5lci5nZXQ8V2Fycmlvcj4oVFlQRVMuV2Fycmlvcik7XG4gICAgfSlcbiAgICAuYWRkKCd0c3lyaW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHN5cmluZ2VDb250YWluZXIucmVzb2x2ZTxXYXJyaW9yPihOaW5qYSk7XG4gICAgfSlcbiAgICAuYWRkKCduYXRpdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ldyBOaW5qYU5hdGl2ZShuZXcgS2F0YW5hTmF0aXZlKCksIG5ldyBTaHVyaWtlbk5hdGl2ZSgpKTtcbiAgICB9KVxuICAgIC8vIGFkZCBsaXN0ZW5lcnNcbiAgICAub24oJ2N5Y2xlJywgZnVuY3Rpb24gKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coU3RyaW5nKGV2ZW50LnRhcmdldCkpO1xuICAgIH0pXG4gICAgLm9uKCdjb21wbGV0ZScsIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zhc3Rlc3QgaXMgJyArIHRoaXMuZmlsdGVyKCdmYXN0ZXN0JykubWFwKCduYW1lJykpO1xuICAgIH0pXG4gICAgLy8gcnVuIGFzeW5jXG4gICAgLnJ1bih7J2FzeW5jJzogZmFsc2V9KTtcblxuLyoqXG4gKiBpbnZlcnNpZnkgICAgeCAxNjMsMDUzIG9wcy9zZWMgwrEzLjQ2JSAoOTAgcnVucyBzYW1wbGVkKVxuICogdHN5cmluZ2UgICAgIHggMywwMzQsMjk0IG9wcy9zZWMgwrExLjcxJSAoOTAgcnVucyBzYW1wbGVkKVxuICogbmF0aXZlICAgICAgIHggNjkyLDQ1NCw5NTggb3BzL3NlYyDCsTEuMTAlICg5MSBydW5zIHNhbXBsZWQpXG4gKiBGYXN0ZXN0IGlzIG5hdGl2ZVxuICpcbiAqIHRzeXJpbmdlIOWuueWZqOabtOi9u+mHj+WMllxuICog6L+Y5pyJ5LiA5LiqIOW6k+WPq+WBmiBhd2lsaXgg6Jm954S25Yqf6IO95YWoIOS9huaYr+ayoeaciSDkv67ppbDlmahcbiAqICovXG5cbiJdfQ==