import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  Button,
  Stack,
} from "components";
import Sidebar2 from "components/Sidebar2";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const EKYCScanIDCardAddimagePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar2 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[508px] md:h-[656px] h-[953px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1199px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[16px] sm:mb-[8px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                      <Text
                        className="text-bluegray_900 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Scan ID Card
                      </Text>
                      <Text
                        className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 text-center w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Please ensure that the image that you uploaded is clear
                        and not blurred
                      </Text>
                    </Column>
                    <SelectBox
                      className="font-medium sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] text-[16px] text-bluegray_800 sm:w-[100%] w-[31%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="ID Card"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="w-[11px] mr-[24px] sm:mr-[12px] sm:w-[5px] md:mr-[16px] md:w-[7px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="md"
                      variant="OutlineIndigo51_1"
                    ></SelectBox>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Column className="border-2 border-dashed border-indigo_51 flex flex-col items-center sm:mx-[0] md:p-[23px] p-[34px] sm:px-[15px] sm:py-[18px] rounded-radius4 sm:w-[100%] w-[50%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-end justify-end sm:p-[15px] md:p-[18px] p-[27px] rounded-radius16 w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group13173.png')",
                          }}
                        >
                          <Button
                            className="flex sm:h-[29px] md:h-[38px] h-[54px] items-center justify-center mb-[3px] md:mt-[123px] mt-[180px] sm:mt-[95px] sm:w-[28px] md:w-[37px] w-[54px]"
                            shape="icbCircleBorder28"
                            size="xlIcn"
                            variant="icbOutlineBlack9000c"
                          >
                            <Img
                              src="images/img_trash_54X54.svg"
                              className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                              alt="trash One"
                            />
                          </Button>
                        </Column>
                      </Column>
                      <Stack className="h-[359px] relative sm:w-[100%] w-[50%]">
                        <Img
                          src="images/img_image6.png"
                          className="absolute h-[291px] inset-[0] justify-center m-[auto] max-w-[100%] rounded-radius16 sm:w-[100%] w-[86%]"
                          alt="imageSix"
                        />
                        <Column className="absolute border-2 border-dashed border-indigo_51 flex flex-col items-end justify-end md:p-[44px] p-[64px] sm:px-[15px] sm:py-[34px] rounded-radius4 w-[100%]">
                          <Button
                            className="flex sm:h-[29px] md:h-[38px] h-[54px] items-center justify-center md:mt-[121px] mt-[177px] sm:mt-[94px] sm:w-[28px] md:w-[37px] w-[54px]"
                            shape="icbCircleBorder28"
                            size="xlIcn"
                            variant="icbOutlineBlack9000c"
                          >
                            <Img
                              src="images/img_trash_54X54.svg"
                              className="h-[24px] sm:h-[13px] md:h-[17px] flex items-center justify-center"
                              alt="trash Two"
                            />
                          </Button>
                        </Column>
                      </Stack>
                    </Row>
                    <Button
                      className="cursor-pointer font-bold min-w-[25%] sm:mt-[30px] md:mt-[39px] mt-[58px] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder24"
                      size="xl"
                      variant="FillDeeporange300"
                    >
                      Next Step
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

export default EKYCScanIDCardAddimagePage;
