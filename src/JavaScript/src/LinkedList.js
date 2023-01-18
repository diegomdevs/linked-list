import LinkedNode from "./LinkedNode.js";
export default class LinkedList {
  constructor() {
    this._length = 0;
    this._first = null;
    this._last = null;
  }

  set length(value) {
    this._length = value;
  }

  get length() {
    return this._length;
  }

  set first(linkedNode) {
    this._first = linkedNode;
  }

  get first() {
    return this._first;
  }

  set last(linkedNode) {
    this._last = linkedNode;
  }

  get last() {
    return this._last;
  }

  isLinkedListEmpty() {
    if (this.length === 0) {
      throw new Error("The list is empty!");
    }
  }

  addFirst(data) {
    let linkedNode = new LinkedNode(data);

    if (this.length > 0) {
      this.first.prevLinkedNode = linkedNode;
      linkedNode.nextLinkedNode = this.first;
    } else this.last = linkedNode;

    this.first = linkedNode;

    this.length++;
  }

  removeFirst() {
    try {
      this.isLinkedListEmpty();
      if (this.length > 1) {
        this.first.nextLinkedNode.prevLinkedNode = null;
        this.first = this.first.nextLinkedNode;
      } else {
        this.first = null, this.last = null;
      }

      this.length--;
    } catch (error) {
      console.log(error);
    }
  }

  addLast(data) {
    const linkedNode = new LinkedNode(data);

    if (this.length > 0) {
      linkedNode.prevLinkedNode = this.last;
      this.last.nextLinkedNode = linkedNode;
    } else this.first = linkedNode;

    this.last = linkedNode;

    this.length++;
  }

  removeLast() {
    this.isLinkedListEmpty();

    if (this.length > 1) {
      this.last.prevLinkedNode.nextLinkedNode = null;
      this.last = this.last.prevLinkedNode;
    } else {
      this.first = null, this.last = null;
    }

    this.length--;
  }

  add(data, index) {
    if (this.length == 0) this.addFirst(data);
    else {
      const linkedNode = new LinkedNode(data);

      let currentNode = this.first;

      for (let i = 0; i < index; i++) {
        if (i == index) {
          linkedNode.prevLinkedNode = currentNode.prevLinkedNode;
          linkedNode.nextLinkedNode = currentNode;
          currentNode.prevLinkedNode.nextLinkedNode = linkedNode;
          currentNode.prevLinkedNode = linkedNode;

          this.length++;
        } else currentNode = currentNode.nextLinkedNode;
      }
    }
  }

  remove(index) {
    try {
      this.isLinkedListEmpty();
      if (index == 0) {
        this.removeFirst();
      } else {
        if (index == (this.length - 1)) {
          this.removeLast();
        } else {
          let currentNode = this.first;
          for (let i = 0; i <= index; i++) {
            if (i === index) {
              currentNode.prevLinkedNode.nextLinkedNode =
                currentNode.nextLinkedNode;
              currentNode.nextLinkedNode.prevLinkedNode =
                currentNode.prevLinkedNode;
            } else currentNode = currentNode.nextLinkedNode;
          }
          this.length--;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
