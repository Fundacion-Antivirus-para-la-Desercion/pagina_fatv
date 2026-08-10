import { SitemapStream, streamToPromise } from "sitemap";
import fs from "node:fs";

const hostname = "https://pagina-web-antivirus.web.app";

const routes = [
  "/",
  "/DonationPay",
  "/social-intervention",
  "/dataAnalytics",
  "/Comunicaciones",
  "/fundacion",
  "/News",
  "/ContactUs",
  "/gestion-de-la-permanencia",
  "/consultorias",
  "/provocacion",
  "/atvconnect",
  "/news/detail",
];

const sitemap = new SitemapStream({
  hostname,
});

routes.forEach((route) => {
  sitemap.write({
    url: route,
    priority: route === "/" ? 1.0 : 0.8,
    changefreq: "monthly",
  });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("./public/sitemap.xml", data.toString());

  const robots = `User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml
`;

  fs.writeFileSync("./public/robots.txt", robots);

  console.log("✅ Sitemap generado");
  console.log("✅ Robots generado");
});