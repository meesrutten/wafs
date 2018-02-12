import animations from './animations';

function Magic(node, animationName) {
	
	const transitions = animations;

	return function () {
		const options = transitions[animationName];
		node.animate(...options);
	}
}

export default Magic