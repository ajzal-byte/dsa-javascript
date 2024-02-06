class Graph{
  constructor(){
    this.adjList = {};
  }

  addVertex(vertex){
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }else{
      console.log('Vertex already exists');
    }
  }

  addEdge(vertex1, vertex2){
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }

  display(){
    for (const vertex in this.adjList) {
      console.log(`${vertex} -> ${[...this.adjList[vertex]]}`);
    }
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

graph.display();