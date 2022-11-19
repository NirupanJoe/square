
const Ticker = {
	masterLoop: [
		'setObject',
		'setMoveObject',
	],

	runMasterLoop: (context) => Ticker.masterLoop.forEach((fn) =>
		context.actions[fn]()),

	start: (context) => {
		const { config: { timeDelay }} = context;

		setInterval(() => Ticker.runMasterLoop(context), timeDelay);
	},
};

export default Ticker;
