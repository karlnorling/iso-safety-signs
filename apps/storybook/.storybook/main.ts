import { fileURLToPath } from "node:url";
import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const dirname = fileURLToPath(new URL(".", import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-vitest", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/react-vite",
  staticDirs: [{ from: "../../../packages/@iso-safety-signs/assets/assets", to: "/assets" }],
  viteFinal: (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@iso-safety-signs/core": path.resolve(
        dirname,
        "../../../packages/@iso-safety-signs/core/src/index.ts",
      ),
      "@iso-safety-signs/css": path.resolve(
        dirname,
        "../../../packages/@iso-safety-signs/css/src/index.ts",
      ),
      "@iso-safety-signs/react": path.resolve(
        dirname,
        "../../../packages/@iso-safety-signs/react/src/index.ts",
      ),
    };
    return config;
  },
};

export default config;
