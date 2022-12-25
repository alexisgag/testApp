import React from "react";

import { Column, Row, Img, Text, Input, Button } from "components";

const SigninResetPasswordPage = () => {
  return (
    <>
      <Column className="bg-red_52 flex flex-col font-inter items-center justify-start mx-[auto] sm:p-[15px] md:p-[42px] p-[75px] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[645px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[27px] p-[48px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Img
            src="images/img_arrowleft.svg"
            className="sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] mt-[11px] sm:mt-[4px] md:mt-[6px] sm:w-[10px] md:w-[13px] w-[24px]"
            alt="arrowleft"
          />
          <Column className="flex flex-col items-center justify-start mb-[10px] sm:mb-[4px] md:mb-[5px] md:ml-[25px] ml-[44px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
            <Img
              src="images/img_group_182X168.svg"
              className="max-w-[100%] sm:w-[100%] w-[41%]"
              alt="Group"
            />
            <Column className="flex flex-col items-center justify-start sm:mt-[29px] md:mt-[38px] mt-[68px] w-[100%]">
              <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                <Text
                  className="ml-[133px] sm:ml-[58px] md:ml-[75px] text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Forgot Password
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[30px] md:mt-[39px] mt-[70px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  Enter the email address you used when you joined and we’ll
                  send you instructions to reset your password.
                  <br />
                  For security reasons, we do NOT store your password. So rest
                  assured that we will never send your password via email.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[36px] md:mt-[46px] mt-[82px] w-[100%]">
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
              <Button
                className="cursor-pointer font-bold mt-[102px] sm:mt-[44px] md:mt-[57px] text-[14px] text-center text-white_A700 w-[100%]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillDeeporange300"
              >
                SEND RESET INSTRUCTIONS
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SigninResetPasswordPage;
