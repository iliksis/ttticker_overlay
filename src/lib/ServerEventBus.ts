export class ServerEventBus extends EventTarget {
	emit(eventName: string, data: object) {
		this.dispatchEvent(new CustomEvent(eventName, { detail: data }));
	}
}
