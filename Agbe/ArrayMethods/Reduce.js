// Reduce

// The reuduce method executes a reducer function (that you provide) on each element of the Array, 
// resulting in a SINGLE OUTPUT CSSMathValue. It does not modify the orginal array..

// -> Does not modify the orignal array

// array.reducer(callback(accumulator, currentValue, [, index[, array]])[, initialValue]);

// -> Callback Function : (Each Element Defined)
// -> Accumulator: This accumulates the callback's return values. It is the accumulated value previously returned in the last invocation of the callback, or 'initial value', if supplied.
// -> Current Value: Thec current element being processed in the array

const array = [10, 20, 30, 40, 50];
const array2 = [1, 2, 3, 4, 5]; 

//                              0            10
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//                              10            20
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//                              30            30
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//                              60            40
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//                              100           50
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//                              150           null
// const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);



// console.log(sum);
//                                 1               1
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//                                 1               2
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//                                 2               3
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//                                 6               4
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//                                 24              5
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
//                                 120             null
// const product = array2.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(product);