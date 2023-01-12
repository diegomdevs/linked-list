import LinkedList from "./LinkedList.ts";
import LinkedNode from "./LinkedNode.ts";

function main() {
  const myLinkedList = new LinkedList();

  const mySecondLinkedNode = new LinkedNode(2);

  myLinkedList.push(1);
  myLinkedList.push(2);

  console.log(myLinkedList);
}

main();
