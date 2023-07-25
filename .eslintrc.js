module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["tsconfig.json"],
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-plusplus": 0,
    "no-continue": 0,
    "max-len": ["error", { code: 120 }],
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint", "import"],
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "no-plusplus": 0,
        "no-continue": 0,
        "max-len": ["error", { code: 120 }],
        "import/extensions": ["error", "ignorePackages", { ts: "never" }],
      },
    },
  ],
};
