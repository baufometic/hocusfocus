/* eslint-disable no-console */
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { LifecycleWrapper } from "@techandtribal/maximilian";
import { characters } from "./characterMap"; // TODO check each character on import for height and width of 5 chars
import type { T_blockMap, T_character } from "./characterMap";
import { COLOURS } from "theme/themes";

const LogoContainer = styled.div`
	aspect-ratio: 1 / 1;
	cursor: pointer;
	display: grid;
	gap: 1px;
	grid-template: repeat(5, 1fr) / repeat(5, 1fr);
	height: ${ ({ theme }) => theme.navHeight };
	padding: 2px;
	position: relative;
`;
/*================================================================================
END OF CONTAINER
================================================================================*/

//* 5x5 of these make up a character
const Block = styled.div`
	background-color: ${ COLOURS.green0 };
	height: 100%;
	transition: ease-out;
	opacity: 0;
	transition: opacity 1500ms;
	width: 100%;

	&.active {
		opacity: 1;
	}
`;
/*================================================================================
END OF BLOCK
================================================================================*/

interface I_props {
	initialString: string;
}

export const Logo: React.FC<I_props> = ({ initialString, ...props }) => {
	const [ blockMap, setBlockMap ] = useState<T_blockMap>(characters["t"]);

	const GetBlockMap = useCallback((char: T_character): T_blockMap => (
		char === " "? characters["space"] : characters[char]
	), []);
	
	const HandleHoverStart = () => setBlockMap(GetBlockMap("x"));
	const HandleHoverEnd = () => setBlockMap(GetBlockMap("t"));

	useEffect(() => {
		const CHARS = initialString.toLowerCase().split("") as T_character[]; //* split initialString prop into an array of single chars
		let charIdx = -1;
		return;

		const interval = setInterval(() => {
			setBlockMap(prev => {
				if (charIdx < CHARS.length -1) {
					charIdx++;
					return GetBlockMap(CHARS[charIdx]);
				} else {
					clearInterval(interval);
					return prev;
				}
			});
		}, 2000);

		return () => clearInterval(interval);
	}, [ GetBlockMap, initialString ]);

	return (
		<LifecycleWrapper name="logo component" { ...props }>
			<LogoContainer
				onClick={ () => { window.location.href = "/"; } }
				onMouseEnter={ HandleHoverStart }
				onMouseLeave={ HandleHoverEnd }>

				{ blockMap?.map((row, rowIdx) => row.split("").map((cell, cellIdx) => (
					<Block
						className={ cell !== " " ? "active" : "" }
						key={ `${ rowIdx }_${ cellIdx }` }
					/>
				))) }
			</LogoContainer>
		</LifecycleWrapper>
	);
};
