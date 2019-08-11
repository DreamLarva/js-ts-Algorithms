import "reflect-metadata";

import {container} from "tsyringe";
import {Warrior} from "./interfaces";
import {Ninja} from "./entities";
import "./tsyringe.config"
import assert from 'assert';

const ninja = container.resolve<Warrior>(Ninja);

assert.strictEqual(ninja.fight(), "cut!"); // true
assert.strictEqual(ninja.sneak(), "hit!"); // true

