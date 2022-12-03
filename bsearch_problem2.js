//Javascript program to Binary Search Problem-2

//Problem Description

/* 
Given an array of positive integers, and a value sum, determine if there is a subset 
of the given set with sum equal to given sum. Find the two numbers that 
summation will be equal to the value in the sum variable.
Input: arr = [1, 3, 4, 5, 7, 10, 11, 12] , sum = 9 
Output: 5 4 
There is a subset (4, 5) with sum 9.
*/

const arr = [1,3,4,5,7,10,11,12];
const sum = 12;

//function definition
function find_subset(arr,sum){
    let start = 0, end = arr.length - 1;

    //condition for checking whether the list is empty or not
    if(start > end){
        return -1;
    }

    //iterates over all the elements, if list not empty
    while(start <= end){
        let mid = Math.floor((start + end)/2);

        //The main code to find the subset
        if((((arr[mid] + arr[mid+1]) === sum) || ((arr[mid] + arr[mid-1]) === sum))){
            if((arr[mid] + arr[mid+1]) === sum){
                return [arr[mid],arr[mid+1]];
            }
            else{
                return [arr[mid],arr[mid-1]];
            }
        }
        else if((arr[mid] + arr[mid-1] < sum) || (arr[mid] + arr[mid+1] < sum)){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return -1;
}    
    
console.log (find_subset(arr,sum));//function calling