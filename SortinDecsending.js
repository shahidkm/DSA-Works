var array=[64, 25, 12,120,22, 11]


function SortDecs(array){
    var n=array.length;
var max=0
for(i=0;i<n-1;i++){
    max=i
    for(j=i+1;j<n;j++){
        if(array[j]>array[max]){
            max=j

        }

      
    }
    if(max!==i){
        [array[i],array[max]]=[array[max],array[i]]
    }
}
return array;
}

console.log(SortDecs(array));
