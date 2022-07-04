import styled from "styled-components";
import { Nav } from "./Nav";
import { Ticker } from "../Ticker";
import { LifecycleWrapper, Log, SASS } from "@techandtribal/maximilian";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useMediaQueries } from "./mediaQueries";
import { useEffect, useState } from "react";

const StyledHeader = styled.header`
	${ SASS.fullsize };
	background-color: ${ ({ theme }) => theme.bgColours.header };
	display: grid;
	--navHeight: ${ ({ theme }) => theme.navHeight };
	--headerPanel2Height: ${ ({ theme }) => theme.headerPanel2Height };
	grid-template-columns: 1fr;
	grid-template-rows: var(--navHeight) var(--headerPanel2Height);

	.panel2 {
		display: grid;
		grid-template-columns: 100px 1fr; //* breadcrumbs x ticker
		grid-template-rows: 1fr;
	}
`;

//! WHY NOT DOING DOUBLE LOG
export const useFake = () => {
	const [ state, setState ] = useState(6);

	useEffect(() => {
		setTimeout(() => {
			setState(26);
		}, 2000);
		
		return () => {
			Log.Testing("useFake return statement reached");
		};
	}, []);

	return {
		fake: state
	};
};

export const Header = () => {
	const { mediaQueries } = useMediaQueries({ verbose: true });
	// eslint-disable-next-line no-console
	console.log(mediaQueries);
	const { fake } = useFake();

	return (
		<LifecycleWrapper name="header component">
			<StyledHeader>
				<Nav />
				<div className="panel2">
					<Breadcrumbs />
					<Ticker
						strings={ [
							"MAXIMUS JOINS THE TECH & TRIBAL FRONT END TEAM",
							"NEW STUDIO OPEN"
						] }
					/>
				</div>
				{ mediaQueries.landscape && <div>LANDSCAPE</div> }
				{ mediaQueries.portrait && <div>PORTRAIT</div> }
			</StyledHeader>
		</LifecycleWrapper>
	);
};
