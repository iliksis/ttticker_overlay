import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: `
    :host {
      max-width: 1280px;
      margin: 0;
      padding: 0;
      text-align: center;
		height: 100vh;
		width: 100vw;
		display: block;
    }
  `,
})
export class AppComponent {}
