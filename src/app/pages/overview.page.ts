import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  template: ` <p>Diese Seite ist noch nicht fertig implementiert.</p> `,
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
export default class OverviewPage {}
