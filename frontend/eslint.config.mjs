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
      // Wyłącza wymóg importu React w JSX
      "react/react-in-jsx-scope": "off",

      // Ostrzeżenia dla nieużywanych zmiennych
      "@typescript-eslint/no-unused-vars": ["warn"],

      // Pozwala używać require w plikach konfiguracyjnych
      "@typescript-eslint/no-require-imports": "off",
    },
    ignores: [
      ".next/",
      "node_modules/",
      "postcss.config.js",
      "tailwind.config.js",
    ],
  },

  // TypeScript
  tseslint.configs.recommended,

  // React plugin, flat config, z regułami wyłączonymi w rules powyżej
  pluginReact.configs.flat.recommended,
]);