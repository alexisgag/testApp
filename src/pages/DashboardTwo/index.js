import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  Grid,
  Stack,
  List,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardTwoPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden w-[17%]">
            <div className="">
              <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[21px] p-[31px] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="max-w-[88px] ml-[auto] mr-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
                  alt="Logo"
                />
                <Column className="flex flex-col justify-start max-w-[155px] mb-[1011px] sm:mb-[538px] md:mb-[695px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
          <Line className="bg-indigo_51 md:h-[1062px] h-[1542px] sm:h-[822px] max-w-[1px] mb-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-start mt-[1px] md:pl-[15px] sm:pl-[15px] pl-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                    <Text
                      className="text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Overview
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                      <Button
                        className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
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
                      <Row className="bg-deep_orange_300 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] p-[14px] sm:p-[7px] md:p-[9px] rounded-radius4 sm:w-[100%] w-[72%]">
                        <Text
                          className="flex-grow font-medium ml-[3px] text-white_A700"
                          as="h6"
                          variant="h6"
                        >
                          Add task
                        </Text>
                        <Img
                          src="images/img_plus.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mr-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="plus"
                        />
                      </Row>
                    </Row>
                  </Row>
                  <Column className="flex flex-col font-inter items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                        <Grid className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray103"
                              >
                                <Img
                                  src="images/img_file_48X48.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="file One"
                                />
                              </Button>
                              <Column className="flex flex-col items-center justify-end md:mt-[11px] mt-[16px] sm:mt-[8px] pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  50+
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_800 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Available Tasks
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillYellow50"
                              >
                                <Img
                                  src="images/img_mail_48X48.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="mail One"
                                />
                              </Button>
                              <Column className="flex flex-col items-center justify-end md:mt-[11px] mt-[16px] sm:mt-[8px] pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  20
                                </Text>
                                <Text
                                  className="font-normal mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_800 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Obsolete Tasks
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray104"
                              >
                                <Img
                                  src="images/img_folder_48X48.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="folder One"
                                />
                              </Button>
                              <Column className="flex flex-col justify-end md:mt-[11px] mt-[16px] sm:mt-[8px] sm:pr-[2px] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] w-[100%]">
                                <Text
                                  className="font-bold sm:ml-[19px] md:ml-[24px] ml-[36px] sm:mr-[22px] md:mr-[28px] mr-[42px] text-bluegray_800 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  23
                                </Text>
                                <Text
                                  className="font-normal sm:mr-[14px] md:mr-[18px] mr-[27px] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_800 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  In Progress
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                              <Button
                                className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:w-[25px] md:w-[33px] w-[48px]"
                                shape="icbRoundedBorder4"
                                size="xlIcn"
                                variant="icbFillGray52"
                              >
                                <Img
                                  src="images/img_checkmark.svg"
                                  className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                  alt="checkmark"
                                />
                              </Button>
                              <Column className="flex flex-col justify-end md:mt-[11px] mt-[16px] sm:mt-[8px] pr-[4px] py-[4px] w-[100%]">
                                <Text
                                  className="font-bold sm:ml-[19px] md:ml-[24px] ml-[36px] sm:mr-[22px] md:mr-[29px] mr-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                  as="h4"
                                  variant="h4"
                                >
                                  35
                                </Text>
                                <Text
                                  className="font-normal sm:mr-[14px] md:mr-[18px] mr-[27px] mt-[12px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_800 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Done Tasks
                                </Text>
                              </Column>
                            </Column>
                          </Column>
                        </Grid>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs sm:w-[100%] w-[55%]">
                        <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Statistics
                            </Text>
                            <Button
                              className="flex items-center justify-center min-w-[43%] text-center w-[max-content]"
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
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[19px] mt-[28px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[6%]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                800
                              </Text>
                              <Text
                                className="font-normal sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                600
                              </Text>
                              <Text
                                className="font-normal sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                400
                              </Text>
                              <Text
                                className="font-normal ml-[1px] sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                200
                              </Text>
                              <Text
                                className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] sm:mt-[13px] md:mt-[17px] mt-[26px] not-italic text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                0
                              </Text>
                            </Column>
                            <Img
                              src="images/img_frame_176X344.svg"
                              className="max-w-[100%] sm:w-[100%] w-[87%]"
                              alt="Frame"
                            />
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[auto] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:mx-[0] pb-[2px] sm:px-[0] px-[2px] sm:w-[100%] w-[89%]">
                            <Text
                              className="font-normal mb-[1px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Mon
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Tue
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Wed
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Thu
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Fri
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Sat
                            </Text>
                            <Text
                              className="font-normal mb-[1px] sm:ml-[18px] md:ml-[23px] ml-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              Sun
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[125px] md:ml-[86px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                              <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] mb-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Text
                                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Income
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                              <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] sm:my-[2px] md:my-[3px] my-[5px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Text
                                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_400 w-[auto]"
                                variant="body1"
                              >
                                Expenses
                              </Text>
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[44%]">
                        <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <Text
                              className="flex-grow font-bold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_900"
                              as="h4"
                              variant="h4"
                            >
                              Projects
                            </Text>
                            <Img
                              src="images/img_user_32X32.svg"
                              className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                              alt="user One"
                            />
                          </Row>
                          <Stack className="h-[190px] sm:mt-[14px] md:mt-[19px] mt-[28px] relative sm:w-[101px] md:w-[130px] w-[190px]">
                            <Stack className="absolute h-[190px] rounded-radius32 sm:w-[101px] md:w-[130px] w-[190px]">
                              <CircularProgressbar
                                className="absolute border-solid sm:h-[102px] md:h-[131px] h-[190px] overflow-visible w-[100%]"
                                value="17"
                                name="Group13585"
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(-23deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                              <CircularProgressbar
                                className="absolute border-solid sm:h-[102px] md:h-[131px] h-[190px] overflow-visible w-[100%]"
                                value="24"
                                name="Group13586"
                                strokeWidth={1}
                                styles={{
                                  trail: { strokeWidth: 1, stroke: "" },
                                  path: {
                                    strokeLinecap: "square",
                                    height: "100%",
                                    transformOrigin: "center",
                                    transform: "rotate(51deg)",
                                  },
                                }}
                              ></CircularProgressbar>
                            </Stack>
                            <Column className="absolute bottom-[34%] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[31%] sm:w-[100%] w-[34%]">
                              <Text
                                className="text-bluegray_800 w-[auto]"
                                as="h2"
                                variant="h2"
                              >
                                230+
                              </Text>
                              <Text
                                className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_800 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Projects
                              </Text>
                            </Column>
                          </Stack>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[22%]">
                              <div className="bg-green_700 sm:h-[4px] md:h-[5px] h-[6px] md:my-[11px] my-[17px] sm:my-[9px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                                <Text
                                  className="font-semibold text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  High
                                </Text>
                              </Column>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[22px] ml-[32px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[20%]">
                              <div className="bg-indigo_400 sm:h-[4px] md:h-[5px] h-[6px] mb-[14px] sm:mb-[7px] md:mb-[9px] md:mt-[11px] mt-[17px] sm:mt-[9px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                                <Text
                                  className="font-semibold text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  30
                                </Text>
                                <Text
                                  className="font-medium sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  Low
                                </Text>
                              </Column>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[22px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                              <div className="bg-amber_300 sm:h-[4px] md:h-[5px] h-[6px] md:my-[11px] my-[17px] sm:my-[9px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[6px]"></div>
                              <Column className="flex flex-col sm:mx-[0] pb-[1px] pr-[1px] sm:px-[0] sm:w-[100%] w-[73%]">
                                <Text
                                  className="font-semibold text-bluegray_900 w-[auto]"
                                  as="h5"
                                  variant="h5"
                                >
                                  100
                                </Text>
                                <Text
                                  className="font-medium mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_400 w-[auto]"
                                  variant="body1"
                                >
                                  Medium
                                </Text>
                              </Column>
                            </Row>
                          </Row>
                        </Column>
                      </Column>
                      <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs sm:w-[100%] w-[55%]">
                        <Column className="flex flex-col items-center justify-start sm:mb-[3px] md:mb-[4px] mb-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Active tasks
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[60%]">
                              <Button
                                className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-center text-white_A700 w-[max-content]"
                                shape="RoundedBorder4"
                                size="md"
                                variant="FillBluegray900"
                              >
                                Day
                              </Button>
                              <Button
                                className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                                shape="RoundedBorder4"
                                size="md"
                                variant="OutlineIndigo51"
                              >
                                Week
                              </Button>
                              <Button
                                className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                                shape="RoundedBorder4"
                                size="md"
                                variant="OutlineIndigo51"
                              >
                                Month
                              </Button>
                            </Row>
                          </Row>
                          <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                            <List
                              className="sm:gap-[21px] md:gap-[27px] gap-[40px] grid min-h-[auto] w-[100%]"
                              orientation="vertical"
                            >
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:pr-[15px] md:pr-[178px] pr-[260px] w-[100%]">
                                <Img
                                  src="images/img_computer.svg"
                                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="computer"
                                />
                                <Column className="flex flex-col items-center md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                                  <Text
                                    className="font-medium text-bluegray_400 w-[auto]"
                                    variant="body1"
                                  >
                                    ACKERMAN_LHN
                                  </Text>
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[4px] md:mt-[5px] mt-[8px] w-[100%]">
                                    <Line className="bg-red_600 md:h-[12px] h-[16px] sm:h-[9px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        Changelog Revamp{" "}
                                      </span>
                                      <span className="text-red_600 text-[16px] font-inter">
                                        #ver 1.0
                                      </span>
                                      <span className="text-bluegray_900 text-[16px] font-inter">
                                        {" "}
                                        Homescreen{" "}
                                      </span>
                                    </Text>
                                  </Row>
                                </Column>
                              </Row>
                              <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] sm:pr-[15px] md:pr-[205px] pr-[299px] w-[100%]">
                                <Img
                                  src="images/img_checkmark_24X24.svg"
                                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="checkmark One"
                                />
                                <Column className="flex flex-col items-center md:ml-[13px] ml-[20px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                                  <Text
                                    className="font-medium text-bluegray_400 w-[auto]"
                                    variant="body1"
                                  >
                                    JOHNSON
                                  </Text>
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                                    <Line className="bg-deep_orange_300 md:h-[12px] h-[16px] sm:h-[9px] my-[4px] w-[4px]" />
                                    <Text
                                      className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Create user flow for Data Projects
                                    </Text>
                                  </Row>
                                </Column>
                              </Row>
                              <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                                <Img
                                  src="images/img_computer.svg"
                                  className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="computer One"
                                />
                                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                                  <Text
                                    className="font-medium text-bluegray_400 w-[auto]"
                                    variant="body1"
                                  >
                                    AVORI
                                  </Text>
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                                    <Line className="bg-indigo_400 md:h-[12px] h-[16px] sm:h-[9px] md:my-[11px] my-[16px] sm:my-[8px] w-[4px]" />
                                    <Text
                                      className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[97%]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Gather to discuss about new project
                                      deriving from Avocado
                                    </Text>
                                  </Row>
                                </Column>
                              </Row>
                            </List>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] sm:p-[15px] md:p-[20px] p-[30px] rounded-radius4 shadow-bs w-[100%]">
                      <Column className="flex flex-col justify-start my-[1px] sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                          <Text
                            className="flex-grow font-bold mb-[4px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_900"
                            as="h4"
                            variant="h4"
                          >
                            Posting Tasks
                          </Text>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                            alt="user Two"
                          />
                        </Row>
                        <Text
                          className="font-normal sm:mt-[4px] md:mt-[6px] mt-[9px] not-italic text-bluegray_900 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Crucial tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Urgent tasks
                          </a>
                          <span className="text-bluegray_900 text-[14px] font-inter">
                            /{" "}
                          </span>
                          <a
                            href="javascript:"
                            className="text-bluegray_900 text-[14px] font-inter underline"
                          >
                            Normal tasks
                          </a>
                        </Text>
                        <Stack className="h-[401px] sm:mt-[15px] md:mt-[19px] mt-[29px] relative w-[100%]">
                          <Row className="absolute bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly top-[0] w-[100%]">
                            <Stack className="h-[48px] relative w-[13%]">
                              <Text
                                className="absolute bottom-[29%] font-semibold right-[24%] text-bluegray_900 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                Time
                              </Text>
                              <Column className="absolute bg-deep_orange_300 flex flex-col items-center justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]">
                                <Text
                                  className="font-semibold mb-[1px] text-white_A700 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Time
                                </Text>
                              </Column>
                            </Stack>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[29%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Mon 10
                                </Text>
                              </Column>
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[15%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Tue 11
                                </Text>
                              </Column>
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[15%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Wed 12
                                </Text>
                              </Column>
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[15%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Thu 13
                                </Text>
                              </Column>
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[15%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Fri 14
                                </Text>
                              </Column>
                              <Column className="flex flex-col items-center sm:mx-[0] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] sm:w-[100%] w-[15%]">
                                <Text
                                  className="font-medium mb-[1px] text-bluegray_400 w-[auto]"
                                  as="h6"
                                  variant="h6"
                                >
                                  Sat 15
                                </Text>
                              </Column>
                            </Row>
                          </Row>
                          <Column className="absolute bottom-[7%] flex flex-col justify-start left-[2%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                            <Text
                              className="font-normal ml-[3px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              09 am
                            </Text>
                            <Text
                              className="font-normal ml-[2px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              10 am
                            </Text>
                            <Text
                              className="font-normal sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              11 am
                            </Text>
                            <Text
                              className="font-normal ml-[1px] sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              12 pm
                            </Text>
                            <Text
                              className="font-normal ml-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              01 pm
                            </Text>
                            <Text
                              className="font-normal ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              02 pm
                            </Text>
                            <Text
                              className="font-normal ml-[2px] sm:mt-[17px] md:mt-[22px] mt-[32px] not-italic text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              03 pm
                            </Text>
                          </Column>
                          <List
                            className="absolute bg-cover bg-no-repeat gap-[10px] sm:gap-[5px] md:gap-[6px] grid min-h-[auto] p-[11px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[89%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group13154.svg')",
                            }}
                            orientation="vertical"
                          >
                            <Column className="bg-white_A700 flex flex-col justify-start md:ml-[27px] ml-[40px] md:mr-[328px] mr-[478px] sm:mx-[0] my-[0] rounded-radius4 shadow-bs sm:w-[100%] w-[25%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                                <Line className="bg-green_700 md:h-[118px] h-[171px] sm:h-[92px] w-[4px]" />
                                <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                                  <Button
                                    className="cursor-pointer font-poppins font-semibold min-w-[93%] text-[10px] text-center text-white_A700 w-[max-content]"
                                    shape="RoundedBorder4"
                                    size="sm"
                                    variant="FillDeeporange300"
                                  >
                                    #Data projects
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Revamp UI, UX
                                  </Text>
                                  <Stack className="h-[24px] sm:mt-[32px] md:mt-[41px] mt-[61px] relative rounded-radius12 w-[36%]">
                                    <Img
                                      src="images/img_robototoyfacefi.png"
                                      className="absolute sm:h-[13px] md:h-[17px] h-[24px] left-[0] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                                      alt="RobotoToyFaceFi"
                                    />
                                    <Img
                                      src="images/img_fidenza978toy.png"
                                      className="absolute sm:h-[13px] md:h-[17px] h-[24px] right-[0] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                                      alt="Fidenza978Toy"
                                    />
                                  </Stack>
                                </Column>
                              </Row>
                            </Column>
                            <Column className="bg-white_A700 flex flex-col justify-start md:ml-[204px] ml-[297px] md:mr-[198px] mr-[289px] sm:mx-[0] my-[0] rounded-radius4 shadow-bs sm:w-[100%] w-[15%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                                <Line className="bg-indigo_400 h-[137px] sm:h-[73px] md:h-[95px] rounded-radius4 w-[4px]" />
                                <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                                  <Button
                                    className="cursor-pointer font-poppins font-semibold min-w-[88%] text-[10px] text-center text-white_A700 w-[max-content]"
                                    shape="RoundedBorder4"
                                    size="sm"
                                    variant="FillIndigo400"
                                  >
                                    #2011
                                  </Button>
                                  <Text
                                    className="font-inter font-semibold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    Meeting
                                  </Text>
                                  <Stack className="h-[24px] sm:mt-[14px] md:mt-[18px] mt-[27px] relative rounded-radius12 sm:w-[100%] w-[65%]">
                                    <Img
                                      src="images/img_robototoyfacefi.png"
                                      className="absolute sm:h-[13px] md:h-[17px] h-[24px] left-[0] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                                      alt="RobotoToyFaceFi One"
                                    />
                                    <Img
                                      src="images/img_fidenza978toy.png"
                                      className="absolute sm:h-[13px] md:h-[17px] h-[24px] right-[0] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                                      alt="Fidenza978Toy One"
                                    />
                                  </Stack>
                                </Column>
                              </Row>
                            </Column>
                          </List>
                        </Stack>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius4 shadow-bs sm:w-[100%] w-[26%]">
                  <Column className="flex flex-col items-center justify-start sm:mb-[14px] md:mb-[18px] mb-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                      <Text
                        className="flex-grow font-medium text-bluegray_900"
                        as="h4"
                        variant="h4"
                      >
                        Calendar
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="user Three"
                      />
                    </Row>
                    <Column className="flex flex-col font-inter items-center justify-start md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                        <Button
                          className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          size="xlIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_buttonprimary.svg"
                            className="h-[14px] sm:h-[8px] md:h-[10px] flex items-center justify-center"
                            alt="ButtonPrimary"
                          />
                        </Button>
                        <Text
                          className="font-semibold mt-[14px] sm:mt-[7px] md:mt-[9px] text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          <span className="text-bluegray_800 text-[14px] font-inter">
                            Febuary{" "}
                          </span>
                          <span className="text-bluegray_400 text-[14px] font-inter">
                            2022
                          </span>
                        </Text>
                        <Button
                          className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                          size="xlIcn"
                          variant="icbFillGray51"
                        >
                          <Img
                            src="images/img_play.svg"
                            className="flex items-center justify-center"
                            alt="play"
                          />
                        </Button>
                      </Row>
                      <div className="sm:mt-[12px] md:mt-[15px] mt-[23px] w-[100%]"></div>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-poppins items-center justify-between sm:mt-[28px] md:mt-[36px] mt-[53px] sm:px-[0] w-[100%]">
                      <Text
                        className="flex-grow font-medium text-bluegray_900"
                        as="h4"
                        variant="h4"
                      >
                        Recent activities
                      </Text>
                      <Img
                        src="images/img_user_32X32.svg"
                        className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                        alt="user Four"
                      />
                    </Row>
                    <List
                      className="font-inter sm:gap-[19px] md:gap-[25px] gap-[37.08px] grid min-h-[auto] sm:mt-[19px] md:mt-[25px] mt-[37px] w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="grid min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] pr-[126px] sm:pr-[15px] md:pr-[86px] w-[100%]"
                          orientation="vertical"
                        >
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-red_600 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog Revamp Homescreen{" "}
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-indigo_400 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Create user flow for Data Projects
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-green_700 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Gather to discuss about new project deriving
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-indigo_400 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Urgent meeting with CEO
                              </Text>
                            </Row>
                          </Column>
                        </List>
                      </Column>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Feb 24, 2022
                        </Text>
                        <List
                          className="grid min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] pr-[126px] sm:pr-[15px] md:pr-[86px] w-[100%]"
                          orientation="vertical"
                        >
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-red_600 sm:h-[13px] md:h-[17px] h-[24px] w-[4px]" />
                              <Text
                                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Daily meeting with tem
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-indigo_400 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Revision design system
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-green_700 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Changelog authentication
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-indigo_400 sm:h-[12px] md:h-[16px] h-[22px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-bluegray_900 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Pitching with client
                              </Text>
                            </Row>
                          </Column>
                          <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                          <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                            <Text
                              className="font-medium text-bluegray_400 w-[auto]"
                              variant="body1"
                            >
                              8:00 AM -9:00 AM
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[10px] sm:mt-[5px] md:mt-[6px] w-[100%]">
                              <Line className="bg-red_600 sm:h-[26px] md:h-[33px] h-[47px] my-[1px] w-[4px]" />
                              <Text
                                className="font-medium leading-[24.00px] md:leading-[normal] sm:leading-[normal] md:ml-[5px] ml-[8px] sm:mx-[0] text-bluegray_900 sm:w-[100%] w-[89%]"
                                as="h5"
                                variant="h5"
                              >
                                Year end party and plan for 2022
                              </Text>
                            </Row>
                          </Column>
                        </List>
                      </Column>
                    </List>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DashboardTwoPage;
