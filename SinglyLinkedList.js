//Creamos una clase Node(nodo) para no reescribir código en los métodos
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  //Nuestro método append agregará un elemento al tail del Singly Linked List
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  //Nuestro método prepend agregará un elemento en el head del Singly Linked List
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  //Nuestro método insert insertará un elemento en el nodode índice index en el Singly Linked List
  insert(index, value) {
    if(index >= this.length) {
      console.log("No hay suficientes elementos, será enviado al final");
      return this.append(value);
    }

    const newNode = new Node(value); 
    const firstPointer = this.getTheIndex(index - 1);
    //Se crea una const holdingPointer que servirá para no perder el puntero next del firstPointer.
    const holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;

    this.length++;

    return this;
  }

  getTheIndex(index) {
    let currentNode = this.head;

    for(let counter = 0; counter < this.length; counter++) {
      if(counter !== index) {
        currentNode = currentNode.next;
      } else{
        return currentNode;
      }
    }
  }
}
//Instanciado MySinglyLinkedList:
let myLinkedList = new MySinglyLinkedList(1);

