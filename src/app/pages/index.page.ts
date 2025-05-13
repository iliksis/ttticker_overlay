import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2 class="text-3xl font-bold">
      <a href="https://ticker.tt-news.com/" target="_blank" class="text-link">
        https://ticker.tt-news.com/
      </a>
      Overlay
    </h2>

    <h3>The fullstack meta-framework for Angular!</h3>

    <div class="flex flex-row gap-8 justify-center">
      <a class="card" href="instruction">Anleitung</a>
      <a class="card" href="/overview">Übersicht</a>
      <a class="card" href="/table/1">Tisch 1</a>
      <a class="card" href="/table/2">Tisch 2</a>
    </div>

    <p class="read-the-docs">
      <a href="https://github.com/analogjs/analog" target="_blank">GitHub</a>
    </p>
  `,
  styles: `
	:host {
		display: flex;
	  	flex-direction: column;
	  	justify-content: center;
	  	align-items: center;
	  	gap: 1rem;
	}
  `,
})
export default class HomeComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }
}
