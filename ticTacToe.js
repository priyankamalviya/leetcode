function tictactoe() {
	let rowCounter = [];
	let colCounter = [];
	let diagLeft = 0;
	let diagRight = 0;
	let length = n;

	function move (row, col, player) {
		let move = player === 1? 1: -1;
		rowCounter[row] += move;
		colCounter[col] += move;
		if(row === col) {
			diagLeft +=move;
		}
		if(row === n-col-1) {
			diagRight += move;
		} 
		if(rowCounter ===n || colCounter ===n || diagLeft ===n || diagRight ===n) {
			return 1;
		} else if(rowCounter === -n || colCounter === -n || diagLeft === -n || diagRight === -n){
			return 2;
		}else {
			return 0;
		}
	}
}