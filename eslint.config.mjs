import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx}"], // Apply to TypeScript files only
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-expressions": "off", // Disable unused expressions
      "@typescript-eslint/no-non-null-asserted-optional-chain": "off", // Disable optional chain assertion check
      "no-var": "off", // Disable the rule that prevents 'var' usage
      "prefer-const": "off", // Disable 'prefer-const' rule
    },
  },
];

export default eslintConfig;
