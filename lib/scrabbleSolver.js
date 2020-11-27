const scoreMapFile = require('./scoreMap');

class ScrabbleSolver {
  constructor(word, scoreMap = scoreMapFile) {
    this.word = word;
    this.scoreMap = scoreMap;
  }

  convertToUpcase() {
    if (typeof this.word == 'string') return this.word.toUpperCase();

    return '';
  }

  calculateScore() {
    let total = 0;
    this.convertToUpcase()
      .split('')
      .map((letter) => (total += this.scoreMap[letter]));
    return total;
  }

  score() {
    let score = this.calculateScore();
    if (score > 0) return score;

    return 0;
  }
}

module.exports = ScrabbleSolver;
