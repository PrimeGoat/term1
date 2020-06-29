const database = {
	english: "Hey"
};

function test(index) {
	return database[index] && "Welcome";
}

console.log(test("english"));