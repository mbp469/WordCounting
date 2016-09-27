/*Create a function which takes a string as an argument and determines the frequency of each word in it. However, it should not include any single-character words. The result should be an object with each word being the property name and the frequency count being the value. For example, given "A cat in a hat is a silly cat indeed." as your argument, the return value should be {cat: 2, in: 1, hat: 1, is: 1, silly: 1, indeed: 1} (notice that "a" is excluded since it is a single character).

You will want to use the split() method of strings to break up the string first. You can use one of Shakespeare's Sonnets as your test case.*/

var testString = "apple pear axe grind. ate ate, lox!\na";
var contentArea = document.getElementById('content');

/* this function takes a string and returns an object containing words as the keys and counts of that word as values. */
function countWords(theString) {

    /* iterate through string and build an array of words by replacing newlines with spaces, then splitting by spaces. */
    var arr1 = theString.replace(/\n/g, " ").split(" ");

    console.log("arr1: " + arr1);

    var arr2 = []; //this is where to put processed array of strings.

    var map = {}; //the object that will hold the words and their counts.

    /* go through the array and for each item, test for character-length, revert to lower case, remove punctuation using:[replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")], add acceptable array items to new array */

    for (var item in arr1) {
        //character.replace punctuation with "" and changes to lower case
        arr1[item] = arr1[item].replace(/[!.,?'"-]/g,"").toLowerCase();
        /* push the item to arr2 if more than one character long */
        if(arr1[item].length > 1) {
        arr2.push(arr1[item]);
        console.log("arr1[item]: " + arr1[item]);
      }
    }
      console.log("arr2: " + arr2);
      console.log("arr2.length: " + arr2.length);

      for (var item1 in arr2) { //loop through the array and save the current item as a word in the object
        var word = arr2[item1];
        console.log(word);
        // /* if the map contains the key word, retrieve the property and add one. */
        if(map[word]) {
          var count = map[word];
          count++;
          map[word] = count;
          /* if the map doesn't contain the word, then set the value of map.word to 1 and add map.word to map */
        } else {
          map[word] = 1;
        }
        console.log("word: map[word] = " + word + ": " + map[word]);
      }
} //end of countWords function
countWords(testString);
