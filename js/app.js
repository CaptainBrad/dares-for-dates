

var NumberOfWords = 7;

var words = new BuildArray(NumberOfWords);

// Use the following variables to
// define your random words:
words[1] = 'Bradley1';
words[2] = 'Rocco';
words[3] = 'Bradley2';
words[4] = 'Bradley3';
words[5] = 'Bradley4';
words[6] = 'Bradley5';
words[7] = 'Bradley6';


function BuildArray(size){
  this.length = size;
  for (var i = 1; i <= size; i++){
    this[i] = null;
  }
  return this;
}

function PickRandomWord(frm) {

// Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWords);

  // Display the word inside the text box
  frm.WordBox.value = words[rnd];
}
