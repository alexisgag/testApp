import React from "react";

import { Column, Row, Img, Text, Line, Input, Button } from "components";
import Sidebar2 from "components/Sidebar2";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCSuccessfulPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar2 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[508px] md:h-[656px] h-[953px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start mb-[1px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[2px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    eKYC
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Setting/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> eKYC</span>
                  </Text>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] p-[103px] sm:p-[15px] md:p-[70px] rounded-radius4 shadow-bs w-[100%]">
                  <Img
                    src="images/img_group18034.svg"
                    className="max-w-[100%] w-[23%]"
                    alt="Group18034"
                  />
                  <Column className="flex flex-col items-center justify-start mb-[130px] sm:mb-[69px] md:mb-[89px] sm:mt-[42px] md:mt-[54px] mt-[79px] sm:mx-[0] sm:px-[0] md:px-[4px] px-[7px] sm:w-[100%] w-[54%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[95%]">
                      <Text
                        className="text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Yeahhh! Your account has been verified
                      </Text>
                      <Text
                        className="font-normal sm:ml-[31px] md:ml-[40px] ml-[59px] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Thank for your patient. Your account has been protected
                      </Text>
                    </Column>
                    <Button
                      className="cursor-pointer font-bold min-w-[42%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder24"
                      size="xl"
                      variant="FillDeeporange300"
                    >
                      Explore product
                    </Button>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCSuccessfulPage;
