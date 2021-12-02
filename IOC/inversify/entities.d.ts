import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
declare class Katana implements Weapon {
  hit(): string;
}
declare class Shuriken implements ThrowableWeapon {
  throw(): string;
}
declare class Ninja implements Warrior {
  private _katana;
  private _shuriken;
  fight(): string;
  sneak(): string;
}
export { Ninja, Katana, Shuriken };
