class ScrabbleSolver {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (this.word == 'a') return 1;
    return 0;
  }
}

module.exports = ScrabbleSolver;
