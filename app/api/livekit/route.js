import { AccessToken } from 'livekit-server-sdk';

export async function POST(request) {
  try {
    // Extract the GitHub repository ID and the user's GitHub username
    const body = await request.json();
    const { repoId, username } = body;

    if (!repoId || !username) {
      return Response.json(
        { error: 'Missing repoId or username' }, 
        { status: 400 }
      );
    }

    // Pull your LiveKit credentials from environment variables
    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
      return Response.json(
        { error: 'Server misconfigured: Missing LiveKit credentials' }, 
        { status: 500 }
      );
    }

    // 1. Initialize the Access Token with the user's identity
    const at = new AccessToken(apiKey, apiSecret, {
      identity: username,
      // Optional: Set how long the token is valid (e.g., 2 hours)
      ttl: '2h', 
    });

    // 2. Add the specific grants (permissions) for this user
    at.addGrant({
      roomJoin: true,     // Allow them to join a room
      room: repoId,       // Lock them strictly to this specific repository's room
      canPublish: true,   // Allow them to turn on their camera/mic
      canSubscribe: true, // Allow them to see/hear others
    });

    // 3. Generate the signed JWT
    const token = await at.toJwt();

    // 4. Send the token back to your React frontend
    return Response.json({ token });

  } catch (error) {
    console.error('Error generating LiveKit token:', error);
    return Response.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
