const palindromes = function (str) {
    var cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var cleandedReversed = cleaned.split('').reverse().join('');
    return cleaned == cleandedReversed;
    
};

// Do not edit below this line
module.exports = palindromes;
