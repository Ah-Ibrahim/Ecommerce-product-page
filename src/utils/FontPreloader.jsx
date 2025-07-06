import { useEffect } from 'react';
import fontUrl from '../assets/fonts/Kumbh_Sans/KumbhSans-VariableFont_YOPQ,wght.ttf';

function FontPreloader() {
	useEffect(() => {
		const link = document.createElement('link');

		link.href = fontUrl;
		link.as = 'font';
		link.rel = 'preload';
		link.type = 'font/ttf';
		link.crossOrigin = 'anonymous';

		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, []);

	return null;
}

export default FontPreloader;
