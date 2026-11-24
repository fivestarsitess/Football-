import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {rules:{userAgent:"*",allow:"/"},sitemap:"https://five-star-ball.example/sitemap.xml"};
}
