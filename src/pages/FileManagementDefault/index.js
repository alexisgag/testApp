import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Button,
  Stack,
  Grid,
  Radio,
  List,
} from "components";
import Sidebar1 from "components/Sidebar1";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemHeading,
  AccordionItemButton,
} from "react-accessible-accordion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FileManagementDefaultPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar1 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[506px] md:h-[653px] h-[950px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col font-inter items-center max-w-[1200px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] md:mt-[10px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="text-bluegray_900 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      File Management
                    </Text>
                    <Column className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[17px] md:mt-[21px] mt-[32px] sm:p-[15px] md:p-[21px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                        <Accordion
                          preExpanded={[0]}
                          className="font-inter w-[100%]"
                        >
                          {" "}
                          {[...Array(3)].map((item, index) => (
                            <AccordionItem uuid={index} key={Math.random()}>
                              <Column className="flex flex-col justify-start w-[100%]">
                                <AccordionItemHeading className="w-full">
                                  <AccordionItemButton>
                                    <AccordionItemState>
                                      {({ expanded }) => (
                                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[51%]">
                                            <Img
                                              src="images/img_television.svg"
                                              className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                              alt="television"
                                            />
                                            <Text
                                              className="flex-grow font-medium ml-[13px] sm:ml-[6px] md:ml-[8px] text-bluegray_900"
                                              as="h5"
                                              variant="h5"
                                            >
                                              Main File
                                            </Text>
                                          </Row>
                                          {expanded && (
                                            <Img
                                              src="images/img_arrowup_24X24.svg"
                                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                              alt="arrowup"
                                            />
                                          )}
                                          {!expanded && (
                                            <Img
                                              src="images/img_arrowup_24X24.svg"
                                              className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                              alt="arrowup One"
                                            />
                                          )}
                                        </Row>
                                      )}
                                    </AccordionItemState>
                                  </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel className="w-full">
                                  <Column className="flex flex-col font-poppins justify-start md:ml-[24px] ml-[36px] sm:mt-[11px] md:mt-[14px] mt-[21px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                                    <Text
                                      className="font-normal not-italic text-bluegray_400 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="font-normal sm:mt-[10px] md:mt-[13px] mt-[20px] not-italic text-bluegray_400 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="font-normal sm:mt-[13px] md:mt-[17px] mt-[25px] not-italic text-bluegray_400 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="font-normal sm:mt-[11px] md:mt-[15px] mt-[22px] not-italic text-bluegray_400 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Empty states
                                    </Text>
                                  </Column>
                                </AccordionItemPanel>
                              </Column>
                            </AccordionItem>
                          ))}
                        </Accordion>
                        <Button
                          className="flex items-center justify-center md:mt-[16px] mt-[24px] sm:mt-[12px] text-center w-[100%]"
                          rightIcon={
                            <Img
                              src="images/img_plus_24X24.svg"
                              className="ml-[13px] sm:ml-[6px] md:ml-[8px] text-center"
                              alt="plus"
                            />
                          }
                          shape="CircleBorder24"
                          size="xl"
                          variant="FillRed54"
                        >
                          <div className="bg-transparent cursor-pointer font-bold font-poppins text-[14px] text-deep_orange_300">
                            Add new folder
                          </div>
                        </Button>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col font-inter justify-start sm:mt-[10px] md:mt-[13px] mt-[20px] md:pr-[10px] sm:pr-[15px] pr-[16px] md:py-[10px] sm:py-[15px] py-[16px] rounded-radius4 shadow-bs w-[100%]">
                    <Img
                      src="images/img_plus_1.svg"
                      className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[123px] md:ml-[160px] ml-[233px] sm:w-[12px] md:w-[16px] w-[24px]"
                      alt="plus"
                    />
                    <Stack className="h-[192px] sm:mr-[3px] md:mr-[4px] mr-[7px] mt-[1px] relative sm:w-[100%] w-[98%]">
                      <Stack className="absolute h-[126px] inset-x-[0] mx-[auto] pb-[1px] top-[0] sm:w-[100%] w-[98%]">
                        <div className="absolute overflow-x-auto w-[100%]">
                          <Stack className="h-[69px] relative w-[100%]">
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="absolute h-[69px] left-[0] max-w-[100%] w-[100%]"
                              alt="shadow"
                            />
                            <Img
                              src="images/img_shadow_69X288.png"
                              className="absolute h-[47px] max-w-[100%] right-[18%] top-[0] sm:w-[100%] w-[53%]"
                              alt="shadow One"
                            />
                          </Stack>
                        </div>
                        <Column
                          className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] right-[24%] top-[0] sm:w-[100%] w-[40%]"
                          style={{
                            backgroundImage: "url('images/img_base_81X97.png')",
                          }}
                        >
                          <Stack className="bg-deep_orange_300 h-[81px] relative w-[100%]">
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] sm:mx-[0] sm:w-[100%] w-[90%]"
                              style={{
                                backgroundImage: "url('images/img_paper.png')",
                              }}
                            >
                              <div className="bg-gray_101 sm:h-[35px] md:h-[45px] h-[65px] w-[100%]"></div>
                            </Column>
                            <Column
                              className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_specular_81X97.png')",
                              }}
                            >
                              <Stack
                                className="bg-cover bg-no-repeat h-[81px] relative w-[100%]"
                                style={{
                                  backgroundImage:
                                    "url('images/img_specular_81X97.png')",
                                }}
                              >
                                <Img
                                  src="images/img_specular_81X97.png"
                                  className="absolute h-[81px] max-w-[100%] w-[100%]"
                                  alt="specular"
                                />
                              </Stack>
                            </Column>
                          </Stack>
                        </Column>
                      </Stack>
                      <Column className="absolute bottom-[0] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="font-bold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Upgrade Features
                        </Text>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_800 text-center w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Upgrade account to access multiple features
                        </Text>
                      </Column>
                    </Stack>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:mb-[10px] mb-[16px] sm:mb-[8px] md:ml-[51px] ml-[75px] sm:mt-[23px] md:mt-[30px] mt-[44px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                      <Text
                        className="flex-grow font-bold mb-[2px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-deep_orange_300"
                        as="h6"
                        variant="h6"
                      >
                        Upgrade now
                      </Text>
                      <Img
                        src="images/img_forward.svg"
                        className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[10px] sm:ml-[5px] md:ml-[6px] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="forward"
                      />
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs sm:w-[100%] w-[50%]">
                  <Column className="flex flex-col items-center justify-start md:mb-[10px] mb-[16px] sm:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col items-center justify-start w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Main File
                          </Text>
                          <Button
                            className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center sm:ml-[173px] md:ml-[224px] ml-[326px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                            size="lgIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_search_bluegray_900.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="search"
                            />
                          </Button>
                          <Button
                            className="flex sm:h-[22px] md:h-[28px] h-[40px] items-center justify-center md:ml-[10px] ml-[16px] sm:ml-[8px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
                            size="lgIcn"
                            variant="icbFillGray51"
                          >
                            <Img
                              src="images/img_overflowmenu.svg"
                              className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                              alt="overflowmenu"
                            />
                          </Button>
                        </Row>
                        <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[26px] w-[100%]">
                          <Grid className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[100%]">
                            <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_folder_24X24.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="folder One"
                                  />
                                  <Img
                                    src="images/img_user_32X32.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="user One"
                                  />
                                </Row>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[17px] md:mt-[21px] mt-[32px] w-[100%]">
                                  <Column className="flex flex-col justify-start sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[63%]">
                                    <Text
                                      className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Product Design
                                    </Text>
                                    <Text
                                      className="font-normal mb-[1px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </Column>
                                  <Text
                                    className="font-medium mb-[4px] sm:mt-[16px] md:mt-[21px] mt-[31px] text-bluegray_400 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_folder_24X24.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="folder Two"
                                  />
                                  <Img
                                    src="images/img_user_32X32.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="user Two"
                                  />
                                </Row>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[17px] md:mt-[21px] mt-[32px] w-[100%]">
                                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[63%]">
                                    <Text
                                      className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Outsource
                                    </Text>
                                    <Text
                                      className="font-normal mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </Column>
                                  <Text
                                    className="font-medium mb-[4px] sm:mt-[16px] md:mt-[21px] mt-[31px] text-bluegray_400 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_folder_24X24.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="folder Three"
                                  />
                                  <Img
                                    src="images/img_user_32X32.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="user Three"
                                  />
                                </Row>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[17px] md:mt-[21px] mt-[32px] w-[100%]">
                                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[63%]">
                                    <Text
                                      className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Graphics
                                    </Text>
                                    <Text
                                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </Column>
                                  <Text
                                    className="font-medium mb-[4px] sm:mt-[16px] md:mt-[21px] mt-[31px] text-bluegray_400 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="bg-white_A700 border border-indigo_51 border-solid flex flex-col items-center justify-start md:p-[13px] sm:p-[15px] p-[20px] rounded-radius4 w-[100%]">
                              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                                  <Img
                                    src="images/img_folder_24X24.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="folder Four"
                                  />
                                  <Img
                                    src="images/img_user_32X32.svg"
                                    className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                    alt="user Four"
                                  />
                                </Row>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between sm:mt-[17px] md:mt-[21px] mt-[32px] w-[100%]">
                                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[63%]">
                                    <Text
                                      className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Empty States
                                    </Text>
                                    <Text
                                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                                      as="h6"
                                      variant="h6"
                                    >
                                      12 Files
                                    </Text>
                                  </Column>
                                  <Text
                                    className="font-medium mb-[4px] sm:mt-[16px] md:mt-[21px] mt-[31px] text-bluegray_400 w-[auto]"
                                    as="h6"
                                    variant="h6"
                                  >
                                    3GB
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                          </Grid>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:px-[0] w-[100%]">
                      <Column className="flex flex-col items-center justify-start w-[100%]">
                        <Column className="flex flex-col items-center justify-start w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                            <Text
                              className="font-bold text-bluegray_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              Recent files
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly sm:mx-[0] pl-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[17%]">
                              <Text
                                className="flex-grow font-medium text-bluegray_800"
                                as="h6"
                                variant="h6"
                              >
                                View all
                              </Text>
                              <Img
                                src="images/img_arrowright_bluegray_800.svg"
                                className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                                alt="arrowright"
                              />
                            </Row>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] pr-[3px] sm:px-[0] py-[3px] sm:w-[100%] w-[93%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-bluegray_400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Name
                            </Text>
                            <Text
                              className="font-normal md:ml-[100px] ml-[146px] sm:ml-[77px] my-[1px] not-italic text-bluegray_400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Date motified
                            </Text>
                            <Text
                              className="font-normal sm:ml-[44px] md:ml-[57px] ml-[83px] my-[1px] not-italic text-bluegray_400 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Size
                            </Text>
                          </Row>
                          <Column className="bg-gray_51 flex flex-col justify-start md:mt-[10px] mt-[16px] sm:mt-[8px] md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                                <Img
                                  src="images/img_file_24X24.svg"
                                  className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                  alt="file One"
                                />
                                <Text
                                  className="flex-grow font-normal ml-[14px] sm:ml-[7px] md:ml-[9px] not-italic text-bluegray_900"
                                  as="h5"
                                  variant="h5"
                                >
                                  index.html
                                </Text>
                              </Row>
                              <Text
                                className="font-normal sm:ml-[39px] md:ml-[50px] ml-[74px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="font-normal sm:ml-[28px] md:ml-[37px] ml-[54px] my-[3px] not-italic text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                09 KB
                              </Text>
                            </Row>
                          </Column>
                          <Column className="bg-white_A700 flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                              <Radio
                                value="imagepng"
                                className="font-normal not-italic text-[16px] text-bluegray_900"
                                inputClassName="mr-[5px]"
                                checked={false}
                                name="imagepng"
                                label="imagepng"
                                size="sm"
                              ></Radio>
                              <Text
                                className="font-normal sm:ml-[37px] md:ml-[48px] ml-[71px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                10.10.2021, 09:45
                              </Text>
                              <Text
                                className="font-normal sm:ml-[28px] md:ml-[37px] ml-[54px] my-[3px] not-italic text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                110 KB
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="bg-gray_51 flex flex-col justify-start md:p-[13px] sm:p-[15px] p-[20px] w-[100%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                              <Img
                                src="images/img_file_2.svg"
                                className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                                alt="file Two"
                              />
                              <Text
                                className="flex-grow font-normal ml-[14px] sm:ml-[7px] md:ml-[9px] not-italic text-bluegray_900"
                                as="h5"
                                variant="h5"
                              >
                                Document.txt
                              </Text>
                            </Row>
                            <Text
                              className="font-normal sm:ml-[26px] md:ml-[34px] ml-[50px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10.10.2021, 09:45
                            </Text>
                            <Text
                              className="font-normal sm:ml-[28px] md:ml-[37px] ml-[54px] my-[3px] not-italic text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              10 KB
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 flex flex-col font-inter justify-end sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:p-[15px] md:p-[21px] p-[31px] rounded-radius4 shadow-bs sm:w-[100%] w-[24%]">
                  <Text
                    className="font-bold ml-[1px] sm:mt-[4px] md:mt-[5px] mt-[8px] text-bluegray_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Storage
                  </Text>
                  <Stack className="h-[485px] sm:mt-[17px] md:mt-[21px] mt-[32px] relative w-[100%]">
                    <Stack className="absolute h-[190px] inset-x-[0] mx-[auto] top-[0] sm:w-[101px] md:w-[130px] w-[190px]">
                      <CircularProgressbar
                        className="absolute border-solid sm:h-[102px] md:h-[131px] h-[190px] overflow-visible w-[100%]"
                        value="16"
                        name="Group One"
                        strokeWidth={1}
                        styles={{
                          trail: { strokeWidth: 1, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(-90deg)",
                          },
                        }}
                      ></CircularProgressbar>
                      <Column className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[34%] sm:w-[100%] w-[49%]">
                        <Text
                          className="text-bluegray_800 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          25Gb
                        </Text>
                        <Text
                          className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Used of 50GB
                        </Text>
                      </Column>
                    </Stack>
                    <List
                      className="absolute bottom-[0] grid min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                        <Img
                          src="images/img_image.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="image"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Column className="flex flex-col justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[32%]">
                            <Text
                              className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Image
                            </Text>
                            <Text
                              className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </Column>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </Row>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_playcircle.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="playcircle"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[34%]">
                            <Text
                              className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Videos
                            </Text>
                            <Text
                              className="font-normal mb-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </Column>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </Row>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_music_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="music"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[41%]">
                            <Text
                              className="font-bold mt-[1px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Muscics
                            </Text>
                            <Text
                              className="font-normal mb-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </Column>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </Row>
                      </Row>
                      <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_computer_24X24.svg"
                          className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                          alt="computer"
                        />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Column className="flex flex-col justify-start sm:mx-[0] pr-[2px] sm:px-[0] py-[2px] sm:w-[100%] w-[34%]">
                            <Text
                              className="font-bold mt-[2px] text-bluegray_800 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Others
                            </Text>
                            <Text
                              className="font-normal mb-[2px] mt-[11px] sm:mt-[5px] md:mt-[7px] not-italic text-bluegray_400 w-[auto]"
                              as="h6"
                              variant="h6"
                            >
                              23 files
                            </Text>
                          </Column>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_400 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            3GB
                          </Text>
                        </Row>
                      </Row>
                    </List>
                  </Stack>
                  <Column className="border-2 border-indigo_51 border-solid flex flex-col items-center justify-start mb-[1px] sm:mt-[17px] md:mt-[21px] mt-[32px] md:p-[24px] p-[35px] sm:px-[15px] sm:py-[18px] rounded-radius4 w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                      <Img
                        src="images/img_download_24X24.svg"
                        className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                        alt="download"
                      />
                      <Text
                        className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Import file
                      </Text>
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

export default FileManagementDefaultPage;
