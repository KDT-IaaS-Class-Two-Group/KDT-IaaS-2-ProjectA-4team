/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
import path from "path";
import { fileURLToPath } from "url";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // 현재 모듈의 디렉터리 이름을 가져옵니다.
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // 공유된 폴더를 별칭으로 설정
    config.resolve.alias["@shared"] = path.resolve(__dirname, "../shared");

    // ts-loader 추가
    config.module.rules.push({
      test: /\.tsx?$/, // .ts 또는 .tsx 확장자를 가진 파일들
      use: "ts-loader",
      exclude: /node_modules/,
    });

    return config;
  },
};

export default nextConfig;
