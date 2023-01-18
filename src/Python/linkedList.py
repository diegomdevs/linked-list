from linkedNode import _LinkedNode


class LinkedList:
    def __init__(self) -> None:
        self.__length = 0
        self.__first = None
        self.__last = None

    @property
    def _length(self):
        return self.__length

    @_length.setter
    def _length(self, new_length):
        self.__length = new_length

    @property
    def _first(self):
        return self.__first

    @_first.setter
    def _first(self, new_first):
        self.__first = new_first

    @property
    def _last(self):
        return self.__last

    @_last.setter
    def _last(self, new_last):
        self.__last = new_last

    def _is_linked_list_empty(self):
        try:
            if self._length <= 0:
                raise Exception("The list is empty!")
        except Exception as message:
            print(message)

        """
        - Si la lista esta vacia:
            1. Setear el nuevo nodo como first.
            2. Setear el nuevo nodo como last.
        - Si la lista tiene al menos un nodo:
            1. Setear el first actual como prevNode del nuevo nodo.
            2. Setear el first actual como nextNode del nuevo nodo.
            3. Setear como first el nuevo nodo.
        
        """

    def _add_first(self, data):
        new_first = _LinkedNode(data, 0)

        if self._length > 0:
            self._first._prev_node = new_first
            new_first._next_node = self._first
        else:
            self._last = new_first

        self._first = new_first

        self._length = self._length + 1

        """
        - Si la lista esta vacia:
            1. Setear el nuevo nodo como first.
            2. Setear el nuevo nodo como last.
        - Si la lista tiene al menos 1 nodo:
            1. Setear el last actual como prev del nuevo last
            2. Setear el nuevo last como next del last actual.
        """

        """
        - Si la lista esta vacia:
            1. Arrojar error.
        - Si la lista tiene al menos un elemento:
            1. Setear como null el first.
            2. Setear como null el last.
        - Si la lista tiene mas de un elemento:
            1. Setear como null el nodo previo del nodo siguiente del
            first de la lista.
            2. Setear como first el nodo siguiente del first.
        
        - Si no ocurre ningun error:
            1. Decrementarle 1 a la longitud de la lista.
        """

    def _remove_first(self):
        self._is_linked_list_empty()
        if self._length > 1:
            self._first._next_node._prev_node = None
            self._first = self._first._next_node
        else:
            self._first = None
            self._last = None

        self._length = self._length - 1

    def _add_last(self, data):
        new_last = _LinkedNode(data, self._length)

        if self._length > 0:
            new_last._prev_node = self._last
            self._last._next_node = new_last
        else:
            self._first = new_last

        self._last = new_last

        self._length = self._length + 1

    """
    - Si la lista no tiene nodos:
        1. Arrojar error.
    
    - Si la lista tiene al menos un elemento:
        1. Setear como null el fisrt.
        2. Setear como null el last.
    
    - Si la lista tiene mas de un elemento:
        1. setear como null el nodo siguiente del nodo previo del last.
        2. setear como last el nodo previo del last.
    
    - Si no ocurre ningun error:
        1. Decrementarle 1 a la longitud.
    """

    def _remove_last(self):
        self._is_linked_list_empty()

        if self._length > 1:
            self._last._prev_node._next_node = None
            self._last = self._last._prev_node
        else:
            self._first = None
            self._last = None

        self._length = self._length - 1

    """
    - Si index es menor o igual a 1:
        1. Ejecutar el metedo add_first.
    
    - Si index es igual al index del last:
        2. Ejecutar el metodo add_last.
    
    - Si no se cumplen ninguna de las dos condiciones:
        1. Buscar el nodo que tenga el index indicado.
        2. Setear el nodo previo del nodo actual como nodo previo del nuevo nodo.
        3. Setear el nodo actual como nodo siguiente del nuevo nodo.
        4. Setar el nodo actual como nodo siguiente del nodo previo del nodo actual.
        5. Setear el nuevo nodo como nodo previo del nodo acutal.
    """

    def _add(self, data, index):
        if self._length == 0:
            self._add_first(data)
        else:
            new_linked_node = _LinkedNode(data, self._length)

            current_node = self._first

            for i in range(self._length):
                if i == index:
                    new_linked_node._prev_node = current_node._prev_node
                    new_linked_node._next_node = current_node
                    current_node._prev_node._next_node = new_linked_node
                    current_node._prev_node = new_linked_node

                    self._length = self._length + 1
                else:
                    current_node = current_node._next_node

    """
    - Si la lista esta vacia:
        1. Arrojar error.
    
    - Si el index es igual 0:
        1. ejecutar el metodo remove_first
    
    - Si el index es igual al index del ultimo nodo vinculado:
        1. Ejecutar el metodo remove_last
    
    - Si la lista tiene al menos 1 elemento:
        1. Ejecutar el metodo remove_last
    
    - Si la lista tiene mas de un elemento:
        1. Buscar el nodo a eliminar.
        2. Una vez encontrado el nodo:
            1. Setear el nodo siguiente del nodo actual como nodo siguiente del nodo previo del nodo actual
            2. Seter el nodo previo del nodo actual como nodo previo del nodo siguiente del nodo actual.
    
    - Si no hay ningun error:
        1. Decrementarle 1 a la longitud.
    """

    def _remove(self, index):
        self._is_linked_list_empty()

        if index == 0:
            self._remove_first()
        else:
            if self._length > 1:
                current_node = self._first
                if index == self._length - 1:
                    self._remove_last()
                else:
                    for i in range(self._length):
                        if i == index:
                            current_node._prev_node._next_node = current_node._next_node
                            current_node._next_node._prev_node = current_node._prev_node
                            break
                        else:
                            current_node = current_node._next_node

                    self._length = self._length - 1
