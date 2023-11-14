export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
 
export async function GET() {
  const encoder = new TextEncoder();
 
  const customReadable = new ReadableStream({
    start(controller) {
      controller.enqueue(encoder.encode('Basic Streaming Test'));
      controller.close();
    },
  });
 
  return new Response(customReadable, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}