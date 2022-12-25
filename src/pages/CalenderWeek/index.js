import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  RadioGroup,
  Radio,
  List,
} from "components";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const CalenderWeekPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[506px] md:h-[654px] h-[950px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col justify-start mb-[1px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                <Text
                  className="text-bluegray_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Calendar
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                    <Column className="flex flex-col justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] sm:px-[0] w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] not-italic text-bluegray_400 w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Click in the calendar to create event
                        </Text>
                        <Button
                          className="flex items-center justify-center md:mt-[16px] mt-[24px] sm:mt-[12px] text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus.svg"
                              className="ml-[5px] sm:ml-[2px] md:ml-[3px] text-center"
                              alt="plus"
                            />
                          }
                          shape="CircleBorder24"
                          size="xl"
                          variant="FillDeeporange300"
                        >
                          <div className="bg-transparent cursor-pointer font-semibold text-[14px] text-white_A700">
                            Create new event
                          </div>
                        </Button>
                      </Column>
                      <RadioGroup
                        className="sm:mt-[17px] md:mt-[22px] mt-[32px] sm:w-[100%] w-[62%]"
                        name="radiogroupprofileviews one"
                      >
                        <Radio
                          value="NewEvent"
                          className="font-medium sm:mr-[15px] md:mr-[20px] mr-[30px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="New Event"
                          variant="FillGreen700_1"
                        ></Radio>
                        <Radio
                          value="MyEventOnly"
                          className="font-medium mr-[2px] sm:mt-[13px] md:mt-[17px] mt-[25px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="My Event Only"
                          variant="FillIndigo400"
                        ></Radio>
                        <Radio
                          value="Meeting"
                          className="font-medium sm:mr-[26px] md:mr-[34px] mr-[50px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Meeting"
                          variant="FillAmber300"
                        ></Radio>
                        <Radio
                          value="Error"
                          className="font-medium sm:mb-[2px] md:mb-[3px] mb-[5px] sm:mr-[39px] md:mr-[51px] mr-[75px] sm:mt-[10px] md:mt-[13px] mt-[20px] sm:pl-[4px] md:pl-[5px] pl-[8px] text-[16px] text-bluegray_800"
                          inputClassName="h-[8px] mr-[5px] w-[8px]"
                          checked={false}
                          name="radiogroupprofileviews one"
                          label="Error"
                          variant="FillRed600_1"
                        ></Radio>
                      </RadioGroup>
                      <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]" />
                      <Text
                        className="font-normal sm:mt-[16px] md:mt-[21px] mt-[31px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Team members
                      </Text>
                      <List
                        className="grid min-h-[auto] sm:mt-[20px] md:mt-[26px] mt-[38px] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            🚗
                          </Text>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Avo
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[49%] sm:ml-[19px] md:ml-[24px] ml-[36px] text-[12px] text-center text-indigo_400 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGray105"
                          >
                            Lead design
                          </Button>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ⚽
                          </Text>
                          <Text
                            className="font-medium mt-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nhun
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[49%] text-[12px] text-center text-indigo_400 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGray105"
                          >
                            Product design
                          </Button>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            👑
                          </Text>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Riri
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[49%] sm:ml-[21px] md:ml-[27px] ml-[40px] text-[12px] text-center text-indigo_400 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGray105"
                          >
                            Product design
                          </Button>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            ✈
                          </Text>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Juki
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[49%] sm:ml-[18px] md:ml-[23px] ml-[34px] text-[12px] text-center text-indigo_400 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGray105"
                          >
                            Product design
                          </Button>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            💣
                          </Text>
                          <Text
                            className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] mt-[2px] text-bluegray_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            @Nobi
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[49%] sm:ml-[15px] md:ml-[19px] ml-[29px] text-[12px] text-center text-indigo_400 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGray105"
                          >
                            Product design
                          </Button>
                        </Row>
                      </List>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                        <Img
                          src="images/img_plus_24X24.svg"
                          className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="plus One"
                        />
                        <Text
                          className="flex-grow font-normal sm:ml-[4px] md:ml-[5px] ml-[8px] not-italic text-deep_orange_300"
                          as="h5"
                          variant="h5"
                        >
                          Add member
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs sm:w-[100%] w-[75%]">
                    <Column className="flex flex-col items-center justify-start mb-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:px-[0] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[42%]">
                          <Text
                            className="mb-[4px] mt-[10px] sm:mt-[5px] md:mt-[6px] text-bluegray_900 w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            <span className="text-bluegray_900 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                              24{" "}
                            </span>
                            <span className="text-bluegray_900 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                              January{" "}
                            </span>
                            <span className="text-indigo_400 text-[24px] font-inter font-bold sm:text-[20px] md:text-[22px]">
                              2022
                            </span>
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]">
                            <Button
                              className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                              size="lgIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_arrowdown_bluegray_900.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="arrowleft"
                              />
                            </Button>
                            <Button
                              className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                              size="lgIcn"
                              variant="icbFillGray51"
                            >
                              <Img
                                src="images/img_arrowright_bluegray_900.svg"
                                className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                                alt="arrowright"
                              />
                            </Button>
                          </Row>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                          <Button
                            className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                            shape="CircleBorder20"
                            size="md"
                            variant="OutlineIndigo51"
                          >
                            Day
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="CircleBorder20"
                            size="md"
                            variant="FillBluegray900"
                          >
                            Week
                          </Button>
                          <Button
                            className="cursor-pointer font-semibold min-w-[32%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                            shape="CircleBorder20"
                            size="md"
                            variant="OutlineIndigo51"
                          >
                            Month
                          </Button>
                        </Row>
                      </Row>
                      <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[30px] w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                          <List
                            className="grid sm:grid-cols-1 md:grid-cols-2 grid-cols-5 min-h-[auto] sm:w-[100%] w-[72%]"
                            orientation="horizontal"
                          >
                            <Column className="border border-indigo_51 border-solid flex flex-col items-center justify-start p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                              <Text
                                className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Sun 2/1
                              </Text>
                            </Column>
                            <Column className="border border-indigo_51 border-solid flex flex-col items-center justify-start p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                              <Text
                                className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mon 3/1
                              </Text>
                            </Column>
                            <Column className="border border-indigo_51 border-solid flex flex-col items-center justify-start p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                              <Text
                                className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Tue 4/1
                              </Text>
                            </Column>
                            <Column className="border border-indigo_51 border-solid flex flex-col items-center justify-start p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                              <Text
                                className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Wed 5/1
                              </Text>
                            </Column>
                            <Column className="border border-indigo_51 border-solid flex flex-col items-center justify-start p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] w-[100%]">
                              <Text
                                className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Thu 6/1
                              </Text>
                            </Column>
                          </List>
                          <Column className="border border-indigo_51 border-solid flex flex-col items-center sm:mx-[0] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] sm:w-[100%] w-[15%]">
                            <Text
                              className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Fri 7/1
                            </Text>
                          </Column>
                          <Column className="border border-indigo_51 border-solid flex flex-col items-center sm:mx-[0] p-[12px] md:p-[8px] sm:px-[0] sm:py-[6px] sm:w-[100%] w-[15%]">
                            <Text
                              className="font-semibold sm:mb-[2px] md:mb-[3px] mb-[5px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Sa 8/1
                            </Text>
                          </Column>
                        </Row>
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col justify-start md:p-[11px] sm:p-[15px] p-[16px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group13151.svg')",
                          }}
                        >
                          <Row className="bg-deep_orange_300 flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mb-[285px] md:mb-[368px] mb-[536px] ml-[101px] md:ml-[69px] sm:mx-[0] p-[4px] rounded-radius4 sm:w-[100%] w-[14%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center sm:mb-[3px] md:mb-[4px] mb-[6px] ml-[12px] md:ml-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                              <div className="bg-white_A700 sm:h-[5px] md:h-[6px] h-[8px] mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
                              <Text
                                className="font-medium sm:ml-[4px] md:ml-[5px] ml-[8px] text-white_A700 w-[auto]"
                                as="h6"
                                variant="h6"
                              >
                                8:10 am
                              </Text>
                            </Row>
                            <Text
                              className="font-semibold sm:mb-[3px] md:mb-[4px] mb-[6px] sm:ml-[4px] md:ml-[6px] ml-[9px] text-white_A700 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              Mêt
                            </Text>
                          </Row>
                        </Column>
                      </Column>
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

export default CalenderWeekPage;
