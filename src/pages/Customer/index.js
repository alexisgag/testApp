import React from "react";

import {
  Column,
  Row,
  Text,
  Input,
  Img,
  Stack,
  CheckBox,
  Slider,
  List,
  Button,
} from "components";
import Header1 from "components/Header1";
import { CloseSVG } from "../../assets/images/index.js";

const CustomerPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <Column className="flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Column className="bg-white_A700 flex flex-col items-center justify-start w-[100%]">
          <Column className="bg-white_A700 flex flex-col justify-start sm:pl-[15px] md:pl-[167px] pl-[243px] w-[100%]">
            <Header1 className="bg-white_A700 max-w-[1197px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
            <Column className="bg-gray_51 flex flex-col font-poppins justify-end max-w-[1197px] ml-[auto] mr-[auto] md:p-[15px] sm:p-[15px] p-[23px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Text
                className="md:mt-[10px] mt-[15px] sm:mt-[7px] text-bluegray_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Customer
              </Text>
              <Stack className="bg-white_A700 font-inter h-[810px] mb-[1px] sm:mt-[19px] md:mt-[25px] mt-[37px] sm:pr-[15px] md:pr-[22px] pr-[32px] relative rounded-radius4 shadow-bs w-[100%]">
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between left-[3%] sm:mx-[0] sm:px-[0] top-[4%] sm:w-[100%] w-[91%]">
                  <Text
                    className="flex-grow font-bold mb-[1px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-bluegray_900"
                    as="h4"
                    variant="h4"
                  >
                    Customer List
                  </Text>
                  <Img
                    src="images/img_search_bluegray_900.svg"
                    className="flex-shrink-0 sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:w-[12px] md:w-[16px] w-[24px]"
                    alt="search"
                  />
                </Row>
                <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] pr-[2px] sm:px-[0] py-[2px] top-[12%] sm:w-[100%] w-[91%]">
                  <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                    <CheckBox
                      className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                      inputClassName="mr-[5px]"
                      name="file"
                      label=""
                    ></CheckBox>
                  </Column>
                  <Text
                    className="font-normal sm:ml-[29px] md:ml-[37px] ml-[55px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Customer
                  </Text>
                  <Text
                    className="font-normal ml-[104px] sm:ml-[55px] md:ml-[71px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Address
                  </Text>
                  <Text
                    className="font-normal sm:ml-[104px] md:ml-[135px] ml-[197px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Phone
                  </Text>
                  <Text
                    className="font-normal md:ml-[106px] ml-[155px] sm:ml-[82px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Order No.
                  </Text>
                  <Text
                    className="font-normal sm:ml-[42px] md:ml-[55px] ml-[80px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Status
                  </Text>
                </Row>
                <Slider
                  slidesToShow={3}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setsliderState(e?.item);
                  }}
                  activeSlideCSS="scale-[1.00]"
                  ref={sliderRef}
                  className="w-[100%]"
                  items={[...Array(9)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <List
                        className="grid min-h-[auto] w-[100%]"
                        orientation="vertical"
                      >
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file One"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                            <Img
                              src="images/img_robototoyfacefi.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="RobotoToyFaceFi"
                            />
                            <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] pr-[3px] sm:px-[0] sm:w-[100%] w-[52%]">
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Jack
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium ml-[103px] sm:ml-[54px] md:ml-[70px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2371 Reppert Coal Road
                          </Text>
                          <Text
                            className="font-medium sm:ml-[39px] md:ml-[51px] ml-[75px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            601-540-6298
                          </Text>
                          <Text
                            className="font-medium sm:ml-[47px] md:ml-[61px] ml-[89px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12931
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[52px] md:ml-[68px] ml-[99px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Two"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy"
                            />
                            <Column className="flex flex-col items-center justify-start ml-[12px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Fort Myers
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[31px] md:ml-[40px] ml-[59px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            927 Sunburst Drive
                          </Text>
                          <Text
                            className="font-medium ml-[112px] sm:ml-[59px] md:ml-[77px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            239-346-5244
                          </Text>
                          <Text
                            className="font-medium sm:ml-[45px] md:ml-[59px] ml-[86px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12932
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user One"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Three"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit"
                            />
                            <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:w-[100%] w-[69%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Benjamin
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1671 Carriage Court
                          </Text>
                          <Text
                            className="font-medium ml-[107px] sm:ml-[56px] md:ml-[73px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            760-390-1331
                          </Text>
                          <Text
                            className="font-medium sm:ml-[49px] md:ml-[64px] ml-[93px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12933
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Two"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Four"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy One"
                            />
                            <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] md:pr-[3px] pr-[5px] sm:px-[0] sm:w-[100%] w-[69%]">
                              <Text
                                className="font-medium text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Flanagan
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[34px] md:ml-[44px] ml-[65px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            121 Courtright Street
                          </Text>
                          <Text
                            className="font-medium ml-[100px] sm:ml-[53px] md:ml-[68px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            701-565-0439
                          </Text>
                          <Text
                            className="font-medium sm:ml-[47px] md:ml-[61px] ml-[89px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12934
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillRed600"
                          >
                            Error
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Three"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Five"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit One"
                            />
                            <Column className="flex flex-col items-center ml-[12px] md:ml-[8px] sm:mx-[0] pr-[2px] sm:px-[0] sm:w-[100%] w-[65%]">
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Nicoletti
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[40px] md:ml-[52px] ml-[76px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            1060 Stark Hollow Road
                          </Text>
                          <Text
                            className="font-medium sm:ml-[43px] md:ml-[55px] ml-[81px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            {" "}
                            970-757-0036
                          </Text>
                          <Text
                            className="font-medium sm:ml-[45px] md:ml-[58px] ml-[85px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12935
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Four"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Six"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy Two"
                            />
                            <Column className="flex flex-col items-center ml-[12px] md:ml-[8px] sm:mx-[0] pr-[2px] sm:px-[0] sm:w-[100%] w-[60%]">
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Robert
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[60px] ml-[88px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            424 Charter Street
                          </Text>
                          <Text
                            className="font-medium ml-[115px] sm:ml-[61px] md:ml-[79px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            913-207-2627
                          </Text>
                          <Text
                            className="font-medium sm:ml-[49px] md:ml-[63px] ml-[92px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12936
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Five"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Seven"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit Two"
                            />
                            <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] pr-[3px] sm:px-[0] sm:w-[100%] w-[61%]">
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Rankin
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            60 Corpening Drive
                          </Text>
                          <Text
                            className="font-medium ml-[111px] sm:ml-[59px] md:ml-[76px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            248-930-4978
                          </Text>
                          <Text
                            className="font-medium sm:ml-[46px] md:ml-[59px] ml-[87px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12937
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[51px] md:ml-[66px] ml-[96px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillAmber300"
                          >
                            Pending
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Six"
                          />
                        </Row>
                        <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Eight"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                            <Img
                              src="images/img_fidenza978toy.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="Fidenza978Toy Three"
                            />
                            <Column className="flex flex-col ml-[12px] md:ml-[8px] sm:mx-[0] pr-[3px] sm:px-[0] sm:w-[100%] w-[73%]">
                              <Text
                                className="font-medium mt-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Clementine
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[25px] md:ml-[33px] ml-[48px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            4337 Fleming Way
                          </Text>
                          <Text
                            className="font-medium ml-[118px] sm:ml-[62px] md:ml-[81px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            757-735-4769
                          </Text>
                          <Text
                            className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12938
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Seven"
                          />
                        </Row>
                        <Row className="bg-gray_51 flex flex-row md:flex-wrap sm:flex-wrap items-center my-[0] md:p-[11px] sm:p-[15px] p-[17px] w-[100%]">
                          <Column className="flex flex-col sm:h-[11px] md:h-[14px] h-[20px] items-center ml-[3px] px-[1px] sm:w-[10px] md:w-[13px] w-[20px]">
                            <CheckBox
                              className="md:h-[12px] h-[16px] sm:h-[9px] mt-[1px]"
                              inputClassName="mr-[5px]"
                              name="file Nine"
                              label=""
                            ></CheckBox>
                          </Column>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[37px] ml-[55px] sm:mx-[0] sm:px-[0] w-[10%] sm:w-[100%]">
                            <Img
                              src="images/img_vangoghbyamrit.png"
                              className="sm:h-[13px] md:h-[17px] h-[24px] rounded-radius50 sm:w-[12px] md:w-[16px] w-[24px]"
                              alt="VanGoghByAmrit Three"
                            />
                            <Column className="flex flex-col items-center ml-[12px] md:ml-[8px] sm:mx-[0] pr-[2px] sm:px-[0] sm:w-[100%] w-[64%]">
                              <Text
                                className="font-medium my-[1px] text-bluegray_800 w-[auto]"
                                as="h5"
                                variant="h5"
                              >
                                Mitchell
                              </Text>
                            </Column>
                          </Row>
                          <Text
                            className="font-medium sm:ml-[42px] md:ml-[54px] ml-[79px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            2758 My Drive
                          </Text>
                          <Text
                            className="font-medium md:ml-[102px] ml-[149px] sm:ml-[79px] text-indigo_400 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            631-827-7596
                          </Text>
                          <Text
                            className="font-medium sm:ml-[48px] md:ml-[62px] ml-[91px] text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            #12939
                          </Text>
                          <Button
                            className="cursor-pointer font-medium min-w-[9%] sm:ml-[50px] md:ml-[65px] ml-[95px] text-[14px] text-center text-white_A700 w-[max-content]"
                            shape="RoundedBorder4"
                            size="sm"
                            variant="FillGreen700"
                          >
                            Paid
                          </Button>
                          <Img
                            src="images/img_user_32X32.svg"
                            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[59px] sm:w-[12px] md:w-[16px] w-[24px]"
                            alt="user Eight"
                          />
                        </Row>
                      </List>
                    </React.Fragment>
                  ))}
                  Indicator={({ isActive }) => {
                    if (isActive) {
                      return <div className="" />;
                    }
                    return <div className="" role="button" tabIndex={0} />;
                  }}
                />
                <Img
                  src="images/img_close.svg"
                  className="absolute h-[24px] max-w-[100%] right-[0] top-[4%] sm:w-[12px] md:w-[16px] w-[24px]"
                  alt="close"
                />
                <Row className="absolute bottom-[4%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[95%]">
                  <Button
                    className="cursor-pointer flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:w-[17px] md:w-[22px] w-[32px]"
                    onClick={() => sliderRef.current?.slidePrev()}
                    size="mdIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowleft_bluegray_400.svg"
                      className="h-[20px] sm:h-[11px] md:h-[14px] flex items-center justify-center"
                      alt="arrowleft"
                    />
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_900 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineBluegray900"
                  >
                    1
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    2
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    ...
                  </Button>
                  <Button
                    className="cursor-pointer font-medium sm:h-[18px] md:h-[23px] h-[32px] sm:ml-[4px] md:ml-[5px] ml-[8px] text-[14px] text-bluegray_800 text-center sm:w-[17px] md:w-[22px] w-[32px]"
                    size="md"
                    variant="OutlineIndigo51"
                  >
                    9
                  </Button>
                  <Button
                    className="cursor-pointer flex sm:h-[18px] md:h-[23px] h-[32px] items-center justify-center sm:ml-[4px] md:ml-[5px] ml-[8px] sm:w-[17px] md:w-[22px] w-[32px]"
                    onClick={() => sliderRef.current?.slideNext()}
                    size="lgIcn"
                    variant="icbOutlineIndigo51"
                  >
                    <Img
                      src="images/img_arrowright_bluegray_400.svg"
                      className="flex items-center justify-center"
                      alt="arrowright"
                    />
                  </Button>
                  <Text
                    className="font-medium sm:ml-[406px] md:ml-[525px] ml-[764px] text-bluegray_400 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    9 of 200 data
                  </Text>
                </Row>
              </Stack>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CustomerPage;
