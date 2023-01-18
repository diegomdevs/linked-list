from linkedList import LinkedList


def main():
    myLinkedList = LinkedList()

    myLinkedList._add_first(2)
    myLinkedList._add_first(1)
    myLinkedList._add_first(0)

    current_node = myLinkedList._first
    while current_node != None:
        print("-" * 70)

        if current_node == myLinkedList._first:
            print("     --First--")
        print(f"Prev node: {current_node._prev_node}")
        print(f"Data: {current_node._data}")
        print(f"Next node: {current_node._next_node}")
        if current_node == myLinkedList._last:
            print("      --Last--")
        current_node = current_node._next_node


if __name__ == '__main__':
    main()
