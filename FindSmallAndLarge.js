var array=[64, 25, 12, 22, 11]

function Numbers(array){

var n=array.length;
let min = 0;
let max = 0;

for(let i=0;i<n;i++){
   
 

      

        if(array[i]<array[min]){
            min=i;
        }

        if(array[i]>array[max]){
            max=i
        }
    }
    return { min: array[min], max: array[max] };
}

console.log(Numbers(array));
