function insurance(age, size, days) {
	let charge = 0;
	if(age < 25) {
		charge += 10 * days;
	}
	// car size surcharge "economy" $0 "medium" $10 "full-size" $15

	switch(size) {
	case "economy":
		charge += 0;
		break;
	case "medium":
		charge += 10 * days;
		break;
	case "full-size":
		charge += 15 * days;
		break;
	default:
		charge += 15 * days;
		break;
	}

	if(days < 1) {
		return 0;
	}
	charge += days * 50;

	return charge;
}

//18 medium 7   490

//25 + 10 + 

console.log(insurance(18, "medium", 7));