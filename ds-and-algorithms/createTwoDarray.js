//This way initializes everything to undefined and has an index
// - All items are iterable
// - All Array loops like map,forEach will work when creating Array like [...Array()]
const createTwoDarrayWithUndefinedEntries = (m, n) => {
  const initialArray = [...Array(m)];
  return initialArray.map(emptySpace => [...Array(n)]);
};

const createTwoDarrayWithZeroes = (m, n) => {
  const initialArray = [...Array(m)];
  return initialArray.map(emptySpace => [...Array(n).fill(0)]);
};

//This way doesn't initialize anything, just gives a size to the array
// - There are no items in array
// - No Array methods will work on new Array() since there isn't anything iterable (there are no indexes)
const createTwoDarrayWithForLoop = (m, n) => {
  const initialArray = new Array(m);
  for (let i = 0; i < m; i++) {
    initialArray[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      initialArray[i][j] = Math.floor(Math.random() * 5);
    }
  }
};
