let word = "감자";
while (true) {
  const newWord = prompt(word);
  if (word[word.length - 1] === newWord[0]) {
    word = newWord;
  } else {
    alert("틀렸습니다");
  }
}
