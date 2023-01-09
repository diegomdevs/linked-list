public class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList();
        myLinkedList.push(15);
        myLinkedList.push(17);
        myLinkedList.push(18);
        myLinkedList.add(16, 1);
        myLinkedList.push(19);
        myLinkedList.push(20);
        myLinkedList.add(14, 0);
        myLinkedList.add(21, 7);

        LinkedNode currentLinkedNode = myLinkedList.getHead();
        for (int i = 0; i < myLinkedList.getLength(); i++) {
            if (currentLinkedNode == myLinkedList.getHead()) {
                System.out.println("Head <-- " + currentLinkedNode.getValue());
            }
            else if (currentLinkedNode == myLinkedList.getTail()) {
                System.out.println(currentLinkedNode.getValue() + "--> Tail");

            }
             else {
                System.out.println("--" + currentLinkedNode.getValue() + "--");
            }
            currentLinkedNode = currentLinkedNode.getNext();
        }
    }
}