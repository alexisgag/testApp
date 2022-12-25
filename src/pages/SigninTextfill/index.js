import React from "react";

import {
  Row,
  Column,
  Text,
  Img,
  Line,
  Input,
  CheckBox,
  Button,
} from "components";

const SigninTextfillPage = () => {
  return (
    <>
      <Row className="bg-red_51 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center mx-[auto] sm:p-[15px] md:p-[22px] p-[40px] w-[100%]">
        <Column className="flex flex-col items-center max-w-[627px] sm:ml-[28px] md:ml-[36px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 text-center sm:w-[100%] w-[50%]"
            as="h1"
            variant="h1"
          >
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_483X627.svg"
            className="max-w-[100%] mt-[143px] sm:mt-[62px] md:mt-[81px] w-[100%]"
            alt="WorkingTime"
          />
          <Text
            className="font-medium mt-[151px] sm:mt-[66px] md:mt-[85px] text-bluegray_800 w-[auto]"
            as="h6"
            variant="h6"
          >
            <span className="text-bluegray_800 text-[14px] font-inter">
              You don’t have an account yet?
            </span>
            <span className="text-bluegray_800 text-[14px] font-inter"> </span>
            <a
              href="javascript:"
              className="text-bluegray_701 text-[14px] font-inter underline"
            >
              Sign up
            </a>
          </Text>
        </Column>
        <Column className="bg-white_A700 flex flex-col items-center max-w-[574px] sm:mb-[11px] md:mb-[15px] mb-[27px] sm:ml-[68px] md:ml-[88px] ml-[auto] sm:mr-[106px] md:mr-[138px] mr-[auto] sm:p-[15px] md:p-[25px] p-[44px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Text
            className="md:mt-[12px] mt-[22px] sm:mt-[9px] text-bluegray_800 w-[auto]"
            as="h2"
            variant="h2"
          >
            Login to Avori
          </Text>
          <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col justify-end sm:mt-[20px] md:mt-[26px] mt-[46px] sm:mx-[0] sm:p-[15px] p-[17px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[86%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[6px] mr-[auto] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
              <Img
                src="images/img_google_18X18.svg"
                className="flex-shrink-0 md:h-[11px] h-[18px] sm:h-[8px] max-w-[100%] mb-[1px] md:w-[10px] w-[18px] sm:w-[7px]"
                alt="google"
              />
              <Text
                className="flex-grow font-medium ml-[105px] sm:ml-[46px] md:ml-[59px] mt-[3px] text-bluegray_800"
                as="h6"
                variant="h6"
              >
                Login with Google
              </Text>
            </Row>
          </Column>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mt-[23px] md:mt-[30px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
            <Line className="bg-indigo_51 h-[1px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
            <Text
              className="font-normal sm:ml-[18px] md:ml-[24px] ml-[43px] not-italic text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              Or
            </Text>
            <Line className="bg-indigo_51 h-[1px] sm:ml-[18px] md:ml-[23px] ml-[41px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
          </Row>
          <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Text
                className="font-medium text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[5px] w-[100%]"
                type="email"
                name="email One"
                placeholder="Ackermanlhn@gmail.com"
                prefix={
                  <Img
                    src="images/img_mail.svg"
                    className="ml-[4px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="mail"
                  />
                }
                shape="RoundedBorder4"
                size="xl"
                variant="OutlineIndigo51"
              ></Input>
            </Column>
            <Text
              className="font-medium sm:mt-[13px] md:mt-[17px] mt-[31px] text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              Password
            </Text>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
              wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[5px] w-[100%]"
              type="password"
              name="password"
              placeholder="************"
              prefix={
                <Img
                  src="images/img_lock_20X20.svg"
                  className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                  alt="lock"
                />
              }
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineIndigo51"
            ></Input>
          </Column>
          <Column className="flex flex-col items-center justify-start mt-[115px] sm:mt-[50px] md:mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
              <CheckBox
                className="font-medium text-[14px] text-bluegray_800"
                inputClassName="mr-[5px]"
                name="Remember"
                label="Remember"
                size="sm"
              ></CheckBox>
              <a
                href={"javascript:"}
                className="font-medium md:mt-[2px] sm:mt-[2px] mt-[5px] text-[14px] text-bluegray_800 underline w-[auto]"
                rel="noreferrer"
              >
                Forgot password?
              </a>
            </Row>
            <Button
              className="cursor-pointer font-bold sm:mt-[35px] md:mt-[45px] mt-[80px] text-[14px] text-center text-white_A700 w-[100%]"
              shape="CircleBorder28"
              size="2xl"
              variant="FillDeeporange300"
            >
              LOGIN
            </Button>
            <Text
              className="font-medium sm:mt-[24px] md:mt-[31px] mt-[56px] text-bluegray_800 w-[auto]"
              as="h6"
              variant="h6"
            >
              <span className="text-bluegray_800 text-[14px] font-inter">
                You don’t have an account yet?
              </span>
              <span className="text-bluegray_800 text-[14px] font-inter">
                {" "}
              </span>
              <a
                href="javascript:"
                className="text-deep_orange_300 text-[14px] font-inter underline"
              >
                Sign up
              </a>
            </Text>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SigninTextfillPage;
