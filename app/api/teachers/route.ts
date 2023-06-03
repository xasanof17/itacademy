import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  const data = "Xasanov Javohir";

  return NextResponse.json({ data });
}
