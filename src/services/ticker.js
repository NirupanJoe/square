import ObjectManager from './objectManager';

const Ticker = {
	start: (context) => {
		const { config: { timeDelay }, patchState } = context;

		setInterval(() => patchState({
			objects: ObjectManager.getObject(context),
		}), timeDelay);
	},
};

export default Ticker;
