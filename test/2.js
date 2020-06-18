"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function f() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return Promise.reject(1111111111);
        }
        catch (e) {
            console.log(e);
        }
        finally {
            console.log(222);
        }
    });
}
function f1() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield f();
        }
        catch (e) {
            console.log(e);
        }
        finally {
            console.log(11);
        }
    });
}
f1();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidGVzdC8yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxTQUFlLENBQUM7O1FBQ1osSUFBSTtZQUNBLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUVwQztRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNqQjtnQkFBUTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDbkI7SUFFTCxDQUFDO0NBQUE7QUFHRCxTQUFlLEVBQUU7O1FBQ2IsSUFBSTtZQUNBLE1BQU0sQ0FBQyxFQUFFLENBQUE7U0FFWjtRQUFBLE9BQU8sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtTQUNqQjtnQkFBUTtZQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7U0FDbEI7SUFFTCxDQUFDO0NBQUE7QUFHRCxFQUFFLEVBQUUsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuYXN5bmMgZnVuY3Rpb24gZigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoMTExMTExMTExMSlcblxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1maW5hbGx5IHtcbiAgICAgICAgY29uc29sZS5sb2coMjIyKVxuICAgIH1cblxufVxuXG5cbmFzeW5jIGZ1bmN0aW9uIGYxKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGYoKVxuXG4gICAgfWNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfWZpbmFsbHkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKDExKVxuICAgIH1cblxufVxuXG5cbmYxKClcbiJdfQ==