const s = 80;
const d = [10, 30, 20];
console.log(d.reduce((a, d) => (a += Math.floor((d / s) * 60)), 0));
