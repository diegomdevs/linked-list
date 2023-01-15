import TNodeData from "./types/TNodeData.ts";

export default class Node {
  constructor(private _data: TNodeData) {}

  set data(data: TNodeData) {
    this._data = data;
  }

  get data() {
    return this._data;
  }
}
