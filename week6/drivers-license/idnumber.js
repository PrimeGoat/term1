function DLid(entry) {
	/* 0	- forename
	1		- middle
	2		- surname
	3		- dob (day month year)
	4		- m / f
*/
	let firstName = entry[0].toUpperCase();
	let middleName = entry[1].toUpperCase();
	let lastName = entry[2].toUpperCase();
	let dob = entry[3].match(/([^-]+)-([^-]+)-([^-]+)/);
	let dobMonth = dob[2];
	let dobDay = dob[1];
	let dobYear = dob[3];
	let sex = entry[4];
	let out = "";

	out += lastName.slice(0, 5).padEnd(5, '9');
	out += dobYear[2];
	let mon = getMonth(dobMonth);
	if(sex.toUpperCase() === 'F') {
		mon = String(Number(mon) + 50);
	}
	out += mon;
	out += dobDay;
	out += dobYear[3];
	let initials = firstName[0];
	initials += middleName[0];
	initials = initials.padEnd(2, '9');
	out += initials;
	out += '9';
	out += "AA";

	return out;
}

function getMonth(mon) {
	switch(mon.slice(0,3).toLowerCase()) {
	case "jan":
		return '01';
	case "feb":
		return '02';
	case "mar":
		return '03';
	case "apr":
		return '04';
	case "may":
		return '05';
	case "jun":
		return '06';
	case "jul":
		return '07';
	case "aug":
		return '08';
	case "sep":
		return '09';
	case "oct":
		return '10';
	case "nov":
		return '11';
	case "dec":
		return '12';
	default:
		return 0;
	}
}

//console.log(DLid(["Andrew","Robert","Lee","02-September-1981","M"]));


// LEE99809021AR9AA
// LEE99809021AR9AA