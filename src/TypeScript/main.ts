import LinkedList from "./LinkedList.ts";

const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.removeHead();

console.log(linkedList);
