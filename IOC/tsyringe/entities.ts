// file entities.ts

import "reflect-metadata";
import {Weapon, ThrowableWeapon, Warrior} from "./interfaces";
import {TYPES} from "./types";
import {injectable, inject} from "tsyringe";

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


@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
        @inject(TYPES.Weapon) private katana: Weapon,
        @inject(TYPES.ThrowableWeapon) private shuriken: ThrowableWeapon,
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() {
        return this._katana.hit();
    }

    public sneak() {
        return this._shuriken.throw();
    }

}

export {Ninja, Katana, Shuriken};
