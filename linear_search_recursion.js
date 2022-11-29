//JAVASCRIPT PROGRAM TO LINEAR SEARCH USING RECURSION
const arr = [1,2,7,9,2,6];
const target = 2;

function linear_search(arr,target,count){
    if(arr[count] === target){
        return count;
    }
    if(arr.length-1 === count){
        return -1;
    }

    return linear_search(arr,target,count+1);
}

const result = linear_search(arr,target,0);
console.log('Target found at ',result);