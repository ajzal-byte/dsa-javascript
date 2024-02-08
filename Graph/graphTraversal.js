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

  bfs(startingVertex){
    if(!this.adjList[startingVertex]){
      console.log("Vertex not found");
      return;
    }

    let visited = {};
    let queue = [startingVertex];
    visited[startingVertex] = true;

    while (queue.length) {
      let currVertex = queue.shift();
      console.log(currVertex);
      for (let neighbour of this.adjList[currVertex]) {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      }
    }
  }

  dfs(startingVertex){
    if (!this.adjList[startingVertex]) {
      console.log('Vertex not found');
      return;
    }

    let visited = {};
    this.dfsHelper(startingVertex, visited);
  }

  dfsHelper(vertex, visited){
    visited[vertex] = true;
    console.log(vertex);

    for (let neighbour of this.adjList[vertex]) {
      if (!visited[neighbour]) {
        this.dfsHelper(neighbour, visited);
      }
    }
  }


}


// Example usage:
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');

console.log('BFS Traversal:');
graph.bfs('A');

console.log('DFS Traversal:');
graph.dfs('A');