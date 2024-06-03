module.exports = {
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "@vue/eslint-config-typescript",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "vue/no-dupe-keys": "off",
    "vue/require-toggle-inside-transition": "off",
    "vue/multi-word-component-names": 0,
    "no-extra-boolean-cast": 0,
    "@typescript-eslint/consistent-type-imports": "error",
  },
};
