
let display = document.getElementById('display');
document.addEventListener("keyup", (ev) => ev.key.match(/^[0-9]{1}$/) ? appendToDisplay(ev.key) : 0 )
// Append number or operator to the display
function appendToDisplay(value) {

    display.value += value;
}

// Clear the entire display
function clearDisplay() {

    display.value = '';
}

// Delete the last character from the display
function deleteLast() {

    display.value = display.value.slice(0, -1);
}

// Calculate and show the result
function calculateResult() {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function runSquareRoot() {
    const v = calculateSquareRoot(display.value);
    display.value = v;
    
}

function runSquare() {
    // Hint: Use exponentiation
    const v = calculateSquare(display.value);
    display.value = v;
}

function runReciprocal() {
    // Hint: Reciprocal is 1/x
    const v = calculateReciprocal(display.value);
    display.value = v;
}

// TODO: Implement run your functions here
function runNaturalLog() {
  // Hint: Reciprocal is 1/x
  const v = naturalLog(display.value);
  display.value = v;
}

function runSine() {
  // Hint: Reciprocal is 1/x
  const v = sine(display.value);
  display.value = v;
}

function runCosine() {
  // Hint: Reciprocal is 1/x
  const v = cosine(display.value);
  display.value = v;
}

function runTangent() {
  // Hint: Reciprocal is 1/x
  const v = tangent(display.value);
  display.value = v;
}

let numInp = document.getElementById("numInp")
numInp.addEventListener("input", () => {
        let content = numInp.value;
        console.log(Number(content) != NaN)
        if(!isNaN(Number(content))){
            display.value = content;
        }
    })
