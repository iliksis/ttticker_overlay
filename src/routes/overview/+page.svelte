<script lang="ts">
	import Match from '$lib/components/match.svelte';
	import type { OverlayState } from '$lib/server/state.svelte';
	import type { Data } from '$lib/type';
	import { onMount } from 'svelte';

	let data: Data | undefined = $state();

	const finishedMatches = $derived(data?.matches.filter((match) => match.state === 'FINISHED'));
	const activeMatches = $derived(data?.matches.filter((match) => match.state === 'ONGOING'));
	const waitingMatches = $derived(
		data?.matches.filter((match) => match.state === 'SCHEDULED' || match.state === 'NOT_RELEVANT')
	);

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

	const setOverlayState = async (table: number, state: OverlayState) => {
		await fetch('/api/overlay', {
			method: 'POST',
			body: JSON.stringify({ table, state })
		});
	};
</script>

<div
	class="m-0 flex h-full min-h-dvh flex-col bg-linear-to-br from-linear-1 to-linear-2 p-0 text-center text-white"
>
	<div class="mx-auto w-full max-w-6xl p-8">
		<header class="mb-12">
			<a
				href="/"
				class="mb-6 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white/80 transition-all duration-300 hover:-translate-x-1 hover:bg-white/10 hover:text-white"
			>
				<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					></path>
				</svg>
				Zurück
			</a>
			<h1 class="m-0 text-5xl font-extrabold tracking-tight">Spielübersicht</h1>
			<p class="mt-4 text-xl text-white/80">Live-Übersicht des aktuellen Spieles</p>
		</header>

		{#if data}
			<main class="flex flex-col gap-8">
				<div class="flex flex-row gap-4">
					<div class="card">
						<h3 class="mb-2 text-2xl font-bold text-white">Tisch 1</h3>
						<button
							class="focus:ring-opacity-50 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onclick={() => setOverlayState(1, 'score')}>Score anzeigen</button
						>
						<button
							class="focus:ring-opacity-50 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onclick={() => setOverlayState(1, 'overview')}>Overview anzeigen</button
						>
					</div>
					<div class="card">
						<h3 class="mb-2 text-2xl font-bold text-white">Tisch 2</h3>
						<button
							class="focus:ring-opacity-50 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onclick={() => setOverlayState(2, 'score')}>Score anzeigen</button
						>
						<button
							class="focus:ring-opacity-50 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-white transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onclick={() => setOverlayState(2, 'overview')}>Overview anzeigen</button
						>
					</div>
				</div>
				<!-- Match Status Summary -->
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div class="text-3xl font-bold">{data.home}</div>
					<div class="flex flex-col items-center gap-2">
						<div class="text-3xl font-bold">{data.score}</div>
						<div class="flex gap-2">
							<div class="text-md text-white/80">Sätze: {data.scoreSets}</div>
							<div class="text-md text-white/80">Bälle: {data.scoreBalls}</div>
						</div>
					</div>
					<div class="text-3xl font-bold">{data.away}</div>
				</div>

				<!-- Active Matches -->
				{#if activeMatches && activeMatches.length > 0}
					<section>
						<h2 class="mb-6 text-left text-2xl font-bold text-white">🟢 Aktive Spiele</h2>
						<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
							{#each activeMatches as match}
								<div
									class="rounded-2xl border border-emerald-400/30 bg-white/10 p-6 backdrop-blur-md"
								>
									<Match
										homePlayer={match.home}
										awayPlayer={match.away}
										score={match.score}
										sets={match.setInfo.map((set) => set.score).join(' - ')}
										status={match.state}
									/>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				<!-- Waiting Matches -->
				{#if waitingMatches && waitingMatches.length > 0}
					<section>
						<h2 class="mb-6 text-left text-2xl font-bold text-white">🟡 Nächste Spiele</h2>
						<div class="grid grid-cols-1 gap-4">
							{#each waitingMatches as match}
								<div
									class="rounded-2xl border border-yellow-400/30 bg-white/10 p-4 backdrop-blur-md"
								>
									<Match
										homePlayer={match.home}
										awayPlayer={match.away}
										score={match.score}
										sets={match.setInfo.map((set) => set.score).join(' - ')}
										status={match.state}
									/>
								</div>
							{/each}
						</div>
					</section>
				{/if}

				<!-- Completed Matches -->
				{#if finishedMatches && finishedMatches.length > 0}
					<section>
						<h2 class="mb-6 text-left text-2xl font-bold text-white">⚪ Beendete Spiele</h2>
						<div class="grid grid-cols-1 gap-4">
							{#each finishedMatches as match}
								<div class="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md">
									<Match
										homePlayer={match.home}
										awayPlayer={match.away}
										score={match.score}
										sets={match.setInfo.map((set) => set.score).join(' - ')}
										status={match.state}
									/>
								</div>
							{/each}
						</div>
					</section>
				{/if}
			</main>
		{/if}
	</div>
</div>
