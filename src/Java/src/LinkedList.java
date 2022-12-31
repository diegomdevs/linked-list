public class LinkedList {
    public int length;
    private LinkedNode first;
    private LinkedNode last;

    public LinkedList() {
        this.length = 0;
    }

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

    public void push(float value) {
        LinkedNode newLinkedNode = new LinkedNode(value);

        if (this.getFirst() != null) {
            this.getLast().setNext(newLinkedNode);

        } else this.setFirst(newLinkedNode);
        
        this.setLast(newLinkedNode);
    }
    
    public void add(float value, int index) {
        LinkedNode newLinkedNode = new LinkedNode(value);
        LinkedNode previousNode = this.getFirst();
        LinkedNode currentNode = this.getFirst();
        int steps = 0;
        while (steps <= index) {
               if(steps != index) {
                   previousNode = currentNode;
                   currentNode = currentNode.getNext();
                   steps++;
               } else {
                    previousNode.setNext(newLinkedNode);
                    newLinkedNode.setNext(currentNode);
                   break;
               }
        }
    }
}
