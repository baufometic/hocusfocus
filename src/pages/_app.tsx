/* eslint-disable no-console */
import "../styles/fonts.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";
import {
	DevDashboard,
	GlobalResetComponent,
	LifecycleWrapper,
	SASS
} from "@techandtribal/maximilian";

import { CookieSplash } from "components/prompts/CookieSplash";
import { Header } from "components/layout/Header";
import { Footer } from "components/layout/Footer";
import { ThemeProviderWrapper } from "theme/themes";

type T_appLayoutProps = {
	fullscreen: boolean;
	wireframe: boolean
};

const AppLayout = styled.div<T_appLayoutProps>`
	${ ({ wireframe }) => wireframe && "* { border: 1px solid orange !important; }" };
	
	${ SASS.fullsize };
	${ SASS.hideScrollbars };
	background-color: ${ ({ theme }) => theme.bgColours.main };
	box-shadow: ${ ({ theme }) => theme.boxShadows.main };
	display: grid;
	font-display: block;
	font-family: "Open Sans Regular", sans-serif;
	--headerHeight: ${ ({ theme }) => theme.headerHeight };
	--footerHeight: ${ ({ theme }) => theme.footerHeight };
	grid-template-columns: 1fr;
	grid-template-rows: var(--headerHeight) 1fr var(--footerHeight);
	overflow: scroll;
	transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
	
	// TODO re-enable if no conflict
	//h1 { font-size: 5.9vw; }
	//h2 { font-size: 3.0vh; }
	//p { font-size: 3vmin; }

	header, footer {
		position: relative;
	}

	//* fullscreen using passed in variable - previous method was convoluted and used pageProps then extracted to component props in the app below
	${ ({ fullscreen }) => fullscreen && css`
		grid-template-rows: 1fr;
		header { display: none; }
		footer { display: none; }
	` }
`;

// TODO ensure to change room ID for TW
const App = ({ Component, pageProps }: AppProps) => {
	// * Applies wireframe to pages on demand e.g. site.com/app?wireframe=true
	const { wireframe } = useRouter().query;
	
	// TODO put the Supabase and Lvieblocks wrappers back in
	return(
		<>
			<GlobalResetComponent appContainer="#__next"/>
			<LifecycleWrapper name="App">
				<ThemeProviderWrapper>
					<AppLayout
						fullscreen={ false }
						wireframe={ wireframe === "true" }>
						<Header />
						<Component { ...pageProps } />
						<Footer />
						<CookieSplash />
						<DevDashboard />
					</AppLayout>
				</ThemeProviderWrapper>
			</LifecycleWrapper>
		</>
	);
};

export default App;
