/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,

  // 아래 항목 추가
  experimental: {
    externalDir: true,
  },
  images: {
    domains: [process.env.NEXT_PUBLIC_CLOUD_FRONT], // CloudFront 도메인 추가
  },
};
