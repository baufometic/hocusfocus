import type { NextPage } from "next";
import styled from "styled-components";
import { SASS } from "@techandtribal/maximilian";

const Layout = styled.div`
	${ SASS.fullsize };
	${ SASS.flexCenterColumn };
`;

const Home: NextPage = ({ ...props }) => {
	return(
		<Layout { ...props }>
			Home
		</Layout>
	);
};

export default Home;
