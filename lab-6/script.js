// Bubble Sort Function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

// Event Listener
document.getElementById('sortButton').addEventListener('click', () => {
    let input = document.getElementById('numberInput').value;
    if (input.trim() === "") {
        alert("Please enter some numbers!");
        return;
    }

    let numbers = input.split(',').map(num => parseInt(num.trim(), 10));
    if (numbers.some(isNaN)) {
        alert("Please enter only valid numbers separated by commas.");
        return;
    }

    let sortedNumbers = bubbleSort(numbers);
    document.getElementById('sortedOutput').textContent = sortedNumbers.join(', ');
});
