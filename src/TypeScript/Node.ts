export default class Node<T> {
  private _data: T;
  constructor(data: T) {
    this._data = data;
  }

  set data(value: T) {
    this._data = value;
  }

  get data() {
    return this._data;
  }
}
