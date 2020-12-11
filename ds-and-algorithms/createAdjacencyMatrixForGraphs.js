let vertices = [0, 1, 2, 3, 4, 5];

let edges = [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5]
];

//Using a for loop for initializing matrix and filling it zeroes
//Assigning edge values using for-of
let createAdjacencyMatrixUsingForLoop = (vertices, edges) => {
  const verticesLength = vertices.length;
  let twoDarray = new Array(verticesLength);

  for (let i = 0; i < verticesLength; i++) {
    twoDarray[i] = new Array(verticesLength);
    for (let j = 0; j < verticesLength; j++) {
      twoDarray[i][j] = 0;
    }
  }

  for (let edge of edges) {
    twoDarray[edge[0]][edge[1]] = 1;
    twoDarray[edge[1]][edge[0]] = 1;
  }
  return twoDarray;
};

console.log(createAdjacencyMatrix(vertices, edges));

//Using Array native methods to initialize matriix with zeroes
//Assigning edges using a regular function and looping over edges using for each
const createAdjacencyMatrixUsingNativeFunctions = (vertices, edges) => {
  let initialArray = [...Array(vertices.length)];

  let twoDarray = initialArray.map(emptySpace => [
    ...Array(initialArray.length).fill(0)
  ]);

  const insertIntoAdjacencyMatrix = (a, b) => {
    twoDarray[a][b] = 1;
    twoDarray[b][a] = 1;
  };

  edges.forEach(vertice => insertIntoAdjacencyMatrix(...vertice));

  return twoDarray;
};

console.log(makeAdjacentMatrix(vertices, edges));
