import { NextResponse } from "next/server";
import { getContent, saveContent } from "@/lib/store";
import { isAuthenticated } from "@/lib/auth";
import type { SiteContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const content = await getContent();
  return NextResponse.json(content);
}

export async function PUT(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Nicht autorisiert" }, { status: 401 });
  }

  let content: SiteContent;
  try {
    content = (await request.json()) as SiteContent;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!content || typeof content !== "object" || !content.contact) {
    return NextResponse.json({ error: "Invalid content" }, { status: 400 });
  }

  await saveContent(content);
  return NextResponse.json({ ok: true });
}
