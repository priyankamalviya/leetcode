Rx.Observable
	.from([1,2,3])
	.map(x => x *3)
	.subscribe(x => console.log(x))

// output - 3,6,9