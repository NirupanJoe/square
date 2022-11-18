import ObjectManager from './objectManager';

const Ticker = {
	masterLoop: [
		'getObject',
		'moveObject',
	],

	runMasterLoop: (context) => Ticker.masterLoop.forEach((fn) =>
		context.patchState({
			objects: ObjectManager[fn](context),
		})),

	start: (context) => {
		const { config: { timeDelay }} = context;

		setInterval(() => Ticker.runMasterLoop(context), timeDelay);
	},
};

export default Ticker;
