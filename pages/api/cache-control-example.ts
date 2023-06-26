import type { NextApiResponse } from "next";

export const config = {
  runtime: "edge",
};

export default function handler(response: NextApiResponse) {
  response.setHeader("Vercel-CDN-Cache-Control", "s-maxage=3600");
  response.setHeader("CDN-Cache-Control", "s-maxage=60");
  response.setHeader("Cache-Control", "max-age=1");

  return response.status(200).json({ name: "John Doe" });
}
