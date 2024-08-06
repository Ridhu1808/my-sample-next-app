import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request, Response) {
  let responseText = "Hello";
  let url = new URL(request.url);
  let username = url.searchParams.get("name");
  // In the edge runtime you can use Bindings that are available in your application
  // (for more details see:
  //    - https://developers.cloudflare.com/pages/framework-guides/deploy-a-nextjs-site/#use-bindings-in-your-nextjs-application
  //    - https://developers.cloudflare.com/pages/functions/bindings/
  // )
  //
  // KV Example:
  // const myKv = getRequestContext().env.MY_KV_NAMESPACE
  // await myKv.put('suffix', ' from a KV store!')
  // const suffix = await myKv.get('suffix')
  // responseText += suffix

  // const myKv = getRequestContext().env.MY_KV_NAMESPACE;
  console.log("******", username);
  return NextResponse.json({ message: responseText, username });
}
