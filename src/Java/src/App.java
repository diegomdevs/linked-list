public class App {

    public static void printLinkedList(LinkedList linkedList) {
        LinkedNode linkedNode = linkedList.first();
        while (linkedNode != null) {
            System.out.println(
                    "Prev node: " + linkedNode.prevLinkedNode());
            System.out.println("Data: " + linkedNode.data());
            System.out.println(
                    "Next node: " + linkedNode.prevLinkedNode());
            System.out.println("-".repeat(30));
            linkedNode = linkedNode.nextLinkedNode();
        }
    }

    public static void main(String[] args) throws Exception {
        LinkedList linkedList = new LinkedList();
        linkedList.addFirst(2);
        linkedList.addFirst(1);
        linkedList.addFirst(0);
        printLinkedList(linkedList);
    }
}