import React from "react";

import {
  Stack,
  Row,
  Column,
  Text,
  Img,
  Line,
  Input,
  CheckBox,
  Button,
} from "components";

const SigninDefaultPage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1019px] mx-[auto] relative w-[100%]">
        <div className="absolute bg-red_50 h-[1030px] sm:h-[453px] md:h-[586px] w-[100%]"></div>
        <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] items-start justify-between left-[6%] max-w-[1356px] my-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start md:mt-[10px] mt-[18px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
            <Text
              className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] text-bluegray_900 text-center sm:w-[100%] w-[50%]"
              as="h1"
              variant="h1"
            >
              Manage your work more effectively
            </Text>
            <Img
              src="images/img_workingtime.svg"
              className="max-w-[100%] mt-[143px] sm:mt-[62px] md:mt-[81px] w-[100%]"
              alt="WorkingTime"
            />
          </Column>
          <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mx-[0] sm:p-[15px] md:p-[25px] p-[44px] rounded-radius20 shadow-bs1 sm:w-[100%] w-[43%]">
            <Text
              className="md:mt-[12px] mt-[22px] sm:mt-[9px] text-bluegray_800 w-[auto]"
              as="h2"
              variant="h2"
            >
              Login to Avori
            </Text>
            <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[46px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
              <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col justify-end sm:mx-[0] sm:p-[15px] p-[17px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[98%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[6px] mr-[auto] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_google.svg"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[23px] md:mt-[30px] mt-[54px] w-[100%]">
                <Line className="bg-indigo_51 h-[1px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
                <Text
                  className="font-normal not-italic text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Or
                </Text>
                <Line className="bg-indigo_51 h-[1px] sm:my-[2px] md:my-[3px] my-[6px] w-[39%]" />
              </Row>
              <Column className="flex flex-col justify-start sm:mt-[24px] md:mt-[31px] mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Email
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[5px] w-[100%]"
                  type="email"
                  name="email One"
                  placeholder="Infor@gmail.com"
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
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Password
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[5px] w-[100%]"
                  type="password"
                  name="password"
                  placeholder="************"
                  prefix={
                    <Img
                      src="images/img_lock.svg"
                      className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                      alt="lock"
                    />
                  }
                  shape="RoundedBorder4"
                  size="lg"
                  variant="OutlineIndigo51"
                ></Input>
              </Column>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[113px] sm:mt-[49px] md:mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
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
                className="cursor-pointer font-bold min-w-[98%] sm:mt-[35px] md:mt-[45px] mt-[80px] text-[14px] text-center text-white_A700 w-[max-content]"
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
      </Stack>
    </>
  );
};

export default SigninDefaultPage;
