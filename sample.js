const arr = [1,3,4,5,7,10,11,12];
const target = 9;

function pair_sums(arr, target){
    let start = 0, end = arr.length - 1;

    while(start<end){
        let mid = Math.round((start + end)/2);
        if(((arr[mid]+arr[mid+1])===target) || ((arr[mid]+arr[mid-1])===target)){
            if((arr[mid]+arr[mid+1])===target){
                return [arr[mid],arr[mid+1]];
            }else{
                return [arr[mid],arr[mid-1]];
            }
        }
        else if((arr[mid]+arr[mid+1])>target){
            end = mid-1;
        }
        else{
            start = mid+1;
        }
    }
}

console.log(pair_sums(arr,target));