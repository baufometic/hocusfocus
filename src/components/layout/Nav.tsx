/* eslint-disable no-console */
import { useEffect, useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faChartBar } from "@fortawesome/free-solid-svg-icons";
import { Log, MATH, SASS, ScarabSVG } from "@techandtribal/maximilian";
import { COLOURS } from "theme/themes";
import { Logo } from "components/logo";
/*================================================================================
END OF IMPORTS AND CONFIGS
================================================================================*/

const NavLayout = styled.nav`
	//* { border: 1px solid orange !important; }
	${ SASS.fullsize };
	border-bottom: 1px solid ${ COLOURS.green0 };
	cursor: pointer;
	display: grid;
	gap: 5px;
	grid-template: 1fr / 1fr;

	ul {
		${ SASS.fullsize };
		align-items: center;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-evenly;

		//*_____ DROPDOWN _____	
		// Glyph SVG's
		> .hasDropDown:nth-child(1n) > .dropDown {
			--colour: ${ COLOURS.petrolBlue };

			.icon {
				fill: var(--colour);
			}

			@keyframes animZigZag {
				from {
					background: linear-gradient(-45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
				}
				to {
					background: linear-gradient(45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
				}
			}

			.gutter > .zigzag:nth-of-type(odd) {
				//background-image: linear-gradient(-45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
				animation: animZigZag;
				animation-duration: 2000ms;
				animation-timing-function: ease-in-out;
				animation-iteration-count: infinite;
			}
			.gutter > .zigzag:nth-of-type(even) {
				//background-image: linear-gradient(45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
			}
		}

		> .hasDropDown:nth-child(2n) > .dropDown {
			--colour: ${ COLOURS.green0 };

			.icon {
				fill: var(--colour);
			}
			.gutter > .zigzag:nth-of-type(odd) {
				background-image: linear-gradient(-45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
			}
			.gutter > .zigzag:nth-of-type(even) {
				background-image: linear-gradient(45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
			}
		}
		
		> .hasDropDown:nth-child(3n) > .dropDown {
			--colour: orange;

			.icon {
				fill: var(--colour);
			}
			.gutter > .zigzag:nth-of-type(odd) {
				background-image: linear-gradient(-45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
			}
			.gutter > .zigzag:nth-of-type(even) {
				background-image: linear-gradient(45deg, rgba(0,0,0,0) 48%, var(--colour) 50%, rgba(0,0,0,0) 52%);
			}
		}
		
		//* MENU ITEMS
		li {
			${ SASS.fullsize };
			${ SASS.flexCenterColumn };
			position: relative; // required so link::after can take on its size
	
			//* links both next/link and fake ones
			.link {
				${ SASS.flexCenterColumn };
				color: blue; // fallback x error spotting
				font-family: "Open Sans Light", sans-serif;
				font-size: 1rem;
				text-transform: uppercase;
				transition: cubic-bezier(0.075, 0.82, 0.165, 1);
				transition-duration: 300ms;
				width: 100%;

				&.inactive {
					color: ${ ({ theme }) => theme.fgColours.menuItem };
					transition: 300ms ease-in;
				}

				&.active {
					color: ${ COLOURS.green0 };
					transition: 300ms ease-in;
				}

				&:hover {
					color: ${ COLOURS.green0 };
				}

				/* This is a moving underline */
				&::after {
					color: green;
					content: '';
					display: block;
					height: 2px;
					left: 0;
					position: absolute;
					top: calc(${ ({ theme }) => theme.headerHeight } - ${ ({ theme }) => theme.headerPanel2Height });
					transform: scaleX(0);
					transform-origin: 100% 50%;
					transition: cubic-bezier(0.075, 0.12, 0.365, 1);
					transition-duration: 700ms;
					width: 100%;
					z-index: 10000000;
					
					animation: ${ keyframes`
						from {
							background-color: ${ COLOURS.green0 };
							box-shadow:
								0 0 5px		${ COLOURS.green0 },
								0 0 25px 	${ COLOURS.green0 },
								0 0 50px 	${ COLOURS.green0 },
								0 0 200px	${ COLOURS.green0 };
						}
						to {
							background-color: ${ COLOURS.petrolBlue };
							box-shadow:
								0 0 5px		${ COLOURS.petrolBlue },
								0 0 25px 	${ COLOURS.petrolBlue },
								0 0 50px 	${ COLOURS.petrolBlue },
								0 0 200px	${ COLOURS.petrolBlue };
						}
					` } cubic-bezier(0.68, 0.55, 0.80, 0.85) 800ms alternate infinite;
				}
				
				&:hover::after {
					transform: scaleX(1);
					transform-origin: 0 50%;
				}
			}

			.dropDown {
				&:before {
					content: "";
					height: ${ ({ theme })=>theme.headerPanel2Height };
					left: 0;
					position: absolute;
					top: -${ ({ theme }) => theme.headerPanel2Height };
					width: 100%;
				}

				background-color: ${ ({ theme }) => theme.bgColours.header };
				border-bottom-left-radius: 5px;
				border-bottom-right-radius: 15px;
				box-shadow:
					-5px -5px 10px rgba(255, 255, 255, 0.05),
					5px 5px 15px rgba(0, 0, 0, 0.5);
				color: white;
				opacity: 0;
				padding: 15px;
				position: absolute;
				top: 0;
				transform: translateY(calc(${ ({ theme }) => theme.headerHeight } + 10px));
				visibility: hidden;
				z-index: 100;

				display: grid;
				grid-template-areas: "_icon _icon" "_gutter _content";
				grid-template-columns: 30px 1fr;
				grid-template-rows: 30px 1fr;
				
				&.show {
					opacity: 1;
					transform: translateY(${ ({ theme }) => theme.headerHeight });
					transition: 400ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
					visibility: visible;
				}

				.gutter {
					display: flex;
					flex-direction: column;
					grid-area: _gutter;

					.zigzag {
						height: 100%;
						width: 100%;
					}
				}
				
				.icon {
					grid-area: _icon;
					height: 30px;
					justify-self: center;
					width: 30px;
				}
				
				.subitems {
					${ SASS.flexCenterColumn };
					grid-area: _content;
					
					.item {
						height: 100%;
						padding: 5px 0;
						padding-left: 10px;
						text-transform: uppercase;
						white-space: nowrap;
						width: 100%;
					}
				}
			}
		}

		.authContainer {
			${ SASS.fullsize };
			align-items: center;
			display: flex;
			justify-content: space-around;

			> * {
				color: white;
				padding-left: 7px;
				
				.shake {
					@keyframes animShake {
						0% { transform: translate(1px, 1px) rotate(0deg); }
						10% { transform: translate(-1px, -2px) rotate(-1deg); }
						20% { transform: translate(-3px, 0px) rotate(1deg); }
						30% { transform: translate(3px, 2px) rotate(0deg); }
						40% { transform: translate(1px, -1px) rotate(1deg); }
						50% { transform: translate(-1px, 2px) rotate(-1deg); }
						60% { transform: translate(-3px, 1px) rotate(0deg); }
						70% { transform: translate(3px, 1px) rotate(-1deg); }
						80% { transform: translate(-1px, -1px) rotate(1deg); }
						90% { transform: translate(1px, 2px) rotate(0deg); }
						100% { transform: 0; }
					}

					@keyframes animChangeColour {
						from { color: orange; }
					}

					animation: animShake 500ms ease-out forwards, animChangeColour 1500ms ease-in-out forwards;
				}
			}
		}
	}
`;

type T_navItem = {
	item: T_menuItem;
	currentRoute: string;
};

const NavItem = ({ item, currentRoute }: T_navItem) => {
	const [ showDropDown, setShowDropDown ] = useState<boolean>(false);

	const HandleShowDropDown = () => (setShowDropDown(true));
	const HandleHideDropDown = () => (setShowDropDown(false));
	
	useEffect(() => {
		Log.StateChange(
			`item: ${ item.name } | showDropdown: ${ showDropDown }`,
			"NavItem"
		);
	}, [ item, showDropDown ]);

	//* link = normal static style (styled inside of NavLayout)
	const classes = `
		link
		${ item.goesTo === currentRoute? "active" : "inactive" }
	`;

	return(
		<li
			className={ `${ item.subItems? "hasDropDown" : "" }` }
			onMouseEnter={ item.subItems && HandleShowDropDown }
			onMouseLeave={ item.subItems && HandleHideDropDown }>

			{ /* Fake link if the item doesn't go anywhere, otherwise Next Link */ }
			{ item.goesTo && <Link href={ item.goesTo }><a className={ classes }>{ item.name }</a></Link> }
			{ !item.goesTo && <div className={ classes }>{ item.name }</div> }

			{ item.subItems && (
				<div className={ `dropDown ${ showDropDown ? "show" : "" }` }>
					<div className="gutter">
						{ item.subItems.map(r => <div className="zigzag" key={ r.name } />) }
					</div>
					<ScarabSVG className="icon" />
					<div className="subitems">
						{ item.subItems.map((item, idx) => (
							<Link href={ item.goesTo } key={ item + " " + idx }>
								<a className="item">
									{ item.name }
								</a>
							</Link>
						)) }
					</div>
				</div>
			) }
		</li>
	);
};

type T_menuItem = {
	name: string;
	goesTo: string | null;
	subItems?: Array<{
		name: string;
		goesTo: string;
	}>
};

const menuItems: T_menuItem[] = [
	{
		name   : "home",
		goesTo : "/"
	},
	{
		name   : "articles",
		goesTo : "/articles"
	},
	{
		name   : "app",
		goesTo : "/app"
	},
	{
		name   : "temp",
		goesTo : "/temp"
	},
	{
		name   : "concept",
		goesTo : "/concept",
		get subItems() {
			const prefix = "/concept";
			return [
				{
					name   : "concept a",
					goesTo : prefix + "/articles"
				},
				{
					name   : "concept b",
					goesTo : prefix + "/articles"
				},
				{
					name   : "mission",
					goesTo : prefix + "/articles"
				}
			];
		}
	},
	{
		name   : "about",
		goesTo : "/about",
		get subItems() {
			const prefix = "/about";
			return [
				{
					name   : "team",
					goesTo : prefix + "/team"
				},
				{
					name   : "contact",
					goesTo : prefix + "/contact"
				},
				{
					name   : "mission",
					goesTo : prefix + "/mission"
				},
				{
					name   : "privacy",
					goesTo : prefix + "/privacy"
				},
				{
					name   : "cookies",
					goesTo : prefix + "/cookies"
				}
			];
		}
	}
];

const NO_OF_MENU_ITEMS = menuItems.length;
const MENU_HALFWAY_POINT = NO_OF_MENU_ITEMS / 2;
console.log(`Menu items: ${ NO_OF_MENU_ITEMS }`);
if (!MATH.IsEven(NO_OF_MENU_ITEMS)) throw new Error(`No of menu items: ${ NO_OF_MENU_ITEMS }. Should be an even number.`);

// TODO rem console log switch to Log.X{ children }
export const Nav = withRouter(({ router }) => {
	const { pathname } = router;
	Log.Testing(`currently active route: ${ pathname }`);

	return(
		<NavLayout>
			<ul>
				{ menuItems.slice(0, MENU_HALFWAY_POINT).map((item, idx) => (
					<NavItem
						item={ item }
						key={ `${ item.name } ${ item.goesTo } ${ idx }` }
						currentRoute={ router.pathname }
					/>
				)) }
				<Logo initialString="t" />
				{ menuItems.slice(-MENU_HALFWAY_POINT).map((item, idx) => (
					<NavItem
						item={ item }
						key={ `${ item.name } ${ item.goesTo } ${ idx }` }
						currentRoute={ router.pathname }
					/>
				)) }
				<div className="authContainer">
					<Link href="/login">
						<a><FontAwesomeIcon icon={ faKey } /></a>
					</Link>
					<Link href="/register">
						<a><FontAwesomeIcon icon={ faChartBar } /></a>
					</Link>
				</div>
			</ul>
		</NavLayout>
	);
});
