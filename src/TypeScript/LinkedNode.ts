import Node from "./Node.ts";

export default class LinkedNode<T> extends Node<T> {
  private _next: LinkedNode<T> | null = null;

  constructor(value: T) {
    super(value);
  }

  set next(linkedNode: LinkedNode<T> | null) {
    this._next = linkedNode;
  }

  get next() {
    return this._next;
  }
}
