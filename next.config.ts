import type { NextConfig } from "next";

/**
 * Статический экспорт под GitHub Pages. Сайт отдаётся не из корня домена,
 * а по пути /leadradar, поэтому basePath обязателен — без него CSS и JS
 * запрашиваются по корню и страница приходит без стилей.
 */
const repo = "leadradar";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPages ? `/${repo}` : undefined,
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
