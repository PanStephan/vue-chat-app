
module.exports = {
  env: {
    es6: false,
    node: true,
    browser: true
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended",
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'linebreak-style': 'off', //doesnt Windows.
    'arrow-parens': 'off', // incompatible with prettier
    'object-curly-newline': 'off', // incompatible with prettier
    'no-mixed-operators': 'off', // incompatible with prettier
    'function-paren-newline': 'off', // incompatible with prettier
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  settings: {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.base.config.js"
      }
    }
  }
}