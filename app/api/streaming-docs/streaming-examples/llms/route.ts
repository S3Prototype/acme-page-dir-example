// Streaming API routes must be defined in an
// app directory, even if the rest of your app
// is in the pages directory.

import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

// Can be 'nodejs', but we recommend using 'edge'
export const runtime = 'edge';
 
const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});
 
export async function GET() {

  // Make a request to OpenAI's API based on
  // a placeholder prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [{ role: "user", content: "Say this is a test." }],
  });
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
 
  // Respond with the stream
  return new StreamingTextResponse(stream);
}