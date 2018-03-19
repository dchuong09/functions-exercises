// Build an ASCII Triangle!
// toTheNthPwr(2, 3) => 16; 

let toTheNthPwr = (num, pow) => {
	let product = 1; 

	for (let i = num; i < pow; i++) {
		product *= i ;
	}

	return product;
} 