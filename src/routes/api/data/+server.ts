import { getOverlayStates, getTmpData } from '$lib/server/state.svelte';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const data = getTmpData();
	const overlayState = getOverlayStates();

	return json({
		data,
		overlayState
	});
};
