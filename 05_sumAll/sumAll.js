const sumAll = function(num1, num2) {
    if (!(Number.isInteger(num1) && Number.isInteger(num2))){
        return "ERROR";
    } 
    if (num1<0 || num2<0){
        return "ERROR";
    }
    var tempSum = num1+num2;
    var count = Math.abs(num1-num2);
    var sum = 0;
    if (count%2!=0){
        sum = tempSum * Math.floor((count+1)/2);
    }
    else{
        sum = tempSum * Math.floor(count/2)+Math.floor(tempSum/2);  
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
