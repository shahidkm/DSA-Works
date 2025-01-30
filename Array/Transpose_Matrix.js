const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

function Transpose(matrix){

    let rows=matrix.length;
    let cols=matrix[0].length;
    let result=[];



    for (let col = 0; col < cols; col++) {
        let newRow = [];
       
        for (let row = 0; row < rows; row++) {
            newRow.push(matrix[row][col]); 
        }
        result.push(newRow);  
    }
return result;
}

console.log(Transpose(matrix));
