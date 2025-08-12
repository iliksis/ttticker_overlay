// Listen for requests to example.com/request
chrome.webRequest.onBeforeRequest.addListener(
  async (details) => {
    console.log("Intercepted request:", details);

    try {
      // Extract the request data
      let requestData = {
        url: details.url,
        method: details.method,
        timestamp: Date.now(),
        tabId: details.tabId,
        requestId: details.requestId,
      };

      // If there's a request body, include it
      if (details.requestBody) {
        requestData.body = details.requestBody;
      }

      // Send the intercepted data to your domain
      await fetch("{{DOMAIN}}/api/v1/liveticker", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      console.log("Data forwarded to mydomain.com/intercept");
    } catch (error) {
      console.error("Error forwarding request:", error);
    }

    // Allow the original request to continue
    return {};
  },
  {
    urls: [
      "https://storage.googleapis.com/data-ticker-prod-tt-news-com/spiel/*",
    ],
  },
  ["requestBody"]
);
