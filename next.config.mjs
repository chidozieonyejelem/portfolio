/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];
    // Let social-media scrapers cache the link-preview images reliably
    // instead of revalidating on every fetch.
    const ogCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    ];
    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/opengraph-image", headers: ogCache },
      { source: "/twitter-image", headers: ogCache },
    ];
  },
};

export default nextConfig;
