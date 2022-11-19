import ObjectManager from '../services/objectManager';

const actions = {
	setObject: (context) => ({
		objects: ObjectManager.getObject(context),
	}),

	setMoveObject: (context) => ({
		objects: ObjectManager.moveObject(context),
	}),
};

export default actions;
