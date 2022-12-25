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

const SignupWrongemailPage = () => {
  return (
    <>
      <Row className="bg-lime_50 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] sm:p-[15px] md:p-[34px] p-[61px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[627px] sm:ml-[18px] md:ml-[24px] ml-[auto] mr-[auto] sm:mt-[16px] md:mt-[21px] mt-[38px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] md:ml-[15px] ml-[27px] sm:mx-[0] text-bluegray_900 text-center sm:w-[100%] w-[50%]"
            as="h1"
            variant="h1"
          >
            Manage your work more effectively
          </Text>
          <Img
            src="images/img_workingtime_1.svg"
            className="max-w-[100%] mt-[137px] sm:mt-[60px] md:mt-[77px] w-[100%]"
            alt="WorkingTime"
          />
        </Column>
        <Column className="bg-white_A700 flex flex-col items-center justify-end max-w-[574px] sm:ml-[67px] md:ml-[87px] ml-[auto] md:mr-[126px] sm:mr-[98px] mr-[auto] sm:p-[15px] md:p-[28px] p-[50px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
            <Text
              className="ml-[152px] sm:ml-[66px] md:ml-[86px] text-bluegray_800 w-[auto]"
              as="h2"
              variant="h2"
            >
              Login to Avori
            </Text>
            <Column className="flex flex-col justify-start sm:mt-[20px] md:mt-[26px] mt-[46px] w-[100%]">
              <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col justify-end sm:mx-[0] sm:p-[15px] p-[17px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[95%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[7px] mr-[auto] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                  <Img
                    src="images/img_google.svg"
                    className="flex-shrink-0 md:h-[11px] h-[18px] sm:h-[8px] max-w-[100%] mb-[2px] md:w-[10px] w-[18px] sm:w-[7px]"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[34px] mt-[61px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
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
              <Column className="flex flex-col justify-start sm:mt-[23px] md:mt-[30px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
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
                className="font-normal mt-[11px] sm:mt-[4px] md:mt-[6px] not-italic text-red_600 w-[auto]"
                variant="body1"
              >
                Please enter a valid email address
              </Text>
              <Text
                className="font-medium sm:mt-[24px] md:mt-[31px] mt-[56px] text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Password
              </Text>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex md:mt-[6px] mt-[12px] sm:mt-[5px] sm:mx-[0] sm:w-[100%] w-[95%]"
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[28px] md:mt-[36px] mt-[64px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <CheckBox
                  className="font-medium text-[14px] text-bluegray_800"
                  inputClassName="mr-[5px]"
                  name="Remember"
                  label="Remember"
                  size="sm"
                ></CheckBox>
                <a
                  href={"javascript:"}
                  className="font-medium md:ml-[109px] ml-[193px] sm:ml-[84px] md:mt-[2px] sm:mt-[2px] mt-[5px] text-[14px] text-bluegray_800 underline w-[auto]"
                  rel="noreferrer"
                >
                  Forgot password?
                </a>
              </Row>
              <Button
                className="cursor-pointer font-bold min-w-[95%] sm:mt-[36px] md:mt-[46px] mt-[82px] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillDeeporange300"
              >
                LOGIN
              </Button>
              <Text
                className="font-medium sm:ml-[40px] md:ml-[52px] ml-[92px] sm:mt-[18px] md:mt-[24px] mt-[43px] text-bluegray_800 w-[auto]"
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
        </Column>
      </Row>
    </>
  );
};

export default SignupWrongemailPage;
