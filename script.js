let operators = document.getElementsByClassName("operator");
let numbers = document.getElementsByClassName("number");
// / let number2=document.querySelectorAll('.number');
// // console.log(number2);

function findHistory() {
	return document.getElementById("value-history").innerText;
}
function displayHistory(num) {
	document.getElementById("value-history").innerText = num;
}
function findOutput() {
	return document.getElementById("value-output").innerText;
}
function displayOutput(num) {
	if (num == "") {
		document.getElementById("value-output").innerText = num;
	}
	else {

		document.getElementById("value-output").innerText = addComma(num);
	}
}

function addComma(num) {

	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function removeComma(num) {
	return Number(num.replace(/,/g, ''));
}
//Iteration for the arrays of numbers
for (var i = 0; i < numbers.length; i++) {
	numbers[i].addEventListener('click', function () {
		let output = removeComma(findOutput());
		// console.log(7+8);
		//  console.log(output);
		// console.log(typeof output);

		if (output != NaN) { //if output is a number
			output = output + this.id;
			console.log(output);
			console.log(typeof output);
			displayOutput(output);
		}
	});
}
// End of the iteration for the numbers


//Iteration for the arrays of operators

for (var i = 0; i < operators.length; i++) {
	operators[i].addEventListener('click', function () {
		if (this.id == "AC") {
			displayHistory("");
			displayOutput("");
		}

		else {
			var output = findOutput();
			var history = findHistory();
			if (output == "" && history != "") {
				if (isNaN(history[history.length - 1])) {
					history = history.substr(0, history.length - 1);
				}
			}
			if (output != "" || history != "") {
				output = output == "" ? output : removeComma(output);
				history = history + output;
				if (this.id == "=") {
					var result = eval(history);// a  built in function which calculates the expression
					displayOutput(result);
					displayHistory("");
				}
				else {
					history = history + this.id;
					displayHistory(history);
					displayOutput("");
				}
			}
		}

	});
}
//end of iteration for the arrays of operators


