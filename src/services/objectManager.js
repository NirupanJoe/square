import { keys, map } from '@laufire/utils/collection';
import { rndBetween, rndValue } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;

const ObjectManager = {

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

	getObject: ({ config: { objects: shape, size: { min, max },
		maxLength, direction }, state: { objects }}) => {
		const size = rndBetween(min, max);
		const type = rndValue(keys(shape));

		return objects.length < maxLength
			? [...objects,
				{
					type: type,
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
					direction: rndValue(direction),
				}]
			: objects;
	},

	moveObject: ({ state: { objects }}) => objects.map((object) => ({
		...object,
		...map(object.direction, (value, key) => value + object[key]),
	})),

};

export default ObjectManager;
