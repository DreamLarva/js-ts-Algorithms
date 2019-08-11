import "reflect-metadata";

import {ThrowableWeapon, Warrior, Weapon} from "./inversify/interfaces";
import {myContainer} from "./inversify/inversify.config";
import {TYPES} from "./inversify/types";
import "./tsyringe/tsyringe.config"
import {Ninja} from "./tsyringe/entities"
import {container} from "tsyringe";



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
    .add('inversify', function () {
        myContainer.get<Warrior>(TYPES.Warrior);
    })
    .add('tsyringe', function () {
       container.resolve<Warrior>(Ninja);
    })
    .add('native', function () {
        new NinjaNative(new KatanaNative(), new ShurikenNative());
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

