/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var n=nums.length;

    var min=0;

    for(let i=0;i<n;i++){
        if(nums[i]<nums[min]){
            min=i;
        }

    
    }

    return nums[min];
};