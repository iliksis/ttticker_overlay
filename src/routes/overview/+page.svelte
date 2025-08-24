<div
  class="m-0 flex h-full min-h-dvh flex-col bg-linear-to-br from-linear-1 to-linear-2 p-0 text-center"
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
      <h1 class="m-0 text-5xl font-extrabold tracking-tight text-white">
        Spielübersicht
      </h1>
      <p class="mt-4 text-xl text-white/80">
        Live-Übersicht aller aktuellen Spiele
      </p>
    </header>

    <main class="flex flex-col gap-8">
      <!-- Match Status Summary -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div
          class="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md"
        >
          <div class="text-3xl font-bold text-emerald-400">2</div>
          <div class="text-sm text-white/80">Aktive Spiele</div>
        </div>
        <div
          class="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md"
        >
          <div class="text-3xl font-bold text-blue-400">1</div>
          <div class="text-sm text-white/80">Wartende Spiele</div>
        </div>
        <div
          class="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-md"
        >
          <div class="text-3xl font-bold text-gray-400">3</div>
          <div class="text-sm text-white/80">Beendete Spiele</div>
        </div>
      </div>

      <!-- Active Matches -->
      <section>
        <h2 class="mb-6 text-left text-2xl font-bold text-white">
          🟢 Aktive Spiele
        </h2>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <!-- Match 1 -->
          <div
            class="rounded-2xl border border-emerald-400/30 bg-white/10 p-6 backdrop-blur-md"
          >
            <div class="mb-4 flex items-center justify-between">
              <span
                class="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white"
              >
                Tisch 1
              </span>
              <span class="text-sm text-white/80">3. Satz</span>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="text-left">
                  <div class="font-semibold text-white">Müller, Hans</div>
                  <div class="text-sm text-white/70">SB Versbach</div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-white">2</div>
                  <div class="text-sm text-white/70">11-9, 11-7</div>
                </div>
              </div>
              <div class="border-t border-white/20"></div>
              <div class="flex items-center justify-between">
                <div class="text-left">
                  <div class="font-semibold text-white">Schmidt, Peter</div>
                  <div class="text-sm text-white/70">TTC Gegner</div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-white">0</div>
                  <div class="text-sm text-white/70">9-11, 7-11</div>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <div class="text-lg font-bold text-emerald-400">8 : 6</div>
              <div class="text-sm text-white/70">Aktueller Satz</div>
            </div>
          </div>

          <!-- Match 2 -->
          <div
            class="rounded-2xl border border-emerald-400/30 bg-white/10 p-6 backdrop-blur-md"
          >
            <div class="mb-4 flex items-center justify-between">
              <span
                class="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white"
              >
                Tisch 2
              </span>
              <span class="text-sm text-white/80">1. Satz</span>
            </div>
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="text-left">
                  <div class="font-semibold text-white">Weber, Klaus</div>
                  <div class="text-sm text-white/70">SB Versbach</div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-white">0</div>
                  <div class="text-sm text-white/70">-</div>
                </div>
              </div>
              <div class="border-t border-white/20"></div>
              <div class="flex items-center justify-between">
                <div class="text-left">
                  <div class="font-semibold text-white">Wagner, Thomas</div>
                  <div class="text-sm text-white/70">TTC Gegner</div>
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-white">0</div>
                  <div class="text-sm text-white/70">-</div>
                </div>
              </div>
            </div>
            <div class="mt-4 text-center">
              <div class="text-lg font-bold text-emerald-400">3 : 5</div>
              <div class="text-sm text-white/70">Aktueller Satz</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Waiting Matches -->
      <section>
        <h2 class="mb-6 text-left text-2xl font-bold text-white">
          🟡 Wartende Spiele
        </h2>
        <div class="grid grid-cols-1 gap-4">
          <div
            class="rounded-2xl border border-yellow-400/30 bg-white/10 p-4 backdrop-blur-md"
          >
            <div class="flex items-center justify-between">
              <div>
                <span class="font-semibold text-white">Fischer, Maria</span>
                <span class="mx-2 text-white/60">vs</span>
                <span class="font-semibold text-white">Bauer, Lisa</span>
              </div>
              <span
                class="rounded-full bg-yellow-500 px-3 py-1 text-sm font-semibold text-white"
              >
                Wartend
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Completed Matches -->
      <section>
        <h2 class="mb-6 text-left text-2xl font-bold text-white">
          ⚪ Beendete Spiele
        </h2>
        <div class="grid grid-cols-1 gap-4">
          <div
            class="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md"
          >
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">Hoffmann, Frank</span>
                  <span class="text-lg font-bold text-emerald-400">3</span>
                </div>
                <div class="border-t border-white/20 my-2"></div>
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">Klein, Michael</span>
                  <span class="text-lg font-bold text-red-400">1</span>
                </div>
              </div>
              <div class="ml-6 text-right">
                <div class="text-sm text-white/70">11-8, 9-11, 11-6, 11-4</div>
                <span
                  class="mt-2 inline-block rounded-full bg-gray-600 px-3 py-1 text-sm text-white"
                >
                  Beendet
                </span>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md"
          >
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">Neumann, Stefan</span>
                  <span class="text-lg font-bold text-red-400">1</span>
                </div>
                <div class="border-t border-white/20 my-2"></div>
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">König, Andreas</span>
                  <span class="text-lg font-bold text-emerald-400">3</span>
                </div>
              </div>
              <div class="ml-6 text-right">
                <div class="text-sm text-white/70">8-11, 11-9, 7-11, 5-11</div>
                <span
                  class="mt-2 inline-block rounded-full bg-gray-600 px-3 py-1 text-sm text-white"
                >
                  Beendet
                </span>
              </div>
            </div>
          </div>

          <div
            class="rounded-2xl border border-white/20 bg-white/5 p-4 backdrop-blur-md"
          >
            <div class="flex items-center justify-between">
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">Richter, Daniel</span>
                  <span class="text-lg font-bold text-emerald-400">3</span>
                </div>
                <div class="border-t border-white/20 my-2"></div>
                <div class="flex items-center justify-between">
                  <span class="font-semibold text-white">Vogel, Markus</span>
                  <span class="text-lg font-bold text-red-400">0</span>
                </div>
              </div>
              <div class="ml-6 text-right">
                <div class="text-sm text-white/70">11-3, 11-1, 11-5</div>
                <span
                  class="mt-2 inline-block rounded-full bg-gray-600 px-3 py-1 text-sm text-white"
                >
                  Beendet
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>

  <footer class="mt-auto p-8 text-center text-sm text-white/60">
    Letzte Aktualisierung: Jetzt
  </footer>
</div>