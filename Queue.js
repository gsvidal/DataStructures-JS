//Creamos una clase Node(nodo) para no repetir código en los métodos
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  //Nuestro método peek nos devuelve el elemento first(primero en la cola)
  peek() {
    return this.first;
  }
  //Con nuestro método enqueue agregaremos un elemento al final de la cola (last)
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;

    return this;
  }
  //Con nuestro método dequeue removeremos el primer elemento de la cola
  dequeue() {
    if(this.length !== 0) {
    const second = myQueue.first.next;
    this.first = second;
    this.length--;

    return this;
    } else {
      console.log("Queue is empty, you cannot dequeue!")
    }
  }
  
}
//Instanciamos la clase Queue
const myQueue = new Queue();
