import LinkedNode from "./LinkedNode.js";

export default class LinkedList {
  constructor() {
    this._length = 0;
    this._first = null;
    this._last = null;
  }

  set length(length) {
    this._length = length;
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

  isListEmpty() {
    if (this.length <= 0) {
      throw new Error("There are no elements in the list.");
    }
  }
  /**
   * - Si la lista linkeada esta vacia:
   *  1. Setear el item como first.
   *  2. Setear el item como last.
   * - Si la longitud de la lista es mayor a 1:
   *  1. Setear el item como el nextNode del actual last.
   *  2. Setear el last como el prevNode del item.
   *  3. Setear el item como last.
   * - Si todos los casos se cumplen:
   *  1. Incrementar el length.
   */
  push(data) {
    const newLinkedNode = new LinkedNode(data, this.length);

    if (this.length > 0) {
      newLinkedNode.prevNode = this.last;
      this.last.nextNode = newLinkedNode;
    } else {
      this.first = newLinkedNode;
    }

    this.last = newLinkedNode;
    this.length = this.length + 1;
  }

  /**
   * - Si la lista no tiene ningun elemento:
   *  1. Arrojar error.
   * - Si la lista tiene 1 elemento:
   *  1. Eliminar el first.
   *  2. Eliminar el last.
   * - Si la lista tiene mas de 1 elemento:
   *  1. Setear el next node del actual first como first.
   *  2. Setear como null el prev node del actual first.
   * - Si no ocurre ningun error:
   *  1. Decrementar el length de la lista.
   */
  removeFirst() {
    try {
      this.isListEmpty();

      if (this.length < 2) {
        this.first = null;
        this.last = null;
      } else {
        this.first = this.first.nextNode;
        this.first.prevNode = null;
      }

      this.length = this.length - 1;
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * - Si la lista no tiene ningun elemento:
   *  1. Arrojar error.
   * - Si la lista tiene 1 elemento:
   *  1. Eliminar el first.
   *  2. Eliminar el last.
   * - Si la lista tiene mas de 1 elemento:
   *  1. Setear como last el nodo previo del actual last.
   *  2. Setear el next nodo del actual last como null.
   * - Si todos los casos se cumplen se decrementa el length.
   */
  removeLast() {
    try {
      this.isListEmpty();

      if (this.length < 2) {
        this.first = null;
        this.last = null;
      } else {
        this.last = this.last.prevNode;
        this.last.nextNode = null;
      }

      this.length = this.length - 1;
    } catch (error) {
      console.log(error.message);
    }
  }

  /**
   * - Si el index es igual a la posicion del first:
   *  1. Ejecutar el metodo removeFirst.
   * - Si el index es igual a la posivion del last:
   *  1. Ejecutar el metodo removeLast.
   * - Si ninguna de las condiciones no se cumple:
   *  1.
   */
  remove(index) {
    try {
      if (index === 0) {
        this.removeFirst();
        return;
      }
      if (index === this.length - 1) {
        this.removeLast();
        return;
      }
      let currentNode = this.first;
      for (let i = 0; i < this.length; i++) {
        if ((index - i) === 1) {
          currentNode.nextNode.nextNode.prevNode = currentNode;
          currentNode.nextNode = currentNode.nextNode.nextNode;
          currentNode.nextNode.index = index;
          this.length = this.length - 1;
          break;
        }
        currentNode = currentNode.nextNode;
      }
    } catch (error) {
      console.log(error.message);
    }
  }
}
