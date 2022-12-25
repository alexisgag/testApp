import React from "react";

import { Column, Row, Img, Text, Button } from "components";

const SignupVerificationPage = () => {
  return (
    <>
      <Column className="bg-lime_51 flex flex-col font-inter items-center justify-end mx-[auto] sm:p-[15px] md:p-[38px] p-[67px] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[623px] ml-[auto] mr-[auto] mt-[1px] sm:p-[15px] md:p-[27px] p-[48px] sm:pl-[15px] sm:pr-[15px] rounded-radius20 shadow-bs1 w-[100%]">
          <Img
            src="images/img_arrowleft.svg"
            className="sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] mt-[11px] sm:mt-[4px] md:mt-[6px] sm:w-[10px] md:w-[13px] w-[24px]"
            alt="arrowleft"
          />
          <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[5px] mb-[9px] md:ml-[18px] ml-[33px] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
            <Img
              src="images/img_group_1.svg"
              className="max-w-[100%] sm:w-[100%] w-[41%]"
              alt="Group"
            />
            <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[35px] mt-[62px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  2-Step Vertification
                </Text>
                <Text
                  className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[24px] not-italic text-bluegray_800 text-center w-[100%]"
                  as="h6"
                  variant="h6"
                >
                  We sent a vertìication code to your email. Enter the code from
                  the email in the field below
                </Text>
              </Column>
              <div className="mt-[124px] sm:mt-[54px] md:mt-[70px] sm:w-[100%] w-[92%]"></div>
              <Button
                className="cursor-pointer font-bold mt-[103px] sm:mt-[45px] md:mt-[58px] text-[14px] text-center text-white_A700 w-[100%]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillDeeporange300"
              >
                SEND RESET INSTRUCTIONS
              </Button>
              <Text
                className="font-medium sm:mt-[22px] md:mt-[28px] mt-[51px] text-indigo_400 w-[auto]"
                as="h6"
                variant="h6"
              >
                You haven’t received it? Resend a new code
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SignupVerificationPage;
