import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Stack,
  CheckBox,
  Button,
} from "components";
import Sidebar3 from "components/Sidebar3";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const PaymentInfoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
          <Sidebar3 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[400px] md:h-[517px] h-[750px] max-w-[1px] sm:mb-[127px] md:mb-[165px] mb-[240px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center justify-start max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> </span>
                    <span className="text-bluegray_400 text-[16px]">
                      Product detail/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Checkout
                    </span>
                  </Text>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[18px] md:mt-[24px] mt-[35px] w-[100%]">
                  <Stack className="h-[803px] relative sm:w-[100%] w-[67%]">
                    <Column className="absolute bottom-[0] flex flex-col justify-start left-[7%] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[22%]">
                      <Text
                        className="font-normal ml-[3px] not-italic text-white_A700 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Balance
                      </Text>
                      <Text
                        className="font-bold mt-[11px] sm:mt-[5px] md:mt-[7px] text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        $0.0
                      </Text>
                    </Column>
                    <Column className="absolute bg-white_A700 bottom-[0] flex flex-col justify-start sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs w-[100%]">
                      <Column className="flex flex-col justify-end ml-[1px] mt-[1px] sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[29%]">
                        <Text
                          className="font-bold mt-[2px] text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Payment information
                        </Text>
                        <Text
                          className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fill form below
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mb-[147px] md:mb-[190px] mb-[277px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                          <CheckBox
                            className="font-medium text-[14px] text-bluegray_800"
                            inputClassName="mr-[5px]"
                            name="Remember"
                            label="Cash on delivery"
                            size="md"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_800"
                            inputClassName="h-[18px] mr-[5px] w-[18px]"
                            name="Remember One"
                            label="Credit card"
                            size="sm"
                            variant="OutlineBluegray40087"
                          ></CheckBox>
                          <CheckBox
                            className="font-medium sm:mt-[10px] md:mt-[13px] mt-[20px] text-[14px] text-bluegray_800"
                            inputClassName="mr-[5px]"
                            name="Remember Two"
                            label="RiriBa wallet"
                            size="sm"
                          ></CheckBox>
                        </Column>
                        <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                        <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] pt-[3px] w-[100%]">
                          <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Card number
                            </Text>
                            <Input
                              className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                              wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                              type="number"
                              name="Frame"
                              placeholder="Enter your card number"
                              prefix={
                                <Img
                                  src="images/img_save_20X20.svg"
                                  className="ml-[4px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                                  alt="save"
                                />
                              }
                              shape="RoundedBorder4"
                              size="xl"
                              variant="OutlineIndigo51"
                            ></Input>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] pt-[3px] w-[100%]">
                            <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Card holder
                              </Text>
                              <Input
                                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                                wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                                type="text"
                                name="Frame One"
                                placeholder="Enter your name"
                                prefix={
                                  <Img
                                    src="images/img_user_2.svg"
                                    className="ml-[4px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                                    alt="user"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="xl"
                                variant="OutlineIndigo51"
                              ></Input>
                            </Column>
                            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                CVV
                              </Text>
                              <Input
                                className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                                wrapClassName="flex md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                                name="Frame Two"
                                placeholder="***"
                                prefix={
                                  <Img
                                    src="images/img_lock_1.svg"
                                    className="ml-[3px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                                    alt="lock"
                                  />
                                }
                                shape="RoundedBorder4"
                                size="md"
                                variant="OutlineIndigo51"
                              ></Input>
                            </Column>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                          <Img
                            src="images/img_rectangle.png"
                            className="max-w-[100%] w-[36%]"
                            alt="Rectangle"
                          />
                          <Column className="flex flex-col sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[57%]">
                            <Column className="flex flex-col justify-start sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[54%]">
                              <Text
                                className="font-bold mt-[4px] text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                Polo Shirt
                              </Text>
                              <Text
                                className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Color: Grey, S
                              </Text>
                            </Column>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[28px] mt-[41px] w-[100%]">
                              <Text
                                className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Price
                              </Text>
                              <Text
                                className="font-semibold mt-[1px] text-bluegray_800 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $120.0
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                        <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="md:mt-[21px] mt-[31px] sm:mt-[16px] w-[100%]"
                          name="Group One"
                          placeholder="Enter reffered code"
                          shape="RoundedBorder8"
                          size="lg"
                          variant="OutlineIndigo51"
                        ></Input>
                        <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                        <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] pt-[4px] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Price
                            </Text>
                            <Text
                              className="font-medium mt-[1px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $120.0
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] pl-[3px] pt-[3px] w-[100%]">
                            <Text
                              className="font-normal mt-[2px] not-italic text-bluegray_400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Shipping fee
                            </Text>
                            <Text
                              className="font-medium mt-[1px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              $10.0
                            </Text>
                          </Row>
                        </Column>
                        <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[16px] md:mt-[21px] mt-[31px] pl-[1px] pt-[1px] w-[100%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Total
                          </Text>
                          <Text
                            className="font-bold mt-[4px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            $130.0
                          </Text>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Button
                            className="cursor-pointer font-bold text-[14px] text-center text-white_A700 w-[100%]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillDeeporange300"
                          >
                            Purchase now
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-[14px] text-bluegray_800 text-center w-[100%]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillGray51"
                          >
                            Scan QR code
                          </Button>
                        </Column>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[98%]"
                          as="h6"
                          variant="h6"
                        >
                          By clicking “Purchase” button, I agree with RiriBa
                          Term and Policy
                        </Text>
                      </Column>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                      <Img
                        src="images/img_arrowleft_indigo_400_24X24.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowleft"
                      />
                      <Text
                        className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-indigo_400"
                        as="h5"
                        variant="h5"
                      >
                        Back to shopping cart
                      </Text>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default PaymentInfoPage;
