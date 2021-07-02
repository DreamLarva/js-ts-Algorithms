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
    _katana;
    _shuriken;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuY2ttYXJrLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJJT0MvYmVuY2ttYXJrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBRzFCLG1FQUErRTtBQUMvRSw2Q0FBd0M7QUFDeEMsZ0VBQTRFO0FBQzVFLGtEQUEwQztBQUcxQyxNQUFNLFlBQVk7SUFDUCxHQUFHO1FBQ04sT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztDQUNKO0FBRUQsTUFBTSxjQUFjO0lBQ1QsS0FBSztRQUNSLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7Q0FDSjtBQUVELE1BQU0sV0FBVztJQUVEO0lBQ0E7SUFGWixZQUNZLE9BQWUsRUFDZixTQUEwQjtRQUQxQixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBQ2YsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFHdEMsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVNLEtBQUs7UUFDUixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQztDQUNKO0FBR0QsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZDLE1BQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQztBQUNsQyxLQUFLO0tBQ0EsR0FBRyxDQUFDLFdBQVcsRUFBRTtJQUNkLDhCQUFrQixDQUFDLEdBQUcsQ0FBVSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLFVBQVUsRUFBRTtJQUNiLDZCQUFpQixDQUFDLE9BQU8sQ0FBVSxnQkFBSyxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDO0tBQ0QsR0FBRyxDQUFDLFFBQVEsRUFBRTtJQUNYLElBQUksV0FBVyxDQUFDLElBQUksWUFBWSxFQUFFLEVBQUUsSUFBSSxjQUFjLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQztJQUNGLGdCQUFnQjtLQUNmLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxLQUFVO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztLQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3BFLENBQUMsQ0FBQztJQUNGLFlBQVk7S0FDWCxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUUzQjs7Ozs7Ozs7S0FRSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInJlZmxlY3QtbWV0YWRhdGFcIjtcblxuaW1wb3J0IHtUaHJvd2FibGVXZWFwb24sIFdhcnJpb3IsIFdlYXBvbn0gZnJvbSBcIi4vaW52ZXJzaWZ5L2ludGVyZmFjZXNcIjtcbmltcG9ydCB7bXlDb250YWluZXIgYXMgaW52ZXJzaWZ5Q29udGFpbmVyfSBmcm9tIFwiLi9pbnZlcnNpZnkvaW52ZXJzaWZ5LmNvbmZpZ1wiO1xuaW1wb3J0IHtUWVBFU30gZnJvbSBcIi4vaW52ZXJzaWZ5L3R5cGVzXCI7XG5pbXBvcnQge215Q29udGFpbmVyIGFzIHRzeXJpbmdlQ29udGFpbmVyfSBmcm9tIFwiLi90c3lyaW5nZS90c3lyaW5nZS5jb25maWdcIjtcbmltcG9ydCB7TmluamF9IGZyb20gXCIuL3RzeXJpbmdlL2VudGl0aWVzXCI7XG5cblxuY2xhc3MgS2F0YW5hTmF0aXZlIGltcGxlbWVudHMgV2VhcG9uIHtcbiAgICBwdWJsaWMgaGl0KCkge1xuICAgICAgICByZXR1cm4gXCJjdXQhXCI7XG4gICAgfVxufVxuXG5jbGFzcyBTaHVyaWtlbk5hdGl2ZSBpbXBsZW1lbnRzIFRocm93YWJsZVdlYXBvbiB7XG4gICAgcHVibGljIHRocm93KCkge1xuICAgICAgICByZXR1cm4gXCJoaXQhXCI7XG4gICAgfVxufVxuXG5jbGFzcyBOaW5qYU5hdGl2ZSBpbXBsZW1lbnRzIFdhcnJpb3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9rYXRhbmE6IFdlYXBvbixcbiAgICAgICAgcHJpdmF0ZSBfc2h1cmlrZW46IFRocm93YWJsZVdlYXBvbixcbiAgICApIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBmaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2thdGFuYS5oaXQoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc25lYWsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaHVyaWtlbi50aHJvdygpO1xuICAgIH1cbn1cblxuXG5jb25zdCBCZW5jaG1hcmsgPSByZXF1aXJlKCdiZW5jaG1hcmsnKTtcbmNvbnN0IHN1aXRlID0gbmV3IEJlbmNobWFyay5TdWl0ZTtcbnN1aXRlXG4gICAgLmFkZCgnaW52ZXJzaWZ5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnZlcnNpZnlDb250YWluZXIuZ2V0PFdhcnJpb3I+KFRZUEVTLldhcnJpb3IpO1xuICAgIH0pXG4gICAgLmFkZCgndHN5cmluZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRzeXJpbmdlQ29udGFpbmVyLnJlc29sdmU8V2Fycmlvcj4oTmluamEpO1xuICAgIH0pXG4gICAgLmFkZCgnbmF0aXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXcgTmluamFOYXRpdmUobmV3IEthdGFuYU5hdGl2ZSgpLCBuZXcgU2h1cmlrZW5OYXRpdmUoKSk7XG4gICAgfSlcbiAgICAvLyBhZGQgbGlzdGVuZXJzXG4gICAgLm9uKCdjeWNsZScsIGZ1bmN0aW9uIChldmVudDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFN0cmluZyhldmVudC50YXJnZXQpKTtcbiAgICB9KVxuICAgIC5vbignY29tcGxldGUnLCBmdW5jdGlvbiAodGhpczogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYXN0ZXN0IGlzICcgKyB0aGlzLmZpbHRlcignZmFzdGVzdCcpLm1hcCgnbmFtZScpKTtcbiAgICB9KVxuICAgIC8vIHJ1biBhc3luY1xuICAgIC5ydW4oeydhc3luYyc6IGZhbHNlfSk7XG5cbi8qKlxuICogaW52ZXJzaWZ5ICAgIHggMTYzLDA1MyBvcHMvc2VjIMKxMy40NiUgKDkwIHJ1bnMgc2FtcGxlZClcbiAqIHRzeXJpbmdlICAgICB4IDMsMDM0LDI5NCBvcHMvc2VjIMKxMS43MSUgKDkwIHJ1bnMgc2FtcGxlZClcbiAqIG5hdGl2ZSAgICAgICB4IDY5Miw0NTQsOTU4IG9wcy9zZWMgwrExLjEwJSAoOTEgcnVucyBzYW1wbGVkKVxuICogRmFzdGVzdCBpcyBuYXRpdmVcbiAqXG4gKiB0c3lyaW5nZSDlrrnlmajmm7Tovbvph4/ljJZcbiAqIOi/mOacieS4gOS4qiDlupPlj6vlgZogYXdpbGl4IOiZveeEtuWKn+iDveWFqCDkvYbmmK/msqHmnIkg5L+u6aWw5ZmoXG4gKiAqL1xuXG4iXX0=