import { Input } from "components";
export default {
  title: "alexis_s_application2/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51",
  size: "lg",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
