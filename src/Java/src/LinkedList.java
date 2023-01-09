public class LinkedList {
    public int length;
    private LinkedNode head;
    private LinkedNode tail;

    public LinkedList() {
        length = 0;
    }

    private boolean isListEmpty() {
        if (getLength() != 0) return true;
        return false;
    }

    public int getLength() {
        return length;
    }

    private void increaseLength() {
        length++;
    }

    private void decreaseLength() {
        length--;
    }

    public LinkedNode getHead() {
        return head;
    }

    public LinkedNode getTail() {
        return tail;
    }

    private void setHead(LinkedNode head) {
        this.head = head;
    }

    private void setTail(LinkedNode tail) {
        this.tail = tail;
    }

    public void push(float value) {
        LinkedNode newTail = new LinkedNode(value);
        if (getLength() != 0) {
            newTail.setPrevious(getTail());
            getTail().setNext(newTail);
        } else {
            setHead(newTail);
        }
        setTail(newTail);
        increaseLength();
    }

    public void pull() {
        if (!isListEmpty()) {
            if (getLength() > 1) {
                LinkedNode newTail = getTail().getPrevious();
                newTail.setNext(null);
                setTail(newTail);
            } else {
                setHead(null);
                setTail(null);
            }
            decreaseLength();
        }
    }

    public void add(float value, int index) {
        int lastIndex = (getLength() - 1);
        LinkedNode newLinkedNode = new LinkedNode(value);
        LinkedNode currentNode;
        if (index > 0 && index != lastIndex) {
            currentNode = getHead();
            for (int i = 0; i < index; i++) {
                currentNode = currentNode.getNext();
            }

            LinkedNode previousNode = currentNode.getPrevious();
            LinkedNode nextNode = currentNode.getNext();
            previousNode.setNext(newLinkedNode);
            nextNode.setPrevious(newLinkedNode);
            newLinkedNode.setPrevious(previousNode);
            newLinkedNode.setNext(currentNode);
        }
        else {
            if(index != lastIndex) {
                currentNode = getHead();
                newLinkedNode.setNext(currentNode);
                currentNode.setPrevious(newLinkedNode);
                setHead(newLinkedNode);
            } else {
                push(newLinkedNode.getValue());
                return;
            }
        }
        increaseLength();
    }
}
