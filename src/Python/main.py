from linkedList import LinkedList

if __name__ == '__main__':
    myLinkedList = LinkedList()
    myLinkedList._add_first(0)
    myLinkedList._add_last(1)
    myLinkedList._add_last(2)
    myLinkedList._add_last(4)

    def print_linked_nodes(linked_list):
        linked_node_data = []
        current_node = linked_list._first
        for i in range(linked_list._length):
            linked_node_data.append(current_node.data)
            current_node = current_node._next_node

        print(linked_node_data)

    print_linked_nodes(myLinkedList)

    myLinkedList._add(3, 3)

    print_linked_nodes(myLinkedList)

    myLinkedList._remove(0)
    print_linked_nodes(myLinkedList)


