var SumOfASquare = require("../challenge_6").SumOfASquare;

describe("Difference between sum of squares and squares of sum", function () {

  it("for the first 10 natural numbers is 2640", function () {
    var squareSummer = new SumOfASquare(10);
    expect( squareSummer.sumOfSquares() ).toEqual(385);
    expect( squareSummer.squareOfTheSums() ).toEqual(3025);
    expect( squareSummer.squareOfTheSums() - squareSummer.sumOfSquares() ).toEqual(2640);
  });

  it("for the first 100 natural numbers is XXX", function () {
    var squareSummer = new SumOfASquare(100);
    expect( squareSummer.sumOfSquares() ).toEqual(338350);
    expect( squareSummer.squareOfTheSums() ).toEqual(25502500);
    expect( squareSummer.squareOfTheSums() - squareSummer.sumOfSquares() ).toEqual(25164150);
  });

});