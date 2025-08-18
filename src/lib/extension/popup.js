// Display recent ticker data in popup
chrome.storage.local.get(null, (items) => {
  const matchesDiv = document.getElementById("matches");
  const tickerItems = Object.keys(items).filter((key) =>
    key.startsWith("ticker_")
  );

  if (tickerItems.length === 0) {
    matchesDiv.innerHTML = "<p>No ticker data found yet.</p>";
    return;
  }

  let html = "";
  tickerItems.forEach((key) => {
    const match = items[key];
    const lastUpdate = match.updates[match.updates.length - 1];

    html += `
      <div class="match">
        <strong>${match.matchInfo.teams}</strong><br>
        <small>${match.matchInfo.league} - ${match.matchInfo.date}</small><br>
        <div class="timestamp">
          Last update: ${new Date(lastUpdate.timestamp).toLocaleTimeString()}
        </div>
        <small>Updates: ${match.updates.length}</small>
      </div>
    `;
  });

  matchesDiv.innerHTML = html;
});
