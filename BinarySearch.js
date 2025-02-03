var search = function(nums, target) {
    var low=0;
    var heigh=nums.length-1
  

    while(low<=heigh){
          var mid=Math.floor((low+heigh)/2)

          if(nums[mid]===target){
            return mid;
          }
          else if(nums[mid]<target){
            low =mid+1
          }else if(nums[mid]>target){
            heigh=mid-1
          }
    }
    return -1
};