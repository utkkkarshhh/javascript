// Closures

const x = () => {
    var a = 7;
    const y = () => {
        console.log(a);
    }
    y();
}
x();


// Ability of a function to access the variables outside its block scope within its lexical scope is known as closure.


