<script lang="ts">
	import type { State } from '$lib/type';

	export let home: string;
	export let homePlayer: string;
	export let away: string;
	export let awayPlayer: string;

	export let score: string;
	export let sets: string;

	export let status: State;
</script>

<div class="grid grid-cols-3 items-center">
	<div class="flex items-center justify-start">
		<div class="text-left">
			<div class="font-semibold text-white">{homePlayer}</div>
			<div class="text-sm text-white/70">{home}</div>
		</div>
	</div>
	<div class={['text-center text-lg font-bold', status === 'ONGOING' && 'text-emerald-400']}>
		{score}
	</div>
	<div class="flex items-center justify-end">
		<div class="text-right">
			<div class="font-semibold text-white">{awayPlayer}</div>
			<div class="text-sm text-white/70">{away}</div>
		</div>
	</div>
</div>
<div class="my-2 border-t border-white/20"></div>
<div class="text-md text-white/70">
	{sets}
</div>
