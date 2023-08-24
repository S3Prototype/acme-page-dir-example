import { NextResponse } from "next/server";
import { digest } from "@vercel/edge-config";

export const config = {
  runtime: "edge",
};

export default async function handler() {
  const version = await digest();
  return NextResponse.json({
    digest: version,
  });
}
