// Store intercepted data
let tickerData = new Map();

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.type === 'TICKER_UPDATE') {
		console.log('🎾 New ticker update received:', request);

		fetch('{{baseURl}}/api/liveticker', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(request)
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('🎾 New ticker update received:', data);
			})
			.catch((err) => {
				console.error('Error sending message to server:', err);
			});

		const matchKey = `${request.matchInfo.league}_${request.matchInfo.date}_${request.matchInfo.teams}`;

		// Store the data
		if (!tickerData.has(matchKey)) {
			tickerData.set(matchKey, {
				matchInfo: request.matchInfo,
				updates: []
			});
		}

		tickerData.get(matchKey).updates.push({
			timestamp: request.rawEvent.timestamp,
			data: request.responseData,
			status: request.rawEvent.status
		});

		// Keep only last 50 updates per match
		const match = tickerData.get(matchKey);
		if (match.updates.length > 50) {
			match.updates = match.updates.slice(-50);
		}

		// Save to chrome storage (optional)
		chrome.storage.local.set({
			[`ticker_${matchKey}`]: match
		});

		sendResponse({ success: true });
	}
});

console.log('🎯 TT-News Ticker Interceptor background script loaded');
