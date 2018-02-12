import * as animations from './magic/index';

//Polyfill for the landlubbers
if(!window.animate) {
	const script = document.createElement('script')
	script.setAttribute('src', 'https://rawgit.com/web-animations/web-animations-js/master/web-animations.min.js')
	document.body.appendChild(script)
}

function Magic(node, animationName) {

	const parameters = animations;

	const options = parameters[animationName];
	options.unshift(node)

	console.log(...options);

	const keyFrameEffect = new KeyframeEffect(...options);
	// const newTimeLine = new Animation(keyFrameEffect, document.timeline)
	console.log(document.timeline);
	return new Animation(keyFrameEffect , document.timeline)
}

export default Magic