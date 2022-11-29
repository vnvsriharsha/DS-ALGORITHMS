//Javascript program to binary search using recursion
const arr = [2,3,4,6,8,10,12,14];
const target = 3;
let start = 0, end = arr.length-1,mid;


//BINARY_SEARCH FUNCTION
function binary_search(arr,start,end,target){
    mid = Math.floor((start + end)/2);
    if(arr[mid] === target){
        return mid;
    }
    if(start > end){
        return -1;
    }
    if(target > arr[mid]){
        return binary_search(arr,mid+1,end,target);
    }
    else{
        return binary_search(arr,start,mid-1,target);
    }

}

console.log(binary_search(arr,start,end,target));