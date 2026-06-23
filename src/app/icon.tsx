import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const logoPath = path.join(process.cwd(), "public", "images", "logo1.png");
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          borderRadius: "50%",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Velluxia"
          style={{ width: "75%", height: "75%", objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
