import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  SelectBox,
  List,
  Stack,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden w-[17%]">
            <div className="">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="max-w-[88px] ml-[auto] mr-[auto] mt-[4px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                  alt="Logo"
                />
                <Column className="flex flex-col justify-start max-w-[155px] sm:mb-[342px] md:mb-[442px] mb-[643px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[71%]">
                    <Img
                      src="images/img_grid.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="grid"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_800"
                      as="h6"
                      variant="h6"
                    >
                      Dashboard
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_user_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="user"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Customer
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                      <Img
                        src="images/img_sort.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="sort"
                      />
                      <Text
                        className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400"
                        as="h6"
                        variant="h6"
                      >
                        Message
                      </Text>
                    </Row>
                    <Text
                      className="bg-red_600 flex font-bold items-center sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-white_A700 w-[24px]"
                      variant="body1"
                    >
                      3
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                    <Img
                      src="images/img_folder.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="folder"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      File
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_calendar.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="calendar"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Calender
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Img
                      src="images/img_trash.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="trash"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Shop
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Img
                      src="images/img_mail_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="mail"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
                      as="h6"
                      variant="h6"
                    >
                      Cart
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                    <Column className="bg-white_A700 flex flex-col sm:h-[14px] md:h-[18px] h-[26px] items-center justify-start px-[3px] sm:w-[13px] md:w-[17px] w-[26px]">
                      <div className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] rounded-radius50 sm:w-[10px] md:w-[13px] w-[20px]"></div>
                    </Column>
                    <Text
                      className="font-medium mb-[2px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Settings
                    </Text>
                  </Row>
                </Column>
              </Column>
            </div>
          </aside>
          <Line className="bg-indigo_51 h-[1175px] sm:h-[626px] md:h-[809px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-start md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start my-[1px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Overview
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                    <Button
                      className="flex items-center justify-center w-[25%]"
                      shape="icbRoundedBorder4"
                      size="xlIcn"
                      variant="icbFillWhiteA700"
                    >
                      <Img
                        src="images/img_download.svg"
                        className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                        alt="download"
                      />
                    </Button>
                    <SelectBox
                      className="font-medium sm:mx-[0] text-[14px] text-bluegray_800 sm:w-[100%] w-[70%]"
                      placeholderClassName="text-bluegray_800"
                      name="dropdown"
                      placeholder="Last week"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="w-[20px] h-[20px] mr-[16px] sm:mr-[8px] sm:h-[11px] sm:w-[10px] md:mr-[11px] md:h-[14px] md:w-[13px] max-w-[100%]"
                          alt="arrow_down"
                        />
                      }
                      shape="RoundedBorder4"
                      size="sm"
                      variant="FillWhiteA700"
                    ></SelectBox>
                  </Row>
                </Row>
                <List
                  className="font-inter sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Img
                        src="images/img_group.svg"
                        className="max-w-[100%] w-[26%]"
                        alt="Group One"
                      />
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Stack className="h-[40px] relative w-[100%]">
                            <Text
                              className="absolute left-[0] text-bluegray_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              $10.000
                            </Text>
                            <Row className="absolute bg-green_700_63 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] pr-[3px] right-[0] rounded-radius4 top-[18%] sm:w-[100%] w-[32%]">
                              <Img
                                src="images/img_arrowup.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="arrowup"
                              />
                              <Text
                                className="flex-grow font-semibold text-green_700"
                                as="h6"
                                variant="h6"
                              >
                                0.2%
                              </Text>
                            </Row>
                          </Stack>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                            <div className="bg-indigo_401 sm:h-[4px] md:h-[5px] h-[6px] my-[3px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                            <Text
                              className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total income
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Img
                        src="images/img_group_26X70.svg"
                        className="max-w-[100%] w-[26%]"
                        alt="Group Two"
                      />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="text-bluegray_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              $10.000
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                              <div className="bg-indigo_401 sm:h-[4px] md:h-[5px] h-[6px] sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[2px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Text
                                className="font-normal not-italic text-bluegray_400 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Total Expenses
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Row className="bg-red_600_63 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[18px] md:mb-[23px] mb-[34px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:mx-[0] pr-[3px] rounded-radius4 sm:w-[100%] w-[32%]">
                          <Img
                            src="images/img_arrowdown.svg"
                            className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
                            alt="arrowdown"
                          />
                          <Text
                            className="flex-grow font-semibold text-red_600"
                            as="h6"
                            variant="h6"
                          >
                            0.2%
                          </Text>
                        </Row>
                      </Row>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[87%]">
                      <Img
                        src="images/img_group.svg"
                        className="max-w-[100%] w-[26%]"
                        alt="Group Three"
                      />
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Stack className="h-[40px] relative w-[100%]">
                            <Text
                              className="absolute left-[0] text-bluegray_800 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              $10.000
                            </Text>
                            <Row className="absolute bg-green_700_63 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] pr-[3px] right-[0] rounded-radius4 top-[18%] sm:w-[100%] w-[32%]">
                              <Img
                                src="images/img_arrowup.svg"
                                className="flex-shrink-0 md:h-[12px] h-[16px] sm:h-[9px] max-w-[100%] mt-[3px] md:w-[11px] w-[16px] sm:w-[8px]"
                                alt="arrowup One"
                              />
                              <Text
                                className="flex-grow font-semibold text-green_700"
                                as="h6"
                                variant="h6"
                              >
                                0.2%
                              </Text>
                            </Row>
                          </Stack>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <div className="bg-indigo_401 sm:h-[4px] md:h-[5px] h-[6px] my-[4px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                            <Text
                              className="font-normal sm:ml-[3px] md:ml-[4px] ml-[6px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total Revenue
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </List>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] sm:px-[0] w-[100%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Statistics
                        </Text>
                        <Button
                          className="flex items-center justify-center min-w-[25%] text-center w-[max-content]"
                          leftIcon={
                            <Img
                              src="images/img_calendar_20X20.svg"
                              className="mr-[10px] sm:mr-[5px] md:mr-[6px] text-center"
                              alt="calendar"
                            />
                          }
                          shape="RoundedBorder4"
                          size="md"
                          variant="OutlineBluegray200"
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-bluegray_800">
                            13 Aug - 20 Aug
                          </div>
                        </Button>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mb-[14px] sm:mb-[7px] md:mb-[9px] sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                            <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] mb-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                            <Text
                              className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Income
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[12px] mt-[18px] sm:mt-[9px] w-[100%]">
                            <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                            <Text
                              className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Expenses
                            </Text>
                          </Row>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                          <Column className="flex flex-col items-end justify-start w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                              <Column className="flex flex-col items-end sm:mx-[0] pb-[1px] pl-[1px] sm:px-[0] sm:w-[100%] w-[6%]">
                                <Text
                                  className="font-normal not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  1,400
                                </Text>
                                <Text
                                  className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  1,200
                                </Text>
                                <Text
                                  className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  1,000
                                </Text>
                                <Text
                                  className="font-normal md:mt-[11px] mt-[16px] sm:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  800
                                </Text>
                                <Text
                                  className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  600
                                </Text>
                                <Text
                                  className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  400
                                </Text>
                                <Text
                                  className="font-normal md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  200
                                </Text>
                                <Text
                                  className="font-normal mb-[1px] md:mt-[12px] mt-[18px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  0
                                </Text>
                              </Column>
                              <Stack
                                className="bg-cover bg-no-repeat font-poppins h-[227px] md:pt-[11px] sm:pt-[15px] pt-[17px] md:px-[11px] sm:px-[15px] px-[17px] relative sm:w-[100%] w-[91%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group13263.svg')",
                                }}
                              >
                                <Img
                                  src="images/img_frame.svg"
                                  className="absolute h-[206px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[86%]"
                                  alt="Frame"
                                />
                                <Stack
                                  className="absolute bg-cover bg-no-repeat h-[84px] left-[0] p-[13px] sm:p-[6px] md:p-[8px] shadow-bs2 top-[19%] w-[30%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group_white_A700.svg')",
                                  }}
                                >
                                  <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center left-[0] sm:mx-[0] sm:px-[0] top-[21%] sm:w-[100%] w-[32%]">
                                    <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] sm:mb-[2px] md:mb-[3px] mb-[5px] mt-[2px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                                    <Text
                                      className="font-semibold sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                      variant="body1"
                                    >
                                      200.0
                                    </Text>
                                  </Row>
                                  <Column className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] top-[23%] sm:w-[100%] w-[75%]">
                                    <Column className="flex flex-col justify-start w-[100%]">
                                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                                        <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] mb-[4px] mt-[1px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                                        <Text
                                          className="font-semibold sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                          variant="body1"
                                        >
                                          2,000
                                        </Text>
                                      </Row>
                                      <Text
                                        className="sm:mr-[10px] md:mr-[13px] mr-[19px] md:mt-[11px] mt-[16px] sm:mt-[8px] text-bluegray_400 w-[auto]"
                                        variant="body2"
                                      >
                                        21 September, 2021
                                      </Text>
                                    </Column>
                                  </Column>
                                </Stack>
                              </Stack>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:mx-[0] pb-[2px] sm:px-[0] px-[2px] sm:w-[100%] w-[91%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Mon
                              </Text>
                              <Text
                                className="font-normal sm:ml-[24px] md:ml-[31px] ml-[46px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Tue
                              </Text>
                              <Text
                                className="font-normal sm:ml-[27px] md:ml-[35px] ml-[52px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Wed
                              </Text>
                              <Text
                                className="font-normal mb-[1px] sm:ml-[24px] md:ml-[31px] ml-[46px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Thu
                              </Text>
                              <Text
                                className="font-normal mb-[1px] sm:ml-[29px] md:ml-[37px] ml-[55px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Fri
                              </Text>
                              <Text
                                className="font-normal mb-[1px] sm:ml-[29px] md:ml-[37px] ml-[55px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Sat
                              </Text>
                              <Text
                                className="font-normal mb-[1px] sm:ml-[27px] md:ml-[35px] ml-[51px] sm:mr-[17px] md:mr-[22px] mr-[33px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Sun
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                  <Stack className="h-[410px] relative w-[33%]">
                    <Stack className="absolute h-[116px] top-[23%] w-[100%]">
                      <Img
                        src="images/img_ellipse.svg"
                        className="absolute h-[46px] max-w-[100%] right-[0] top-[0] w-[7%]"
                        alt="Ellipse One"
                      />
                      <Img
                        src="images/img_vector.svg"
                        className="absolute bottom-[0] h-[100px] inset-x-[0] max-w-[100%] w-[100%]"
                        alt="Vector One"
                      />
                    </Stack>
                    <Stack className="absolute h-[211px] pb-[1px] w-[100%]">
                      <div className="absolute bg-deep_orange_300 sm:h-[113px] md:h-[146px] h-[211px] rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px] shadow-bs w-[100%]"></div>
                      <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[14%] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Stack className="h-[164px] relative w-[100%]">
                          <Stack className="absolute bottom-[0] h-[139px] left-[0] sm:w-[100%] w-[90%]">
                            <Stack className="absolute h-[139px] right-[0] w-[100%]">
                              <Column
                                className="absolute bg-cover bg-no-repeat flex flex-col sm:h-[33px] md:h-[42px] h-[61px] items-center justify-start left-[0] top-[20%] sm:w-[32px] md:w-[41px] w-[61px]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_sphere.png')",
                                }}
                              >
                                <Column className="bg-white_A700 flex flex-col sm:h-[33px] md:h-[42px] h-[61px] items-center justify-start w-[100%]">
                                  <Column
                                    className="bg-cover bg-no-repeat flex flex-col sm:h-[33px] md:h-[42px] h-[61px] items-center justify-start w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_specular.png')",
                                    }}
                                  >
                                    <Stack
                                      className="bg-cover bg-no-repeat h-[61px] relative sm:w-[32px] md:w-[41px] w-[61px]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_specular.png')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_specular.png"
                                        className="absolute h-[61px] max-w-[100%] sm:w-[32px] md:w-[41px] w-[61px]"
                                        alt="imageFour"
                                      />
                                    </Stack>
                                  </Column>
                                </Column>
                              </Column>
                              <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                                <Stack className="h-[211px] p-[11px] sm:p-[5px] md:p-[7px] relative w-[100%]">
                                  <Column
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col items-center justify-start sm:mx-[0] right-[10%] sm:w-[100%] w-[64%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group13203.png')",
                                    }}
                                  >
                                    <Stack
                                      className="bg-cover bg-no-repeat h-[112px] pb-[3px] px-[3px] relative w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group13203.png')",
                                      }}
                                    >
                                      <Stack className="absolute h-[108px] inset-y-[0] my-[auto] right-[6%] sm:w-[100%] w-[64%]">
                                        <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                            <Img
                                              src="images/img_stand.png"
                                              className="max-w-[100%] sm:mb-[10px] md:mb-[13px] mb-[20px] w-[28%]"
                                              alt="stand"
                                            />
                                            <Stack className="h-[24px] sm:mt-[44px] md:mt-[57px] mt-[84px] relative sm:w-[100%] w-[47%]">
                                              <Img
                                                src="images/img_shadow.png"
                                                className="absolute bottom-[0] h-[11px] max-w-[100%] w-[100%]"
                                                alt="shadow"
                                              />
                                              <Column
                                                className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col items-center justify-start left-[18%] sm:mx-[0] sm:w-[100%] w-[41%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_1_19X25.png')",
                                                }}
                                              >
                                                <div className="bg-orange_A100 sm:h-[11px] md:h-[14px] h-[19px] rounded-radius997 w-[100%]"></div>
                                              </Column>
                                              <Column
                                                className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] right-[6%] top-[0] sm:w-[100%] w-[76%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_2.png')",
                                                }}
                                              >
                                                <Column className="bg-gray_101 flex flex-col items-center justify-start rounded-radius1165 w-[100%]">
                                                  <Column
                                                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_specular_23X47.png')",
                                                    }}
                                                  >
                                                    <Stack
                                                      className="bg-cover bg-no-repeat h-[23px] relative w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_specular_23X47.png')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="images/img_specular_23X47.png"
                                                        className="absolute h-[23px] max-w-[100%] w-[100%]"
                                                        alt="specular"
                                                      />
                                                    </Stack>
                                                  </Column>
                                                </Column>
                                              </Column>
                                            </Stack>
                                          </Row>
                                        </Column>
                                        <Column className="absolute bottom-[19%] flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                                          <div className="bg-gray_101 sm:h-[28px] md:h-[36px] h-[51px] w-[100%]"></div>
                                        </Column>
                                      </Stack>
                                      <Column
                                        className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[29%] sm:mx-[0] top-[0] sm:w-[100%] w-[18%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group13204.png')",
                                        }}
                                      >
                                        <Stack
                                          className="bg-cover bg-no-repeat h-[88px] relative w-[100%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group13204.png')",
                                          }}
                                        >
                                          <Img
                                            src="images/img_group13204.png"
                                            className="absolute h-[88px] max-w-[100%] w-[100%]"
                                            alt="specular One"
                                          />
                                        </Stack>
                                      </Column>
                                    </Stack>
                                  </Column>
                                  <Column
                                    className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] top-[11%] sm:w-[100%] w-[54%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_screen.png')",
                                    }}
                                  >
                                    <Column className="bg-gray_101 flex flex-col items-center justify-start w-[100%]">
                                      <Column
                                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group13207.png')",
                                        }}
                                      >
                                        <Stack
                                          className="bg-cover bg-no-repeat h-[115px] relative w-[100%]"
                                          style={{
                                            backgroundImage:
                                              "url('images/img_group13207.png')",
                                          }}
                                        >
                                          <Img
                                            src="images/img_group13207.png"
                                            className="absolute h-[115px] max-w-[100%] w-[100%]"
                                            alt="specular Two"
                                          />
                                        </Stack>
                                      </Column>
                                    </Column>
                                  </Column>
                                </Stack>
                              </Column>
                            </Stack>
                            <Img
                              src="images/img_sceneshadow.png"
                              className="absolute h-[114px] max-w-[100%] right-[0] top-[3%] sm:w-[100%] w-[79%]"
                              alt="SceneShadow"
                            />
                          </Stack>
                          <Stack className="absolute h-[134px] sm:pl-[4px] md:pl-[5px] pl-[8px] sm:pt-[4px] md:pt-[5px] pt-[8px] right-[0] top-[0] sm:w-[100%] w-[93%]">
                            <Stack className="absolute h-[110px] sm:w-[100%] w-[86%]">
                              <Stack className="absolute bottom-[0] h-[105px] left-[0] sm:w-[100%] w-[86%]">
                                <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[1%] sm:w-[100%] w-[99%]">
                                  <Column
                                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_base.png')",
                                    }}
                                  >
                                    <Column className="bg-blue_50 flex flex-col items-center justify-start w-[100%]">
                                      <Column
                                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:pb-[2px] md:pb-[3px] pb-[5px] w-[100%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group13917.png')",
                                        }}
                                      >
                                        <Column className="flex flex-col items-center justify-start w-[100%]">
                                          <Column
                                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group13213.png')",
                                            }}
                                          >
                                            <Column className="bg-blue_50 flex flex-col items-center justify-start w-[100%]">
                                              <Stack
                                                className="bg-cover bg-no-repeat h-[10px] pt-[3px] px-[3px] relative w-[100%]"
                                                style={{
                                                  backgroundImage:
                                                    "url('images/img_dots.png')",
                                                }}
                                              >
                                                <Stack className="absolute bottom-[0] h-[13px] left-[3%] w-[15%]">
                                                  <Stack className="absolute h-[13px] left-[0] sm:w-[100%] w-[74%]">
                                                    <Img
                                                      src="images/img_shadow_13X17.png"
                                                      className="absolute h-[13px] max-w-[100%] top-[8%] w-[100%]"
                                                      alt="shadow One"
                                                    />
                                                    <Column
                                                      className="absolute bg-cover bg-no-repeat flex flex-col md:h-[3px] sm:h-[3px] h-[4px] justify-start left-[6%] px-[1px] top-[0] md:w-[2px] sm:w-[2px] w-[4px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group13219.png')",
                                                      }}
                                                    >
                                                      <Column className="bg-teal_301 flex flex-col sm:h-[2px] h-[3px] items-center justify-start mb-[1px] ml-[1px] px-[1px] sm:w-[1px] md:w-[2px] w-[3px]">
                                                        <Column
                                                          className="bg-cover bg-no-repeat flex flex-col sm:h-[2px] h-[3px] items-center justify-start w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13220.png')",
                                                          }}
                                                        >
                                                          <Stack
                                                            className="bg-cover bg-no-repeat h-[3px] relative sm:w-[1px] md:w-[2px] w-[3px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group13220.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_group13220.png"
                                                              className="absolute h-[3px] max-w-[100%] sm:w-[1px] md:w-[2px] w-[3px]"
                                                              alt="specular Three"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                  </Stack>
                                                  <Stack className="absolute h-[13px] right-[0] sm:w-[100%] w-[74%]">
                                                    <Img
                                                      src="images/img_shadow_13X17.png"
                                                      className="absolute h-[13px] max-w-[100%] top-[8%] w-[100%]"
                                                      alt="shadow Two"
                                                    />
                                                    <Column
                                                      className="absolute bg-cover bg-no-repeat flex flex-col md:h-[3px] sm:h-[3px] h-[4px] justify-start left-[6%] px-[1px] top-[0] md:w-[2px] sm:w-[2px] w-[4px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group13219.png')",
                                                      }}
                                                    >
                                                      <Column className="bg-orange_200 flex flex-col sm:h-[2px] h-[3px] items-center justify-start mb-[1px] px-[1px] sm:w-[1px] md:w-[2px] w-[3px]">
                                                        <Column
                                                          className="bg-cover bg-no-repeat flex flex-col sm:h-[2px] h-[3px] items-center justify-start w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13220.png')",
                                                          }}
                                                        >
                                                          <Stack
                                                            className="bg-cover bg-no-repeat h-[3px] relative sm:w-[1px] md:w-[2px] w-[3px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group13220.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_group13220.png"
                                                              className="absolute h-[3px] max-w-[100%] sm:w-[1px] md:w-[2px] w-[3px]"
                                                              alt="specular Four"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                  </Stack>
                                                </Stack>
                                                <div className="absolute bottom-[0] left-[10%] sm:mx-[0] overflow-x-auto sm:px-[0] sm:w-[100%] w-[11%]">
                                                  <Stack className="h-[13px] relative w-[100%]">
                                                    <Img
                                                      src="images/img_shadow_13X17.png"
                                                      className="absolute h-[13px] max-w-[100%] top-[8%] w-[100%]"
                                                      alt="shadow Three"
                                                    />
                                                    <Column
                                                      className="absolute bg-cover bg-no-repeat flex flex-col md:h-[3px] sm:h-[3px] h-[4px] justify-start left-[6%] px-[1px] top-[0] md:w-[2px] sm:w-[2px] w-[4px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group13219.png')",
                                                      }}
                                                    >
                                                      <Column className="bg-red_A200 flex flex-col sm:h-[2px] h-[3px] items-center justify-start mb-[1px] px-[1px] sm:w-[1px] md:w-[2px] w-[3px]">
                                                        <Column
                                                          className="bg-cover bg-no-repeat flex flex-col sm:h-[2px] h-[3px] items-center justify-start w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13220.png')",
                                                          }}
                                                        >
                                                          <Stack
                                                            className="bg-cover bg-no-repeat h-[3px] relative sm:w-[1px] md:w-[2px] w-[3px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group13220.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_group13220.png"
                                                              className="absolute h-[3px] max-w-[100%] sm:w-[1px] md:w-[2px] w-[3px]"
                                                              alt="specular Five"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                  </Stack>
                                                </div>
                                              </Stack>
                                            </Column>
                                          </Column>
                                          <Column
                                            className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[1px] w-[100%]"
                                            style={{
                                              backgroundImage:
                                                "url('images/img_group13212.png')",
                                            }}
                                          >
                                            <Stack className="h-[10px] mt-[4px] relative sm:w-[100%] w-[94%]">
                                              <Stack className="absolute bottom-[0] h-[18px] inset-x-[0] w-[100%]">
                                                <Img
                                                  src="images/img_shadow_18X154.png"
                                                  className="absolute h-[18px] max-w-[100%] top-[6%] w-[100%]"
                                                  alt="shadow Four"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:w-[100%] w-[98%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group13214.png')",
                                                  }}
                                                >
                                                  <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                                                    <Column
                                                      className="bg-cover bg-no-repeat flex flex-col justify-end p-[1px] w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_group13215.png')",
                                                      }}
                                                    >
                                                      <Column
                                                        className="bg-cover bg-no-repeat flex flex-col sm:h-[4px] md:h-[5px] h-[6px] justify-start ml-[2px] mt-[1px] pr-[1px] sm:w-[3px] md:w-[4px] w-[6px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_loupe.png')",
                                                        }}
                                                      >
                                                        <Column
                                                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13216.png')",
                                                          }}
                                                        >
                                                          <Stack className="bg-white_A700 h-[6px] relative w-[100%]">
                                                            <Img
                                                              src="images/img_specular_6X5.png"
                                                              className="absolute h-[6px] max-w-[100%] w-[100%]"
                                                              alt="specular Six"
                                                            />
                                                          </Stack>
                                                        </Column>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                </Column>
                                              </Stack>
                                              <Stack className="absolute bottom-[0] h-[11px] left-[7%] w-[20%]">
                                                <Img
                                                  src="images/img_shadow_11X29.png"
                                                  className="absolute h-[11px] max-w-[100%] top-[9%] w-[100%]"
                                                  alt="shadow Five"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[3%] sm:mx-[0] p-[1px] top-[0] sm:w-[100%] w-[63%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group13217.png')",
                                                  }}
                                                >
                                                  <Stack className="bg-blue_50 h-[2px] mb-[1px] relative w-[100%]">
                                                    <Img
                                                      src="images/img_specular_2X17.png"
                                                      className="absolute h-[2px] max-w-[100%] w-[100%]"
                                                      alt="specular Seven"
                                                    />
                                                  </Stack>
                                                </Column>
                                              </Stack>
                                            </Stack>
                                          </Column>
                                        </Column>
                                        <Column className="flex flex-col items-center justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
                                            <Column className="flex flex-col items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                                              <div className="overflow-x-auto sm:px-[0] w-[100%]">
                                                <Stack className="h-[94px] relative w-[100%]">
                                                  <Img
                                                    src="images/img_shadow_94X119.png"
                                                    className="absolute h-[94px] max-w-[100%] top-[1%] w-[100%]"
                                                    alt="shadow Six"
                                                  />
                                                  <Column
                                                    className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[1%] sm:mx-[0] top-[0] sm:w-[100%] w-[83%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group13246.png')",
                                                    }}
                                                  >
                                                    <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
                                                      <Stack
                                                        className="bg-cover bg-no-repeat h-[69px] p-[2px] relative w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_group13247.png')",
                                                        }}
                                                      >
                                                        <Stack className="absolute h-[36px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[72%]">
                                                          <Stack className="absolute h-[36px] left-[0] sm:w-[100%] w-[86%]">
                                                            <Stack className="absolute h-[36px] left-[0] sm:w-[100%] w-[84%]">
                                                              <Stack className="absolute h-[36px] left-[0] sm:w-[100%] w-[80%]">
                                                                <Stack className="absolute h-[36px] left-[0] sm:w-[100%] w-[78%]">
                                                                  <Stack className="absolute bottom-[0] h-[28px] left-[0] sm:w-[100%] w-[68%]">
                                                                    <Column
                                                                      className="absolute bg-cover bg-no-repeat bottom-[4%] flex flex-col justify-start left-[0] sm:mx-[0] p-[1px] sm:w-[100%] w-[53%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_1_19X11.png')",
                                                                      }}
                                                                    >
                                                                      <Column
                                                                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[1px] sm:mx-[0] sm:w-[100%] w-[56%]"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group13248.png')",
                                                                        }}
                                                                      >
                                                                        <Stack className="bg-green_700 h-[13px] relative w-[100%]">
                                                                          <Img
                                                                            src="images/img_specular_13X5.png"
                                                                            className="absolute h-[13px] max-w-[100%] w-[100%]"
                                                                            alt="specular Eight"
                                                                          />
                                                                        </Stack>
                                                                      </Column>
                                                                    </Column>
                                                                    <Column
                                                                      className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:mx-[0] p-[1px] sm:w-[100%] w-[53%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_2_28X11.png')",
                                                                      }}
                                                                    >
                                                                      <Stack
                                                                        className="bg-cover bg-no-repeat h-[21px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[1px] relative sm:w-[100%] w-[56%]"
                                                                        style={{
                                                                          backgroundImage:
                                                                            "url('images/img_group13250.png')",
                                                                        }}
                                                                      >
                                                                        <Line className="absolute bg-green_700 sm:h-[12px] md:h-[15px] h-[21px] w-[5px]" />
                                                                        <Img
                                                                          src="images/img_specular_21X5.png"
                                                                          className="absolute h-[21px] max-w-[100%] w-[100%]"
                                                                          alt="specular Nine"
                                                                        />
                                                                      </Stack>
                                                                    </Column>
                                                                  </Stack>
                                                                  <Column
                                                                    className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:mx-[0] p-[1px] right-[0] sm:w-[100%] w-[36%]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_3.png')",
                                                                    }}
                                                                  >
                                                                    <Stack
                                                                      className="bg-cover bg-no-repeat h-[30px] sm:mb-[3px] md:mb-[4px] mb-[6px] ml-[1px] relative sm:w-[100%] w-[56%]"
                                                                      style={{
                                                                        backgroundImage:
                                                                          "url('images/img_group13252.png')",
                                                                      }}
                                                                    >
                                                                      <Line className="absolute bg-green_700 sm:h-[16px] md:h-[21px] h-[30px] w-[5px]" />
                                                                      <Img
                                                                        src="images/img_specular_30X5.png"
                                                                        className="absolute h-[30px] max-w-[100%] w-[100%]"
                                                                        alt="specular Ten"
                                                                      />
                                                                    </Stack>
                                                                  </Column>
                                                                </Stack>
                                                                <Column
                                                                  className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col justify-start sm:mx-[0] p-[1px] right-[0] sm:w-[100%] w-[28%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_4.png')",
                                                                  }}
                                                                >
                                                                  <Column
                                                                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[1px] sm:mx-[0] sm:w-[100%] w-[56%]"
                                                                    style={{
                                                                      backgroundImage:
                                                                        "url('images/img_group13248.png')",
                                                                    }}
                                                                  >
                                                                    <Stack className="bg-green_700 h-[13px] relative w-[100%]">
                                                                      <Img
                                                                        src="images/img_specular_13X5.png"
                                                                        className="absolute h-[13px] max-w-[100%] w-[100%]"
                                                                        alt="specular Eleven"
                                                                      />
                                                                    </Stack>
                                                                  </Column>
                                                                </Column>
                                                              </Stack>
                                                              <Column
                                                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col justify-start sm:mx-[0] p-[1px] right-[0] sm:w-[100%] w-[22%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_5.png')",
                                                                }}
                                                              >
                                                                <Stack
                                                                  className="bg-cover bg-no-repeat h-[21px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[1px] relative sm:w-[100%] w-[56%]"
                                                                  style={{
                                                                    backgroundImage:
                                                                      "url('images/img_group13250.png')",
                                                                  }}
                                                                >
                                                                  <Line className="absolute bg-green_700 sm:h-[12px] md:h-[15px] h-[21px] w-[5px]" />
                                                                  <Img
                                                                    src="images/img_specular_21X5.png"
                                                                    className="absolute h-[21px] max-w-[100%] w-[100%]"
                                                                    alt="specular Twelve"
                                                                  />
                                                                </Stack>
                                                              </Column>
                                                            </Stack>
                                                            <Column
                                                              className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col justify-start sm:mx-[0] p-[1px] right-[0] sm:w-[100%] w-[19%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_6.png')",
                                                              }}
                                                            >
                                                              <Stack
                                                                className="bg-cover bg-no-repeat h-[21px] sm:mb-[2px] md:mb-[3px] mb-[5px] ml-[1px] relative sm:w-[100%] w-[56%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_group13250.png')",
                                                                }}
                                                              >
                                                                <Line className="absolute bg-green_700 sm:h-[12px] md:h-[15px] h-[21px] w-[5px]" />
                                                                <Img
                                                                  src="images/img_specular_21X5.png"
                                                                  className="absolute h-[21px] max-w-[100%] w-[100%]"
                                                                  alt="specular Thirteen"
                                                                />
                                                              </Stack>
                                                            </Column>
                                                          </Stack>
                                                          <Column
                                                            className="absolute bg-cover bg-no-repeat flex flex-col justify-start sm:mx-[0] p-[1px] right-[0] sm:w-[100%] w-[16%]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_7.png')",
                                                            }}
                                                          >
                                                            <Stack
                                                              className="bg-cover bg-no-repeat h-[30px] sm:mb-[3px] md:mb-[4px] mb-[6px] ml-[1px] relative sm:w-[100%] w-[56%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_group13252.png')",
                                                              }}
                                                            >
                                                              <Line className="absolute bg-green_700 sm:h-[16px] md:h-[21px] h-[30px] w-[5px]" />
                                                              <Img
                                                                src="images/img_specular_30X5.png"
                                                                className="absolute h-[30px] max-w-[100%] w-[100%]"
                                                                alt="specular Fourteen"
                                                              />
                                                            </Stack>
                                                          </Column>
                                                        </Stack>
                                                        <Img
                                                          src="images/img_menu.svg"
                                                          className="absolute h-[65px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[96%]"
                                                          alt="menu"
                                                        />
                                                      </Stack>
                                                    </Column>
                                                  </Column>
                                                </Stack>
                                              </div>
                                            </Column>
                                            <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                                              <Stack className="h-[30px] relative w-[100%]">
                                                <Img
                                                  src="images/img_shadow_27X49.png"
                                                  className="absolute h-[27px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[91%]"
                                                  alt="shadow Seven"
                                                />
                                                <Column
                                                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-end p-[2px] w-[100%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group13236.png')",
                                                  }}
                                                >
                                                  <Row
                                                    className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end mt-[1px] sm:mx-[0] p-[1px] sm:w-[100%] w-[94%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_1.svg')",
                                                    }}
                                                  >
                                                    <Column
                                                      className="bg-cover bg-no-repeat flex flex-col md:h-[10px] h-[14px] sm:h-[8px] justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] px-[1px] w-[14px] sm:w-[7px] md:w-[9px]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_profile.png')",
                                                      }}
                                                    >
                                                      <Column
                                                        className="bg-cover bg-no-repeat flex flex-col h-[13px] sm:h-[7px] md:h-[9px] items-center justify-start mb-[1px] ml-[1px] w-[13px] sm:w-[6px] md:w-[8px]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_bg.png')",
                                                        }}
                                                      >
                                                        <Stack className="bg-blue_A200 h-[13px] relative w-[13px] sm:w-[6px] md:w-[8px]">
                                                          <Column className="absolute bottom-[8%] flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[77%]">
                                                            <Column
                                                              className="bg-cover bg-no-repeat flex flex-col md:h-[3px] sm:h-[3px] h-[4px] items-center justify-start md:w-[2px] sm:w-[2px] w-[4px]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_head.png')",
                                                              }}
                                                            >
                                                              <div className="bg-white_A700 md:h-[3px] sm:h-[3px] h-[4px] md:w-[2px] sm:w-[2px] w-[4px]"></div>
                                                            </Column>
                                                            <Column
                                                              className="bg-cover bg-no-repeat flex flex-col items-center justify-start mt-[1px] w-[100%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_body.png')",
                                                              }}
                                                            >
                                                              <div className="bg-white_A700 sm:h-[3px] md:h-[4px] h-[5px] w-[100%]"></div>
                                                            </Column>
                                                          </Column>
                                                          <Stack
                                                            className="absolute bg-cover bg-no-repeat h-[13px] w-[13px] sm:w-[6px] md:w-[8px]"
                                                            style={{
                                                              backgroundImage:
                                                                "url('images/img_group13239.png')",
                                                            }}
                                                          >
                                                            <Img
                                                              src="images/img_group13239.png"
                                                              className="absolute h-[13px] max-w-[100%] w-[13px] sm:w-[6px] md:w-[8px]"
                                                              alt="specular Fifteen"
                                                            />
                                                          </Stack>
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                    <Stack className="h-[15px] mb-[1px] ml-[1px] sm:mt-[4px] md:mt-[6px] mt-[9px] relative sm:w-[100%] w-[58%]">
                                                      <Stack className="absolute bottom-[0] h-[10px] w-[100%]">
                                                        <Img
                                                          src="images/img_shadow_11X29.png"
                                                          className="absolute h-[9px] max-w-[100%] top-[10%] w-[100%]"
                                                          alt="shadow Eight"
                                                        />
                                                        <Column
                                                          className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] p-[1px] top-[0] sm:w-[100%] w-[62%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13240.png')",
                                                          }}
                                                        >
                                                          <Column className="bg-bluegray_300 flex flex-col items-center justify-start mb-[1px] w-[100%]">
                                                            <Column
                                                              className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_specular_2X17.png')",
                                                              }}
                                                            >
                                                              <Stack
                                                                className="bg-cover bg-no-repeat h-[2px] relative w-[100%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_specular_2X17.png')",
                                                                }}
                                                              >
                                                                <Img
                                                                  src="images/img_specular_2X17.png"
                                                                  className="absolute h-[2px] max-w-[100%] w-[100%]"
                                                                  alt="specular Sixteen"
                                                                />
                                                              </Stack>
                                                            </Column>
                                                          </Column>
                                                        </Column>
                                                      </Stack>
                                                      <Stack className="absolute h-[10px] top-[0] w-[100%]">
                                                        <Img
                                                          src="images/img_shadow_11X29.png"
                                                          className="absolute h-[9px] max-w-[100%] top-[10%] w-[100%]"
                                                          alt="shadow Nine"
                                                        />
                                                        <Column
                                                          className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] p-[1px] top-[0] sm:w-[100%] w-[62%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_group13240.png')",
                                                          }}
                                                        >
                                                          <Column className="bg-bluegray_300 flex flex-col items-center justify-start mb-[1px] w-[100%]">
                                                            <Column
                                                              className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                                              style={{
                                                                backgroundImage:
                                                                  "url('images/img_specular_2X17.png')",
                                                              }}
                                                            >
                                                              <Stack
                                                                className="bg-cover bg-no-repeat h-[2px] relative w-[100%]"
                                                                style={{
                                                                  backgroundImage:
                                                                    "url('images/img_specular_2X17.png')",
                                                                }}
                                                              >
                                                                <Img
                                                                  src="images/img_specular_2X17.png"
                                                                  className="absolute h-[2px] max-w-[100%] w-[100%]"
                                                                  alt="specular Seventeen"
                                                                />
                                                              </Stack>
                                                            </Column>
                                                          </Column>
                                                        </Column>
                                                      </Stack>
                                                    </Stack>
                                                  </Row>
                                                </Column>
                                              </Stack>
                                              <Stack className="h-[13px] relative sm:w-[100%] w-[91%]">
                                                <Column
                                                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start p-[1px] w-[100%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_group13233.png')",
                                                  }}
                                                >
                                                  <Stack
                                                    className="bg-cover bg-no-repeat h-[11px] mb-[1px] p-[4px] relative w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group13234.png')",
                                                    }}
                                                  >
                                                    <Img
                                                      src="images/img_eye_bluegray_900.svg"
                                                      className="absolute h-[3px] inset-y-[0] max-w-[100%] my-[auto] right-[11%] w-[11%]"
                                                      alt="Eye"
                                                    />
                                                  </Stack>
                                                </Column>
                                                <Stack className="absolute bottom-[0] h-[10px] left-[6%] sm:w-[100%] w-[54%]">
                                                  <Img
                                                    src="images/img_shadow_11X29.png"
                                                    className="absolute h-[9px] max-w-[100%] top-[10%] w-[100%]"
                                                    alt="shadow Ten"
                                                  />
                                                  <Column
                                                    className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] p-[1px] top-[0] sm:w-[100%] w-[62%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group13235.png')",
                                                    }}
                                                  >
                                                    <Stack className="bg-bluegray_900 h-[2px] my-[1px] relative w-[100%]">
                                                      <Img
                                                        src="images/img_specular_2X17.png"
                                                        className="absolute h-[2px] max-w-[100%] w-[100%]"
                                                        alt="specular Eighteen"
                                                      />
                                                    </Stack>
                                                  </Column>
                                                </Stack>
                                              </Stack>
                                              <Img
                                                src="images/img_menu_11X47.svg"
                                                className="max-w-[100%] mt-[1px] sm:w-[100%] w-[88%]"
                                                alt="menu One"
                                              />
                                              <Stack className="h-[13px] mt-[2px] relative sm:w-[100%] w-[91%]">
                                                <Column
                                                  className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start p-[1px] w-[100%]"
                                                  style={{
                                                    backgroundImage:
                                                      "url('images/img_bg_13X49.png')",
                                                  }}
                                                >
                                                  <Column
                                                    className="bg-cover bg-no-repeat flex flex-col items-center justify-start mb-[1px] py-[1px] w-[100%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group13228.png')",
                                                    }}
                                                  >
                                                    <Stack
                                                      className="bg-cover bg-no-repeat h-[11px] p-[3px] relative w-[100%]"
                                                      style={{
                                                        backgroundImage:
                                                          "url('images/img_menu.svg')",
                                                      }}
                                                    >
                                                      <Img
                                                        src="images/img_eye_bluegray_900_3X6.svg"
                                                        className="absolute bottom-[0] h-[3px] max-w-[100%] right-[9%] w-[13%]"
                                                        alt="Eye One"
                                                      />
                                                    </Stack>
                                                  </Column>
                                                </Column>
                                                <Stack className="absolute bottom-[0] h-[10px] left-[8%] sm:w-[100%] w-[54%]">
                                                  <Img
                                                    src="images/img_shadow_11X29.png"
                                                    className="absolute h-[9px] max-w-[100%] top-[10%] w-[100%]"
                                                    alt="shadow Eleven"
                                                  />
                                                  <Column
                                                    className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] p-[1px] top-[0] sm:w-[100%] w-[62%]"
                                                    style={{
                                                      backgroundImage:
                                                        "url('images/img_group13235.png')",
                                                    }}
                                                  >
                                                    <Column className="bg-bluegray_900_60 flex flex-col items-center justify-start my-[1px] w-[100%]">
                                                      <Column
                                                        className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                                        style={{
                                                          backgroundImage:
                                                            "url('images/img_specular_2X17.png')",
                                                        }}
                                                      >
                                                        <Stack
                                                          className="bg-cover bg-no-repeat h-[2px] relative w-[100%]"
                                                          style={{
                                                            backgroundImage:
                                                              "url('images/img_specular_2X17.png')",
                                                          }}
                                                        >
                                                          <Img
                                                            src="images/img_specular_2X17.png"
                                                            className="absolute h-[2px] max-w-[100%] w-[100%]"
                                                            alt="specular Nineteen"
                                                          />
                                                        </Stack>
                                                      </Column>
                                                    </Column>
                                                  </Column>
                                                </Stack>
                                              </Stack>
                                            </Column>
                                          </Row>
                                        </Column>
                                      </Column>
                                    </Column>
                                  </Column>
                                </Column>
                                <Stack className="absolute h-[105px] md:pl-[11px] sm:pl-[15px] pl-[16px] md:py-[11px] py-[16px] sm:py-[8px] w-[100%]">
                                  <Stack className="absolute bottom-[0] h-[22px] right-[1%] w-[28%]">
                                    <Img
                                      src="images/img_layer.png"
                                      className="absolute h-[22px] max-w-[100%] w-[100%]"
                                      alt="Layer"
                                    />
                                  </Stack>
                                  <Stack className="absolute bottom-[10%] h-[11px] right-[0] w-[29%]">
                                    <Stack
                                      className="absolute bg-cover bg-no-repeat h-[11px] p-[4px] w-[100%]"
                                      style={{
                                        backgroundImage:
                                          "url('images/img_group13260.png')",
                                      }}
                                    >
                                      <Img
                                        src="images/img_group_gray_102.svg"
                                        className="absolute h-[3px] inset-y-[0] max-w-[100%] my-[auto] right-[11%] w-[11%]"
                                        alt="Group Four"
                                      />
                                    </Stack>
                                    <Stack className="absolute bottom-[0] h-[10px] left-[6%] sm:w-[100%] w-[56%]">
                                      <Img
                                        src="images/img_shadow_11X29.png"
                                        className="absolute h-[9px] max-w-[100%] top-[10%] w-[100%]"
                                        alt="shadow Twelve"
                                      />
                                      <Column
                                        className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start left-[4%] sm:mx-[0] top-[0] sm:w-[100%] w-[58%]"
                                        style={{
                                          backgroundImage:
                                            "url('images/img_group13261.png')",
                                        }}
                                      >
                                        <Stack className="bg-gray_102 h-[2px] relative w-[100%]">
                                          <Img
                                            src="images/img_specular_2X17.png"
                                            className="absolute h-[2px] max-w-[100%] w-[100%]"
                                            alt="specular Twenty"
                                          />
                                        </Stack>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Stack>
                              <Stack className="absolute bottom-[15%] h-[47px] right-[0] rotate-[180deg] w-[23%]">
                                <Img
                                  src="images/img_cursor_47X45.png"
                                  className="absolute h-[47px] max-w-[100%] w-[100%]"
                                  alt="cursor"
                                />
                                <Stack className="absolute bg-white_A700 h-[47px] w-[100%]">
                                  <Img
                                    src="images/img_specular_47X45.png"
                                    className="absolute h-[47px] max-w-[100%] w-[100%]"
                                    alt="specular TwentyOne"
                                  />
                                </Stack>
                              </Stack>
                              <Stack className="absolute h-[40px] right-[13%] top-[0] w-[28%]">
                                <Img
                                  src="images/img_shadow_40X54.png"
                                  className="absolute h-[40px] max-w-[100%] w-[100%]"
                                  alt="shadow Thirteen"
                                />
                              </Stack>
                            </Stack>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] right-[20%] top-[0] sm:w-[100%] w-[15%]"
                              style={{
                                backgroundImage: "url('images/img_sphere.png')",
                              }}
                            >
                              <Column className="bg-purple_200 flex flex-col items-center justify-start w-[100%]">
                                <Column
                                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_specular.png')",
                                  }}
                                >
                                  <Stack
                                    className="bg-cover bg-no-repeat h-[33px] relative w-[100%]"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_specular.png')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_specular.png"
                                      className="absolute h-[33px] max-w-[100%] w-[100%]"
                                      alt="imageFour One"
                                    />
                                  </Stack>
                                </Column>
                              </Column>
                            </Column>
                          </Stack>
                        </Stack>
                        <Stack className="h-[11px] sm:ml-[41px] md:ml-[53px] ml-[78px] sm:mt-[4px] md:mt-[6px] mt-[9px] relative sm:w-[100%] w-[45%]">
                          <Img
                            src="images/img_shadow_11X108.png"
                            className="absolute h-[11px] max-w-[100%] top-[9%] w-[100%]"
                            alt="shadow Fourteen"
                          />
                          <Stack
                            className="absolute bg-cover bg-no-repeat h-[10px] inset-x-[0] mx-[auto] sm:w-[100%] w-[89%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group13209.png')",
                            }}
                          >
                            <Stack className="absolute bottom-[10%] h-[10px] w-[100%]">
                              <div className="absolute bg-gray_101 h-[10px] sm:h-[6px] md:h-[7px] top-[10%] w-[100%]"></div>
                              <Column
                                className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:w-[100%] w-[93%]"
                                style={{
                                  backgroundImage: "url('images/img_keys.png')",
                                }}
                              >
                                <div className="bg-white_A700 sm:h-[4px] md:h-[5px] h-[7px] w-[100%]"></div>
                              </Column>
                            </Stack>
                            <Stack
                              className="absolute bg-cover bg-no-repeat h-[10px] w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group13210.png')",
                              }}
                            >
                              <Img
                                src="images/img_group13210.png"
                                className="absolute h-[10px] max-w-[100%] w-[100%]"
                                alt="specular TwentyTwo"
                              />
                            </Stack>
                          </Stack>
                        </Stack>
                      </Column>
                    </Stack>
                    <Column className="absolute bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[24px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                      <Column className="flex flex-col justify-start md:ml-[4px] ml-[7px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                        <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Subcrible us
                          </Text>
                          <Text
                            className="font-normal leading-[24.00px] md:leading-[normal] sm:leading-[normal] mt-[10px] sm:mt-[5px] md:mt-[6px] not-italic text-bluegray_400 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            To make friend with others in our community
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                          <Button
                            className="cursor-pointer font-semibold min-w-[62%] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillDeeporange300"
                          >
                            Subcrible now
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[33%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                            shape="CircleBorder24"
                            size="xl"
                            variant="FillGray51"
                          >
                            skip
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                  </Stack>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[19px] sm:px-[0] w-[100%]">
                  <Stack className="h-[436px] relative sm:w-[100%] w-[67%]">
                    <Column className="absolute flex flex-col h-[max-content] inset-y-[0] justify-start left-[7%] sm:mx-[0] my-[auto] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[22%]">
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
                    <Column className="absolute bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                          <Text
                            className="flex-grow font-bold mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_900"
                            as="h4"
                            variant="h4"
                          >
                            My card
                          </Text>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                            alt="user One"
                          />
                        </Row>
                        <SelectBox
                          className="font-medium sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] text-[14px] text-bluegray_800 sm:w-[100%] w-[44%]"
                          placeholderClassName="text-bluegray_800"
                          name="language"
                          placeholder="1234 **** 4567 8901 "
                          isSearchable={false}
                          isMulti={false}
                          getOptionLabel={(e) => (
                            <div className="flex items-center">
                              <Img
                                src="images/img_file.svg"
                                className="w-[30px] h-[30px] mr-[7px] sm:mr-[3px] sm:h-[16px] sm:w-[15px] md:mr-[4px] md:h-[21px] md:w-[20px] max-w-[100%]"
                                alt="file"
                              />
                              <span>{e.label}</span>
                            </div>
                          )}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="w-[20px] h-[20px] mr-[16px] sm:mr-[8px] sm:h-[11px] sm:w-[10px] md:mr-[11px] md:h-[14px] md:w-[13px] max-w-[100%]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          size="sm"
                          variant="OutlineIndigo51"
                        ></SelectBox>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                            <Row className="bg-indigo_400 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:pt-[3px] md:pt-[4px] pt-[6px] rounded-radius4 w-[100%]">
                              <Stack className="h-[83px] sm:mt-[50px] md:mt-[64px] mt-[94px] relative sm:w-[100%] w-[61%]">
                                <Text
                                  className="absolute bottom-[33%] font-medium right-[0] text-white_A700 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  1234 **** 4567 8901{" "}
                                </Text>
                                <Img
                                  src="images/img_group_83X96.png"
                                  className="absolute h-[83px] max-w-[100%] rounded-radius4 sm:w-[100%] w-[53%]"
                                  alt="Group Five"
                                />
                              </Stack>
                              <Stack className="h-[161px] md:mb-[11px] mb-[16px] sm:mb-[8px] relative w-[26%]">
                                <Img
                                  src="images/img_group_12X40.svg"
                                  className="absolute h-[12px] inset-x-[0] max-w-[100%] mx-[auto] rounded-radius4 top-[8%] sm:w-[100%] w-[52%]"
                                  alt="Group Six"
                                />
                                <Img
                                  src="images/img_group_161X77.png"
                                  className="absolute h-[161px] max-w-[100%] rounded-radius4 w-[100%]"
                                  alt="Group Seven"
                                />
                              </Stack>
                            </Row>
                            <Button
                              className="cursor-pointer font-semibold md:mt-[11px] mt-[16px] sm:mt-[8px] text-[14px] text-center text-deep_orange_300 w-[100%]"
                              shape="RoundedBorder4"
                              size="xl"
                              variant="FillWhiteA700"
                            >
                              Add new card
                            </Button>
                          </Column>
                          <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center pt-[2px] px-[2px] w-[100%]">
                              <Text
                                className="font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card Type
                              </Text>
                              <Text
                                className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Visa
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] p-[3px] w-[100%]">
                              <Text
                                className="font-normal ml-[1px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card holder
                              </Text>
                              <Text
                                className="font-medium sm:ml-[42px] md:ml-[54px] ml-[79px] my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                AvoRi
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] p-[2px] w-[100%]">
                              <Text
                                className="font-normal ml-[2px] my-[1px] not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Card number
                              </Text>
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1234 **** 4567 8901{" "}
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[11px] mt-[16px] sm:mt-[8px] pt-[1px] px-[1px] w-[100%]">
                              <Text
                                className="font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Expired
                              </Text>
                              <Text
                                className="font-medium ml-[114px] sm:ml-[60px] md:ml-[78px] mt-[3px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                21/09
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] pr-[1px] py-[1px] w-[100%]">
                              <Text
                                className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                CVV
                              </Text>
                              <Text
                                className="font-medium mb-[4px] mr-[134px] sm:mr-[71px] md:mr-[92px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                ***
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] pt-[4px] px-[4px] w-[100%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Total balance
                              </Text>
                              <Text
                                className="font-medium sm:ml-[35px] md:ml-[45px] ml-[66px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $0.0
                              </Text>
                            </Row>
                          </Column>
                        </Row>
                      </Column>
                    </Column>
                  </Stack>
                  <Column className="bg-white_A700 flex flex-col items-end mt-[1px] sm:mx-[0] md:pt-[11px] sm:pt-[15px] pt-[16px] md:px-[11px] sm:px-[15px] px-[16px] rounded-radius4 shadow-bs sm:w-[100%] w-[33%]">
                    <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Transactions
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[19px] md:mt-[24px] mt-[36px] w-[100%]">
                        <List
                          className="grid min-h-[auto] sm:w-[100%] w-[89%]"
                          orientation="vertical"
                        >
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[61%]">
                              <Img
                                src="images/img_robototoyfacefi.png"
                                className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                                alt="RobotoToyFaceFi"
                              />
                              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Ackerman
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </Column>
                            </Row>
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[61%]">
                              <Img
                                src="images/img_punktoyface1.png"
                                className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                                alt="PunkToyFaceOne"
                              />
                              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Blanker{" "}
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </Column>
                            </Row>
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              +$100.0
                            </Text>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[61%]">
                              <Img
                                src="images/img_vangoghbyamrit.png"
                                className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                                alt="VanGoghByAmrit"
                              />
                              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Lee Ri
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </Column>
                            </Row>
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$12.0
                            </Text>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] py-[2px] sm:w-[100%] w-[61%]">
                              <Img
                                src="images/img_rarepepenakam.png"
                                className="sm:h-[25px] md:h-[32px] h-[46px] rounded-radius50 sm:w-[24px] md:w-[31px] w-[46px]"
                                alt="RarePepeNakam"
                              />
                              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Jackson
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </Column>
                            </Row>
                            <Text
                              className="font-medium text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              -$10.0
                            </Text>
                          </Row>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start mr-[114px] md:mr-[78px] sm:mx-[0] my-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pt-[2px] w-[100%]">
                              <Img
                                src="images/img_tintin22.png"
                                className="max-w-[100%] rounded-radius23 w-[27%]"
                                alt="TinTinTwentyTwo"
                              />
                              <Column className="flex flex-col justify-start mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                                <Text
                                  className="font-semibold text-bluegray_800 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  Yomaha
                                </Text>
                                <Text
                                  className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  7:00 • 21/10/2021
                                </Text>
                              </Column>
                            </Row>
                          </Column>
                        </List>
                        <Column className="bg-gray_51 flex flex-col items-center justify-start sm:mb-[17px] md:mb-[22px] mb-[32px] sm:mx-[0] md:pb-[121px] sm:pb-[15px] pb-[177px] rounded-radius2 sm:w-[100%] w-[2%]">
                          <Line className="bg-deep_orange_300 h-[134px] sm:h-[72px] md:h-[93px] w-[4px]" />
                        </Column>
                      </Row>
                    </Column>
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

export default DashboardOnePage;
