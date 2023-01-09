import Node from "./Node.ts";
import TLinkedNode from "./types/TLinkedNode.ts";
import TLinkedNodeIndex from "./types/TLinkedNodeIndex.ts";



export default class LinkedNode extends Node {
    private _prevNode: TLinkedNode;

    private _index: TLinkedNodeIndex;

    private _nextNode: TLinkedNode;

    constructor(data: any) {
        super(data);
        this._prevNode = null;
        this._index = undefined;
        this._nextNode = null;
    }

    set prevNode(linkedNode: TLinkedNode) {
        this._prevNode = linkedNode;
    }

    get prevNode() {
        return this._nextNode;
    }

    set index(index: TLinkedNodeIndex) {
        this._index = index;
    }

    get index() {
        return this._index;
    }

    set nextNode(linkedNode: TLinkedNode) {
        this._nextNode = linkedNode;
    }

    get nextNode() {
        return this._nextNode;
    }
}