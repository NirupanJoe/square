import { keys } from '@laufire/utils/collection';
import { rndBetween, rndValue } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;

const ObjectManager = {

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

	getObject: ({ config: { objects: shape, size: { min, max }, maxLength },
		state: { objects }}) => {
		const size = rndBetween(min, max);
		const type = rndValue(keys(shape));

		return objects.length < maxLength
			? [...objects,
				{
					type: type,
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
				}]
			: objects;
	},

	moveObject: ({ state: { objects }}) => objects.map((object) => ({
		...object,
		x: object.x + 1,
	})),

};

export default ObjectManager;
