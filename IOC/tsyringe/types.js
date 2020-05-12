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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbIklPQy90c3lyaW5nZS90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O0dBS0c7O0FBRUgsZ0JBQWdCO0FBRWhCLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1QixJQUFJO0FBRUosTUFBTSxLQUFLLEdBQUc7SUFDVixPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDOUIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO0lBQzVCLGVBQWUsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0NBQ2pELENBQUM7QUFFTSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBZYW5nSmlhcWlcbiAqIEBEYXRlOiAyMDE5LTA4LTA4IDE1OjIyOjIwXG4gKiBAQ29tcGFueTogb3JpZW50c2VjLmNvbS5jblxuICogQERlc2NyaXB0aW9uOlxuICovXG5cbi8vIGZpbGUgdHlwZXMudHNcblxuLy8gZW51bSBUWVBFUyB7XG4vLyAgICAgV2FycmlvciA9IFwiMVwiLFxuLy8gICAgIFdlYXBvbiA9IFwiMlwiLFxuLy8gICAgIFRocm93YWJsZVdlYXBvbiA9IFwiM1wiXG4vLyB9XG5cbmNvbnN0IFRZUEVTID0ge1xuICAgIFdhcnJpb3I6IFN5bWJvbC5mb3IoXCJXYXJyaW9yXCIpLFxuICAgIFdlYXBvbjogU3ltYm9sLmZvcihcIldlYXBvblwiKSxcbiAgICBUaHJvd2FibGVXZWFwb246IFN5bWJvbC5mb3IoXCJUaHJvd2FibGVXZWFwb25cIilcbn07XG5cbmV4cG9ydCB7VFlQRVN9O1xuIl19