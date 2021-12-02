import "reflect-metadata";
import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import { ThrowableWeapon, Warrior, Weapon } from "./interfaces";
import assert from "assert";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

assert.strictEqual(ninja.fight(), "cut!"); // true
assert.strictEqual(ninja.sneak(), "hit!"); // true
