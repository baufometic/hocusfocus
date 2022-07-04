/* eslint-disable no-console */
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { SITE_INFO } from "../siteInfo";

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App { ...props } />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					<>
						{ initialProps.styles }
						{ sheet.getStyleElement() }
					</>
				]
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return(
			<Html lang="en">
				<Head>
					<meta property="og:title" content={ SITE_INFO.name } />
					<meta name="description" content={ SITE_INFO.description } />
					<meta property="og:description" content={ SITE_INFO.description } />
					<meta property="og:url" content={ SITE_INFO.url } />
					<meta property="og:type" content="website" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="apple-touch-icon" href="/favicon.ico" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content={ SITE_INFO.colour } />
					<meta name="msapplication-TileColor" content={ SITE_INFO.colour } />
					<meta name="msapplication-navbutton-color" content={ SITE_INFO.colour } />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content={ SITE_INFO.colour } />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
