let vertices = [0, 1, 2, 3, 4, 5];

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5]
];

let airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

let routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "HEL"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"]
];

let adjacencyList = new Map();

let addVertices = (list, vertice) => list.set(vertice, []);

let addEdges = (list, vertice, edge) => {
  list.get(vertice).push(edge);
  list.get(edge).push(vertice);
};

vertices.forEach(vertice => addVertices(adjacencyList, vertice));

edges.forEach(edge => addEdges(adjacencyList, ...edge));

console.log(adjacencyList);

let adjacencyListAirports = new Map();
airports.forEach(airport => addVertices(adjacencyListAirports, airport));

routes.forEach(route => addEdges(adjacencyListAirports, ...route));

console.log(adjacencyListAirports);
