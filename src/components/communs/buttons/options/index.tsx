import "./style.scss";

const ButtonOptions = () => {
	return (
		<div className="button-options">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="46"
				height="47"
				viewBox="0 0 46 47"
			>
				<defs>
					<filter
						id="Rectangle_22"
						x="0"
						y="0"
						width="46"
						height="47"
						filterUnits="userSpaceOnUse"
					>
						<feOffset dy="4" />
						<feGaussianBlur stdDeviation="3.5" result="blur" />
						<feFlood floodColor="#6cd9aa" floodOpacity="0.271" />
						<feComposite operator="in" in2="blur" />
						<feComposite in="SourceGraphic" />
					</filter>
				</defs>
				<g
					id="Button_-_MoreOptions"
					data-name="Button - MoreOptions"
					transform="translate(10.5 6.5)"
				>
					<g
						transform="matrix(1, 0, 0, 1, -10.5, -6.5)"
						filter="url(#Rectangle_22)"
					>
						<path
							id="Rectangle_22-2"
							data-name="Rectangle 22"
							d="M11.607,0h0A13.393,13.393,0,0,1,25,13.393v3.679A8.929,8.929,0,0,1,16.071,26H4.464A4.464,4.464,0,0,1,0,21.536V11.607A11.607,11.607,0,0,1,11.607,0Z"
							transform="translate(10.5 6.5)"
							fill="#6ad9a8"
						/>
					</g>
					<g id="Group_3649" data-name="Group 3649" transform="translate(11 8)">
						<circle
							id="Ellipse_5"
							data-name="Ellipse 5"
							cx="1.5"
							cy="1.5"
							r="1.5"
							fill="#383838"
						/>
						<circle
							id="Ellipse_6"
							data-name="Ellipse 6"
							cx="1.5"
							cy="1.5"
							r="1.5"
							transform="translate(0 4)"
							fill="#383838"
						/>
						<circle
							id="Ellipse_7"
							data-name="Ellipse 7"
							cx="1.5"
							cy="1.5"
							r="1.5"
							transform="translate(0 8)"
							fill="#383838"
						/>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default ButtonOptions;
