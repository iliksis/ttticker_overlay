(() => {
	const originalFetch = window.fetch;
	const originalXHR = XMLHttpRequest.prototype.open;

	// Intercept fetch requests
	window.fetch = function (...args) {
		const url = args[0];

		if (
			typeof url === 'string' &&
			url.startsWith('https://storage.googleapis.com/data-ticker-prod-tt-news-com/spiel')
		) {
			console.log('🎯 Intercepting fetch request:', url);

			return originalFetch
				.apply(this, args)
				.then((response) => {
					// Clone response to avoid consuming the stream
					const clonedResponse = response.clone();

					// Process the response data
					clonedResponse
						.text()
						.then((responseText) => {
							let parsedData;
							try {
								parsedData = JSON.parse(responseText);
							} catch (e) {
								parsedData = responseText;
							}

							window.postMessage(
								{
									type: 'TICKER_DATA_INTERCEPTED',
									method: 'FETCH',
									url: url,
									data: parsedData,
									timestamp: new Date().toISOString(),
									status: response.status,
									statusText: response.statusText
								},
								'*'
							);
						})
						.catch((err) => {
							console.error('Error parsing response:', err);
						});

					return response; // Return original response
				})
				.catch((error) => {
					console.error('Fetch error:', error);
					throw error;
				});
		}

		return originalFetch.apply(this, args);
	};

	// Intercept XMLHttpRequest (backup method)
	XMLHttpRequest.prototype.open = function (method, url, ...args) {
		this._url = url;
		this._method = method;

		if (typeof url === 'string' && url.includes('data-ticker-prod-tt-news-com')) {
			console.log('🎯 Intercepting XHR request:', url);

			this.addEventListener('load', function () {
				if (this.status === 200) {
					let parsedData;
					try {
						parsedData = JSON.parse(this.responseText);
					} catch (e) {
						parsedData = this.responseText;
					}

					window.postMessage(
						{
							type: 'TICKER_DATA_INTERCEPTED',
							method: 'XHR',
							url: this._url,
							data: parsedData,
							timestamp: new Date().toISOString(),
							status: this.status,
							statusText: this.statusText
						},
						'*'
					);
				}
			});
		}

		return originalXHR.apply(this, [method, url, ...args]);
	};

	console.log('🚀 TT-News Ticker Interceptor loaded');
})();
