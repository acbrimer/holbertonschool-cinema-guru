import React from "react";

import SearchBar from "../components/general/SearchBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/SearchBar",
  component: SearchBar,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
