showNumbers(10);

function showNumbers(limit){
    
    for (i = 1; i <= limit; i++) {
        if (i % 2 === 0)
        console.log (i, "EVEN");
        
        else 
        console.log(i, "ODD")
    }
    
    
}