import { useEffect, useState } from "react";
import { Log, OBJ } from "@techandtribal/maximilian";

//* Function to establish min device size in pixels
const queryList = {
	xs            : "(max-width: 576px)", // <
	s             : "(min-width: 576px)", // >=
	m             : "(min-width: 768px)", // >=
	l             : "(min-width: 992px)", // >=
	xl            : "(min-width: 1200px)", // >=
	xxl           : "(min-width: 1400px)", // >=
	desktop_S     : "(min-width: 1024px)", // >=
	desktop_M     : "(min-width: 1440px)", // >=
	desktop_L     : "(min-width: 2560px)", // >=
	portrait      : "(orientation: portrait)",
	landscape     : "(orientation: landscape)",
	mobile        : "only screen and (hover: none) and (pointer: coarse)",
	motionReduced : "(prefers-reduced-motion: no-preference)"
};

const queryObj = OBJ.Keys(queryList).map(key => ({
	name     : key,
	isActive : false
}));

type T_returnType = {
	mediaQueries: {
		[key in keyof typeof queryList]: boolean;
	}
};

interface I_useMediaQueries {
	(props: {
		verbose?: boolean;
	}): T_returnType;
}

export const useMediaQueries: I_useMediaQueries = ({ verbose=true }) => {
	const [ isActive, setIsActive ] = useState<typeof queryObj>(queryObj);

	//* INTIALISE STATE AS WINDOW EXISTS NOW
	useEffect(() => {
		const eventListeners = [] as Array<() => void>;

		setIsActive(curr => {
			const initialised = curr.map(query => {
				const UpdateFn = (e: MediaQueryListEvent): void => {
					setIsActive(arr => arr.map(q => q.name === query.name ? {
						...q,
						isActive: e.matches
					} : q));
				};
				
				//* Set up event handlers
				window.matchMedia(query.name).addEventListener("change", UpdateFn);
				Log.EventListenerAdded(query.name);

				//* Push removal function to array for use on return()
				eventListeners.push(() => {
					window.matchMedia(query.name).removeEventListener("change", UpdateFn);
					Log.EventListenerRemoved(query.name);
				});
				
				return {
					...query,
					isActive: window.matchMedia(query.name).matches
				};
			});

			return initialised;
		});

		return () => {
			Log.Testing("useMediaQueries return statement reached");
			eventListeners.map(ev => ev());
		};
	}, []);

	useEffect(() => {
		verbose && Log.StateChange(
			JSON.stringify(isActive, null, 3),
			"useMediaQueries"
		);
	}, [ isActive, verbose ]);

	const returnObj = {} as T_returnType["mediaQueries"];
	isActive.map(q => {
		returnObj[q.name] = q.isActive;
	});

	return {
		mediaQueries: returnObj
	};
};

// export const Media = (...queriesToCombine: Array<keyof typeof queryList>) => {
// 	if (!queriesToCombine.length) throw new Error("[GetQuery] no queries passed in");
// 	return `@media screen and ${ queriesToCombine.map(query => queryList[query]).join(" and ") }`;
//};
