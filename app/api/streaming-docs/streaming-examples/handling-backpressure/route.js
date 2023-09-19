// Streaming API routes must be defined in an
// app directory, even if the rest of your app
// is in the pages directory.

async function sendMessage(message, writableStream) {
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  try {
    for (const chunk of encoded) {
      await defaultWriter.ready;
      await defaultWriter.write(chunk);
      console.log("Chunk written to sink.");
    }
    // Call ready again to ensure that all chunks are written
    // before closing the writer.
    await defaultWriter.ready;
    await defaultWriter.close();
    console.log("All chunks written");
  } catch (err) {
    console.log("Error:", err);
  }
}
const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const messageArray = [];

const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        messageArray.push(decoded);
        resolve();
      });
    },
    close() {
      messageArray.push(`[MESSAGE RECEIVED] ${result}`);
    },
    abort(err) {
      console.log("Sink error:", err);
    },
  },
  queuingStrategy
);

sendMessage("Hello, world.", writableStream);