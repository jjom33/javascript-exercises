const getTheTitles = function(books) {
    var len = books.length;
    var result =[];
    for (let i=0;i<len;i++){
        result.push(books[i].title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
