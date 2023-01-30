import LinkedNode from "./LinkedNode.ts";
export default class LinkedList<T> {
  private _length = 0;
  private _head: LinkedNode<T> | null = null;

  private set length(value: number) {
    this._length = value;
  }

  get length() {
    return this._length;
  }

  private set head(linkedNode: LinkedNode<T> | null) {
    this._head = linkedNode;
  }

  get head() {
    return this._head;
  }

  addHead(value: T) {
    const newLinkedNode = new LinkedNode(value);

    if (!this.head) this.head = newLinkedNode;
    else {
      newLinkedNode.next = this.head;
      this.head = newLinkedNode;
    }
    this.length++;
  }

  removeHead() {
    if (this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
    }
    this.length--;
  }

  add(value: T) {
    if (!this.head) this.addHead(value);
    else {
      const newLinkedNode = new LinkedNode(value);
      let currentLinkedNode = this.head;

      for (let i = 0; currentLinkedNode.next; i++) {
        currentLinkedNode = currentLinkedNode.next;
      }

      currentLinkedNode.next = newLinkedNode;
      this.length++;
    }
  }
}
