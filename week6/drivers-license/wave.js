// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(string) {
	let out = [];
	for(let i = 0; i < string.length; i++) {
		if(string[i] === ' ') {
			continue
		}
		let chars = string.split('');
		chars[i] = chars[i].toUpperCase();
		out.push(chars.join(''));
	}

	return out;
}

console.log(wave("hel lo"));