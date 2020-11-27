describe('ScrabbleSolver', () => {
  let ScrabbleSolver = require('../lib/scrabbleSolver');

  it('It retunrs score of zero when the word is empty', () => {
    solver = new ScrabbleSolver('');
    expect(solver.score()).toEqual(0);
  });

  it('It retunrs score of zero when the word is empty', () => {
    solver = new ScrabbleSolver('a');
    expect(solver.score()).toEqual(1);
  });
});
