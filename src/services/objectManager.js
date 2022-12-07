import { equals, keys } from '@laufire/utils/collection';
import { rndBetween, rndString, rndValue } from '@laufire/utils/random';

const maxSize = 100;
const two = 2;
const maxHue = 360;

const ObjectManager = {

	rndPositionValue: (size) => rndBetween(size / two, maxSize - (size / two)),

	addObject: ({ config: { idLength, size: { min, max },
		objects, directions }}) => {
		const size = rndBetween(min, max);
		const type = rndValue(keys(objects));

		return (
			{
				...objects[type],
				id: rndString(idLength),
				type: type,
				size: size,
				x: ObjectManager.rndPositionValue(rndBetween(min, max)),
				y: ObjectManager.rndPositionValue(rndBetween(min, max)),
				direction: rndValue(keys(directions)),
			}
		);
	},

	getObject: (context) => (
		context.state.objects.length < context.config.maxLength
			? [...context.state.objects, ObjectManager.addObject(context)]
			: context.state.objects),

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
