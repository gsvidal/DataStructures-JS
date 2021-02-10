//Creamos una clase Node(nodo) para no repetir código en los métodos
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
 constructor() {
   this.top = null;
   this.bottom = null;
   this.length = 0;
 }
 //Nuestro método peek nos devuelve el elemento top(último en ingresar)
 peek() {
   return this.top;
 }
 //Nuestro método push agrega un elemento al (top) del stack y nos devuelve el stack
 push(value) {
   const newNode = new Node(value);
   if(this.length === 0) {
     this.top = newNode;
     this.bottom = this.top;
   } else {
     const holdingPointer = newNode;
     this.top.next = holdingPointer;
     this.top = holdingPointer;
   }
   this.length++;

   return this;
 }
 //Nuestro método pop remueve el elemento top y nos devuelve el stack
 pop() {
   var penultimo = myStack.bottom;
   for(let i = 0; i < this.length-2; i++) {
     penultimo = penultimo.next;
   }

   this.top = penultimo;
   this.top.next = null;
   this.length--;

   return this;
 }
}
//Instanciamos la clase Stack
const myStack = new Stack();
           