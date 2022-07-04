import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPhoneSquareAlt, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";
import { LifecycleWrapper, SASS } from "@techandtribal/maximilian";

const icons = [
	{ name: "instagram",	file: faInstagram,		url: "http://instagram.com/techandtribal/" },
	{ name: "twitter",		file: faTwitter,		url: "http://twitter.com/techandtribal/" },
	{ name: "phone",		file: faPhoneSquareAlt,	url: "/contact" },
	{ name: "email",		file: faEnvelopeOpen,	url: "/contact" },
];

const Layout = styled.footer`
	background-color: ${ ({ theme }) => theme.bgColours.footer };
	color: ${ ({ theme }) => theme.fgColours.footer };
	display: grid;
	font-family: "Open Sans Light", sans-serif;
	font-size: 1rem;
	grid-template: 1fr / 1fr 2fr 1fr;
	text-transform: uppercase;
	transform-style: preserve-3d;

	.left, .middle, .right {
		${ SASS.flexCenterRow };
	}

	.middle {
		justify-content: space-evenly;

		> a > .icon {
			cursor: pointer;

			&:nth-child(1) {
				animation-delay: 1000ms;
			}
			&:nth-child(2) {
				animation-delay: 1200ms;
			}
			&:nth-child(3) {
				animation-delay: 1400ms;
			}
			&:nth-child(4) {
				animation-delay: 1600ms;
			}
			&:nth-child(5) {
				animation-delay: 1800ms;
			}
			animation: ${ keyframes`
				from { transform: rotateZ(-110deg); }
				to { transform: rotateZ(0deg); }
			` };
			animation-duration: 1600ms;
			animation-fill-mode: forwards;
			animation-timing-function: ease-out;
		}
	}

	.right {
		
	}
`;

export const Footer = ({ ...props }) => {
	return(
		<LifecycleWrapper name="footer component">
			<Layout { ...props }>
				<div className="left">
					{ "Enquire" }
				</div>
				<div className="middle">
					{ icons.map(icon => (
						<Link
							href={ icon.url }
							key={ icon.name }>
							<a>
								<FontAwesomeIcon className="icon" icon={ icon.file } />
							</a>
						</Link>
					)) }
				</div>
				<div className="right">
					{ "Share this page" }
				</div>
			</Layout>
		</LifecycleWrapper>
	);
};
