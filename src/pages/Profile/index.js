import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Stack,
  Button,
  List,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const ProfilePage = () => {
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
                <Column className="flex flex-col justify-start max-w-[155px] sm:mb-[269px] md:mb-[347px] mb-[506px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
          <Line className="bg-indigo_51 h-[1038px] sm:h-[553px] md:h-[714px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1199px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Profile
                  </Text>
                  <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:pb-[15px] md:pb-[24px] pb-[36px] rounded-radius4 shadow-bs w-[100%]">
                    <Stack className="h-[196px] relative w-[100%]">
                      <Img
                        src="images/img_imglibimg1.png"
                        className="absolute h-[136px] max-w-[100%] top-[0] w-[100%]"
                        alt="ImgLibIMGOne"
                      />
                      <Img
                        src="images/img_sherlocktoyfa.png"
                        className="absolute bottom-[0] h-[120px] inset-x-[0] max-w-[100%] mx-[auto] rounded-radius24 w-[120px] sm:w-[63px] md:w-[82px]"
                        alt="SherlockToyFa One"
                      />
                    </Stack>
                    <Column className="flex flex-col items-center justify-start sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[72%]">
                      <Column className="flex flex-col items-center justify-start pt-[4px] px-[4px] w-[100%]">
                        <Text
                          className="text-bluegray_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Sam Brown
                        </Text>
                        <Text
                          className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          sambrown@gmail.com
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center sm:mt-[12px] md:mt-[16px] mt-[24px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[50%]">
                        <Img
                          src="images/img_globe.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="globe"
                        />
                        <Text
                          className="flex-grow font-medium sm:ml-[2px] md:ml-[3px] ml-[5px] mr-[2px] text-bluegray_800"
                          as="h6"
                          variant="h6"
                        >
                          sambrown.com
                        </Text>
                      </Row>
                    </Column>
                    <Button
                      className="cursor-pointer font-bold min-w-[40%] sm:mt-[21px] md:mt-[27px] mt-[40px] text-[14px] text-center text-white_A700 w-[max-content]"
                      shape="CircleBorder24"
                      size="xl"
                      variant="FillRed600"
                    >
                      Logout
                    </Button>
                    <Img
                      src="images/img_socialicons.svg"
                      className="max-w-[100%] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[30%]"
                      alt="socialicons"
                    />
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:w-[100%] w-[83%]" />
                    <Text
                      className="font-normal sm:mt-[18px] md:mt-[23px] mt-[34px] not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Member since 2021
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col font-inter items-center justify-end sm:mt-[11px] md:mt-[14px] mt-[21px] sm:p-[15px] md:p-[16px] p-[24px] rounded-radius4 shadow-bs4 w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mt-[4px] md:mt-[5px] mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Personal info.
                        </Text>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="user One"
                        />
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between pl-[3px] py-[3px] w-[100%]">
                          <Text
                            className="font-normal my-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Full name
                          </Text>
                          <Text
                            className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Avori
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] pl-[1px] py-[1px] w-[100%]">
                          <Text
                            className="font-normal my-[2px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Mobile
                          </Text>
                          <Text
                            className="font-medium my-[2px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] pl-[2px] pt-[2px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            E-mail
                          </Text>
                          <Text
                            className="font-medium sm:ml-[33px] md:ml-[43px] ml-[63px] mt-[3px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ackermanlhn@gmail.com
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] pl-[1px] pt-[1px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Location
                          </Text>
                          <Text
                            className="font-medium mt-[4px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hanoi, Vietnam
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="flex flex-col font-inter items-center justify-start sm:mt-[30px] md:mt-[39px] mt-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                  <List
                    className="md:gap-[12px] gap-[18px] sm:gap-[9px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs4 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[25px] md:w-[33px] w-[48px]"
                            shape="icbRoundedBorder4"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_file_1.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="file One"
                            />
                          </Button>
                          <Column className="flex flex-col sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[64%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Completed tasks
                            </Text>
                            <Text
                              className="font-bold mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              125
                            </Text>
                          </Column>
                        </Row>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="user Two"
                        />
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs4 w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                          <Button
                            className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center sm:my-[2px] md:my-[3px] my-[5px] sm:w-[25px] md:w-[33px] w-[48px]"
                            shape="icbRoundedBorder4"
                            size="xlIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_file_1.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="file Two"
                            />
                          </Button>
                          <Column className="flex flex-col sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="font-normal not-italic text-bluegray_800 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Total revenue
                            </Text>
                            <Text
                              className="font-bold md:mt-[12px] mt-[18px] sm:mt-[9px] text-bluegray_800 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              $10,000
                            </Text>
                          </Column>
                        </Row>
                        <Img
                          src="images/img_user_32X32.svg"
                          className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="user Three"
                        />
                      </Row>
                    </Column>
                  </List>
                  <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[11px] md:mt-[14px] mt-[21px] sm:p-[15px] md:p-[19px] p-[29px] rounded-radius4 shadow-bs4 w-[100%]">
                    <Column className="flex flex-col items-center justify-start mt-[3px] sm:px-[0] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end w-[100%]">
                        <Text
                          className="font-bold sm:my-[2px] md:my-[3px] my-[5px] text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          My projects
                        </Text>
                        <Img
                          src="images/img_search_bluegray_400.svg"
                          className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[268px] md:ml-[347px] ml-[505px] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="search"
                        />
                        <Img
                          src="images/img_user_32X32.svg"
                          className="sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[17px] md:w-[22px] w-[32px]"
                          alt="user Four"
                        />
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center pt-[4px] px-[4px] w-[100%]">
                          <Text
                            className="font-normal md:ml-[10px] ml-[15px] sm:ml-[7px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            No.
                          </Text>
                          <Text
                            className="font-normal sm:ml-[36px] md:ml-[47px] ml-[69px] my-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Projects
                          </Text>
                          <Text
                            className="font-normal ml-[131px] sm:ml-[69px] md:ml-[90px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Start
                          </Text>
                          <Text
                            className="font-normal sm:ml-[52px] md:ml-[67px] ml-[98px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Deadline
                          </Text>
                          <Text
                            className="font-normal sm:ml-[40px] md:ml-[52px] ml-[76px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Budget
                          </Text>
                        </Row>
                        <List
                          className="gap-[0] grid min-h-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] w-[100%]"
                          orientation="vertical"
                        >
                          <Column className="bg-gray_51 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                1
                              </Text>
                              <Text
                                className="font-medium sm:ml-[46px] md:ml-[60px] ml-[88px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Branding guideline
                              </Text>
                              <Text
                                className="font-medium sm:ml-[26px] md:ml-[34px] ml-[50px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,000
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-gray_51 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[44px] md:ml-[57px] ml-[84px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[42px] md:ml-[55px] ml-[80px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-gray_51 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[44px] md:ml-[57px] ml-[84px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[42px] md:ml-[55px] ml-[80px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-gray_51 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                3
                              </Text>
                              <Text
                                className="font-medium sm:ml-[44px] md:ml-[57px] ml-[84px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Landing pages
                              </Text>
                              <Text
                                className="font-medium sm:ml-[42px] md:ml-[55px] ml-[80px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,800
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start pr-[4px] pt-[4px] sm:px-[0] w-[100%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mobile design
                              </Text>
                              <Text
                                className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                2 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[29px] ml-[43px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10 Sep, 2020
                              </Text>
                              <Text
                                className="font-medium sm:ml-[22px] md:ml-[28px] ml-[42px] mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                $1,200
                              </Text>
                            </Row>
                          </Column>
                        </List>
                        <Stack className="h-[24px] md:mt-[11px] mt-[16px] sm:mt-[8px] relative sm:w-[12px] md:w-[16px] w-[24px]">
                          <Img
                            src="images/img_minimize.svg"
                            className="absolute h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="minimize"
                          />
                        </Stack>
                      </Column>
                    </Column>
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

export default ProfilePage;
