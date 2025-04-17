//Task1
function LinSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

//Task2
function Dupls(arr) {
    const prev = new Set();
    for (let i of arr) {
        if (prev.has(i)) {
            return true;
        }
        prev.add(i);
    }
    return false;
}

//Task3
function BinSearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const avg = Math.floor((left + right) / 2);

        if (arr[avg] === target) {
            return avg;
        } else if (arr[avg] < target) {
            left = avg + 1;
        } else {
            right = avg - 1;
        }
    }
    return -1;
}

console.log("===========TASK1===========");
const arr = [10, 20, 30, 40];
console.log(LinSearch(arr, 30));
console.log("===========TASK2===========");
console.log(Dupls([1, 2, 3, 4, 5]));
console.log(Dupls([1, 2, 3, 2, 5]));
console.log("===========TASK3===========");
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(BinSearch(sortedArray, 7));