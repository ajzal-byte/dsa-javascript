const adjList = {
  'A': ['B'],
  'B': ['A', 'C'],
  'C': ['B']
}

console.log("Nodes adjacent to Node A:", adjList['A']);
console.log("Nodes adjacent to Node B:", adjList['B']);
console.log("Nodes adjacent to Node C:", adjList['C']);
