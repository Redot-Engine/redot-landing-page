import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      "vue/multi-word-component-names": "off", // Disable multi-word component name rule
      "no-undef": "off", // Disable no-undef rule
      "quotes": ["error", "double"], // Enforce double quotes
      "object-curly-spacing": ["error", "always"], // Enforce padding inside curly braces in imports
      "semi": ["error", "always"], // Enforce semicolons
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in arrays, objects, etc.
    },
  },
];
