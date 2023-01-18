public class LinkedNode extends Node {
  private LinkedNode _prevLinkedNode;
  private LinkedNode _nextLinkedNode;

  public LinkedNode(int data) {
    super(data);
    prevLinkedNode(null);
    nextLinkedNode(null);
  }

  public void prevLinkedNode(LinkedNode newPrevLinkedNode) {
    _prevLinkedNode = newPrevLinkedNode;
  }

  public LinkedNode prevLinkedNode() {
    return _prevLinkedNode;
  }

  public void nextLinkedNode(LinkedNode newNexLinkedNode) {
    _nextLinkedNode = newNexLinkedNode;
  }

  public LinkedNode nextLinkedNode() {
    return _nextLinkedNode;
  }
}
