const config = {
	timeDelay: 100,
	maxLength: 10,
	size: {
		min: 5,
		max: 10,
	},
	direction: [
		{ x: 1 },
		{ x: -1 },
		{ y: 1 },
		{ y: -1 },
	],
	objects: {
		square: {},
		circle: {},
		triangle: {},
	},
};

export default config;
