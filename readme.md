# Phrase object (with palindrome checker)

This is a sample NPM module created in [*Learn Enough Javascript to be Dangerous*](https://www.learnenough.com/course/javascript) by Victor Karanja.

The module can be used as follows:

```
$ npm install --global karanja1victor-palindrome
$ vim test.js
let Phrase = require("karanja1victor-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw  Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
:+1:
