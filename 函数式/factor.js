class MayBe {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new MayBe(value);
  }

  isNothing() {
    return this.value == null;
  }

  join(){
    return this.isNothing() ? MayBe.of(null) : this.value
  }

  map(fn) {
    return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
  }
}

class Nothing {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Nothing(value);
  }

  map() {
    return this;
  }
}

class Some {
  constructor(value) {
    this.value = value;
  }

  static of(value) {
    return new Some(value);
  }

  map(fn) {
    return Some.of(fn(value));
  }
}

module.exports = {
  MayBe,
  Either: {
    Some,
    Nothing,
  },
};
