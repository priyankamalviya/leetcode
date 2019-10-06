/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
	// exit if diff length
	if (A.length !== B.length) return false;

	let firstDiff = Math.abs(A.indexOf(A[0]) - B.indexOf(A[0]));

	for (let i = 0; i < A.length; i++) {
		let idxB = B.indexOf(A.charAt(i));
		let diff = Math.abs(i - idxB);
		if (idxB >= 0 && idxB < B.indexOf(A.charAt(0))) {
			diff = Math.abs(i - idxB) + 1;

		}
		if (firstDiff !== diff) return false;
	}
	return true;

};


console.log(rotateString('abcde', 'cdeab'));