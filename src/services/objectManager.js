import { rndBetween } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;

const ObjectManager = {

	getObject: ({ config: { objects: { size: { min, max }}, maxLength },
		state: { objects }}) => {
		const size = rndBetween(min, max);

		return objects.length < maxLength
			? [...objects,
				{
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
				}]
			: objects;
	},

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

};

export default ObjectManager;
