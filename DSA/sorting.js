// Bubble Sort

let bubbleSort = (array) =>{
    for(let i = 0; i <array.length - 1; i++){
        for(let j = 0; j< array.length - 1 - i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sorted Array:", array);
}

bubbleSort([40, 70, 30, 90, 110]);

//Selection Sort

let selectionSort = (array) =>{
    for(let i = 0; i< array.length-1; i++){
        let minIndex = i;
        for(let j = i + 1; j< array.length; j++){
            if(array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }
    console.log("Selection Sorted Array:", array);
}

selectionSort([40, 70, 30, 90, 110]);

//Insertion Sort

let insertionSort = (array) =>{
    let n = array.length;
    for(let i = 1; i < n; i++){
        let key = array[i];
        let j = i-1;
        while(j >= 0 && array[j]>key){
            array[j+1] = array[j]
            j = j - 1;
        }
        array[j+1] = key;
    }
    console.log("Insertion Sorted Array", array);
}

insertionSort([40, 70, 30, 90, 110]);


//Merge Sort

const mergeSort = (array, left, right) => {
    if (left >= right) {
        return array;
    }
    let middle = Math.floor((left + right) / 2);
    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);
    merge(array, left, middle, right);
}

const merge = (array, left, middle, right) => {
    let result = [];
    let leftIndex = left;
    let rightIndex = middle + 1;

    while (leftIndex <= middle && rightIndex <= right) {
        if (array[leftIndex] < array[rightIndex]) {
            result.push(array[leftIndex]);
            leftIndex++;
        } else {
            result.push(array[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex <= middle) {
        result.push(array[leftIndex]);
        leftIndex++;
    }

    while (rightIndex <= right) {
        result.push(array[rightIndex]);
        rightIndex++;
    }

    // Copy the sorted result back to the original array
    for (let i = left, j = 0; i <= right; i++, j++) {
        array[i] = result[j];
    }

console.log("Merge Sorted Array: ", array);
}

const array = [40, 70, 30, 90, 110];

mergeSort(array, 0, array.length - 1);


// Quick Sort

const quickSort = (array, low, high) =>{
    if(low < high){
        let partitionIndex = partition(array, low, high);
        quickSort(array, low, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, high)
    }
}

const partition = (array, low, high)=>{
    let pivot = array[low];
    let i = low;
    let j = high;
    
    while(i < j){
        while(array[i] <= pivot && i<= high -1){
            i++;
        }
        while(array[j] > pivot && j >= low + 1){
            j--;
        }
        if(i < j){
            swap(array, i, j);
        }
    }
    swap(array, low, j);
    console.log("Quick Sorted Array: ", array);
    return j;
}

const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const unSortedArray = [40, 70, 30, 90, 110];

quickSort(unSortedArray, 0, unSortedArray.length - 1);



