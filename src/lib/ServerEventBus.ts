import type { OverlayState } from './server/state.svelte';
import type { Data } from './type';

export class ServerEventBus extends EventTarget {
	emit(eventName: string, data: Data | { table: number; state: OverlayState }) {
		this.dispatchEvent(new CustomEvent(eventName, { detail: data }));
	}
}
