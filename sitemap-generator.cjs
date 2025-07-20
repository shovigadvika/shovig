const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/web-dev", changefreq: "monthly", priority: 0.8 },
  { url: "/app-dev", changefreq: "monthly", priority: 0.8 },
  { url: "/ai", changefreq: "monthly", priority: 0.8 },
  { url: "/digital-marketing", changefreq: "monthly", priority: 0.8 },
  { url: "/training/full-stack-web-dev", changefreq: "monthly", priority: 0.7 },
  { url: "/training/digital-marketing", changefreq: "monthly", priority: 0.7 },
  { url: "/training/ai", changefreq: "monthly", priority: 0.7 },
  { url: "/training/ui-ux", changefreq: "monthly", priority: 0.7 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.6 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
];

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://www.shovig.in" });
  const writeStream = createWriteStream("./public/sitemap.xml");

  sitemap.pipe(writeStream);

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  writeStream.on("finish", () => {
    console.log("✅ Sitemap generated at /public/sitemap.xml");
  });

  writeStream.on("error", (err) => {
    console.error("❌ Error writing sitemap:", err);
  });
})();
