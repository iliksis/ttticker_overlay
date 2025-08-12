import {
  defineEventHandler,
  readBody,
  setResponseHeader,
  setResponseStatus,
} from 'h3';

export default defineEventHandler(async (event) => {
  console.log(event.method);
  setResponseHeader(event, 'Access-Control-Allow-Origin', '*');
  if (event.method === 'POST') {
    const body = await readBody(event);
    console.log('liveticker', body);
    setResponseStatus(event, 200);
    return 'ok';
  }
  setResponseStatus(event, 200);
  return 'ok';
});
