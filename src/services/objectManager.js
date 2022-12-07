import { equals, keys } from '@laufire/utils/collection';
import { rndBetween, rndString, rndValue } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;
const maxHue = 360;

const ObjectManager = {

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

	getObject: ({ config: { objects: shape, size: { min, max },
		maxLength, directions, idLength }, state: { objects }}) => {
		const size = rndBetween(min, max);

		return objects.length < maxLength
			? [...objects,
				{
					id: rndString(idLength),
					type: rndValue(keys(shape)),
					size: size,
					x: ObjectManager.rndPositionValue(size),
					y: ObjectManager.rndPositionValue(size),
					direction: rndValue(keys(directions)),
				}]
			: objects;
	},

	isXAxis: (direction) => ['left', 'right'].includes(direction),

	getMovingPosition: ({ config: { directions }, data }, axis) => (
		axis >= maxSize + (data.size / two)
			? Math.abs(maxSize - axis)
			: axis + (axis <= (-data.size / two)
				? maxSize
				: directions[data.direction])
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

	getHslColor: () => ({
		color: `hsl(${ rndBetween(0, maxHue) } ${ rndBetween(0, maxSize) }% ${ rndBetween(0, maxSize) }%)`,
	}),

	addRndColor: (context) => context.state.objects.map((object) => ({
		...object,
		...equals(object.id, context.data.id) && ObjectManager.getHslColor(),
	})),

};

export default ObjectManager;
