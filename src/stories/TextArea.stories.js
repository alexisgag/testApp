import { TextArea } from "components";
export default {
  title: "alexis_s_application2/TextArea",
  component: TextArea,
};

export const SampleTextarea = (args) => <TextArea {...args} />;

SampleTextarea.args = {
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51",
  size: "sm",
  placeholder: "placeholder",
};
