import LinkedList from "./LinkedList.ts";
import LinkedNode from "./LinkedNode.ts";

function main() {
  const myLinkedList = new LinkedList();

  const myFirstLinkedNode = new LinkedNode(1);
  const mySecondLinkedNode = new LinkedNode(2);
  
  myFirstLinkedNode.nextNode = mySecondLinkedNode;
  mySecondLinkedNode.prevNode = myFirstLinkedNode;
  
  myLinkedList.first = myFirstLinkedNode;
  myFirstLinkedNode.index = 0;
  myLinkedList.length = 1;
  
  myLinkedList.last = mySecondLinkedNode;
  mySecondLinkedNode.index = 1;
  myLinkedList.length = myLinkedList.length + 1;
  
  console.log(myLinkedList);
}

main();
