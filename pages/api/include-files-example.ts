import { NextApiRequest, NextApiResponse } from "next";
import { readFileSync } from "fs";
import path from "path";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const file = path.join(process.cwd(), "files", "example.json");
  const fileContents = readFileSync(file, "utf8");

  response.setHeader("Content-Type", "application/json");
  response.status(200).end(fileContents);
}
