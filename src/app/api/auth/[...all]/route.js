import { toNextJsHandler } from 'better-auth/next-js';
import { getAuth } from '../../../../lib/auth.js';

async function handleAuth(request) {
  try {
    return await getAuth().handler(request);
  } catch (error) {
    console.error('Authentication unavailable:', error.message);
    return Response.json({ code: 'AUTH_UNAVAILABLE', message: 'Authentication is temporarily unavailable.' }, { status: 503 });
  }
}

export const { GET, POST } = toNextJsHandler(handleAuth);
