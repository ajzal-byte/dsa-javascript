// ======================================GRAPH====================================
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

  hasEdge(vertex1, vertex2){
    return(
      this.adjList[vertex1].has(vertex2) &&
      this.adjList[vertex2].has(vertex1)
    )
  }

  removeEdge(vertex1, vertex2){
    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }

  removeVertex(vertex){
    if (!this.adjList[vertex]) return;
    for (let adjacentVertex of this.adjList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjList[vertex];
  }

  display(){
    for (const vertex in this.adjList) {
      console.log(`${vertex} -> ${[...this.adjList[vertex]]}`);
    }
  }
}

  // ==========================TEST CASES==========================

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log('is A adjacent to B:' ,graph.hasEdge('A', 'B'));
graph.removeEdge('A', 'B');
console.log('is A adjacent to B:' ,graph.hasEdge('A', 'B'));

graph.removeVertex('C')

graph.display();