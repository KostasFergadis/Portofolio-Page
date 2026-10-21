import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";

export default [
  { ignores: ["dist", ".astro"] },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
  },
];
