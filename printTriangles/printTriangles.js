const width = 5;
const numberOfTriangles = 3;
const inputs = ['#', '&', '0', '*'];
const [leftSide, rightSide, bottomSide, fill] = inputs;

const triangle = [
	('' + leftSide).padEnd(width, ' '), // First line
	(leftSide + rightSide).padEnd(width, ' '), // Second line
];

if (width < 3) process.exit(400); // Need to be at least 3 bcs first and second row doesn't contains bottom sign

for (let j = 3; j < width; j++) {
	triangle.push(
		(leftSide + fill.repeat(j - 2) + rightSide).padEnd(width, ' ') // Center lines
	);
}

triangle.push(
	(leftSide + bottomSide.repeat(width - 2) + rightSide).padEnd(width, ' ') // Last line
);

triangle.forEach((line) => console.log(line.repeat(numberOfTriangles))); // Show requested triangles horizontally
