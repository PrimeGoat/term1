var orderedCount = function (text) {
	let stats = [];

	for(char of text) {
		let found = false;
		for(let i = 0; i < stats.length; i++) {
			if(stats[i][0] == char) {
				stats[i][1]++;
				found = true;
			}
		}
		if(!found) {
			stats.push([char, 1]);
		}
	}

	return stats;
}