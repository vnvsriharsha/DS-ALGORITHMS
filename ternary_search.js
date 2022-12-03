//Javascript Program to Ternary Search

const arr = [0,2,4,6,8,10,12,14,16,18,20];
const target = 4;

function ternary_search(arr,target){
    let start = 0, end = arr.length-1;

    if(start > end){
        return -1;
    }

    while(start <= end){
        let mid1 = start + Math.floor((end - start)/3);
        let mid2 = end - Math.floor((end - start)/3);

        if (arr[mid1] === target || arr[mid2] === target){
            if(arr[mid1] === target){
                return mid1;
            }
            else{
                return mid2;
            }
        }
        else if(arr[mid1] > target){
            end = mid1 - 1;
        }
        else if(arr[mid2] < target){
            start = mid2 + 1;
        }
        else{
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }
    return -1;
}

let result = ternary_search(arr,target);

if(result != -1){
    console.log(target, " found at ", ternary_search(arr,target));
}
else{
    console.log("not found");
}
