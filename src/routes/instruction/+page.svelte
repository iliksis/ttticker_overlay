<script lang="ts">
	import { page } from '$app/state';
	const baseUrl = page.url.origin;

	const copyToClipboard = (path: string) => () => {
		const url = baseUrl + path;
		navigator.clipboard.writeText(url);
	};
</script>

<div
	class="m-0 flex h-full min-h-dvh flex-col bg-linear-to-br from-linear-1 to-linear-2 p-0 text-center"
>
	<div class="mx-auto w-full max-w-3xl p-8">
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
			<h1 class="m-0 text-5xl font-extrabold tracking-tight text-white">Anleitung</h1>
		</header>

		<main class="flex flex-col gap-8">
			<div
				class="flex gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 text-start backdrop-blur-md"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white shadow"
				>
					1
				</div>
				<div class="flex-1">
					<h2 class="mb-4 text-2xl font-bold text-white">Browser-Erweiterung installieren</h2>
					<p class="mb-6 text-white/90">
						Die Erweiterung fängt die Live-Ticker-Daten von
						<a
							href="https://ticker.tt-news.com/"
							target="_blank"
							class="font-medium text-blue-400 transition-all duration-300 hover:text-blue-300"
						>
							ticker.tt-news.com
						</a>
						ab und sendet sie an diese Webseite. Die Erweiterung kann unten als .zip Datei heruntergeladen
						werden. Zum installieren, entpacke die Datei, öffne
						<a
							href="chrome://extensions"
							target="_blank"
							class="font-medium text-blue-400 transition-all duration-300 hover:text-blue-300"
							>chrome://extensions</a
						>
						und füge die Erweiterung manuell deinem Browser hinzu.
					</p>
					<a
						href="extension.zip"
						download
						class="inline-flex items-center rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5"
					>
						Browser-Erweiterung herunterladen
					</a>
				</div>
			</div>

			<div
				class="flex gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 text-start backdrop-blur-md"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white shadow"
				>
					2
				</div>
				<div class="flex-1">
					<h2 class="mb-4 text-2xl font-bold text-white">Live-Ticker öffnen</h2>
					<p class="mb-6 text-white/90">
						Öffne die
						<a
							href="https://ticker.tt-news.com/"
							target="_blank"
							class="font-medium text-blue-400 transition-all duration-300 hover:text-blue-300"
							>TT-News LiveTicker Seite</a
						>
						des gewünschten Spiels in einem neuen Browser-Tab und die Erweiterung sendet automatisch
						die Daten an diese Seite.
					</p>
				</div>
			</div>

			<div
				class="flex gap-6 rounded-2xl border border-white/20 bg-white/10 p-8 text-start backdrop-blur-md"
			>
				<div
					class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-xl font-bold text-white shadow"
				>
					3
				</div>
				<div class="flex-1">
					<h2 class="mb-4 text-2xl font-bold text-white">OBS Integration</h2>
					<p class="mb-6 text-white/90">
						Füge die entsprechenden Overlay-Links als Browser-Quellen in OBS Studio ein:
					</p>
					<div class="flex flex-col gap-4">
						<div class="flex items-center gap-4 rounded-md bg-black/20 p-4">
							<span class="min-w-20 font-semibold text-white/80">Übersicht:</span>
							<code class="flex-1 rounded-sm bg-black/30 px-3 py-2 text-sm text-blue-300"
								>{baseUrl}/overview</code
							>
							<button
								class="rounded-sm border border-white/20 bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20"
								onclick={copyToClipboard('/overview')}
								aria-label="Link in Zwischenablage kopieren"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
									></path>
								</svg>
							</button>
						</div>
						<div class="flex items-center gap-4 rounded-md bg-black/20 p-4">
							<span class="min-w-20 font-semibold text-white/80">Tisch 1:</span>
							<code class="flex-1 rounded-sm bg-black/30 px-3 py-2 text-sm text-blue-300"
								>{baseUrl}/table/1</code
							>
							<button
								class="rounded-sm border border-white/20 bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20"
								onclick={copyToClipboard('/table/1')}
								aria-label="Link in Zwischenablage kopieren"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
									></path>
								</svg>
							</button>
						</div>
						<div class="flex items-center gap-4 rounded-md bg-black/20 p-4">
							<span class="min-w-20 font-semibold text-white/80">Tisch 2:</span>
							<code class="flex-1 rounded-sm bg-black/30 px-3 py-2 text-sm text-blue-300"
								>{baseUrl}/table/2</code
							>
							<button
								class="rounded-sm border border-white/20 bg-white/10 p-2 text-white transition-all duration-300 hover:bg-white/20"
								onclick={copyToClipboard('/table/2')}
								aria-label="Link in Zwischenablage kopieren"
							>
								<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
									></path>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</div>
