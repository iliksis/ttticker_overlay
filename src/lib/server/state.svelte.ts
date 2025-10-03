import type { Data } from '$lib/type';

let tmpData: Data | undefined;

export const setTmpData = (data: Data) => {
	tmpData = data;
};

export const getTmpData = () => {
	return tmpData;
};

export type OverlayState = 'score' | 'overview';
const overlayStates: { [key: string]: OverlayState } = {};
export const setOverlayState = (id: number, state: OverlayState) => {
	overlayStates[id] = state;
};
export const getOverlayStates = () => {
	return overlayStates;
};
