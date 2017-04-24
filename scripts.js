var a = prompt("Wpisz liczbę a: "),
	b = prompt("Wpisz liczbę b: "),
	value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

if (value < 0) {
	console.log("Wynik ujemny");
} else if (value > 0) {
	console.log("Wynik dodatni");
} else {
	console.log("Zero");
}
