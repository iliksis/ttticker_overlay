<script lang="ts">
	import type { Data, Table } from '$lib/type';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	const tableId: number = parseInt(page.params.tableId || '1');
	let data: Data | undefined = $state();
	const table: Table | undefined = $derived(data?.tables[tableId - 1]);

	onMount(async () => {
		//preload existing data
		const response = await fetch('/api/data');
		const result = await response.json();
		data = result.data;

		const eventSource = new EventSource('/api/liveticker');
		eventSource.onmessage = (event) => {
			const eventData = JSON.parse(event.data);
			if (eventData.type === 'connected') {
				console.log('Connected to server');
			} else if (eventData.type === 'data') {
				console.log('Received data from server', eventData);
				data = eventData.payload;
			}
		};
	});
</script>

<div class="fixed bottom-4 left-4 block font-bold">
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
