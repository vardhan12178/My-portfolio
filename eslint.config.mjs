import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    ignores: [".next/**", "out/**", "dist/**", "build/**", "node_modules/**"],
  },
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
