import Node from "./Node.js";

export default class LinkedNode extends Node {
  constructor(data, index) {
    super(data);
    this._prevNode = null;
    this._index = index;
    this._nextNode = null;
  }

  set prevNode(linkedNode) {
    this._prevNode = linkedNode;
  }

  get prevNode() {
    return this._prevNode;
  }

  set index(index) {
    this._index = index;
  }

  get index() {
    return this._index;
  }

  set nextNode(linkedNode) {
    this._nextNode = linkedNode;
  }

  get nextNode() {
    return this._nextNode;
  }
}
