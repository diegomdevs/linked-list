import LinkedList from "./LinkedList.js";
const myLinkedList = new LinkedList();

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

console.log(myLinkedList);

myLinkedList.remove(1);

console.log(myLinkedList);
