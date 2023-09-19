
import { OpenAIStream, StreamingTextResponse } from 'ai'

export const runtime = 'edge'

export default async function handler() {
  const response = await OpenAIStream.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: ["Hello world!"]
  })
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response)
  // Respond with the stream
  return new StreamingTextResponse(stream)
}