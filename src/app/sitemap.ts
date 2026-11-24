import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes=["","about","age-groups","training","membership","volunteer","register","contact","privacy","safeguarding"];
  return routes.map(route=>({url:`https://five-star-ball.example/${route}`,lastModified:new Date(),changeFrequency:"monthly",priority:route===" "||route===""?1:.8}));
}
