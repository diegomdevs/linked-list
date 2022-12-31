public class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList();
        myLinkedList.push(16);
        myLinkedList.push(17);
        myLinkedList.push(19);
        myLinkedList.add(18, 2);
        System.out.println(myLinkedList.getFirst().getValue());
        System.out.println(myLinkedList.getFirst().getNext().getValue());
        System.out.println(myLinkedList.getFirst().getNext().getNext().getValue());
        System.out.println(myLinkedList.getLast().getValue());

    }
}