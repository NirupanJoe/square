import { keys } from '@laufire/utils/collection';
import { rndBetween, rndValue } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;

const ObjectManager = {

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

	getObject: ({ config: { objects: shape, size: { min, max },
		maxLength, directions }, state: { objects }}) => {
		const size = rndBetween(min, max);
		const type = rndValue(keys(shape));

		return objects.length < maxLength
			? [...objects,
				{
					type: type,
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
					direction: rndValue(keys(directions)),
				}]
			: objects;
	},

	isXAxis: (direction) => direction === 'left' || direction === 'right',

	getMovingPosition: ({ config: { directions }, data }, axis) => (
		axis >= maxSize + data.size
			? Math.abs(maxSize - axis)
			: axis <= -data.size
				? axis + maxSize
				: axis + directions[data.direction]
	),

	moveObject: (context) =>
		context.state.objects.map((object) => ({
			...object,
			...ObjectManager.isXAxis(object.direction)
				? { x: ObjectManager
					.getMovingPosition({ ...context, data: object }, object.x) }
				: { y: ObjectManager
					.getMovingPosition({ ...context, data: object }, object.y) }
			,
		})),

};

export default ObjectManager;
