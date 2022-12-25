import React from "react";

import { Row, Column, Text, Img, Line, Input, Button } from "components";

const SignupTextfillPage = () => {
  return (
    <>
      <Row className="bg-red_53 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-start mx-[auto] sm:p-[15px] md:p-[39px] p-[69px] w-[100%]">
        <Column className="flex flex-col justify-start max-w-[493px] sm:ml-[30px] md:ml-[39px] ml-[auto] mr-[auto] sm:mt-[10px] md:mt-[13px] mt-[24px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Text
            className="leading-[40.00px] md:leading-[normal] sm:leading-[normal] ml-[2px] sm:mx-[0] text-bluegray_900 text-center sm:w-[100%] w-[72%]"
            as="h1"
            variant="h1"
          >
            Don't worry about overwhelming tasks
          </Text>
          <Img
            src="images/img_group7_597X493.svg"
            className="max-w-[100%] mt-[101px] sm:mt-[44px] md:mt-[57px] w-[100%]"
            alt="GroupSeven"
          />
        </Column>
        <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[574px] sm:ml-[123px] md:ml-[159px] ml-[auto] md:mr-[107px] sm:mr-[83px] mr-[auto] mt-[1px] sm:p-[15px] md:p-[21px] p-[38px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Column className="flex flex-col items-center justify-start mb-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[86%]">
            <Text className="text-bluegray_800 w-[auto]" as="h2" variant="h2">
              Sign up to Avori
            </Text>
            <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col justify-end sm:mt-[20px] md:mt-[26px] mt-[46px] sm:mx-[0] sm:p-[15px] p-[17px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[98%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[3px] ml-[7px] mr-[auto] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                <Img
                  src="images/img_google_18X18.svg"
                  className="flex-shrink-0 md:h-[11px] h-[18px] sm:h-[8px] max-w-[100%] mb-[2px] md:w-[10px] w-[18px] sm:w-[7px]"
                  alt="google"
                />
                <Text
                  className="flex-grow font-medium sm:ml-[43px] md:ml-[55px] ml-[98px] mt-[3px] text-bluegray_800"
                  as="h6"
                  variant="h6"
                >
                  Sign up with Google
                </Text>
              </Row>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[26px] md:mt-[34px] mt-[61px] w-[100%]">
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
            <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[51px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="Textinput"
                placeholder="Avo Lee"
                prefix={
                  <Img
                    src="images/img_user.svg"
                    className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="user"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex md:mt-[30px] mt-[53px] sm:mt-[23px] w-[100%]"
                type="email"
                name="email"
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
              <Input
                className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                wrapClassName="flex md:mt-[24px] mt-[43px] sm:mt-[18px] w-[100%]"
                name="Textinput One"
                placeholder="Avoooo21"
                prefix={
                  <Img
                    src="images/img_lock_20X20.svg"
                    className="ml-[1px] mr-[16px] sm:mr-[7px] md:mr-[9px] my-[auto]"
                    alt="lock"
                  />
                }
                suffix={
                  <Img
                    src="images/img_eye_20X20.svg"
                    className="ml-[35px] mr-[1px] sm:ml-[15px] md:ml-[19px] my-[auto]"
                    alt="eye"
                  />
                }
                shape="RoundedBorder4"
                size="lg"
                variant="OutlineIndigo51"
              ></Input>
              <Text
                className="font-medium leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[32px] md:mt-[42px] mt-[74px] sm:mx-[0] text-bluegray_800 text-center sm:w-[100%] w-[76%]"
                as="h6"
                variant="h6"
              >
                <span className="text-bluegray_400 text-[14px] font-inter">
                  By clicking “SIGN UP" button, I agree with your
                </span>
                <span className="text-bluegray_800 text-[14px] font-inter">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-bluegray_800 text-[14px] font-inter underline"
                >
                  Term and Policy
                </a>
              </Text>
              <Button
                className="cursor-pointer font-bold sm:mt-[23px] md:mt-[30px] mt-[54px] text-[14px] text-center text-white_A700 w-[100%]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillDeeporange300"
              >
                SIGN UP
              </Button>
              <Text
                className="font-medium sm:mt-[17px] md:mt-[22px] mt-[39px] text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                <span className="text-bluegray_800 text-[14px] font-inter font-normal not-italic">
                  You have an account already?
                </span>
                <span className="text-bluegray_800 text-[14px] font-inter">
                  {" "}
                </span>
                <a
                  href="javascript:"
                  className="text-deep_orange_300 text-[14px] font-inter underline"
                >
                  Sign in
                </a>
              </Text>
            </Column>
          </Column>
        </Column>
      </Row>
    </>
  );
};

export default SignupTextfillPage;
