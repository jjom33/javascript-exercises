const removeFromArray = function() {
    const argsArray = [...arguments];
    var arr = argsArray[0];
    var elements = argsArray.slice(1);
    for (let i=0; i<elements.length; i++){
        let index = arr.indexOf(elements[i]);
        if (index !== -1) {
            arr.splice(index, 1);
          }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
