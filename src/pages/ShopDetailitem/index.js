import React from "react";

import { Column, Row, Img, Text, Line, Input, List, Button } from "components";
import Sidebar5 from "components/Sidebar5";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const ShopDetailitemPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar5 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[1055px] md:h-[1362px] h-[1979px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mb-[4px] md:mb-[6px] mb-[9px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                  <Text
                    className="font-poppins text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Shopping centre
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Product detail
                    </span>
                  </Text>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mb-[20px] md:mb-[26px] mb-[38px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <List
                          className="grid min-h-[auto] w-[18%]"
                          orientation="vertical"
                        >
                          <Img
                            src="images/img_rectangle_126X116.png"
                            className="max-w-[100%] my-[0] w-[100%]"
                            alt="Rectangle"
                          />
                          <Img
                            src="images/img_rectangle_1.png"
                            className="max-w-[100%] my-[0] w-[100%]"
                            alt="Rectangle One"
                          />
                          <Img
                            src="images/img_rectangle_2.png"
                            className="max-w-[100%] my-[0] w-[100%]"
                            alt="Rectangle Two"
                          />
                          <Img
                            src="images/img_rectangle_3.png"
                            className="max-w-[100%] my-[0] w-[100%]"
                            alt="Rectangle Three"
                          />
                        </List>
                        <Img
                          src="images/img_rectangle.png"
                          className="max-w-[100%] sm:w-[100%] w-[80%]"
                          alt="Rectangle Four"
                        />
                      </Row>
                      <Column className="flex flex-col sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[36%]">
                        <Column className="flex flex-col justify-start ml-[3px] sm:mx-[0] pb-[3px] sm:px-[0] sm:w-[100%] w-[53%]">
                          <Text
                            className="text-bluegray_900 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            Polo Shirt
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                            <Text
                              className="flex-grow font-normal not-italic text-bluegray_400"
                              as="h5"
                              variant="h5"
                            >
                              Code: #1230
                            </Text>
                            <Img
                              src="images/img_frame_11X77.png"
                              className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[44%]"
                              alt="Frame"
                            />
                          </Row>
                        </Column>
                        <Text
                          className="sm:mt-[17px] md:mt-[22px] mt-[32px] text-indigo_400 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $120.0
                        </Text>
                        <Column className="flex flex-col justify-start ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[28%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose color
                          </Text>
                          <Img
                            src="images/img_computer_24X52.svg"
                            className="max-w-[100%] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:w-[100%] w-[51%]"
                            alt="computer"
                          />
                        </Column>
                        <Column className="flex flex-col justify-start ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[35%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose quantity
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                            <Column className="border border-indigo_51 border-solid flex flex-col sm:h-[18px] md:h-[23px] h-[32px] items-center sm:px-[4px] md:px-[6px] px-[9px] sm:w-[17px] md:w-[22px] w-[32px]">
                              <div className="bg-bluegray_900 h-[1px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius083 sm:w-[100%] w-[93%]"></div>
                            </Column>
                            <Text
                              className="font-medium sm:ml-[10px] md:ml-[13px] ml-[20px] text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              1
                            </Text>
                            <Button
                              className="flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[21px] sm:w-[17px] md:w-[22px] w-[32px]"
                              size="lgIcn"
                              variant="icbOutlineIndigo51"
                            >
                              <Img
                                src="images/img_plus_32X32.svg"
                                className="h-[13px] sm:h-[7px] md:h-[9px] flex items-center justify-center"
                                alt="plus"
                              />
                            </Button>
                          </Row>
                        </Column>
                        <Column className="flex flex-col justify-start ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pr-[1px] pt-[1px] sm:px-[0] sm:w-[100%] w-[39%]">
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Choose size
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                            <Button
                              className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                              size="sm"
                              variant="OutlineIndigo51"
                            >
                              S
                            </Button>
                            <Button
                              className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                              size="md"
                              variant="OutlineIndigo51"
                            >
                              M
                            </Button>
                            <Button
                              className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                              size="md"
                              variant="OutlineIndigo51"
                            >
                              L
                            </Button>
                          </Row>
                          <Text
                            className="font-normal ml-[2px] sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-indigo_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            How to find your size?
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                          <Button
                            className="cursor-pointer font-bold min-w-[49%] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillDeeporange300"
                          >
                            Purchase now
                          </Button>
                          <Button
                            className="cursor-pointer font-bold min-w-[48%] text-[14px] text-center text-deep_orange_300 w-[max-content]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillDeeporange50"
                          >
                            Add to cart
                          </Button>
                        </Row>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[25px] md:mt-[33px] mt-[48px] w-[100%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                          <div className="bg-indigo_400 h-[2px] sm:my-[3px] md:my-[4px] my-[6px] w-[26%]"></div>
                          <Text
                            className="font-medium ml-[12px] sm:ml-[6px] md:ml-[8px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Product Detail
                          </Text>
                        </Row>
                        <Text
                          className="font-normal sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_400 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Reviews
                        </Text>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[54%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            PRODUCT DETAIL
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-bluegray_800 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            We use the Join Life label on clothing that is
                            produced using technology and raw materials that
                            help us to reduce the environmental impact of our
                            products.{" "}
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] pr-[4px] pt-[4px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            SPECIFICATION
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[10px] md:mt-[13px] mt-[19px] sm:mx-[0] not-italic text-bluegray_800 sm:w-[100%] w-[24%]"
                            as="h5"
                            variant="h5"
                          >
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Size:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              S<br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Material:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              Cotton
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Weight:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              1kg
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Original:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              Vietnam
                              <br />
                              <br />
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter font-medium">
                              Category:
                            </span>
                            <span className="text-bluegray_800 text-[16px] font-inter">
                              {" "}
                              T-Shirt
                            </span>
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-start justify-between sm:mt-[19px] md:mt-[24px] mt-[36px] sm:px-[0] w-[100%]">
                  <Text
                    className="mt-[4px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Related product
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between mb-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                    <Text
                      className="flex-grow font-medium text-bluegray_400"
                      as="h5"
                      variant="h5"
                    >
                      See all
                    </Text>
                    <Img
                      src="images/img_arrowright_bluegray_400_24X24.svg"
                      className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="arrowright"
                    />
                  </Row>
                </Row>
                <List
                  className="font-inter sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group13365.png')",
                      }}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[150px] md:mb-[194px] mb-[283px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Button
                          className="flex items-center justify-center min-w-[44%] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                              alt="airplane"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center md:ml-[5px] min-w-[53%] ml-[8px] sm:ml-[4px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                              alt="offer"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillIndigo40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400">
                            Flash sale
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Avo T-Shirt
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </Row>
                          </Column>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                            alt="Frame One"
                          />
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="plus One"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_buttonprimary_48X48.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="ButtonPrimary"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group13366.png')",
                      }}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[150px] md:mb-[194px] mb-[283px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Button
                          className="flex items-center justify-center min-w-[44%] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                              alt="airplane"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center md:ml-[5px] min-w-[53%] ml-[8px] sm:ml-[4px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                              alt="offer"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillIndigo40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400">
                            Flash sale
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Basic T-Shirt
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </Row>
                          </Column>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                            alt="Frame Two"
                          />
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="plus Two"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_buttonprimary_48X48.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="ButtonPrimary One"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group13367.png')",
                      }}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[150px] md:mb-[194px] mb-[283px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Button
                          className="flex items-center justify-center min-w-[44%] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                              alt="airplane"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center md:ml-[5px] min-w-[53%] ml-[8px] sm:ml-[4px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                              alt="offer"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillIndigo40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400">
                            Flash sale
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[96%]">
                          <Column className="flex flex-col items-center justify-start w-[100%]">
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Trendy Polo
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly mt-[13px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </Row>
                          </Column>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                            alt="Frame Three"
                          />
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="plus Three"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_buttonprimary_48X48.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="ButtonPrimary Two"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:pb-[15px] md:pb-[22px] pb-[32px] rounded-radius8 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[8px] rounded-tr-[8px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group13370.png')",
                      }}
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[150px] md:mb-[194px] mb-[283px] ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Button
                          className="flex items-center justify-center min-w-[44%] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_airplane.svg"
                              className="ml-[11px] sm:ml-[5px] md:ml-[7px] text-center"
                              alt="airplane"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillRed40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-red_600">
                            Feature
                          </div>
                        </Button>
                        <Button
                          className="flex items-center justify-center md:ml-[5px] min-w-[53%] ml-[8px] sm:ml-[4px] text-center w-[max-content]"
                          rightIcon={
                            <Img
                              src="images/img_offer.svg"
                              className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                              alt="offer"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="FillIndigo40019"
                        >
                          <div className="bg-transparent cursor-pointer font-normal not-italic text-[12px] text-indigo_400">
                            Flash sale
                          </div>
                        </Button>
                      </Row>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[96%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="font-medium ml-[14px] sm:ml-[7px] md:ml-[9px] text-bluegray_900 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Over Shirt
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly md:mt-[11px] mt-[17px] sm:mt-[9px] w-[100%]">
                              <Text
                                className="font-bold font-inter text-bluegray_900 w-[auto]"
                                as="h4"
                                variant="h4"
                              >
                                $120.0
                              </Text>
                              <Text
                                className="font-normal font-poppins line-through mt-[2px] not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                $140.0
                              </Text>
                            </Row>
                          </Column>
                          <Img
                            src="images/img_frame_11X77.png"
                            className="max-w-[100%] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:w-[100%] w-[72%]"
                            alt="Frame Four"
                          />
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_plus.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="plus Four"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_buttonprimary_48X48.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="ButtonPrimary Three"
                            />
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </List>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ShopDetailitemPage;
