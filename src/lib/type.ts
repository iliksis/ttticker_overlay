export type ExtensionData = {
	responseData: {
		title: string;
		data: Data;
	};
};

export type Data = {
	id: string;
	home: string;
	homeId: string;
	away: string;
	awayId: string;
	score: string;
	league: string;
	start: string;
	season: string;
	tables: Table[];
	matches: Match[];
	state: string;
	lineup: Lineup;
	scoreBalls: string;
	scoreSets: string;
};

export type Table = {
	home: string;
	away: string;
	score: {
		home: number;
		away: number;
	};
	sets: {
		home: number;
		away: number;
	};
	currentServe: 'HOME' | 'AWAY' | 'UNKNOWN';
	timeoutHome: 'USED' | 'UNUSED';
	timeoutAway: 'USED' | 'UNUSED';
};

type Match = {
	id: string;
	home: string;
	away: string;
	score: string;
	position: {
		home: string;
		away: string;
	};
	state: State;
	setInfo: SetInfo[];
};

export type State = 'ONGOING' | 'FINISHED' | 'SCHEDULED' | 'NOT_RELEVANT';

type SetInfo = {
	id: string;
	score: string;
	sequence: string;
	state: State;
	winner: 'HOME' | 'AWAY' | 'UNKNOWN';
};

type Lineup = {
	home: LineupItem[];
	away: LineupItem[];
};

type LineupItem = {
	player: Player;
	position: string;
};

type Player = {
	id: string;
	name: string;
};
