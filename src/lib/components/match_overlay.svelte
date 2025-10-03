<script lang="ts">
	import type { State } from '$lib/type';

	export let homePlayer: string;
	export let awayPlayer: string;

	export let score: string;
	export let sets: string;

	export let status: State;
</script>

<div class="grid w-full grid-cols-3 items-center text-2xl">
	<div class="flex items-center justify-start">
		<div class="text-left">
			<div class="font-semibold">{homePlayer}</div>
		</div>
	</div>
	<div class={['text-center font-bold opacity-60', status === 'ONGOING' && 'opacity-100']}>
		{score}
	</div>
	<div class="flex items-center justify-end">
		<div class="text-right">
			<div class="font-semibold">{awayPlayer}</div>
		</div>
	</div>
</div>
<div class="text-xl opacity-70">
	{sets}
</div>
