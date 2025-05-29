let unsortedArray = [20, 40, 30, 50, 10];
let sortedArray= [10, 20, 30, 40, 50];

// Linear Search -> Can be performed on both sorted and unsorted array!
const linearSearch = (array, number) =>{
    for(let i = 0; i <= array.length; i++){
        if (array[i] === number){
        console.log(number + " found in the array at "+ i);
        return 1;
        }
    }
    console.log(number + " not found in the array");
    return -1;
}


// Binary Search -> Can be performed only on sorted arrays!
const binarySearch = (array, number) => {
    let start = 0;
    let end = array.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(array[mid] === number){
            console.log(array[mid] + " found in the array at "+ mid);
            return 1;
        }
        else if(number > array[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    console.log(number + " not found the array");
    return -1;
}

linearSearch(unsortedArray, 30);
binarySearch(sortedArray, 50);