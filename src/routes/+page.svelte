<div
	class="m-0 flex h-full min-h-dvh flex-col bg-linear-to-br from-linear-1 to-linear-2 p-0 text-center"
>
	<div class="flex items-center justify-center px-8 py-16">
		<div class="max-w-xl">
			<h2 class="mb-4 text-5xl font-extrabold tracking-tight text-white">TT LiveTicker Overlay</h2>
			<p class="mb-8 text-xl font-normal text-white/80">
				Overlay für die Streams der Heimspiele des SB Versbach
			</p>
			<a
				href="https://ticker.tt-news.com/"
				target="_blank"
				class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-5 py-3 font-medium text-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
			>
				<svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					></path>
				</svg>
				ticker.tt-news.com
			</a>
		</div>
	</div>

	<div
		class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-8 md:grid-cols-2
	"
	>
		<a class="card card-hover" href="instruction">
			<div class="mb-4 text-5xl">📋</div>
			<h3 class="mb-2 text-2xl font-bold text-white">Anleitung</h3>
			<p class="text-white/80">Setup und Nutzungsanleitung</p>
		</a>

		<a class="card card-hover" href="/overview">
			<div class="mb-4 text-5xl">📊</div>
			<h3 class="mb-2 text-2xl font-bold text-white">Übersicht</h3>
			<p class="text-white/80">Overlay für die komplette Spielübersicht</p>
		</a>

		<a class="card card-hover" href="/table/1">
			<div class="mb-4 text-5xl">🏓</div>
			<h3 class="mb-2 text-2xl font-bold text-white">Tisch 1</h3>
			<p class="text-white/80">Overlay für Tisch 1</p>
		</a>

		<a class="card card-hover" href="/table/2">
			<div class="mb-4 text-5xl">🏓</div>
			<h3 class="mb-2 text-2xl font-bold text-white">Tisch 2</h3>
			<p class="text-white/80">Overlay für Tisch 2</p>
		</a>
	</div>

	<footer class="mt-auto p-8 text-center text-sm text-white/60">
		Built with
		<a href="https://analogjs.org/" target="_blank" class="hover:text-white"> Analog </a>
		and
		<a href="https://vite.dev/" target="_blank" class="hover:text-white"> Vite </a>
		|
		<a href="https://github.com/iliksis/ttticker_overlay" target="_blank" class="hover:text-white"
			>Source Code</a
		>
	</footer>
</div>
