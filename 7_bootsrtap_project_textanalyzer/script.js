
uppercase.addEventListener('click', function () {
  Inputext.value = Inputext.value.toUpperCase()
});

lowercase.addEventListener('click', function () {
  Inputext.value = Inputext.value.toLowerCase()
});

RemoveSpaces.addEventListener('click', function () {
  Inputext.value = Inputext.value.replace(/\s+/g, ' ');
});

RemoveExtraLines.addEventListener('click', function () {
  Inputext.value = Inputext.value.replace(/\n{2,}/g, '\n')
});

Removepunctuation.addEventListener('click', function () {
  Inputext.value = Inputext.value.replace(/[^\w\s]/gi, "")
})



function countWords() {

  // Get the input text value
  var text = document.getElementById("Inputext").value;

  // Initialize the word counter
  var numWords = 0;

  // Loop through the text
  // and count spaces in it 
  for (var i = 0; i < text.length; i++) {
    var currentCharacter = text[i];

    // Check if the character is a space
    if (currentCharacter == " ") {
      numWords += 1;
    }
  }

  // Add 1 to make the count equal to
  // the number of words 
  // (count of words = count of spaces + 1)
  numWords += 1;

  // Display it as output
  document.getElementById("Charcount").innerHTML = numWords;
}