<script lang="ts">
	import type { Data, Table } from '$lib/type';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import type { OverlayState } from '$lib/server/state.svelte';
	import Match from '$lib/components/match_overlay.svelte';

	const tableId: number = parseInt(page.params.tableId || '1');
	let data: Data | undefined = $state();
	const table: Table | undefined = $derived(data?.tables[tableId - 1]);

	let overlayState: OverlayState | undefined = $state('score');

	onMount(async () => {
		//preload existing data
		const response = await fetch('/api/data');
		const result = await response.json();
		data = result.data;
		overlayState = result.overlayState[tableId] || 'score';

		const livetickerEventSource = new EventSource('/api/liveticker');
		livetickerEventSource.onmessage = (event) => {
			const eventData = JSON.parse(event.data);
			if (eventData.type === 'connected') {
				console.log('Connected to server');
			} else if (eventData.type === 'data') {
				console.log('Received data from server', eventData);
				data = eventData.payload;
			}
		};

		const stateEventSource = new EventSource('/api/overlay');
		stateEventSource.onmessage = (event) => {
			const eventData = JSON.parse(event.data);
			if (eventData.type === 'connected') {
				console.log('Connected to server');
			} else if (eventData.type === 'data') {
				console.log('Received data from server', eventData);
				if (tableId === eventData.payload.table) {
					overlayState = eventData.payload.state;
				}
			}
		};
	});
</script>

{#if overlayState === 'score'}
	<div class="fixed bottom-4 left-4 block text-xl font-semibold">
		{#if table}
			<table>
				<tbody>
					<tr>
						<td>
							{table?.home}
						</td>
						<td>
							{#if table?.currentServe === 'HOME'}
								<span></span>
							{/if}
						</td>
						<td>
							{#if table?.timeoutHome === 'USED'}
								<span>T</span>
							{/if}
						</td>
						<td>
							{table?.sets.home}
						</td>
						<td>
							{table?.score.home}
						</td>
					</tr>
					<tr>
						<td>
							{table?.away}
						</td>
						<td>
							{#if table?.currentServe === 'AWAY'}
								<span></span>
							{/if}
						</td>
						<td>
							{#if table?.timeoutAway === 'USED'}
								<span>T</span>
							{/if}
						</td>
						<td>
							{table?.sets.away}
						</td>
						<td>
							{table?.score.away}
						</td>
					</tr>
				</tbody>
			</table>
		{/if}
	</div>
{:else if overlayState === 'overview'}
	{#if data}
		<div
			class="absolute top-0 right-0 bottom-0 left-0 m-auto h-fit w-5xl items-start justify-center rounded-md bg-linear-to-br from-player/80 to-match/80 p-6 text-white"
		>
			<!-- Team Header -->
			<div class="m-2 mt-2 mb-8 grid grid-cols-3">
				<div class="text-start text-3xl font-semibold">{data.home}</div>
				<div class="flex flex-col items-center gap-2">
					<div class="text-3xl font-bold">{data.score}</div>
					<div class="flex gap-2">
						<div class="text-xl">Sätze: {data.scoreSets}</div>
						<div class="text-xl">Bälle: {data.scoreBalls}</div>
					</div>
				</div>
				<div class="text-end text-3xl font-semibold">{data.away}</div>
			</div>

			{#each data.matches as match}
				<div class="m-2 my-3 flex flex-col items-center gap-2">
					<Match
						awayPlayer={match.away}
						homePlayer={match.home}
						score={match.score}
						sets={match.setInfo.map((set) => set.score).join(' - ')}
						status={match.state}
					/>
				</div>
			{/each}
		</div>
	{/if}
{/if}
