// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
	let oldest = ages[0];
	let oldest2 = ages[0];
	
	for(num of ages) {
	  if(num > oldest) {
		oldest = num;
	  }
	}
	for(num of ages) {
	  if(num > oldest2 && num != oldest) {
		oldest2 = num;
	  }
	}
	return [oldest, oldest2];
  }

console.log(twoOldestAges([1, 2, 67, 3, 9, 777]));