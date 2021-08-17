module.exports = Phrase;

// Adds 'reverse' to all strings
String.prototype.reverse = function reverse(){
  return Array.from(this).reverse().join("");
}

//defines a Phrase object
function Phrase(content){
  this.content = content;


  //returns content processed for palindrome testing
  this.processedContent = function processedContent(){
    return this.letters().toLowerCase();
  }
  //Returns the letters in the content
  this.letters = function letters() {
      return (this.content.match(/[a-z]/gi) || []).join("");
  }
  // Returns true for palindrome, false otherwise.
  this.palindrome = function palindrome(){
    if(this.content!==""){
      return this.processedContent() === this.processedContent().reverse();
    }else{
      return false;
    }

  }

}
