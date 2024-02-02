const w = 5;
const n = 3;
const s = ['#', '&', '0', '*'];
const [l, r, b, f] = s;

const t = [('' + l).padEnd(w, ' '), (l + r).padEnd(w, ' ')];

if (w < 3) process.exit(400);

for (let j = 3; j < w; j++) t.push((l + f.repeat(j - 2) + r).padEnd(w, ' '));

t.push((l + b.repeat(w - 2) + r).padEnd(w, ' '));

t.forEach((x) => console.log(x.repeat(n)));
