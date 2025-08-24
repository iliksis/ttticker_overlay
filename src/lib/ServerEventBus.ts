import type { Data } from './type';

export class ServerEventBus extends EventTarget {
	emit(eventName: string, data: Data) {
		this.dispatchEvent(new CustomEvent(eventName, { detail: data }));
	}
}
