import LinkedNode from "./LinkedNode.ts";
import TLinkedNode from "./types/TLinkedNode.ts";
import TLinkedNodeIndex from "./types/TLinkedNodeIndex.ts";
import TNodeData from "./types/TNodeData.ts";
export default class LinkedList {
  private _length: number;
  private _first: TLinkedNode;
  private _last: TLinkedNode;

  constructor() {
    this._length = 0;
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

  push(data: TNodeData) {
    const newLinkedNode = new LinkedNode(data);

    if (this.length != 0) {
      newLinkedNode.prevNode = this.last;
    } else {
      this.first = newLinkedNode;
    }

    this.last = newLinkedNode;
    this.length++;
  }
  /**
   * - Si la lista tiene 0 elementos:
   *    1. Retornar error.
   * - Si la lista tiene 1 elemento:
   *    1. Remover el nodo first.
   *    2. Remover el nodo last.
   *    3. Decrementar el length de la lista.
   * - Si la list tiene 2 o mas elementos:
   *    1. Setear como top al nodo previo del last.
   *    2. Eliminar el nodo siguiente del nuevo last.
   *    3. Decrementar el length de la lista.
   * -
   */
  removeLast() {
    if (!this.length) {
      const nodeToRemove = this.last;
      if (this.length > 1) {
        this.last = this.last.prevNode;
      } else {
      }
      this.length = this.length--;
    }
  }
  /**
   * - Cuando la lista esta vacia:
   *    1. Con la data ingresada se crea el nodo a ingresar.
   *    2. Se setea el nodo como first de la lista.
   *    3. Se setea el nodo como last de la lista lista.
   * - Cuando la lista tiene un solo elemento:
   *    1. Con la data ingresada se crea el nodo a ingresar.
   *    2. Se setea como elnodo como siguiente del nodo unico.
   *    3. Se setea el nodo a ingresar como last de la lista.
   * - Cuando la lista tiene 2 o mas elementos:
   *    1. Con la data ingresada se crea el nodo a ingresar.
   *    2. Se setea como el nodo como next del last.
   *    3. Se setea el nodo como last de la lista.
   */
  add(data: any, index: TLinkedNodeIndex) {
  }
}
