export default class Node {
  constructor(data) {
    this._data = data;
  }

  set data(data) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
