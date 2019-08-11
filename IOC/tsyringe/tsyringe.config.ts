// file inversify.config.ts

import {container} from "tsyringe";
import {TYPES} from "./types";
import {Warrior, Weapon, ThrowableWeapon} from "./interfaces";
import {Ninja, Katana, Shuriken} from "./entities";

container.register<Weapon>(TYPES.Weapon, {useClass: Katana});
container.register<ThrowableWeapon>(TYPES.ThrowableWeapon, {useClass:  Shuriken});


