import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-3xl mx-auto p-8 w-full">
      <header class="mb-12">
        <a
          href="/"
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg transition-all duration-300 text-white/80 hover:text-white hover:bg-white/10 hover:-translate-x-1"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Zurück
        </a>
        <h1 class="text-5xl font-extrabold tracking-tight m-0 text-white">
          Anleitung
        </h1>
      </header>

      <main class="flex flex-col gap-8">
        <div
          class="flex gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <div
            class="shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl text-white shadow"
          >
            1
          </div>
          <div class="flex-1">
            <h2 class="font-bold text-2xl text-white mb-4">
              Browser-Erweiterung installieren
            </h2>
            <p class="text-white/90 mb-6">
              Die Erweiterung fängt die Live-Ticker-Daten von
              <a
                href="https://ticker.tt-news.com/"
                target="_blank"
                class="font-medium transition-all duration-300 text-blue-400 hover:text-blue-300"
              >
                ticker.tt-news.com
              </a>
              ab und sendet sie an diese Webseite. Die Erweiterung kann unten
              als .zip Datei heruntergeladen werden. Zum installieren, entpacke
              die Datei, öffne
              <a
                href="chrome://extensions"
                target="_blank"
                class="font-medium transition-all duration-300 text-blue-400 hover:text-blue-300"
                >chrome://extensions</a
              >
              und füge die Erweiterung manuell deinem Browser hinzu.
            </p>
            <a
              href="{{ baseUrl }}/extension.zip"
              download
              class="inline-flex items-center bg-emerald-500 text-white font-semibold px-4 py-2 shadow-md rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Browser-Erweiterung herunterladen
            </a>
          </div>
        </div>

        <div
          class="flex gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <div
            class="shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl text-white shadow"
          >
            2
          </div>
          <div class="flex-1">
            <h2 class="font-bold text-2xl text-white mb-4">
              Live-Ticker öffnen
            </h2>
            <p class="text-white/90 mb-6">
              Öffne die
              <a
                href="https://ticker.tt-news.com/"
                target="_blank"
                class="font-medium transition-all duration-300 text-blue-400 hover:text-blue-300"
                >TT-News LiveTicker Seite</a
              >
              des gewünschten Spiels in einem neuen Browser-Tab und die
              Erweiterung sendet automatisch die Daten an diese Seite.
            </p>
          </div>
        </div>

        <div
          class="flex gap-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8"
        >
          <div
            class="shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center font-bold text-xl text-white shadow"
          >
            3
          </div>
          <div class="flex-1">
            <h2 class="font-bold text-2xl text-white mb-4">OBS Integration</h2>
            <p class="text-white/90 mb-6">
              Füge die entsprechenden Overlay-Links als Browser-Quellen in OBS
              Studio ein:
            </p>
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-4 bg-black/20 p-4 rounded-md">
                <span class="text-white/80 font-semibold min-w-20"
                  >Übersicht:</span
                >
                <code
                  class="flex-1 bg-black/30 text-blue-300 px-3 py-2 text-sm rounded-sm"
                  >{{ baseUrl }}/overview</code
                >
                <button
                  class="bg-white/10 border border-white/20 rounded-sm p-2 text-white transition-all duration-300 hover:bg-white/20"
                  (click)="copyToClipboard('/overview')"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center gap-4 bg-black/20 p-4 rounded-md">
                <span class="text-white/80 font-semibold min-w-20"
                  >Tisch 1:</span
                >
                <code
                  class="flex-1 bg-black/30 text-blue-300 px-3 py-2 text-sm rounded-sm"
                  >{{ baseUrl }}/table/1</code
                >
                <button
                  class="bg-white/10 border border-white/20 rounded-sm p-2 text-white transition-all duration-300 hover:bg-white/20"
                  (click)="copyToClipboard('/table/1')"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="flex items-center gap-4 bg-black/20 p-4 rounded-md">
                <span class="text-white/80 font-semibold min-w-20"
                  >Tisch 2:</span
                >
                <code
                  class="flex-1 bg-black/30 text-blue-300 px-3 py-2 text-sm rounded-sm"
                  >{{ baseUrl }}/table/2</code
                >
                <button
                  class="bg-white/10 border border-white/20 rounded-sm p-2 text-white transition-all duration-300 hover:bg-white/20"
                  (click)="copyToClipboard('/table/2')"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background: linear-gradient(135deg, #0385a6 0%, #A6033D 100%);
    }
  `,
})
export default class InstructionPage {
  baseUrl = window.location.origin;

  copyToClipboard(path: string) {
    const url = this.baseUrl + path;
    navigator.clipboard.writeText(url);
  }
}
