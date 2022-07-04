import styled from "styled-components";
import { LifecycleWrapper } from "@techandtribal/maximilian";

const LayoutOld = styled.div`
	align-items: center;
	display: grid;
	grid-auto-flow: column;
	height: 100%;
	justify-content: space-between;
	overflow-x: hidden;
	white-space: nowrap;
	width: 100%;
`;

interface I_props {
	strings: string[];
}

const Layout = styled.div`
	background-color: rgba(#000, 0.9); 
	box-sizing: content-box;
	height: 100%;
	overflow: hidden;
	padding-left: 100%;
	width: 100%;

	.ticker {
		box-sizing: content-box;
		display: inline-block;
		height: 100%;
		padding-right: 100%;
		white-space: nowrap;

		@keyframes animTicker {
			0% {
				transform: translate3d(0, 0, 0);
				visibility: visible;
			}

			100% {
				transform: translate3d(-100%, 0, 0);
			}
		}

		animation: animTicker 60s 0ms linear infinite;

		.item {
			color: white;
			display: inline-block;
			padding: 0 2rem;
		}
	}
`;

export const Ticker: React.FC<I_props> = ({ strings }) => {
	//! TEMP OVERRIDE props
	strings = [
		"Whattt a G.",
		"Vice mlkshk crucifix beard chillwave meditation hoodie asymmetrical Helvetica.",
		"Ugh PBR&B kale chips Echo Park.",
		"Gluten-free mumblecore chambray mixtape food truck."
	];

	return (
		<LifecycleWrapper name="ticker component">
			<Layout>
				<div className="ticker">
					{ strings.map((str, idx) => (
						<div className="item" key={ idx }>
							{ str }
						</div>
					)) }
				</div>
			</Layout>
		</LifecycleWrapper>
	);
};
