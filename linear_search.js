// Javascript program for Linear Search
const arr = [1,3,4,4,6,7,9];//List of elements to iterate over
const target = 4;//Key element to find

//Iteration Approach

const indexes = [];
for(let i=0; i < arr.length; i++){
    if(arr[i] === target){
        console.log(target,' found at index ', i);
        indexes.push(i);
    }
}

console.log(indexes);