// Inject external script file to bypass CSP
function injectScript() {
	const script = document.createElement('script');
	script.src = chrome.runtime.getURL('injected.js');
	script.onload = function () {
		this.remove();
	};

	// Inject into document head or documentElement
	(document.head || document.documentElement).appendChild(script);
}

// Listen for intercepted data from injected script
window.addEventListener('message', (event) => {
	if (event.data.type === 'TICKER_DATA_INTERCEPTED') {
		console.log('📡 Ticker data intercepted:', event.data);

		// Extract match information from URL
		const urlParts = event.data.url.split('/');
		const matchInfo = {
			league: urlParts[urlParts.length - 3],
			date: urlParts[urlParts.length - 2],
			teams: urlParts[urlParts.length - 1],
			fullUrl: event.data.url,
			method: event.data.method,
			timestamp: event.data.timestamp,
			status: event.data.status
		};

		// Send to background script
		chrome.runtime
			.sendMessage({
				type: 'TICKER_UPDATE',
				matchInfo: matchInfo,
				responseData: event.data.data,
				rawEvent: event.data
			})
			.catch((err) => {
				console.error('Error sending message to background:', err);
			});
	}
});

// Inject the script when DOM is ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', injectScript);
} else {
	injectScript();
}

console.log('✅ TT-News content script loaded');
