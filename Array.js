
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  //Nuestro método get devuelve el valor del elemento con índice index
  get(index) {
    return this.data[index];
  }
  //Nuestro método push añade un valor al final del array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  //Nuestro método pop remueve el último elemento del array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length -1];
    this.length--;
  }
  //Nuestro método delete elimina el elemento de indice index y devuelve el elemento removido.
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  //Nuestro método unshiftItem añade un elemento(item) al inicio de nuestro array y devuelve la longitud del array
  unshiftItem(item) {
    this.length++;
    this.unshiftIndex();

    this.data[0] = item;
    
    return this.length;
  }
  unshiftIndex() {
    for(let i = this.length - 1; i > 0 ; i--) {
      this.data[i] = this.data[i-1];
    }
  }
  //Para nuestro método shiftItem vamos a remover el primer elemento de nuestro array, usaremos el método delete() creado anteriormente.
  shiftItem() {
    return this.delete(0);
  }
}