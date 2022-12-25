import { SelectBox } from "components";
export default {
  title: "alexis_s_application2/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51_1",
  size: "lg",
  className: "w-[300px]",
};
