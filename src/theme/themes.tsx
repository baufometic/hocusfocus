import { useEffect, useMemo, useState } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import { LifecycleWrapper, Log, MakeObservablePro, Random } from "@techandtribal/maximilian";

type T_colours<Obj> = {
	[key in keyof Obj]: `rgba(${ number },${ number },${ number }, ${ number })`;
};

//!__________ EDIT ONLY THESE __________
const __colours = {
	electricPurple : "rgba(191,0,255, 1)",
	green0         : "rgba(89,238,89, 1)",
	orange0        : "rgba(255,165,0, 1)",
	petrolBlue     : "rgba(16,98,122, 1)",
	tronWhite      : "rgba(230,255,255, 1)"
} as const;
//!_______________________________________

export const COLOURS: T_colours<typeof __colours> = __colours;
/*================================================================================
END OF COLOUR THEMES
================================================================================*/

type T_bgColourKeys =
	"actionButton" |
	"footer" |
	"header" |
	"headerTop" |
	"logoContainer" |
	"logoIcon" |
	"main" |
	"menuItemAnim" |
	"menuItemUnderline"
type T_boxShadowKeys =
	"actionButton" |
	"logo" |
	"main" |
	"menuItemAnim";
type T_buttonKeys = "headerTop";
type T_fgColourKeys =
	"aboutUsText" |
	"aboutUsTitle" |
	"actionButton" |
	"bottomOfPage" |
	"contactInfo" |
	"footer" |
	"generalTitles" |
	"headerTop" |
	"logoText" |
	"mainSubtitle" |
	"mainTitle" |
	"menuItem" |
	"menuItemHover" |
	"statsData" |
	"statsTitle" |
	"ticker";
type T_textShadowKeys = "logo";

//* This overrides Styled Components inbuilt 'styled.' so these styles show up
interface fixedConfig {
	headerHeight: string;
	navHeight: string;
	headerPanel2Height: string;
	footerHeight: string;
}

declare module "styled-components" {
	export interface DefaultTheme extends fixedConfig {
		name: string;
		bgColours: {
			[key in T_bgColourKeys]: string;
		};
		boxShadows: {
			[key in T_boxShadowKeys]: string;
		};
		buttons: {
			[key in T_buttonKeys]: string;
		};
		fgColours: {
			[key in T_fgColourKeys]: string;
		};
		textShadows: {
			[key in T_textShadowKeys]: string;
		};
	}
}

const fixedConfig = {
	//! Ensure these 
	headerHeight       : "60px",
	navHeight          : "30px",
	headerPanel2Height : "30px", // these 2x need to add up to headerHeight 
	footerHeight       : "40px"
};

const themesArray: DefaultTheme[] = [
	{
		...fixedConfig,
		name      : "terracotta",
		bgColours : {
			"headerTop"         : "rgb(12,20,31)",
			"header"            : "rgb(12,20,31)",
			"logoContainer"     : "rgb(12,20,31)",
			"logoIcon"          : "#cc7f60",
			"actionButton"      : "#cc7f60",
			"main"              : "#d8f5c4",
			"menuItemAnim"      : "teal",
			"menuItemUnderline" : "teal",
			"footer"            : "rgb(12,20,31)"
		},
		boxShadows: {
			"actionButton" : "3px 4px 40px 0px #cc7f60",
			"logo"         : "5px 10px 40px 0px #cc7f60",
			"main"         : "-2px -2px 15px 7px rgba(0,0,0,0.6) inset",
			"menuItemAnim" : `
				0 0 5px   #cc7f60,
				0 0 25px  #cc7f60,
				0 0 50px  #cc7f60,
				0 0 200px #cc7f60;
			`
		},
		buttons: {
			"headerTop": `
				background-color: #cc7f60;
				background: linear-gradient(14deg, #cc7f60 35%, #cc7f60 67%, #cc7f60 100%);
				color: white;
			`
		},
		fgColours: {
			"headerTop"     : "#cc7f60",
			"logoText"      : "white",
			"actionButton"  : "black",
			"menuItem"      : "white",
			"menuItemHover" : "teal",
			"mainTitle"     : "#cc7f60",
			"mainSubtitle"  : "white",
			"contactInfo"   : "#cc7f60",
			"aboutUsTitle"  : "#cc7f60",
			"aboutUsText"   : "white",
			"statsData"     : "white",
			"statsTitle"    : "#cc7f60",
			"bottomOfPage"  : "white",
			"generalTitles" : "#cc7f60",
			"footer"        : "white",
			"ticker"        : "white"
			
		},
		textShadows: {
			"logo": "0px 1px 12px rgb(233 150 25)"
		}
	},
	{
		...fixedConfig,
		name      : "light",
		bgColours : {
			"headerTop"         : "white",
			"header"            : "white",
			"logoContainer"     : "white",
			"logoIcon"          : "white",
			"actionButton"      : "black",
			"main"              : "white",
			"menuItemAnim"      : "grey",
			"menuItemUnderline" : "grey",
			"footer"            : "white"
		},
		fgColours: {
			"headerTop"     : "white",
			"logoText"      : "white",
			"actionButton"  : "black",
			"menuItem"      : "white",
			"menuItemHover" : "grey",
			"mainTitle"     : "black",
			"mainSubtitle"  : "#6d5656",
			"contactInfo"   : "black",
			"aboutUsTitle"  : "black",
			"aboutUsText"   : "#6d5656",
			"statsData"     : "#6d5656",
			"bottomOfPage"  : "#6d5656",
			"footer"        : "white",
			"ticker"        : "white",
			"generalTitles" : "black",
			"statsTitle"    : "black"
		},
		buttons: {
			headerTop: `
				background-color: black;
				background: linear-gradient(14deg, black 35%, black 67%, black 100%);
				color: white;
			`
		},
		textShadows: {
			"logo": "0px 1px 12px black"
		},
		boxShadows: {
			"actionButton" : "3px 4px 40px 0px black",
			"logo"         : "5px 10px 40px 0px black",
			"main"         : "-2px -2px 15px 7px rgba(0,0,0,0.6) inset",
			"menuItemAnim" : `
				0 0 5px   black,
				0 0 25px  black,
				0 0 50px  black,
				0 0 200px black;
			`
		}
	},
	{
		...fixedConfig,
		name      : "teal",
		bgColours : {
			"headerTop"         : "white",
			"header"            : "white",
			"logoContainer"     : "white",
			"logoIcon"          : "black",
			"actionButton"      : "teal",
			"main"              : "black",
			"menuItemAnim"      : "black",
			"menuItemUnderline" : "black",
			"footer"            : "white"
		},
		fgColours: {
			"headerTop"     : "teal",
			"logoText"      : "black",
			"actionButton"  : "white",
			"menuItem"      : "black",
			"menuItemHover" : "black",
			"mainTitle"     : "teal",
			"mainSubtitle"  : "black",
			"contactInfo"   : "teal",
			"aboutUsTitle"  : "teal",
			"aboutUsText"   : "black",
			"statsData"     : "black",
			"bottomOfPage"  : "black",
			"footer"        : "teal",
			"generalTitles" : "teal",
			"statsTitle"    : "teal",
			"ticker"        : "black"
		},
		buttons: {
			"headerTop": `
				background-color: teal;
				background: linear-gradient(14deg, teal 35%, teal 67%, teal 100%);
				color: white;
			`
		},
		textShadows: {
			"logo": "0px 1px 12px white"
		},
		boxShadows: {
			"actionButton" : "3px 4px 40px 0px teal",
			"logo"         : "5px 10px 40px 0px teal",
			"main"         : "-2px -2px 15px 7px rgba(0,0,0,0.6) inset",
			"menuItemAnim" : `
				0 0 5px   teal,
				0 0 25px  teal,
				0 0 50px  teal,
				0 0 200px teal;
			`
		}
	}
];

const NO_OF_THEMES = themesArray.length;
Log.Message(`There are ${ NO_OF_THEMES } available themes: ${ themesArray.map(theme => theme.name).join(", ") }`);
/*================================================================================
END OF RAW THEME DATA
================================================================================*/

/** Decrements the theme index, and returns the new value */
const DecrementThemeIndex = (prevIdx: number): number => prevIdx === 0 ? NO_OF_THEMES - 1 : prevIdx - 1;

/** Increments the theme index, and returns the new value */
const IncrementThemeIndex = (prevIdx: number): number => prevIdx === NO_OF_THEMES - 1 ? 0 : prevIdx + 1;

/** Sets the theme index to random, and returns the new value */
const RandomThemeIndex = (): number => Random.NumberBetween(0, NO_OF_THEMES - 1);
/*================================================================================
END OF ACTIONS
================================================================================*/

const combinedThemeData: {
	currentThemeIndex: number;
	themeObj: DefaultTheme;
	updateCount: number;
	wireframe: null | string;
} = {
	currentThemeIndex : 0,
	themeObj          : themesArray[0], // currentThemeIndex
	updateCount       : 0,
	wireframe         : null
};

const themeStore = MakeObservablePro(combinedThemeData);

export const useTheme = () => {
	const [ state, setState ] = useState<typeof combinedThemeData>(themeStore.Get());

	useEffect(() => {
		return themeStore.Subscribe(setState);
	}, []);

	const actions = useMemo(() => ({
		PreviousTheme: () => {
			const newIdx = DecrementThemeIndex(state.currentThemeIndex);
			themeStore.Set({
				...state,
				currentThemeIndex : newIdx,
				updateCount       : state.updateCount + 1,
				themeObj          : { ...themesArray[newIdx] }
			});
		},
		NextTheme: () => {
			const newIdx = IncrementThemeIndex(state.currentThemeIndex);
			themeStore.Set({
				...state,
				currentThemeIndex : newIdx,
				updateCount       : state.updateCount + 1,
				themeObj          : { ...themesArray[newIdx] }
			});
		},
		RandomTheme: () => {
			themeStore.Set({
				...state,
				updateCount : state.updateCount + 1,
				themeObj    : { ...themesArray[RandomThemeIndex()] }
			});
		},
		ToggleWireframe: () => {
			themeStore.Set({
				...state,
				wireframe: state.wireframe === null ? "* { border: 1px solid rgba(173, 28, 173, 0.775) !important; }" : null // toggle back to null
			});
		}
	}), [ state ]);

	return {
		state,
		actions
	};
};

interface I_themeProviderWrapper {
	children?: React.ReactNode
}

export const ThemeProviderWrapper: React.FC<I_themeProviderWrapper> = ({ children }) => {
	const { state } = useTheme();

	return(
		<LifecycleWrapper name="ThemeProviderWrapper">
			<ThemeProvider theme={ state.themeObj }>
				{ children }
			</ThemeProvider>
		</LifecycleWrapper>
	);
};	

export const ThemeButtons: React.FC = () => {
	const { state, actions } = useTheme();
	
	return(
		<LifecycleWrapper name="theme buttons">
			<div>
				<button onClick={ () => actions.ToggleWireframe() }>
					{ `${ state.wireframe === null ? "Enable" : "Disable" } Wireframe` }
				</button>
				<button onClick={ () => actions.PreviousTheme() }>
					{ state.themeObj.name }
				</button>
				<button onClick={ () => actions.NextTheme() }>
					{ state.themeObj.name }
				</button>
				<button onClick={ () => actions.RandomTheme() }>
					{ "Random Theme" }
				</button>
			</div>
		</LifecycleWrapper>
	);
};
