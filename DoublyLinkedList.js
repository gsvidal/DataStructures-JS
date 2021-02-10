//Como podremos ver el código para la creación de un doubly solo se diferencia por ser unas cuantas líneas más larga:

//Creamos una clase Node(nodo) para no reescribir código en los métodos
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      // Doubly: se añade la siguiente linea
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    // Doubly: se añade la siguiente linea
    this.head.prev = newNode;
    
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }
  insert(index, value) {
    if(index >= this.length) {
      console.log("No hay suficientes elementos, será enviado al final");
      return this.append(value);
    }

    const newNode = new Node(value);
    let firstPointer = this.getTheIndex(index - 1);
    let secondPointer = this.getTheIndex(index);
    let holdingPointer = firstPointer.next;
    firstPointer.next = newNode;
    newNode.next = holdingPointer;
    // Doubly: se añaden las siguientes 3 líneas
    holdingPointer.prev = newNode;
    firstPointer = newNode.prev;
    holdingPointer = secondPointer;

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
//Instanciado MyDoublyLinkedList:
let myDoublyLinkedList = new MyDoublyLinkedList(1);

