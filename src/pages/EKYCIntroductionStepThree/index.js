import React from "react";

import { Column, Row, Img, Text, Line, Input, Stack, Button } from "components";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCIntroductionStepThreePage = () => {
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
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[55px] p-[80px] rounded-radius4 shadow-bs w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Introduction
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:my-[31px] md:my-[40px] my-[59px] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[39%]">
                        <Column className="flex flex-col sm:h-[15px] md:h-[20px] h-[28px] items-center px-[1px] sm:w-[14px] md:w-[19px] w-[28px]">
                          <Column className="flex flex-col items-end justify-start sm:mx-[0] my-[3px] outline outline-[0.9px] outline-bluegray_900 p-[1px] sm:px-[0] rounded-radius2 sm:w-[100%] w-[97%]">
                            <Img
                              src="images/img_vector415_bluegray_900.svg"
                              className="max-w-[100%] mt-[2px] sm:w-[100%] w-[48%]"
                              alt="Vector415"
                            />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mr-[3px] sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[83%]">
                              <Img
                                src="images/img_user_1.svg"
                                className="sm:h-[5px] md:h-[7px] h-[9px] max-w-[100%] mt-[1px] sm:w-[4px] md:w-[6px] w-[9px]"
                                alt="user One"
                              />
                              <Img
                                src="images/img_vector415_bluegray_900.svg"
                                className="max-w-[100%] sm:w-[100%] w-[48%]"
                                alt="Vector416"
                              />
                            </Row>
                          </Column>
                        </Column>
                        <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[69%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 1:
                          </Text>
                          <Text
                            className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Scan ID Card
                          </Text>
                        </Column>
                      </Row>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark"
                      />
                    </Row>
                    <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] rounded-radius4 sm:w-[100%] w-[34%]">
                        <Stack
                          className="bg-cover bg-no-repeat h-[28px] p-[1px] relative sm:w-[14px] md:w-[19px] w-[28px]"
                          style={{
                            backgroundImage:
                              "url('images/img_group_28X28.svg')",
                          }}
                        >
                          <Img
                            src="images/img_facebook_26X26.svg"
                            className="absolute h-[26px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius2 sm:w-[13px] md:w-[17px] w-[26px]"
                            alt="facebook"
                          />
                        </Stack>
                        <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-normal mt-[1px] not-italic text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 2:
                          </Text>
                          <Text
                            className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Scan Face
                          </Text>
                        </Column>
                      </Row>
                      <Img
                        src="images/img_checkmark_1.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="checkmark One"
                      />
                    </Row>
                    <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:p-[15px] md:p-[17px] p-[25px] rounded-radius4 shadow-bs2 w-[100%]">
                      <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[4px] ml-[7px] sm:mx-[0] rounded-radius4 sm:w-[100%] w-[55%]">
                        <Stack className="h-[30px] relative w-[13%]">
                          <Img
                            src="images/img_file_28X24.svg"
                            className="absolute h-[28px] left-[0] max-w-[100%] top-[0] sm:w-[100%] w-[86%]"
                            alt="file One"
                          />
                          <Column className="absolute bottom-[0] flex flex-col md:h-[12px] h-[16px] sm:h-[9px] items-center justify-start px-[1px] right-[0] md:w-[11px] w-[16px] sm:w-[8px]">
                            <Button
                              className="flex h-[13px] sm:h-[7px] md:h-[9px] items-center justify-center mb-[1px] w-[13px] sm:w-[6px] md:w-[8px]"
                              shape="icbRoundedBorder6"
                              size="smIcn"
                              variant="icbOutlineDeeporange300"
                            >
                              <Img
                                src="images/img_checkmark_2.svg"
                                className="h-[9px] sm:h-[5px] md:h-[7px] flex items-center justify-center"
                                alt="checkmark Two"
                              />
                            </Button>
                          </Column>
                        </Stack>
                        <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[78%]">
                          <Text
                            className="font-normal not-italic text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 3:
                          </Text>
                          <Text
                            className="font-bold mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Confirm Information
                          </Text>
                        </Column>
                      </Row>
                      <Button
                        className="flex sm:h-[13px] md:h-[17px] h-[24px] items-center justify-center sm:mr-[3px] md:mr-[4px] mr-[7px] my-[13px] sm:my-[6px] md:my-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
                        shape="icbRoundedBorder4"
                        size="mdIcn"
                        variant="icbFillWhiteA700"
                      >
                        <Img
                          src="images/img_arrowright_bluegray_900_24X24.svg"
                          className="h-[16px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="arrowright"
                        />
                      </Button>
                    </Row>
                    <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] md:p-[17px] p-[25px] sm:px-[15px] sm:py-[13px] rounded-radius4 shadow-bs2 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[4px] ml-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                        <Img
                          src="images/img_reply.svg"
                          className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="reply"
                        />
                        <Column className="flex flex-col md:ml-[13px] ml-[20px] sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[64%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Bước 4:
                          </Text>
                          <Text
                            className="font-bold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Signature
                          </Text>
                        </Column>
                      </Row>
                      <Img
                        src="images/img_lock_24X24.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:mr-[3px] md:mr-[4px] mr-[7px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="lock"
                      />
                    </Row>
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

export default EKYCIntroductionStepThreePage;
