import { ServerEventBus } from '$lib/ServerEventBus';
import { json } from '@sveltejs/kit';

const eventBus = new ServerEventBus();

export const POST = async ({ request }) => {
	try {
		const data = await request.json();
		eventBus.emit('liveticker', data);
		return json({ success: true });
	} catch (error) {
		return json({ success: false, error: error });
	}
};

export async function GET() {
	const encoder = new TextEncoder();
	let isControllerClosed = false;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	let handleNewData: (event: any) => void;

	const stream = new ReadableStream({
		start(controller) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			handleNewData = (event: any) => {
				// Check if controller is still open before trying to enqueue
				if (!isControllerClosed) {
					try {
						const message = `data: ${JSON.stringify({
							type: 'data',
							payload: event.detail,
							timestamp: new Date().toISOString()
						})}\n\n`;
						controller.enqueue(encoder.encode(message));
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
					} catch (_) {
						// If enqueue fails, mark as closed and remove listener
						console.log('Stream closed, removing listener');
						isControllerClosed = true;
						eventBus.removeEventListener('liveticker', handleNewData);
					}
				}
			};

			eventBus.addEventListener('liveticker', handleNewData);

			// Send connection message
			try {
				const connectMessage = `data: ${JSON.stringify({
					type: 'connected',
					timestamp: new Date().toISOString()
				})}\n\n`;
				controller.enqueue(encoder.encode(connectMessage));
			} catch (error) {
				console.log('Failed to send connect message:', error);
				isControllerClosed = true;
			}
		},

		cancel() {
			// Called when the stream is cancelled (connection closed)
			console.log('SSE stream cancelled');
			isControllerClosed = true;
			if (handleNewData) {
				eventBus.removeEventListener('liveticker', handleNewData);
			}
		}
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache',
			Connection: 'keep-alive',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': 'Cache-Control'
		}
	});
}
