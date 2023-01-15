import Node from "./Node.ts";
import TLinkedNode from "./types/TLinkedNode.ts";
import TLinkedNodeIndex from "./types/TLinkedNodeIndex.ts";
import TNodeData from "./types/TNodeData.ts";

export default class LinkedNode extends Node {
  private _prevNode?: TLinkedNode;

  private _index: TLinkedNodeIndex;

  private _nextNode?: TLinkedNode;

  constructor(data: TNodeData) {
    super(data);
    this._prevNode = null;
    this._index = undefined;
    this._nextNode = null;
  }

  set prevNode(newPrevNode: TLinkedNode) {
    this._prevNode = newPrevNode;
  }

  get prevNode() {
    return this._prevNode;
  }

  set index(newIndex: TLinkedNodeIndex) {
    this._index = newIndex;
  }

  get index() {
    return this._index;
  }

  set nextNode(newNextNode: TLinkedNode) {
    this._nextNode = newNextNode;
  }

  get nextNode() {
    return this._nextNode;
  }
}
