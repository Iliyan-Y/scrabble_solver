describe('ScrabbleSolver', () => {
  let ScrabbleSolver = require('../lib/scrabbleSolver');

  it('It retunrs score of zero when the word is empty', () => {
    solver = new ScrabbleSolver('');
    expect(solver.score()).toEqual(0);
  });

  it('It retunrs score of 1 when only letter a is passed', () => {
    solver = new ScrabbleSolver('a');
    expect(solver.score()).toEqual(1);
  });

  it('It retunrs score of 4 when the letter f is passed', () => {
    solver = new ScrabbleSolver('f');
    expect(solver.score()).toEqual(4);
  });

  it('It calculate the score of full word', () => {
    solver = new ScrabbleSolver('street');
    expect(solver.score()).toEqual(6);
  });
  it('It calculate the score of different word', () => {
    solver = new ScrabbleSolver('quirky');
    expect(solver.score()).toEqual(22);
  });

  it('It calculates the score when the word is upcase', () => {
    solver = new ScrabbleSolver('OXYPHENBUTAZONE');
    expect(solver.score()).toEqual(41);
  });

  it('It return 0 when no word is passed', () => {
    solver = new ScrabbleSolver(null);
    expect(solver.score()).toEqual(0);
  });
});
