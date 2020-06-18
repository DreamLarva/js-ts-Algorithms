const { Either, MayBe } = require("./factor");

const result = MayBe.of([
  {
    data: MayBe.of("12345"),
  },
]);

console.log(result);
