const fibonacci = function(n) {
    if (!Number.isInteger(n)){
        if (!isNaN(n) && Number.isInteger(parseInt(n))){
            n = parseInt(n);
        }
    }
    
    if (n <0){
        return "OOPS";
    } 
    
    if (n==0 || n==1) {
        return n;
    }

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let temp = prev + curr;
        prev = curr;
        curr = temp;
  }
  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
