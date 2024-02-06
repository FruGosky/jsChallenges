const s = 80; // km/h
const distances = [10, 30, 20]; // km
const time = distances.reduce(
	(acc, distance) => (acc += Math.floor((distance / s) * 60)),
	0
); // in min

console.log(Math.pow(time, 2));
