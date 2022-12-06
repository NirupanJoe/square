const config = {
	idLength: 6,
	timeDelay: 100,
	maxLength: 10,
	size: {
		min: 5,
		max: 10,
	},
	directions: {
		top: -1,
		bottom: 1,
		left: 1,
		right: -1,
	},
	objects: {
		square: {},
		circle: {},
		triangle: {},
	},
};

export default config;
