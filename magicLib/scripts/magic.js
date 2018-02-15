import * as animations from './magic';

function Magic(node, animationName) {

	const options = animations[animationName];

	const keyFrameEffect = new KeyframeEffect(node, ...options);
	return new Animation(keyFrameEffect, document.timeline)
}


export default Magic