"use strict";
/*
 * @Author: YangJiaqi
 * @Date: 2019-08-08 15:22:20
 * @Company: orientsec.com.cn
 * @Description:
 */
Object.defineProperty(exports, "__esModule", { value: true });
// file types.ts
// enum TYPES {
//     Warrior = "1",
//     Weapon = "2",
//     ThrowableWeapon = "3"
// }
const TYPES = {
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon")
};
exports.TYPES = TYPES;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsZ0JBQWdCO0FBRWhCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzVCLGVBQWUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0NBQ2pELENBQUM7QUFFTSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IFlhbmdKaWFxaVxyXG4gKiBARGF0ZTogMjAxOS0wOC0wOCAxNToyMjoyMFxyXG4gKiBAQ29tcGFueTogb3JpZW50c2VjLmNvbS5jblxyXG4gKiBARGVzY3JpcHRpb246XHJcbiAqL1xyXG5cclxuLy8gZmlsZSB0eXBlcy50c1xyXG5cclxuLy8gZW51bSBUWVBFUyB7XHJcbi8vICAgICBXYXJyaW9yID0gXCIxXCIsXHJcbi8vICAgICBXZWFwb24gPSBcIjJcIixcclxuLy8gICAgIFRocm93YWJsZVdlYXBvbiA9IFwiM1wiXHJcbi8vIH1cclxuXHJcbmNvbnN0IFRZUEVTID0ge1xyXG4gICAgV2FycmlvcjogU3ltYm9sLmZvcihcIldhcnJpb3JcIiksXHJcbiAgICBXZWFwb246IFN5bWJvbC5mb3IoXCJXZWFwb25cIiksXHJcbiAgICBUaHJvd2FibGVXZWFwb246IFN5bWJvbC5mb3IoXCJUaHJvd2FibGVXZWFwb25cIilcclxufTtcclxuXHJcbmV4cG9ydCB7VFlQRVN9O1xyXG4iXX0=