const titles = [
	'The Lord of the Rings',
	'Equilibrium',
	'The Island',
	'Game of Thrones'
];

function changeTitles(entries) {
	const out = [];

	for(let i = 0; i < entries.length; i++) {
		out.push(removeThe(entries[i]));
	}

	return out;
}

function removeThe(name) {
	if(name.toLowerCase().startsWith("the ")) {
		return name.slice(3).trimStart() + ", The";
	} else {
		return name;
	}
}

console.log(changeTitles(titles));