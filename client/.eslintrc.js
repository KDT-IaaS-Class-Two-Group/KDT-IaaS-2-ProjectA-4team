module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/no-unused-vars": "warn", // 혹은 'off'
    "prefer-const": "warn", // 혹은 'off'
    "import/no-anonymous-default-export": "off", // 익명 함수 사용 허용
  },
  ignorePatterns: ["test/app.e2e-spec.ts"], // 특정 파일 무시
};
