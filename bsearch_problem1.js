/* 
You are Given a series of positive integer numbers in the form of a sorted array as 
Ai where i is the index. N is the positive number which you have to check in the 
given array Ai whether the given N is duplicate in the Array or not. If it is duplicate 
output as “FALSE” if it is non duplicate output as “TRUE”.
*/

const arr = [1,2,4,5,5,7,8,9,10];
const target =5;
let start = 0, end = arr.length-1;

//SOLUTION WITH RECURSION
function find_duplicate(arr, start, end, target){
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        if(arr[mid] === target){
            if ((arr[mid-1] === target) || (arr[mid+1] === target)){
                return false;
            }
            else{
                return true;
            }
        }
        else if(arr[mid] < target){
            return find_duplicate(arr, mid+1, end, target);            
        }
        else {
            return find_duplicate(arr, start, mid-1, target);            
        }
    }
}

console.log(find_duplicate(arr, start, end, target));//function call