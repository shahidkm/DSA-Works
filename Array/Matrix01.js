function searchMatrix(matrix, target) {
    // Handle edge cases: empty matrix or empty rows
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let rows = matrix.length; // Total number of rows
    let cols = matrix[0].length; // Total number of columns

    // Start at the top-right corner
    let row = 0; // First row
    let col = cols - 1; // Last column

    // Search until we go out of bounds
    while (row < rows && col >= 0) {
        if (matrix[row][col] === target) {
            return true; // Target found
        } else if (matrix[row][col] > target) {
            // Current value is too large, move left
            col--;
        } else {
            // Current value is too small, move down
            row++;
        }
    }

    // If we exit the loop, the target is not in the matrix
    return false;
}
