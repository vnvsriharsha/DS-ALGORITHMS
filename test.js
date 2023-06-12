const arr = [5,7,7,8,8,10];
const target = 8;

function search(arr,target){
    let left = 0, right = arr.length - 1;
    if(left>right){
        return [-1,-1];
    }
    while(left<right){
        let mid = Math.floor((left+right)/2);

        if((arr[mid]===target)&&(arr[mid+1]===target)){
            return [mid,mid+1];
        }
        else if((arr[mid===target])&&(arr[mid-1]===target)){
            return [mid,mid-1];
        }
        else{
            return [-1,-1];
        }
    }
}

console.log(search(arr,target));