import type { NextFetchEvent } from 'next/server';

export const config = {
  runtime: 'edge',
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function getAlbum() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums/1');
  await wait(10000);
  return res.json();
}

export default function MyEdgeFunction(
  request: Request,
  context: NextFetchEvent,
) {
  context.waitUntil(getAlbum().then((json) => console.log({ json })));

  return new Response(`Hello, from ${request.url} I'm an Edge Function!`);
}