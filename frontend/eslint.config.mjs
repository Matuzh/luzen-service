import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: "detect" }, // automatyczne wykrycie React
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Next.js 13+ nie wymaga importu React
      "@typescript-eslint/no-unused-vars": ["warn"], // ostrzeżenia zamiast błędów
      "@typescript-eslint/no-require-imports": "off", // pozwala require w config
    },
    ignores: [".next/", "node_modules/", "postcss.config.js", "tailwind.config.js"],
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);