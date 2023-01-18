public class LinkedList {
  private int _length;
  private LinkedNode _first;
  private LinkedNode _last;

  public LinkedList() {
    length(0);
    first(null);
    last(null);
  }

  public void length(int newLength) {
    _length = newLength;
  }

  public int length() {
    return _length;
  }

  public void first(LinkedNode newFirst) {
    _first = newFirst;
  }

  public LinkedNode first() {
    return _first;
  }

  public void last(LinkedNode newLast) {
    _last = newLast;
  }

  public LinkedNode last() {
    return _last;
  }

  private void isLinkedListEmpty() {
    try {
      if (length() == 0) {
        throw new Error("The list is empty!");
      }
    } catch (Exception e) {
      System.out.println(e.getMessage());
    }
  }

  public void addFirst(int data) {
    final LinkedNode newFirst = new LinkedNode(data);

    if (length() > 0) {
      first().prevLinkedNode(newFirst);
      newFirst.nextLinkedNode(first());
    } else {
      last(newFirst);
    }
    first(newFirst);
    length(length() + 1);
  }

  public void addLast(int data) {
    LinkedNode newLast = new LinkedNode(data);

    if (length() > 0) {
      newLast.prevLinkedNode(last());
      last().nextLinkedNode(newLast);
    } else
      first(newLast);
    last(newLast);
    length(length() + 1);
  }
}
