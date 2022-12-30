public class LinkedNode extends Node {
    private Node next;

    public LinkedNode(float value) {
        super(value);
    }

    public Node getNext() {
        return next;
    }

    public void setNext(LinkedNode next) {
        this.next = next;
    }
}
