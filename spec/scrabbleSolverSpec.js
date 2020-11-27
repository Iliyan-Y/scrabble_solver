describe('ScrabbleSolver', () => {
  let Solver = require('../lib/scrabbleSolver');

  it('It retunrs score of zero when the word is empty', () => {
    solver = new Solver('');

    expect(solver.score()).toEqual(0);
  });
});
