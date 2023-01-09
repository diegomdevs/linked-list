import TLinkedNode from "./types/TLinkedNode.ts";
export default class LinkedList {
  private _length: number;
  private _first: TLinkedNode;
  private _last: TLinkedNode;

  constructor() {
    this._length = 0;
    this._first = null, this._last = null;
  }

  set length(length: number) {
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set first(linkedNode: TLinkedNode) {
    this._first = linkedNode;
  }

  get first() {
    return this._first;
  }

  set last(linkedNode: TLinkedNode) {
    this._last = linkedNode;
  }

  get last() {
    return this._last;
  }
}
