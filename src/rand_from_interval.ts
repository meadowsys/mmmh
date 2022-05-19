function rand_from_interval(low: number, high: number, round = true) {
function rand_from_interval(low: number, high: number, round = false) {
	const num = (Math.random() * Math.abs(high - low)) + low;
	return round ? Math.floor(num) : num;
}

export default rand_from_interval;
