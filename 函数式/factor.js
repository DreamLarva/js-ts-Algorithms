class Maybe {
  static just(a) {
    return new Just(a);
  }
  static nothing() {
    return new Noting();
  }
  static fromNullable(a) {
    return a == null ? this.nothing() : this.just(a);
  }

  static of(a) {
    return this.just(a);
  }

}

class Just extends Maybe {
  constructor(value) {
    super();
    this._value = value
  }
  get value(){
    return this._value;
  }
  map(f){
    return Just.of(f(this.value))
  }
  getOrElse(){
    return this.value
  }

}

class Noting extends Maybe {}



