import Node from "./Node.js";

export default class LinkedNode extends Node {
  constructor(data) {
    super(data);

    this._prevLinkedNode = null;
    this._nextLinkedNode = null;
  }

  set prevLinkedNode(linkedNode) {
    this._prevLinkedNode = linkedNode;
  }

  get prevLinkedNode() {
    return this._prevLinkedNode;
  }

  set nextLinkedNode(linkedNode) {
    this._nextLinkedNode = linkedNode;
  }

  get nextLinkedNode() {
    return this._nextLinkedNode;
  }
}
