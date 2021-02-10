  //      10
  //   4      20  
  // 2   8  17  170
  
  class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    //Con este método insert, podremos agregar nodos con sus valores y referencias según la condición si son menor o mayor al padre.
    insert(value) {
      const newNode = new Node(value);
      if(this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true) {
          if(value < currentNode.value) {
            if(!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if(!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        } 
      }
    }
    //El método search nos permitirá devolver el nodo en el que se encuentra el valor(value) enviado como argumento. Recordar que el nodo es el conjunto de información como: value, left child, right child. En caso de recorrerse el binary search tree y no encontrar el valor buscado nos indicará que no existe el valor.
    search(value) {
      var msj = "no se encuentra el valor";
      if(this.root === null) {
        console.log(`The tree is empty!`);
      } else {
        let currentNode = this.root;
         while(true) {
          if(value === currentNode.value) {
            return currentNode;
          } else {
            if(value < currentNode.value) {
              if(currentNode.left) {
                currentNode = currentNode.left;
              } else {
                return msj;
              }
            } else {
              if(currentNode.right) {
                currentNode = currentNode.right;
              } else {
                return msj;
              }
            }
          }
          
         }
        } 
    }   
  }
  
  const myBinarySearchTree = new BinarySearchTree();
