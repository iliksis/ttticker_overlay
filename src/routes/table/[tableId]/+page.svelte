<script lang="ts">
	const table$ = {
		away: 'Max Mustermann',
		home: 'Max Mustermann',
		score: {
			away: 2,
			home: 10
		},
		currentServe: 'HOME',
		sets: {
			away: 1,
			home: 2
		},
		timeoutAway: 'UKNOWN',
		timeoutHome: 'UKNOWN'
	};
</script>

<div class="fixed bottom-4 left-4 block font-bold">
	<table>
		<tbody>
			<tr>
				<td>
					{table$.home}
				</td>
				<td>
					{#if table$.currentServe === 'HOME'}
						<span></span>
					{/if}
				</td>
				<td>
					{#if table$.timeoutHome === 'USED'}
						<span>T</span>
					{/if}
				</td>
				<td>
					{table$.sets.home}
				</td>
				<td>
					{table$.score.home}
				</td>
			</tr>
			<tr>
				<td>
					{table$.away}
				</td>
				<td>
					{#if table$.currentServe === 'AWAY'}
						<span></span>
					{/if}
				</td>
				<td>
					{#if table$.timeoutAway === 'USED'}
						<span>T</span>
					{/if}
				</td>
				<td>
					{table$.sets.away}
				</td>
				<td>
					{table$.score.away}
				</td>
			</tr>
		</tbody>
	</table>
</div>
