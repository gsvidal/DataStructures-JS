
class Graph {
  constructor() {
    this.nodes = 0;
    this.adjacentList = {};
  }
  //Se agregan nodos(vértices)
  addVertex(node) {
    this.adjacentList[node] = [];
    this.nodes++;
  }
  //Se agregan border(edges) pasando como argumento a los nodos(nodo1 y nodo2), como el grafo del ejercicio es no dirigido debe colocarse el método push en ambas direcciones.
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
}

const myGraph = new Graph();

//Creamos los vértices(nodos):
myGraph.addVertex(1);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addVertex(8);

//Creamos los Edges(bordes), ya que hay 7 bordes en el gráfico, deben haber 7 addEdge:
myGraph.addEdge(8,4);
myGraph.addEdge(4,5);
myGraph.addEdge(4,1);
myGraph.addEdge(1,6);
myGraph.addEdge(3,6);
myGraph.addEdge(1,3);
myGraph.addEdge(5,3);

