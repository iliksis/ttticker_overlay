import type { Data } from '$lib/type';

let tmpData: Data | undefined;

export const setTmpData = (data: Data) => {
	tmpData = data;
};

export const getTmpData = () => {
	return tmpData;
};
