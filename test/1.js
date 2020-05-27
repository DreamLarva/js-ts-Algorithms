"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = __importDefault(require("ramda"));
var trace = ramda_1.default.curry(function (tag, x) {
    console.log(tag, x);
    return x;
});
var dasherize = ramda_1.default.compose(ramda_1.default.andThen(console.log), (str) => Promise.resolve(str), ramda_1.default.join("-"), ramda_1.default.map(ramda_1.default.toLower), 
// R.tap(console.log),
ramda_1.default.split(" "), ramda_1.default.replace(/\s{2,}/gi, " "));
dasherize("AA BB");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsidGVzdC8xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXNCO0FBRXRCLElBQUksS0FBSyxHQUFHLGVBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMsQ0FBQyxDQUFDO0FBQ0gsSUFBSSxTQUFTLEdBQUcsZUFBQyxDQUFDLE9BQU8sQ0FDckIsZUFBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQ3hCLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUNyQyxlQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUNYLGVBQUMsQ0FBQyxHQUFHLENBQUMsZUFBQyxDQUFDLE9BQU8sQ0FBQztBQUNoQixzQkFBc0I7QUFDdEIsZUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDWixlQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FDM0IsQ0FBQztBQUVGLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gXCJyYW1kYVwiO1xuXG52YXIgdHJhY2UgPSBSLmN1cnJ5KGZ1bmN0aW9uICh0YWcsIHgpIHtcbiAgY29uc29sZS5sb2codGFnLCB4KTtcbiAgcmV0dXJuIHg7XG59KTtcbnZhciBkYXNoZXJpemUgPSBSLmNvbXBvc2UoXG4gICAgUi5hbmRUaGVuKGNvbnNvbGUubG9nKSxcbiAgKHN0cjogc3RyaW5nKSA9PiBQcm9taXNlLnJlc29sdmUoc3RyKSxcbiAgUi5qb2luKFwiLVwiKSxcbiAgUi5tYXAoUi50b0xvd2VyKSxcbiAgLy8gUi50YXAoY29uc29sZS5sb2cpLFxuICBSLnNwbGl0KFwiIFwiKSxcbiAgUi5yZXBsYWNlKC9cXHN7Mix9L2dpLCBcIiBcIilcbik7XG5cbmRhc2hlcml6ZShcIkFBIEJCXCIpXG4iXX0=