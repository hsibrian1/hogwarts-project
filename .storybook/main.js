module.exports = {
  "stories": [
    "../src/stories/**/*.stories.ts",
    "../src/app/components/**/*.stories.ts",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "webpack5"
  }
}