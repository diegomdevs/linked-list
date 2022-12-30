public class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList();
        myLinkedList.add(16);
        myLinkedList.add(17);
        System.out.println(myLinkedList.getFirst().getNext().getValue());
        System.out.println(myLinkedList.getLast().getValue());
    }
}