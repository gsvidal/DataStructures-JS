
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  //Lo siguiente es un Hash que fue creado arbitrariamente,existen muchos Hash Functions en GitHub
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  //El metodo set nos inserta un elemento con su key y value(puede haber colisiones)
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  //El metodo get nos devuelve el valor que le corresponde al key, en caso no exista el key enviado nos devolverá undefined
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}     
//Instanciamos el HashTable con 50 espacios libres
const myHashTable = new HashTable(50);  
