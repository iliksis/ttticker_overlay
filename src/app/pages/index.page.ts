import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="flex justify-center items-center px-8 py-16">
      <div class="max-w-xl">
        <h2 class="text-5xl font-extrabold mb-4 text-white tracking-tight">
          TT LiveTicker Overlay
        </h2>
        <p class="text-xl text-white/80 mb-8 font-normal">
          Overlay für die Streams der Heimspiele des SB Versbach
        </p>
        <a
          href="https://ticker.tt-news.com/"
          target="_blank"
          class="inline-flex items-center gap-2 text-white/90 font-medium py-3 px-5 border-white/30 border rounded-full bg-white/20 transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
      class="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-8 p-8 mx-auto w-full
	"
    >
      <a class="card" href="instruction">
        <div class="text-5xl mb-4">📋</div>
        <h3 class="text-2xl font-bold mb-2 text-white">Anleitung</h3>
        <p class="text-white/80">Setup und Nutzungsanleitung</p>
      </a>

      <a class="card" href="/overview">
        <div class="text-5xl mb-4">📊</div>
        <h3 class="text-2xl font-bold mb-2 text-white">Übersicht</h3>
        <p class="text-white/80">Overlay für die komplette Spielübersicht</p>
      </a>

      <a class="card" href="/table/1">
        <div class="text-5xl mb-4">🏓</div>
        <h3 class="text-2xl font-bold mb-2 text-white">Tisch 1</h3>
        <p class="text-white/80">Overlay für Tisch 1</p>
      </a>

      <a class="card" href="/table/2">
        <div class="text-5xl mb-4">🏓</div>
        <h3 class="text-2xl font-bold mb-2 text-white">Tisch 2</h3>
        <p class="text-white/80">Overlay für Tisch 2</p>
      </a>
    </div>

    <footer class="mt-auto p-8 text-center text-sm text-white/60">
      Built with
      <a href="https://analogjs.org/" target="_blank" class="hover:text-white">
        Analog
      </a>
      and
      <a href="https://analogjs.org/" target="_blank" class="hover:text-white">
        Vite
      </a>
      |
      <a
        href="https://github.com/iliksis/ttticker_overlay"
        target="_blank"
        class="hover:text-white"
        >Source Code</a
      >
    </footer>
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: linear-gradient(135deg, #0385a6 0%, #764ba2 100%);
    }
  `,
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
