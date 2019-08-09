// file inversify.config.ts

import "reflect-metadata";
import {container} from "tsyringe";
import {TYPES} from "./types";
import {Warrior, Weapon, ThrowableWeapon} from "./interfaces";
import {Ninja, Katana, Shuriken} from "./entities";

container.register<Warrior>(TYPES.Warrior, {
    useClass: Ninja,
});
container.register<Weapon>(TYPES.Weapon, {useValue: new Katana()});
container.register<ThrowableWeapon>(TYPES.ThrowableWeapon, {useValue: new Shuriken()});

// myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
// myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
// myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export {container};
