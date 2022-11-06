/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://ascenders.in",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
