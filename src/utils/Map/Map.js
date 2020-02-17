export class Map {
  constructor(obj) {
    this._map = obj;
    this._count = Object.keys(obj).length;
  }

  _withThisArg(callback, thisArg) {
    return typeof thisArg !== "undefined" ? callback.bind(thisArg) : callback;
  }

  getValue(key) {
    return this._map[key];
  }

  setValue(key, value) {
    if (typeof this._map[key] === "undefined") {
      this._count++;
    }

    this._map[key] = value;
  }

  removeValue(key) {
    if (typeof this._map[key] === "undefined") {
      throw Error(`No key with name "${key}" exists`);
    }

    delete this._map[key];
    this._count--;
  }

  count() {
    return this._count;
  }

  forEach(callback, thisArg) {
    const bindCallback = this._withThisArg(callback, thisArg);

    for (let key in this._map) {
      bindCallback(this._map[key], key, this);
    }
  }

  map(transform, thisArg) {
    const newObj = {};
    const bindTransform = this._withThisArg(transform, thisArg);

    for (let key in this._map) {
      newObj[key] = bindTransform(this._map[key], key, this);
    }

    return new Map(newObj);
  }

  filter(condition, thisArg) {
    const newObj = {};
    const bindCondition = this._withThisArg(condition, thisArg);

    for (let key in this._map) {
      if (bindCondition(this._map[key], key, this)) {
        newObj[key] = this._map[key];
      }
    }

    return new Map(newObj);
  }

  reduce(transform, initialValue, thisArg) {
    let accumulator = initialValue;
    const bindTransform = this._withThisArg(transform, thisArg);

    for (let key in this._map) {
      accumulator = bindTransform(accumulator, this._map[key], key, this);
    }

    return accumulator;
  }

  find(condition, thisArg) {
    const bindCondition = this._withThisArg(condition, thisArg);

    for (let key in this._map) {
      if (bindCondition(this._map[key], key, this)) return this._map[key];
    }

    return undefined;
  }

  findKey(condition, thisArg) {
    const bindCondition = this._withThisArg(condition, thisArg);

    for (let key in this._map) {
      if (bindCondition(this._map[key], key, this)) return key;
    }

    return undefined;
  }
}
