public class LinkedNode extends Node {


    public int getIndex() {
        return index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    private int index;
    private LinkedNode previous;
    private LinkedNode next;

    public LinkedNode(float value) {
        super(value);
    }

    public LinkedNode getPrevious() {
        return previous;
    }

    public LinkedNode getNext() {
        return next;
    }

    public void setPrevious(LinkedNode previous) {
        this.previous = previous;
    }

    public void setNext(LinkedNode next) {
        this.next = next;
    }

}
