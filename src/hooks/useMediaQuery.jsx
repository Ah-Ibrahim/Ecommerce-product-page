import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(() => window.matchMedia(query));

	useEffect(() => {
		const media = window.matchMedia(query);
		const updateMatches = () => setMatches(media.matches);

		media.addEventListener('change', updateMatches);

		return media.removeEventListener('change', updateMatches);
	}, [query]);

	return matches;
}
