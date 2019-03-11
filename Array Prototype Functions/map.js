Array.prototype.myMap = function(callback) {
	let array =[];
  for(let i=0;i<this.length;i++){
  	array.push(callback(this[i],i,this));
  }
  return array;
};

let arr1=[1,2,3,4];

let callbackFunction =(x)=>x*2;
console.log(arr1.myMap(callbackFunction));