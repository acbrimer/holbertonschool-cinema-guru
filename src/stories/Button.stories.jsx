import React from "react";

import Button from "../components/general/Button";
import { faKey } from "@fortawesome/free-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Button",
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  label: "Sign Up",
  icon: faKey,
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: faKey,
};
