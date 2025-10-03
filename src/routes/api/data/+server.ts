import { getOverlayStates, getTmpData } from '$lib/server/state.svelte';
import { json } from '@sveltejs/kit';
import { USE_TEST_DATA } from '$env/static/private';

export const GET = async ({ fetch }) => {
	let data = getTmpData();
	const overlayState = getOverlayStates();
	if (USE_TEST_DATA) {
		const res = await fetch('/testData.json');
		data = (await res.json()).data;
	}

	return json({
		data,
		overlayState
	});
};
