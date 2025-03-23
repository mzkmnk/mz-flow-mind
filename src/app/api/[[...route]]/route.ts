import {Hono} from "hono";
import {handle} from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath('/api').get('/hello', (c) => {
  return c.text('hello hono');
})

export const GET = handle(app);