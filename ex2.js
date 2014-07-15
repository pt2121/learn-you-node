console.log(process.argv.slice(2).reduce(function(acc, current, i, arr) {
	return acc + parseInt(current);
}, 0))
