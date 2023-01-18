import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();

linkedList.addLast(-1);
linkedList.addLast(1);
linkedList.addLast(2);
linkedList.addLast(3);

console.log(linkedList);

linkedList.add(0, 1);
linkedList.remove(2);

console.log(linkedList);
