import { rndBetween } from '@laufire/utils/random';

const screenMaxSize = 100;

const ObjectManager = {

	getPosition: ({ config: { object: { size: { min, max }}}}) => {
		const size = rndBetween(min, max);

		return {
			size: size,
			x: Math.abs(rndBetween(0, screenMaxSize) - size),
			y: Math.abs(rndBetween(0, screenMaxSize) - size),
		};
	},
};

export default ObjectManager;
