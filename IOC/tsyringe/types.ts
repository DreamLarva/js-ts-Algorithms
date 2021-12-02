/*
 * @Author: YangJiaqi
 * @Date: 2019-08-08 15:22:20
 * @Company: orientsec.com.cn
 * @Description:
 */

// file types.ts

// enum TYPES {
//     Warrior = "1",
//     Weapon = "2",
//     ThrowableWeapon = "3"
// }

const TYPES = {
  Warrior: Symbol.for("Warrior"),
  Weapon: Symbol.for("Weapon"),
  ThrowableWeapon: Symbol.for("ThrowableWeapon"),
};

export { TYPES };
