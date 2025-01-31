function findKthLargest(nums, k) {
    let n = nums.length;

  
    for (let i = 0; i < n; i++) {
        let maxIndex = i;
        for (let j = i + 1 ; j < n; j++) {
            if (nums[j] > nums[maxIndex]) {
                maxIndex = j;
            }
        }

       
        [nums[i], nums[maxIndex]] = [nums[maxIndex], nums[i]];
    }

    
    return nums[k - 1];
}
