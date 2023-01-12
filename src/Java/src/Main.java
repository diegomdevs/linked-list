
public class Main {
    public static void main(String[] args) {
        LinkedList myLinkedList = new LinkedList();
        myLinkedList.push(1);
        myLinkedList.push(2);
        System.out.println(myLinkedList.length());
        System.out.println(myLinkedList.first().data());
        System.out.println(myLinkedList.last().data());
    }
}