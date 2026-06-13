import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userAgent } = await request.json();
    const WEBHOOK = process.env.DISCORD_WEBHOOK;

    if (!WEBHOOK) return NextResponse.json({ error: "Falta env" }, { status: 500 });

    const ua = userAgent?.toLowerCase() || "";

    let os = "Otro / Desconocido";
    if (ua.includes("windows")) os = "🪟 Windows";
    else if (ua.includes("macintosh") || ua.includes("mac os")) os = "🍏 macOS";
    else if (ua.includes("linux")) os = "🐧 Linux";

    let arch = "x64 / x86";
    if (ua.includes("arm64") || ua.includes("aarch64")) arch = "💪 ARM64 (Snapdragon/M1)";

    const referer = request.headers.get("referer") || "Directo (o link copiado)";
    const language = request.headers.get("accept-language")?.split(",")[0] || "Desconocido";
    const country = request.headers.get("x-vercel-ip-country") || "Global";

    const originSite = referer !== "Directo (o link copiado)" ? new URL(referer).hostname : referer;

    await fetch(WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [{
          title: "📥 Nueva Descarga Exitosa",
          color: 0xFFFFFF, // Blanco
          timestamp: new Date().toISOString(),
          fields: [
            { name: "S.O.", value: os, inline: true },
            { name: "Arquitectura", value: arch, inline: true },
            { name: "Idioma PC", value: `🗣️ ${language}`, inline: true },
            { name: "Procedencia", value: `🔗 ${originSite}`, inline: true },
            { name: "País", value: `🌍 ${country}`, inline: true }
          ],
          description: `**User Agent:**\n\`\`\`text\n${userAgent}\n\`\`\``,
          thumbnail: {
            url: "https://cdn.rawencat.tech/app-icon.png"
          }
        }]
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}