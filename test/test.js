let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
  //Phrase#palindrome
  describe("#palindrome", function() {
    it("should return false for an empty string", function(){
      let emptyPalindrome = new Phrase("");
      assert.strictEqual(emptyPalindrome.palindrome(), false);
    });
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });
    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });
    it("should return true for a mixed-case palindrome", function() {
      let mixedPalindrome = new Phrase("MaDam");
      assert(mixedPalindrome.palindrome());
    });
    it("should return true for a palindrome with punctuation", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
  });
  describe("#letters", function(){
    it("should return a string consisting of only letters", function(){
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});
