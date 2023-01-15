import LinkedList from "./LinkedList.js";
const myLinkedList = new LinkedList();

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);

function print_linked_nodes(linked_list) {
  let current_node = linked_list.first;
  for (let i = 0; i < linked_list.length; i++) {
    console.log("-".repeat(20));
    console.log("Index: " + i);
    console.log(current_node);
    console.log("-".repeat(20));
    current_node = current_node.nextNode;
  }
}

console.log(myLinkedList.first);
console.log(myLinkedList.last);
print_linked_nodes(myLinkedList);
myLinkedList.remove(1);
print_linked_nodes(myLinkedList);
