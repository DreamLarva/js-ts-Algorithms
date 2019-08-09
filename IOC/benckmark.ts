import {ThrowableWeapon, Warrior, Weapon} from "./inversify/interfaces";
import {myContainer} from "./inversify/inversify.config";
import {TYPES} from "./inversify/types";

class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
}

class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

class Ninja implements Warrior {
    constructor(
        private _katana: Weapon,
        private _shuriken: ThrowableWeapon,
    ) {

    }

    public fight() {
        return this._katana.hit();
    }

    public sneak() {
        return this._shuriken.throw();
    }
}



const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
suite
    .add('ioc', function () {
        myContainer.get<Warrior>(TYPES.Warrior);
    })
    .add('native', function () {
        new Ninja(new Katana(), new Shuriken());
    })
    // add listeners
    .on('cycle', function (event: any) {
        console.log(String(event.target));
    })
    .on('complete', function (this: any) {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    // run async
    .run({'async': false});

