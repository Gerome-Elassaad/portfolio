import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "8rem",
          background: "#151515",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          <span
            style={{
              fontSize: "8rem",
              lineHeight: "8rem",
              letterSpacing: "-0.05em",
              whiteSpace: "pre-wrap",
              textWrap: "balance",
            }}
          >
            {title}
          </span>
        </div>
      </div>
    ),
    {
      width: 1920,
      height: 1080,
    }
  );
}
