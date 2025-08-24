import { getTmpData } from '$lib/server/state.svelte';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	return json({
		data: getTmpData()
	});
};
