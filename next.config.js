/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["zh-CN"],
    defaultLocale: "zh-CN",
  },
  env: {
    siteTitle: '只是胡闹',
    siteTagline: '一个人的胡说八道',
    categories: {
      'reading': '读书',
      'music': '爱乐',
      'movie': '观影',
      'technology': '探技',
    },
  },
}

module.exports = nextConfig
