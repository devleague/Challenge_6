/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;
}

// do work here

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()

SumOfASquare.prototype.createNumbersArray = function() {
  const numbersArray = [];

  for (let i = this.naturalNumbers; i > 0; i--) {
    numbersArray.push(i);
  }

  return numbersArray;
};

SumOfASquare.prototype.sumOfSquares = function() {
  const numbersArray = this.createNumbersArray();

  return numbersArray
    .map(num => Math.pow(num, 2))
    .reduce((sum, currentValue) => sum + currentValue);
};

SumOfASquare.prototype.squareOfTheSums = function() {
  const numbersArray = this.createNumbersArray();

  return Math.pow(
    numbersArray.reduce((sum, currentValue) => sum + currentValue),
    2
  );
};
