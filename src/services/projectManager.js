import ObjectManager from './objectManager';

const maxPosition = 100;

const ProjectManager = {
	getPosition: ({ config, data }) => (ObjectManager.isXAxis(data.direction)
		? data.x - (config.directions[data.direction] * maxPosition)
		: data.y - (config.directions[data.direction] * maxPosition)),

};

export default ProjectManager;
