import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  List,
  Stack,
  Radio,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const ConversationPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");

  return (
    <>
      <Column className="flex flex-col font-inter items-center justify-start mx-[auto] sm:pb-[3px] md:pb-[4px] pb-[7px] w-[100%]">
        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <aside className="md:hidden sm:hidden w-[17%]">
            <div className="">
              <Column className="flex flex-col items-center justify-start max-w-[155px] sm:mb-[227px] md:mb-[293px] mb-[427px] md:ml-[22px] ml-[auto] md:mr-[37px] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_logo.svg"
                  className="max-w-[100%] sm:w-[100%] w-[57%]"
                  alt="Logo"
                />
                <Column className="flex flex-col justify-start sm:mt-[19px] md:mt-[24px] mt-[36px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[71%]">
                    <Img
                      src="images/img_grid_20X20.svg"
                      className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                      alt="grid"
                    />
                    <Text
                      className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] text-bluegray_400"
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
                        src="images/img_menu_20X20.svg"
                        className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                        alt="menu"
                      />
                      <Text
                        className="flex-grow font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800"
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
          <Line className="bg-indigo_51 sm:h-[494px] md:h-[638px] h-[927px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Text
                className="md:mt-[11px] mt-[17px] sm:mt-[9px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Message
              </Text>
              <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-end mb-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pl-[15px] md:pl-[22px] pl-[32px] rounded-radius4 shadow-bs w-[100%]">
                <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[35%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                    <Button
                      className="flex sm:h-[34px] md:h-[43px] h-[62px] items-center justify-center rounded-radius50 sm:w-[33px] md:w-[42px] w-[62px]"
                      size="mdIcn"
                      variant="icbOutlineGreen700"
                    >
                      <Img
                        src="images/img_robototoyfacefi.png"
                        className="h-[48px] sm:h-[26px] md:h-[34px] flex items-center justify-center"
                        alt="Group One"
                      />
                    </Button>
                    <Column className="flex flex-col md:ml-[11px] ml-[16px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[56%]">
                      <Text
                        className="font-bold text-bluegray_800 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Ackerman
                      </Text>
                      <Text
                        className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        My accout
                      </Text>
                    </Column>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-bluegray_400 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Online (10)
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                      <List
                        className="sm:gap-[12px] md:gap-[16px] gap-[24px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-5 min-h-[auto] sm:w-[100%] w-[88%]"
                        orientation="horizontal"
                      >
                        <Column className="flex flex-col items-center justify-start mb-[3px] sm:px-[0] w-[100%]">
                          <Stack className="h-[51px] relative w-[100%]">
                            <Img
                              src="images/img_punktoyface1.png"
                              className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                              alt="PunkToyFaceOne"
                            />
                            <div className="absolute bg-green_700 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                          </Stack>
                          <Text
                            className="font-medium mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Lee
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mb-[4px] sm:px-[0] w-[100%]">
                          <Stack className="h-[51px] relative w-[100%]">
                            <Img
                              src="images/img_indiahigh.png"
                              className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                              alt="Indiahigh"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                          </Stack>
                          <Text
                            className="font-medium mt-[11px] sm:mt-[5px] md:mt-[7px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Riri
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start mb-[3px] sm:px-[0] w-[100%]">
                          <Stack className="h-[51px] relative w-[100%]">
                            <Img
                              src="images/img_tintin22.png"
                              className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                              alt="TinTinTwentyTwo"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                          </Stack>
                          <Text
                            className="font-medium ml-[3px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jimo
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mb-[3px] sm:px-[0] w-[100%]">
                          <Stack className="h-[51px] relative w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                              alt="VanGoghByAmrit"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                          </Stack>
                          <Text
                            className="font-medium mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Acker
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start pb-[2px] pr-[2px] sm:px-[0] w-[100%]">
                          <Stack className="h-[51px] ml-[2px] relative sm:w-[100%] w-[96%]">
                            <Img
                              src="images/img_punk9252toyface.png"
                              className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                              alt="Punk9252ToyFace"
                            />
                            <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                          </Stack>
                          <Text
                            className="font-medium mb-[1px] mt-[12px] sm:mt-[6px] md:mt-[8px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Momo
                          </Text>
                        </Column>
                      </List>
                      <Img
                        src="images/img_arrowright_bluegray_400.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="arrowright"
                      />
                    </Row>
                  </Column>
                  <Input
                    value={inputvalue1}
                    onChange={(e) => setInputvalue1(e?.target?.value)}
                    className="font-medium p-[0] text-[12px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                    wrapClassName="flex md:mt-[22px] mt-[32px] sm:mt-[17px] sm:mx-[0] sm:w-[100%] w-[99%]"
                    name="SearchBox One"
                    placeholder="Search..."
                    prefix={
                      <Img
                        src="images/img_search.svg"
                        className="cursor-pointer ml-[3px] mr-[8px] sm:mr-[4px] md:mr-[5px] my-[auto]"
                        alt="search"
                      />
                    }
                    suffix={
                      inputvalue1?.length > 0 ? (
                        <CloseSVG
                          color="#828fa2"
                          className="cursor-pointer ml-[10px] mr-[22px] sm:mr-[11px] sm:ml-[5px] md:mr-[15px] md:ml-[6px] my-[auto]"
                          onClick={() => setInputvalue1("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcRoundedBorder4"
                    size="smSrc"
                    variant="srcFillGray51"
                  ></Input>
                  <List
                    className="grid min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pb-[10px] md:pb-[13px] pb-[20px] sm:w-[100%] w-[99%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Stack className="h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_punktoyface1.png"
                          className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                          alt="PunkToyFaceOne One"
                        />
                        <div className="absolute bg-green_700 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[78%]">
                          <Text
                            className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Lee Ankar
                          </Text>
                          <Text
                            className="font-medium mt-[13px] sm:mt-[6px] md:mt-[8px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Hey! Can i meet you for a sec?
                          </Text>
                        </Column>
                        <Column className="flex flex-col sm:mx-[0] pl-[2px] pt-[2px] sm:px-[0] w-[10%] sm:w-[100%]">
                          <Text
                            className="font-normal mt-[3px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            now
                          </Text>
                          <Text
                            className="bg-red_600 flex font-bold items-center ml-[4px] mt-[12px] sm:mt-[6px] md:mt-[8px] sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-white_A700 w-[24px]"
                            variant="body1"
                          >
                            3
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="self-center w-[83%] h-[1px] sm:w-[100%] bg-indigo_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Stack className="h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_tintin22.png"
                          className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                          alt="TinTinTwentyTwo One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Jimo
                          </Text>
                          <Text
                            className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] pl-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[18%]">
                          <Text
                            className="font-normal sm:mb-[19px] md:mb-[24px] mb-[36px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="self-center w-[83%] h-[1px] sm:w-[100%] bg-indigo_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Stack className="h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_punk9252toyface.png"
                          className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                          alt="Punk9252ToyFace One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Momo
                          </Text>
                          <Text
                            className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] pl-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[18%]">
                          <Text
                            className="font-normal sm:mb-[19px] md:mb-[24px] mb-[36px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                    <Line className="self-center w-[83%] h-[1px] sm:w-[100%] bg-indigo_51" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                      <Stack className="h-[51px] relative w-[13%]">
                        <Img
                          src="images/img_indiahigh.png"
                          className="absolute sm:h-[26px] md:h-[34px] h-[48px] rounded-radius50 top-[0] w-[100%]"
                          alt="Indiahigh One"
                        />
                        <div className="absolute bg-bluegray_200 bottom-[0] h-[11px] sm:h-[6px] md:h-[8px] outline outline-[2px] outline-white_A700 right-[4%] rounded-radius50 w-[11px] sm:w-[5px] md:w-[7px]"></div>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                        <Column className="flex flex-col sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[62%]">
                          <Text
                            className="font-bold sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Riri Lee
                          </Text>
                          <Text
                            className="font-normal mt-[14px] sm:mt-[7px] md:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Sorry for my mistaken ✓
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center sm:mx-[0] pl-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[18%]">
                          <Text
                            className="font-normal sm:mb-[19px] md:mb-[24px] mb-[36px] mt-[1px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            23 mins
                          </Text>
                        </Column>
                      </Row>
                    </Row>
                  </List>
                </Column>
                <Line className="bg-indigo_51 sm:h-[398px] md:h-[515px] h-[747px] sm:ml-[13px] md:ml-[17px] ml-[26px] w-[1px]" />
                <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Column className="flex flex-col justify-end sm:mx-[0] pr-[3px] pt-[3px] sm:px-[0] sm:w-[100%] w-[15%]">
                        <Text
                          className="font-bold mt-[2px] text-bluegray_800 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Lee Ankar
                        </Text>
                        <Radio
                          value="Online"
                          className="font-medium mt-[12px] sm:mt-[6px] md:mt-[8px] sm:pl-[4px] md:pl-[5px] pl-[8px] pr-[3px] text-[14px] text-bluegray_800"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="ProfileViewsOne"
                          label="Online"
                          size="md"
                          variant="FillGreen700_1"
                        ></Radio>
                      </Column>
                      <Button
                        className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center mb-[10px] sm:mb-[5px] md:mb-[6px] sm:ml-[232px] md:ml-[300px] ml-[437px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_search_bluegray_900.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="search"
                        />
                      </Button>
                      <Button
                        className="flex sm:h-[26px] md:h-[34px] h-[48px] items-center justify-center mb-[10px] sm:mb-[5px] md:mb-[6px] md:ml-[11px] ml-[16px] sm:ml-[8px] rounded-radius50 sm:w-[25px] md:w-[33px] w-[48px]"
                        size="xlIcn"
                        variant="icbFillGray51"
                      >
                        <Img
                          src="images/img_overflowmenu.svg"
                          className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                          alt="overflowmenu"
                        />
                      </Button>
                    </Row>
                    <Line className="bg-indigo_51 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]" />
                    <Column className="flex flex-col justify-start sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                      <Stack className="h-[104px] pt-[4px] relative sm:w-[100%] w-[50%]">
                        <Column className="absolute flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-normal sm:ml-[19px] md:ml-[24px] ml-[36px] not-italic text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Lee Ankar{" "}
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[12px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                            <Img
                              src="images/img_punktoyface1.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="PunkToyFaceOne Two"
                            />
                            <Column className="bg-gray_51 flex flex-col justify-end sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px] sm:w-[100%] w-[89%]">
                              <Text
                                className="font-medium mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Hey! Can i meet you for a sec?
                              </Text>
                            </Column>
                          </Row>
                        </Column>
                        <Text
                          className="absolute bg-gray_51 border-2 border-solid border-white_A700 bottom-[0] flex font-normal items-center not-italic sm:px-[3px] md:px-[4px] px-[6px] right-[3%] rounded-radius50 text-black_900 w-[28px]"
                          as="h5"
                          variant="h5"
                        >
                          😍
                        </Text>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Input
                          className="font-medium p-[0] text-[16px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                          wrapClassName="sm:mx-[0] sm:w-[100%] w-[91%]"
                          name="Group Four"
                          placeholder="Hey! Can i meet you for a sec?"
                          shape="CustomBorderBL4"
                          size="xl"
                          variant="FillDeeporange300"
                        ></Input>
                        <Img
                          src="images/img_checkmark_20X20.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="checkmark"
                        />
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-end ml-[auto] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <Column className="bg-gray_51 flex flex-col justify-start sm:mx-[0] md:p-[11px] sm:p-[15px] p-[16px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] sm:w-[100%] w-[91%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-end justify-end sm:p-[4px] md:p-[5px] p-[8px] rounded-radius8 w-[100%]"
                            style={{
                              backgroundImage:
                                "url('images/img_group13377.png')",
                            }}
                          >
                            <Button
                              className="cursor-pointer font-medium mb-[1px] min-w-[18%] sm:mt-[49px] md:mt-[63px] mt-[92px] text-[12px] text-center text-white_A700 w-[max-content]"
                              shape="RoundedBorder10"
                              size="sm"
                              variant="FillBlack90066"
                            >
                              1:00
                            </Button>
                          </Column>
                          <Column className="flex flex-col justify-start md:mt-[11px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[83%]">
                            <Text
                              className="font-semibold text-bluegray_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              ☕️ Life Style Coffee
                            </Text>
                            <Text
                              className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_402 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              8350 Melrose Ave, Los Angeles
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_checkmark_20X20.svg"
                          className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:ml-[4px] md:ml-[5px] ml-[8px] sm:mt-[114px] md:mt-[147px] mt-[215px] sm:w-[10px] md:w-[13px] w-[20px]"
                          alt="checkmark One"
                        />
                      </Row>
                      <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[105px] sm:mt-[55px] md:mt-[72px] sm:p-[4px] md:p-[6px] p-[9px] rounded-radius4 w-[100%]">
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="ml-[4px] mt-[1px] sm:mx-[0] sm:w-[100%] w-[75%]"
                          name="frame3801"
                          placeholder="Enter message..."
                          size="sm"
                          variant="FillGray51"
                        ></Input>
                        <Img
                          src="images/img_share.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] md:ml-[11px] ml-[17px] sm:ml-[9px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="share"
                        />
                        <Img
                          src="images/img_link.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="link"
                        />
                        <Img
                          src="images/img_plus_1.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="plus"
                        />
                      </Row>
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

export default ConversationPage;
