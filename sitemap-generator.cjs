const { SitemapStream } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "weekly", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/website-development", changefreq: "monthly", priority: 0.8 },
  { url: "/app-development", changefreq: "monthly", priority: 0.8 },
  { url: "/artificial-intelligence", changefreq: "monthly", priority: 0.8 },
  { url: "/digital-marketing", changefreq: "monthly", priority: 0.8 },
  {
    url: "/training/full-stack-website-development-training",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/training/digital-marketing-training",
    changefreq: "monthly",
    priority: 0.7,
  },
  {
    url: "/training/artificial-intelligence-training",
    changefreq: "monthly",
    priority: 0.7,
  },
  { url: "/training/ui-ux-training", changefreq: "monthly", priority: 0.7 },
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
