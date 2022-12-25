import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo51: "bg-white_A700 border border-indigo_51 border-solid",
  OutlineIndigo51_1: "border border-indigo_51 border-solid",
  FillDeeporange300: "bg-deep_orange_300",
  FillGray51: "bg-gray_51",
  srcOutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid",
  srcFillGray51: "bg-gray_51",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  CustomBorderBL4:
    "rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
  RoundedBorder8: "rounded-radius8",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "sm:pb-[3px] md:pb-[4px] pb-[6px] pt-[12px] sm:pt-[6px] md:pt-[8px] sm:px-[3px] md:px-[4px] px-[6px]",
  md: "sm:pb-[11px] md:pb-[15px] pb-[22px] md:pt-[11px] pt-[17px] sm:pt-[9px] md:px-[11px] sm:px-[15px] px-[17px]",
  lg: "md:p-[13px] p-[19px] sm:px-[15px] sm:py-[10px]",
  xl: "md:pb-[11px] pb-[16px] sm:pb-[8px] sm:pt-[11px] md:pt-[14px] pt-[21px] md:px-[11px] sm:px-[15px] px-[16px]",
  "2xl": "md:p-[15px] p-[23px] sm:px-[15px] sm:py-[12px]",
  smSrc: "p-[13px] sm:p-[6px] md:p-[8px]",
  mdSrc:
    "md:pb-[11px] pb-[16px] sm:pb-[8px] sm:pt-[11px] md:pt-[14px] pt-[21px] md:px-[11px] sm:px-[15px] px-[16px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CustomBorderBL4",
    "RoundedBorder8",
    "srcRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo51",
    "OutlineIndigo51_1",
    "FillDeeporange300",
    "FillGray51",
    "srcOutlineBluegray200",
    "srcFillGray51",
    "srcOutlineBlack9000c",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
