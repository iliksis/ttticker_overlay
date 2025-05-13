import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: `
    <a href="/">Zurück</a>
    <p class="text-red-700">
      Das Overlay läuft mit dieser Webseite und einer Browsererweiterung. Die
      Erweiterung wird genutzt um die Liveticker-Daten von
      <a href="https://ticker.tt-news.com/" target="_blank" class="text-link">
        https://ticker.tt-news.com/
      </a>
      abzufangen und an diese Webseite zu schicken.
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
export default class InstructionPage {}
