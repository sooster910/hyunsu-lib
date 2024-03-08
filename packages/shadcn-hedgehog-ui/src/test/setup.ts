// setupTests.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
// Storybook's preview file location
import { setProjectAnnotations } from "@storybook/react";
import globalStorybookConfig from "../../.storybook/preview";

setProjectAnnotations(globalStorybookConfig);
afterEach(() => {
  cleanup();
});
