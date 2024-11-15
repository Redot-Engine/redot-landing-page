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
      "@typescript-eslint/no-unused-expressions": [
        "error",
        { "allowShortCircuit": true, "allowTernary": true },
      ],
      "vue/multi-word-component-names": "off", // Disable multi-word component name rule
      "vue/max-attributes-per-line": ["error", { singleline: 3 }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/attributes-order": ["error", {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "SLOT",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "ATTR_DYNAMIC",
          "ATTR_STATIC",
          "ATTR_SHORTHAND_BOOL",
          "EVENTS",
          "CONTENT",
        ],
        "alphabetical": true,
      }],
      "vue/max-len": ["error", {
        code: 120,
        template: 120,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreHTMLAttributeValues: true,
      }],
      "no-undef": "off", // Disable no-undef rule
      "quotes": ["error", "double"], // Enforce double quotes
      "object-curly-spacing": ["error", "always"], // Enforce padding inside curly braces in imports
      "semi": ["error", "always"], // Enforce semicolons
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in arrays, objects, etc.
    },
  },
  {
    ignores: [".nuxt/*", ".output/*"],
  },
];
