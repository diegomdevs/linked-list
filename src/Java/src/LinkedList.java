public class LinkedList {
    private int _length;
    private LinkedNode _first;
    private LinkedNode _last;

    public LinkedList() {
        _length = 0;
        _first = null;
        _last = null;
    }

    private void length(int length) {
        _length = length;
    }

    public int length() {
        return _length;
    }

    private void first(LinkedNode linkedNode) {
        _first = linkedNode;
    }

    public LinkedNode first() {
        return _first;
    }

    private void last(LinkedNode linkedNode) {
        _last = linkedNode;
    }

    public LinkedNode last() {
        return _first;
    }

    public void incrementLength() {
        length(length() + 1);
    }

    public void decrementLength() {
        length(length() - 1);
    }

    public void push(int data) {
        final LinkedNode newLinkedNode = new LinkedNode(data, length());

        if (length() > 1) {
            newLinkedNode.prevNode(last());
            last().nextNode(newLinkedNode);
        } else {
            first(newLinkedNode);
        }
        last(newLinkedNode);
        incrementLength();
    }
}