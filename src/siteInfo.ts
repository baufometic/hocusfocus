/* eslint-disable no-console */
const __ENV = process.env.NODE_ENV || "development";
const ENV = __ENV.toUpperCase();

export const SITE_INFO = {
	colour      : "#4B4A69",
	description : "You're Closer Than You Think",
	email       : "support@hocusfoc.us",
	name        : "Hocus Foc",
	url         : "https://hocusfoc.us"
} as const;

const LOG_STYLE_BASE = `
	background-color: black;
	font-size: 16px;
	margin: 0;
	padding: 5px;
	text-align: center;
`;

console.log(`%c${ SITE_INFO.name }`, `${ LOG_STYLE_BASE } color: "orange";`);
console.log(`%c${ SITE_INFO.description }`, `${ LOG_STYLE_BASE } color: "limegreen";`);
console.log(`%c${ SITE_INFO.url }`, `${ LOG_STYLE_BASE } color: "orange";`);
console.log(`%cENV: ${ ENV }`, "background-color: black; color: gold; font-size: 14px; margin: 5px;");
