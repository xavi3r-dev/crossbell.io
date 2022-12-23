import React from "react";

export const XFeedLogo = React.forwardRef<
	SVGSVGElement,
	React.SVGAttributes<SVGSVGElement>
>((props, ref) => (
	<svg
		width="37"
		height="36"
		viewBox="0 0 37 36"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
		ref={ref}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M23.0374 7.2464C22.9495 5.44116 21.8769 3.91545 20.2028 3.28731C18.4273 2.62116 16.4292 3.12788 15.0615 4.65681C14.5692 5.20717 14.0947 5.78512 13.647 6.37575C12.768 7.53518 11.3054 8.28506 9.71675 8.37152C8.83098 8.41973 8.07045 8.48646 7.40872 8.56562C4.22711 8.94627 1.94045 11.1417 1.41701 13.6633C1.18034 14.8034 1 16.0937 1 17.3579C1 18.6222 1.18034 19.9125 1.41701 21.0526C1.94045 23.5741 4.22711 25.7697 7.40872 26.1502C8.07045 26.2293 8.83098 26.2962 9.71675 26.3443C11.3054 26.4309 12.768 27.1808 13.647 28.3402C14.0947 28.9306 14.5692 29.5086 15.0615 30.059C16.4292 31.588 18.4273 32.0948 20.2028 31.4286C21.8769 30.8005 22.9495 29.2746 23.0374 27.4694C23.1581 24.9885 23.2548 21.6588 23.2548 17.3579C23.2548 13.0571 23.1581 9.72736 23.0374 7.2464Z"
			fill="#FFDF99"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M33.0244 19.0242C33.0244 16.8413 32.5042 14.6869 31.5027 12.6904C31.1948 12.0768 30.4405 11.8253 29.8179 12.1287C29.1953 12.4321 28.9402 13.1755 29.248 13.7892C30.0831 15.4539 30.5092 17.2332 30.5092 19.0242C30.5092 20.8153 30.0831 22.5946 29.248 24.2592C28.9402 24.8729 29.1953 25.6164 29.8179 25.9198C30.4405 26.2233 31.1948 25.9717 31.5027 25.3581C32.5042 23.3615 33.0244 21.2072 33.0244 19.0242ZM28.4157 22.4909C29.3728 20.2689 29.3728 17.8459 28.4157 15.6238C28.1442 14.9937 27.4059 14.6997 26.7666 14.9673C26.1273 15.2348 25.8291 15.9625 26.1005 16.5926C26.7909 18.1955 26.7909 19.9192 26.1005 21.5221C25.8291 22.1523 26.1273 22.88 26.7666 23.1475C27.4059 23.415 28.1442 23.121 28.4157 22.4909Z"
			fill="#F6C549"
		/>
	</svg>
));
