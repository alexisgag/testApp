import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  Grid,
  Switch,
  SelectBox,
  Stack,
  Button,
} from "components";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const SettingsPage = () => {
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
                <Column className="flex flex-col justify-start max-w-[155px] sm:mb-[179px] md:mb-[232px] mb-[338px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
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
                      className="font-medium mb-[2px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_800 w-[auto]"
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
          <Line className="bg-indigo_51 sm:h-[464px] md:h-[599px] h-[870px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1199px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mb-[1px] md:mt-[11px] mt-[16px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                  <Text
                    className="text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Settings
                  </Text>
                  <Column className="bg-white_A700 flex flex-col font-inter justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Text
                        className="font-bold text-bluegray_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Account info.
                      </Text>
                      <Text
                        className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-bluegray_900 text-[14px] font-inter">
                          Verify your information to proctect your account.{" "}
                        </span>
                        <span className="text-deep_orange_300 text-[14px] font-inter font-semibold">
                          Verify now
                        </span>
                      </Text>
                    </Column>
                    <Grid className="sm:gap-[10px] md:gap-[13px] gap-[20px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Username
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="Group13356"
                          placeholder="Sam"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Email address
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="email"
                          placeholder="sambrown@gmail.com"
                          shape="RoundedBorder4"
                          size="xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          First name
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="Group13358"
                          placeholder="Sam"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="flex flex-col justify-start sm:px-[0] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Last name
                        </Text>
                        <Input
                          className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="Group13359"
                          placeholder="Brown"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                    </Grid>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-inter items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                    <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[49%]">
                      <Column className="flex flex-col items-center justify-end sm:mx-[0] pr-[4px] sm:px-[0] py-[4px] sm:w-[100%] w-[48%]">
                        <Text
                          className="font-bold mt-[1px] text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Password Reset
                        </Text>
                      </Column>
                      <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] w-[100%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Current password
                          </Text>
                          <Input
                            className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                            wrapClassName="md:mt-[5px] mt-[8px] sm:mt-[4px] w-[100%]"
                            type="password"
                            name="password"
                            placeholder="************"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineIndigo51"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            New password
                          </Text>
                          <Input
                            className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                            wrapClassName="md:mt-[5px] mt-[8px] sm:mt-[4px] w-[100%]"
                            type="password"
                            name="password One"
                            placeholder="************"
                            shape="RoundedBorder4"
                            size="md"
                            variant="OutlineIndigo51"
                          ></Input>
                        </Column>
                      </Column>
                    </Column>
                    <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[49%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] md:pr-[3px] pr-[5px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[0] sm:w-[100%] w-[99%]">
                        <Text
                          className="font-bold text-bluegray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Notifications
                        </Text>
                        <Text
                          className="font-normal md:mt-[11px] mt-[17px] sm:mt-[9px] not-italic text-bluegray_400 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Open notification to receive our news fastly
                        </Text>
                      </Column>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[22px] md:mt-[28px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                        <Switch value={true} className="w-[19%]" />
                        <Text
                          className="font-normal sm:ml-[12px] md:ml-[16px] ml-[24px] not-italic text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send notification to mail
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                        <Switch value={true} className="w-[21%]" />
                        <Text
                          className="font-normal mb-[1px] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Send new promotion
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mb-[10px] md:mb-[13px] mb-[20px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Switch value={false} className="w-[23%]" />
                        <Text
                          className="font-normal mb-[1px] sm:ml-[12px] md:ml-[16px] ml-[24px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Notice my balance
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
                <Column className="bg-white_A700 flex flex-col font-inter justify-start sm:mt-[29px] md:mt-[38px] mt-[56px] sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[33%]">
                  <Column className="flex flex-col justify-end sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[28%]">
                    <Text
                      className="font-bold sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Payment
                    </Text>
                  </Column>
                  <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:px-[0] w-[100%]">
                    <SelectBox
                      className="font-semibold text-[16px] text-bluegray_800 w-[100%]"
                      placeholderClassName="text-bluegray_800"
                      name="group One"
                      placeholder="Paypal"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown_bluegray_900.svg"
                          className="w-[20px] h-[20px] mr-[0] pl-[35px] pr-[20px] sm:h-[11px] sm:w-[10px] sm:p-[15px] md:pr-[13px] md:pl-[24px] md:h-[14px] md:w-[13px] border-indigo_51 border border-solid max-w-[100%] rounded-radius4"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                    <Row className="bg-indigo_400 flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[24px] sm:pt-[3px] md:pt-[4px] pt-[6px] rounded-radius4 w-[100%]">
                      <Stack className="h-[83px] sm:mt-[50px] md:mt-[64px] mt-[94px] relative sm:w-[100%] w-[60%]">
                        <Text
                          className="absolute bottom-[33%] font-medium right-[0] text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          1234 **** 4567 8901{" "}
                        </Text>
                        <Img
                          src="images/img_group_83X96.png"
                          className="absolute h-[83px] max-w-[100%] rounded-radius4 sm:w-[100%] w-[54%]"
                          alt="Group Two"
                        />
                      </Stack>
                      <Stack className="h-[161px] md:mb-[11px] mb-[16px] sm:mb-[8px] relative w-[26%]">
                        <Img
                          src="images/img_group_12X40.svg"
                          className="absolute h-[12px] inset-x-[0] max-w-[100%] mx-[auto] rounded-radius4 top-[8%] sm:w-[100%] w-[51%]"
                          alt="Group Three"
                        />
                        <Img
                          src="images/img_group_161X77.png"
                          className="absolute h-[161px] max-w-[100%] rounded-radius4 w-[100%]"
                          alt="Group Four"
                        />
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[37px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-medium text-bluegray_800 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Type your email
                    </Text>
                    <Input
                      className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                      wrapClassName="md:mt-[5px] mt-[8px] sm:mt-[4px] w-[100%]"
                      type="email"
                      name="email One"
                      placeholder="Ackermanlhn@gmail.com"
                      shape="RoundedBorder4"
                      size="xl"
                      variant="OutlineIndigo51"
                    ></Input>
                  </Column>
                  <Text
                    className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] md:ml-[30px] ml-[45px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] not-italic text-bluegray_400 text-center sm:w-[100%] w-[70%]"
                    as="h6"
                    variant="h6"
                  >
                    Please make sure that all your information precisely
                  </Text>
                  <Button
                    className="cursor-pointer font-bold min-w-[100%] sm:mt-[31px] md:mt-[41px] mt-[60px] text-[14px] text-center text-white_A700 w-[max-content]"
                    shape="CircleBorder24"
                    size="xl"
                    variant="FillDeeporange300"
                  >
                    Save change
                  </Button>
                </Column>
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default SettingsPage;
