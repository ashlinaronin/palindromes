var isPalindrome = function(phrase) {
    if (phrase.length === 1) {
        return true;
    } else {
        var reversePhrase = phrase.split('').reverse().join('');
        console.log("reversePhrase is " + reversePhrase);
        return phrase === reversePhrase;
    };
};
