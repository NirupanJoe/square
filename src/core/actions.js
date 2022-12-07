import ObjectManager from '../services/objectManager';

const actions = {
	setObject: (context) => ({
		objects: ObjectManager.getObject(context),
	}),

	setMoveObject: (context) => ({
		objects: ObjectManager.moveObject(context),
	}),

	setRndColor: (context) => ({
		objects: ObjectManager.addRndColor(context),
	}),
};

export default actions;
