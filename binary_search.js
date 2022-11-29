//Javascript program to implement Binary Search
const arr = [1,2,5,7,13,15,16,18,24,28,29];
const target = 18;

//BINARY SEARCH FUNCTION
function binary_search(arr,target){
    let start = 0,end = arr.length-1, mid;

    //Main code
    while(start <= end){ //loops until left is less than the value of right
        mid = Math.floor((start + end)/2);
        console.log('Start',start, mid, end)
        if(arr[mid] === target){
            return mid;
        }
        else if(arr[mid]<target){
            start = mid + 1;             
        }
        else{
            end = mid - 1;
        }
        console.log('End',start, mid, end)
    }
    return -1;
}

console.log(binary_search(arr,target));//PRINTS THE RETURNED RESULT FROM binary_search()