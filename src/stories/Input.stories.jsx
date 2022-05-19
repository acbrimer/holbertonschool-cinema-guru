import React from "react";

import Input from "../components/general/Input";
import { faKey } from "@fortawesome/free-solid-svg-icons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "General/Input",
  component: Input,
};

const AllInputsWrapper = () => (
  <div
    style={{
      width: "calc(100vw - 46px)",
      height: "fit-contents",
      backgroundColor: "var(--color-background)",
      padding: 10,
    }}
  >
    <div
      style={{
        padding: 20,
        width: 200,
        height: 200,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFF",
        justifyContent: "space-between",
      }}
    >
      <Input label="Light/Standard" className="input-standard input-light" />
      <Input label="Light/Outlined" className="input-outlined input-light" />
      <Input
        label="Light/Standard/Icon"
        className="input-standard input-light"
        icon={faKey}
      />
      <Input
        label="Light/Outlined/Icon"
        className="input-outlined input-light"
        icon={faKey}
      />
    </div>
    <div
      style={{
        padding: 20,
        width: 200,
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Input label="Dark/Standard" className="input-standard input-dark" />
      <Input label="Dark/Outlined" className="input-outlined input-dark" />
      <Input
        label="Dark/Standard/Icon"
        className="input-standard input-dark"
        icon={faKey}
      />
      <Input
        label="Dark/Outlined/Icon"
        className="input-outlined input-dark"
        icon={faKey}
      />
    </div>
  </div>
);

export const AllInputs = AllInputsWrapper.bind({});

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const LightStandard = Template.bind({});
LightStandard.args = {
  label: "Light/Standard",
  className: "input-standard input-light",
};

export const LightOutlined = Template.bind({});
LightOutlined.args = {
  label: "Light/Outlined",
  className: "input-outlined input-light",
};

export const DarkStandard = Template.bind({});
DarkStandard.args = {
  label: "Dark/Standard",
  className: "input-standard input-dark",
};

export const DarkOutlined = Template.bind({});
DarkOutlined.args = {
  label: "Dark/Outlined",
  className: "input-outlined input-dark",
  type: "number",
};
