import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  i18n: {
    locales: ["en-US", "de", "fr", "it", "nl-NL"],
    defaultLocale: "en-US",
    // localeDetection: false,
  },
  trailingSlash: true,
};

export default nextConfig;
