import { rndBetween } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;

const ObjectManager = {

	getObject: ({ config: { object: { size: { min, max }}, maxLength },
		state: { object }}) => {
		const size = rndBetween(min, max);

		return object.length < maxLength
			? [...object,
				{
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
				}]
			: object;
	},

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

};

export default ObjectManager;
