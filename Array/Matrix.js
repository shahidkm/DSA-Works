var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var RowValues = "";
console.log("Matrix array created");

for (let row = 0; row < matrix.length; row++) { 

    RowValues = ""; 

    for (let col = 0; col < matrix.length; col++) { 

        RowValues += matrix[row][col] + " ";
    }
    console.log(RowValues); 
}
