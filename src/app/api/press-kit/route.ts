export const runtime = "nodejs";

import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const fileName = "Bontera-Press-Kit.pdf";
  const filePath = path.join(process.cwd(), "public", "press-kit", fileName);

  try {
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Press kit not found" }, { status: 404 });
  }
}

