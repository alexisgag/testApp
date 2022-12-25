import React from "react";

import { Column, Row, Img, Text, Line, Input, Stack, Button } from "components";
import Sidebar2 from "components/Sidebar2";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCScanFacePage = () => {
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
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[33px] p-[48px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col items-center justify-end sm:mx-[0] p-[4px] sm:px-[0] sm:w-[100%] w-[28%]">
                    <Text
                      className="mt-[1px] text-bluegray_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Scan Face
                    </Text>
                    <Text
                      className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Follow introduction below
                    </Text>
                  </Column>
                  <Stack className="h-[567px] sm:mt-[21px] md:mt-[27px] mt-[40px] relative sm:w-[100%] w-[56%]">
                    <Column
                      className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start rounded-radius4 top-[0] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group13350.png')",
                      }}
                    >
                      <Stack
                        className="bg-cover bg-no-repeat h-[504px] sm:p-[15px] md:p-[42px] p-[62px] relative w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group13351.svg')",
                        }}
                      >
                        <Img
                          src="images/img_group_white_A700_377X459.svg"
                          className="absolute h-[377px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[79%]"
                          alt="Group One"
                        />
                      </Stack>
                    </Column>
                    <Button
                      className="absolute bottom-[0] flex sm:h-[43px] md:h-[56px] h-[80px] inset-x-[0] items-center justify-center mx-[auto] rounded-radius50 sm:w-[42px] md:w-[55px] w-[80px]"
                      size="3xlIcn"
                      variant="icbOutlineWhiteA700"
                    >
                      <Img
                        src="images/img_camera_80X80.svg"
                        className="h-[28px] sm:h-[15px] md:h-[20px] flex items-center justify-center"
                        alt="camera"
                      />
                    </Button>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EKYCScanFacePage;
