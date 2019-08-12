import "reflect-metadata";


import {Warrior} from "./interfaces";
import {Ninja} from "./entities";
import {myContainer} from "./tsyringe.config";
import assert from 'assert';

const ninja = myContainer.resolve<Warrior>(Ninja);

assert.strictEqual(ninja.fight(), "cut!"); // true
assert.strictEqual(ninja.sneak(), "hit!"); // true

