import React from "react";

import { Column, Row, Img, Text, Line, Input, Button } from "components";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCBeginPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[507px] md:h-[654px] h-[950px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
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
                <Column className="bg-white_A700 flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] p-[124px] sm:p-[15px] md:p-[85px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col items-center justify-start mb-[118px] sm:mb-[62px] md:mb-[81px] md:ml-[193px] ml-[281px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                    <Img
                      src="images/img_paywithcredit.svg"
                      className="sm:h-[120px] md:h-[155px] h-[224px] max-w-[100%] sm:w-[119px] md:w-[154px] w-[224px]"
                      alt="paywithcredit"
                    />
                    <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        eKYC Verification
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_900 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Your information has been verified to ensure your
                        payment safely
                      </Text>
                    </Column>
                    <Button
                      className="cursor-pointer font-bold min-w-[62%] sm:mt-[12px] md:mt-[16px] mt-[24px] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder24"
                      size="xl"
                      variant="FillDeeporange300"
                    >
                      Verify now
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

export default EKYCBeginPage;
