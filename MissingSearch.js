var missingNumber = function(nums) {
    var n=nums.length;

    for(let i=0;i<=n;i++){
        if(!nums.includes(i)){
            return i;
        }
    }
};