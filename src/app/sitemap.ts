import type { MetadataRoute } from "next";

const baseUrl = "https://berlinescots.de";

const serviceSlugs = [
  "escort-agentur-berlin",
  "escort-service-berlin",
  "high-class-escort-berlin",
  "escort-berlin-mitte",
  "business-escort-berlin",
];

const staticPaths = ["", "/about", "/contact", "/privacy", "/terms", "/cookies", "/booking-guidelines"];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];

  ["de", "en"].forEach((locale) => {
    staticPaths.forEach((path) => {
      routes.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
      });
    });

    serviceSlugs.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
      });
    });
  });

  return routes;
}
