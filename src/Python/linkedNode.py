from node import Node


class _LinkedNode(Node):
    def __init__(self, data, index):
        Node.__init__(self, data)
        self.__prevNode = None
        self.__index = index
        self.__nextNode = None

    @property
    def _prev_node(self):
        return self.__prevNode

    @_prev_node.setter
    def _prev_node(self, linked_node):
        self.__prevNode = linked_node

    @property
    def _index(self):
        return self.__index

    @_index.setter
    def _index(self, index):
        self.__index = index

    @property
    def _next_node(self):
        return self.__nextNode

    @_next_node.setter
    def _next_node(self, linked_node):
        self.__nextNode = linked_node
