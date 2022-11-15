import { rndBetween } from '@laufire/utils/random';

const screenMaxSize = 100;
const two = 2;

const ObjectManager = {

	getPosition: ({ config: { object: { size: { min, max }}}}) => {
		const size = rndBetween(min, max);

		return {
			size: size,
			x: rndBetween(size / two, screenMaxSize - (size / two)),
			y: rndBetween(size / two, screenMaxSize - (size / two)),
		};
	},
};

export default ObjectManager;
