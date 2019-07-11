// Adds 'reverse' to all strings
String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

//defines a Phrase object
function Phrase(content){
  this.content = content;

  //returns lowercase version of its argument
  this.processor = function (string) {
    return string.toLowerCase();
  }
  //returns content processed for palindrome testing
  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome(){
    return this.processedContent() === this.processedContent().reverse();
  }
}
