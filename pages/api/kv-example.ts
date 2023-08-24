import { createClient } from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const users = createClient({
    url: "https://diverse-rhino-30353.kv.vercel-storage.com",
    token:
      "AXaRASQgZmZjMGY1ZWYtM2FhYS00MjBlLTg0NTQtOWI4MTg0NmFhZmRiMmM1NGNiNGE1MWRmNDhhMmJlZDM0OTg3MjcxZTlmMDU=",
  });

  const user = await users.get("user:me");

  const products = createClient({
    url: "https://diverse-rhino-30353.kv.vercel-storage.com",
    token:
      "AXaRASQgZmZjMGY1ZWYtM2FhYS00MjBlLTg0NTQtOWI4MTg0NmFhZmRiMmM1NGNiNGE1MWRmNDhhMmJlZDM0OTg3MjcxZTlmMDU=",
  });

  const product = await products.get("product:shirt");

  return response.status(200).json({ user, product });
}
