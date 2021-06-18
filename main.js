/* TEST SCENARIO 1:
   If sideA is 4,
      sideB is 7, and
      height is 5
   then the area we expect is 27.5 */

/* TEST SCENARIO 2:
   If sideA is 3,
      sideB is 5, and
      height is 8
   then the area we expect is 32. */

// Step 1: Get our inputs (sideA, sideB, height)
let sideAInput = prompt("What is the length of side A?")
let sideBInput = prompt("What is the length of side B?")
let heightInput = prompt("What is the height of the trapezoid?")

let sideA = parseFloat(sideAInput)
let sideB = parseFloat(sideBInput)
let height = parseFloat(heightInput)

/* 
  TODO: Write an IF statement which checks if
    sideA
    sideB
    height
  ...are NaN, and if so, let the user know they 
  need to retry and give us real numbers,
  otherwise (else), run the code normally.

  EXAMPLE CODE:
  let sideAIsInvalid = Number.isNaN(sideA)
  let sideBIsInvalid = Number.isNaN(sideB) 
  let heightIsInvalid = Number.isNaN(height)

  // We use Number.isNaN() above because NaN never === NaN.
  // NaN only tells us what the value is NOT (a number).
  // NaN does not know what the value actually IS.
  // So it cannot be compared in a traditional way.

  if (sideAIsInvalid || sideBIsInvalid || heightIsInvalid) {
      document.write("<h3>You have entered invalid input. Please refresh the page and provide numbers in decimal form. For example, to enter the number three, just type: 3</h3>")
  } else {} // I would put the rest of the code inside
            // of this ELSE block to prevent it from running.
*/

console.log(sideA, sideA === 3)
console.log(sideB, sideB === 5)
console.log(height, height === 8)

// Step 2: Sum the sides!
let sum = sideA + sideB

// Step 3: Average the sum of the two sides!
let average = sum / 2

// Step 4: Multiply average of the sides by the height!
let area = average * height

// Step 5: Output the area!
document.write(`
    <details>
        <summary>
            If the length of side A is <mark>${sideA}</mark>,
            and the length of side B is <mark>${sideB}</mark>,
            and the height is <mark>${height}</mark>, 
            then the area of this trapezoid is...
        </summary>

        <h3>${area}</h3>
    
    </details>
`)