<script lang="ts">
	import type { State } from '$lib/type';

	export let homePlayer: string;
	export let awayPlayer: string;

	export let score: string;
	export let sets: string;

	export let status: State;
</script>

<div class={['grid w-full grid-cols-[1fr_auto_1fr] gap-10 text-2xl', sets.length === 0 && 'mb-7']}>
	<div class="flex justify-start">
		<div class="text-left">
			<div class="font-semibold">{homePlayer}</div>
		</div>
	</div>
	<div class="text-center">
		<div class={['font-bold opacity-60', status === 'ONGOING' && 'opacity-100']}>{score}</div>
		<div class="text-xl opacity-60">
			{sets}
		</div>
	</div>
	<div class="flex justify-end">
		<div class="text-right">
			<div class="font-semibold">{awayPlayer}</div>
		</div>
	</div>
</div>
