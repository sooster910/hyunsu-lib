import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as ButtonStories from "./Button.stories";

const { Default } = composeStories(ButtonStories);

describe("Button", () => {
  it("calls onClick callback when clicked", async () => {
    const handleClick = vitest.fn();

    render(<Default onClick={handleClick}>test button</Default>);
    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
