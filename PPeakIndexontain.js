var peakIndexInMountainArray = function(arr) {
    
    let low = 0, high = arr.length - 1;
  
      while (low < high) {
          let mid = Math.floor((low + high) / 2);
  
          if (arr[mid] < arr[mid + 1]) {
              low = mid + 1; 
          } else {
              high = mid; 
          }
      }
  
      return low; 
  }