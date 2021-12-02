import "reflect-metadata";

import { ThrowableWeapon, Warrior, Weapon } from "./inversify/interfaces";
import { myContainer as inversifyContainer } from "./inversify/inversify.config";
import { TYPES } from "./inversify/types";
import { myContainer as tsyringeContainer } from "./tsyringe/tsyringe.config";
import { Ninja } from "./tsyringe/entities";

class KatanaNative implements Weapon {
  public hit() {
    return "cut!";
  }
}

class ShurikenNative implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

class NinjaNative implements Warrior {
  constructor(private _katana: Weapon, private _shuriken: ThrowableWeapon) {}

  public fight() {
    return this._katana.hit();
  }

  public sneak() {
    return this._shuriken.throw();
  }
}

const Benchmark = require("benchmark");
const suite = new Benchmark.Suite();
suite
  .add("inversify", function () {
    inversifyContainer.get<Warrior>(TYPES.Warrior);
  })
  .add("tsyringe", function () {
    tsyringeContainer.resolve<Warrior>(Ninja);
  })
  .add("native", function () {
    new NinjaNative(new KatanaNative(), new ShurikenNative());
  })
  // add listeners
  .on("cycle", function (event: any) {
    console.log(String(event.target));
  })
  .on("complete", function (this: any) {
    console.log("Fastest is " + this.filter("fastest").map("name"));
  })
  // run async
  .run({ async: false });

/**
 * inversify    x 163,053 ops/sec ±3.46% (90 runs sampled)
 * tsyringe     x 3,034,294 ops/sec ±1.71% (90 runs sampled)
 * native       x 692,454,958 ops/sec ±1.10% (91 runs sampled)
 * Fastest is native
 *
 * tsyringe 容器更轻量化
 * 还有一个 库叫做 awilix 虽然功能全 但是没有 修饰器
 * */
