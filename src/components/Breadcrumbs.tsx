import { useRouter } from "next/router";
import styled from "styled-components";

const Layout = styled.div`
	background-image: linear-gradient(to bottom, rgba(12,20,31, 0.7), rgba(0,0,0,0));
	color: white;
	display: grid;
	height: 100%;
	place-items: start center;
	padding: 0 10px;
	text-transform: uppercase;
	width: 100%;
`;

export const Breadcrumbs: React.FC = ({ ...props }) => {
	const { pathname } = useRouter();

	return(
		<Layout { ...props }>
			{ pathname === "/" ? "home" : pathname.split("/").join(" -> ") }
		</Layout>
	);
};
