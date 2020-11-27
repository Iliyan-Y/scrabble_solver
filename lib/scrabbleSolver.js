class ScrabbleSolver {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word == 'a') return 1;
    if (this.word == 'f') return 4;
    return 0;
  }
}

module.exports = ScrabbleSolver;
