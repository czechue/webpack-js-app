export default class Store {
  constructor(name, callback) {
    this.name = name;
    if (callback) {
      callback();
    }
  }
}
