export default {
show: [
		[
			{ transform: 'scale(0) translateY(-10%)', opacity: 0
			},
			{ transform: 'scale(1) translateY(0)', opacity: 1
			}
		],
		{
		duration: 300,
		iterations: 1,
		easing: 'ease-out',
		fill: 'forwards',
		delay: 300,
		}
	],
hide: [
		[
			{ transform: 'scale(1) translateY(0)', opacity: 1
			},
			{ transform: 'scale(0) translateY(-10%)', opacity: 0
			}
		],
		{
		duration: 300,
		iterations: 1,
		easing: 'ease-in',
		fill: 'forwards',
		},
	]
}