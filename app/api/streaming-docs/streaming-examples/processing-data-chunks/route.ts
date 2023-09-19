// Streaming API routes must be defined in an
// app directory, even if the rest of your app
// is in the pages directory.
 
export async function GET() {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
 
  const readableStream = new ReadableStream({
    start(controller) {
      const text = 'Stream me!';
      controller.enqueue(encoder.encode(text));
      controller.close();
    },
  });
 
  const transformStream = new TransformStream({
    transform(chunk, controller) {
      const text = decoder.decode(chunk);
      controller.enqueue(encoder.encode(text.toUpperCase()));
    },
  });
 
  // STREAM ME!
  return new Response(readableStream.pipeThrough(transformStream), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}