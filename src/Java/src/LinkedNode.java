public class LinkedNode extends Node {
    private LinkedNode next;

    public LinkedNode(float value) {
        super(value);
    }

    public LinkedNode getNext() {
        return next;
    }

    public void setNext(LinkedNode next) {
        this.next = next;
    }
}
