import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  template: ` <table>
    <tbody>
      <tr>
        <td>
          {{ table$.home }}
        </td>
        <td>
          @if (table$.currentServe === "HOME") {
          <span></span>
          }
        </td>
        <td>
          @if (table$.timeoutHome === "USED") {
          <span>T</span>
          }
        </td>
        <td>
          {{ table$.sets.home }}
        </td>
        <td>
          {{ table$.score.home }}
        </td>
      </tr>
      <tr>
        <td>
          {{ table$.away }}
        </td>
        <td>
          @if (table$.currentServe === "AWAY") {
          <span></span>
          }
        </td>
        <td>
          @if (table$.timeoutAway === "USED") {
          <span>T</span>
          }
        </td>
        <td>
          {{ table$.sets.away }}
        </td>
        <td>
          {{ table$.score.away }}
        </td>
      </tr>
    </tbody>
  </table>`,
  styles: `
		:host {
			display: block;
			position: fixed;
			bottom: 16px;
			left: 16px;
			color: var(--color-player);
			font-weight: var(--font-weight-bold);
		}
	`,
})
export default class TableComponent {
  private readonly route = inject(ActivatedRoute);

  readonly tableId$ = this.route.paramMap.pipe(
    map((params) => params.get('tableId'))
  );

  readonly table$ = {
    away: 'Max Mustermann',
    home: 'Max Mustermann',
    score: {
      away: 2,
      home: 10,
    },
    currentServe: 'HOME',
    sets: {
      away: 1,
      home: 2,
    },
    timeoutAway: 'UKNOWN',
    timeoutHome: 'UKNOWN',
  };
}
