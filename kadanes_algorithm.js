//Javascript algorithm to Kadane's algorithm.

function maxSubarray(ar) {
    let pre = ar[0];
    let ans = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < ar.length; i++) {
        let cur = Math.max(ar[i], pre + ar[i]);
        pre = cur;
        ans = Math.max(ans, pre);
    }
    console.log(ans);
}

maxSubarray([-2, -3, 4, -1, -2, 1, 5, -3])