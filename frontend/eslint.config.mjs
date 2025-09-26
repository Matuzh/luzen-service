import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // Pliki, które mają być lintowane
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    // Ignorowane pliki/foldery
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "postcss.config.js",
      "tailwind.config.js",
      "next-env.d.ts",
    ],

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
      // Next.js 13+ nie wymaga importu React w JSX
      "react/react-in-jsx-scope": "off",

      // Ostrzeżenia dla nieużywanych zmiennych
      "@typescript-eslint/no-unused-vars": ["warn"],

      // Pozwala używać require w plikach konfiguracyjnych
      "@typescript-eslint/no-require-imports": "off",
    },
  },

  // TypeScript - reguły zalecane
  tseslint.configs.recommended,

  // React plugin, flat config
  pluginReact.configs.flat.recommended,
]);