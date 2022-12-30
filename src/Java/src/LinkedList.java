public class LinkedList {
    private LinkedNode first;
    private LinkedNode last;

    public LinkedNode getFirst() {
        return first;
    }

    public LinkedNode getLast() {
        return last;
    }

    public void setFirst(LinkedNode first) {
        this.first = first;
    }

    public void setLast(LinkedNode last) {
        this.last = last;
    }

    public void add(float value) {
        LinkedNode newLinkedNode = new LinkedNode(value);

        if (this.getFirst() != null) {
            this.getLast().setNext(newLinkedNode);

        } else this.setFirst(newLinkedNode);
        this.setLast(newLinkedNode);
    }
}
