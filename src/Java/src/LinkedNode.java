public class LinkedNode extends Node {
    private LinkedNode _prevNode;
    private int _index;
    private LinkedNode _nextNode;

    public LinkedNode(int data, int index) {
        super(data);
        _prevNode = null;
        _index = index;
        _nextNode = null;
    }

    public void prevNode(LinkedNode linkedNode) {
        _prevNode = linkedNode;
    }

    public LinkedNode prevNode() {
        return _prevNode;
    }

    public void index(int index) {
        _index = index;
    }

    public int index() {
        return _index;
    }

    public void nextNode(LinkedNode linkedNode) {
        _nextNode = linkedNode;
    }

    public LinkedNode nextNode() {
        return _nextNode;
    }
}