import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.ocballoonparty.com" }],
        destination: "https://ocballoonparty.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
