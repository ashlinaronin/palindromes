var isPalindrome = function(phrase) {
    phrase = phrase.replace(/[^a-z0-9]/ig, "").toLowerCase();

    if (phrase.length === 1) {
        return true;
    } else {
        var reversePhrase = phrase.split('').reverse().join('');
        return phrase === reversePhrase;
    };
};
