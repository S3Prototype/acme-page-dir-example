import { registerOTel } from "@vercel/otel";

export function register() {
  registerOTel("page-dir-example");
}
// NOTE: You can replace `your-project-name` with the actual name of your project
