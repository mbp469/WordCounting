/*Create a function which takes a string as an argument and determines the frequency of each word in it. However, it should not include any single-character words. The result should be an object with each word being the property name and the frequency count being the value. For example, given "A cat in a hat is a silly cat indeed." as your argument, the return value should be {cat: 2, in: 1, hat: 1, is: 1, silly: 1, indeed: 1} (notice that "a" is excluded since it is a single character).

You will want to use the split() method of strings to break up the string first. You can use one of Shakespeare's Sonnets as your test case.*/

var testString = `THE SONNETS

by William Shakespeare

                     1
  From fairest creatures we desire increase,
  That thereby beauty's rose might never die,
  But as the riper should by time decease,
  His tender heir might bear his memory:
  But thou contracted to thine own bright eyes,
  Feed'st thy light's flame with self-substantial fuel,
  Making a famine where abundance lies,
  Thy self thy foe, to thy sweet self too cruel:
  Thou that art now the world's fresh ornament,
  And only herald to the gaudy spring,
  Within thine own bud buriest thy content,
  And tender churl mak'st waste in niggarding:
    Pity the world, or else this glutton be,
    To eat the world's due, by the grave and thee.


                     2
  When forty winters shall besiege thy brow,
  And dig deep trenches in thy beauty's field,
  Thy youth's proud livery so gazed on now,
  Will be a tattered weed of small worth held:
  Then being asked, where all thy beauty lies,
  Where all the treasure of thy lusty days;
  To say within thine own deep sunken eyes,
  Were an all-eating shame, and thriftless praise.
  How much more praise deserved thy beauty's use,
  If thou couldst answer 'This fair child of mine
  Shall sum my count, and make my old excuse'
  Proving his beauty by succession thine.
    This were to be new made when thou art old,
    And see thy blood warm when thou feel'st it cold.


                     3
  Look in thy glass and tell the face thou viewest,
  Now is the time that face should form another,
  Whose fresh repair if now thou not renewest,
  Thou dost beguile the world, unbless some mother.
  For where is she so fair whose uneared womb
  Disdains the tillage of thy husbandry?
  Or who is he so fond will be the tomb,
  Of his self-love to stop posterity?
  Thou art thy mother's glass and she in thee
  Calls back the lovely April of her prime,
  So thou through windows of thine age shalt see,
  Despite of wrinkles this thy golden time.
    But if thou live remembered not to be,
    Die single and thine image dies with thee.`;

var shortString = ' !axe axe button car, dash';

/* this function takes a string and returns an object containing words as the keys and counts of that word as values. */
function countWords(theString) {
    var arr1 = []; //theString will be broken down and placed here.
    var arr2 = []; //this is where to put processed array of strings.
    var map = { //the object that will hold the words and their counts.
    };
    var contentArea = document.getElementById('content');
    var wordDiv = document.createElement('div');
    var countDiv = document.createElement('div');
    var maxArea =   contentArea.appendChild(document.createElement('h2'));
    contentArea.appendChild(wordDiv);
    contentArea.appendChild(countDiv);

    // var wordP = document.createElement('p');
    // var countP = document.createElement('p');
    // wordP.className = "words-class";
    // countP.className = "counts-class";

    function cleanUp() {
        /* iterate through string and build an array of words by replacing newlines with spaces, then splitting by spaces. */
        arr1 = theString.replace(/\n/g, " ").split(" ");
        /* go through the array and for each item, test for character-length, revert to lower case, remove punctuation using:[replace(/[.,\/#!$%\^&\*;:{}=\-_`~();:]/g,"")], add acceptable array items to new array */
        for (var item in arr1) {
            //character.replace punctuation with "" and changes to lower case
            arr1[item] = arr1[item].replace(/[!.,?'"-:;]/g, "").toLowerCase();
            /* push the item to arr2 if more than one character long */
            if (arr1[item].length > 1) {
                arr2.push(arr1[item]); // the cleaned up items are now stored in arr2.
            }
        }
    }

    function addItemsToMapObject() {
        for (var item1 in arr2) {
            var word = arr2[item1]; //word is set to the item at index item1
            /* if the map contains the key word, retrieve the property and add one. */
            if (map[word]) { //tests if the item at index item1 exists as a key in the map object
                var count = map[word]; //if it exists, save that value in count.
                count++;
                map[word] = count;
                /* if the map doesn't contain the word, then set the value of map.word to 1 and add map.word to map */
            } else {
                map[word] = 1;
            }
        }
        for(var prop in map) { /* iterate again for the actual printing out. */
        var wordP = document.createElement('p');
        wordP.className = 'words';
        wordDiv.appendChild(wordP);
        wordP.innerHTML = prop;
        var countP = document.createElement('p');
        countP.className = 'counts';
        countDiv.appendChild(countP);
        countP.innerHTML = map[prop];
        console.log(prop + ": " + map[prop]);
      }
      mostUsedWord();
    }

    function mostUsedWord() {
        var maxValue = 0;
        var maxKey;
        for (var key in map) {
          var value = parseInt(map[key]);
            if (value > maxValue) {
                maxKey = key;
                maxValue = value;
            }
        }
        maxArea.innerHTML = "'" + maxKey + "' is the most-used word. It is repeated " + maxValue + " times.";
        console.log("maxKey = " + maxKey + ": " + maxValue);
        return key;
    }
    cleanUp();
    addItemsToMapObject();

} //end of countWords function
countWords(testString);
// countWords(shortString);
