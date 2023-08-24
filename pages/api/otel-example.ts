// import type { NextApiRequest, NextApiResponse } from "next";
// import { trace, context } from "@opentelemetry/api";

// export default async function getUser(
//   _request: NextApiRequest,
//   response: NextApiResponse
// ) {
//   const tracer = trace.getTracer("page-dir-example");
//   // NOTE: You can replace `your-project-name-tracer` with the actual name of your tracer
//   const span = tracer.startSpan("getUser", undefined, context.active());
//   const ms = Math.floor(Math.random() * 1000);
//   span.setAttribute("sleep", ms);
//   await new Promise((resolve) => setTimeout(resolve, ms));
//   response.status(200).json({ greetings: `Hi there ${ms}!` });
//   span.end();
// }
