describe('isPalindrome', function() {
    it("handles single letter words", function() {
        expect(isPalindrome("a")).to.equal(true);
    });

    it("handles two letter words", function() {
        expect(isPalindrome("if")).to.equal(false);
    });

    it("handles three letter words", function() {
        expect(isPalindrome("mom")).to.equal(true);
    });

    it("handles celebrity palindromes", function() {
        expect(isPalindrome("No, Mel Gibson is a casino's big lemon.")).to.equal(true);
    });

    it("handles Costner palindrome", function() {
        expect(isPalindrome("Sis, ask Costner to not rent socks 'as is.'")).to.equal(true);
    });
});
