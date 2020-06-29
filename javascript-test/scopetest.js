function say(msg) {
	console.log(msg);
}

setTimeout(say.bind(null, "hello"), 1000);