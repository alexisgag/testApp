import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img, List, Line, Button } from "components";

const CartModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-center max-w-[491px] ml-[auto] mr-[auto] mt-[1px] sm:p-[15px] md:p-[27px] p-[48px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between mt-[4px] sm:px-[0] w-[100%]">
              <Text
                className="flex-grow sm:mt-[2px] md:mt-[3px] mt-[6px] text-bluegray_800"
                as="h2"
                variant="h2"
              >
                My Cart
              </Text>
              <Img
                src="images/img_close.svg"
                className="flex-shrink-0 sm:h-[15px] md:h-[19px] h-[32px] max-w-[100%] sm:w-[14px] md:w-[18px] w-[32px]"
                alt="close"
              />
            </Row>
            <Column className="flex flex-col justify-start mb-[16px] sm:mb-[7px] md:mb-[9px] sm:mt-[21px] md:mt-[27px] mt-[48px] sm:px-[0] w-[100%]">
              <List
                className="sm:gap-[28px] md:gap-[36px] gap-[64px] grid min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle.png"
                    className="max-w-[100%] w-[28%]"
                    alt="Rectangle"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Column className="flex flex-col justify-start pt-[2px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Polo Shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                          alt="minus"
                        />
                      </Row>
                      <Text
                        className="font-normal mt-[15px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="minus One"
                        />
                      </Button>
                      <Text
                        className="font-medium md:ml-[11px] ml-[20px] sm:ml-[8px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center md:ml-[11px] ml-[21px] sm:ml-[9px] sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="close One"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[27px] w-[100%]">
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
                <Line className="self-center w-[100%] h-[1px] bg-indigo_51" />
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_group13366.png"
                    className="max-w-[100%] w-[28%]"
                    alt="Rectangle One"
                  />
                  <Column className="flex flex-col justify-start sm:mx-[0] pb-[4px] sm:px-[0] sm:w-[100%] w-[67%]">
                    <Column className="flex flex-col justify-start pt-[2px] w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                        <Text
                          className="flex-grow font-bold text-bluegray_900"
                          as="h4"
                          variant="h4"
                        >
                          Basic T-shirt
                        </Text>
                        <Img
                          src="images/img_minus.svg"
                          className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                          alt="minus One"
                        />
                      </Row>
                      <Text
                        className="font-normal mt-[15px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Color: Grey, S
                      </Text>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[10px] md:mt-[13px] mt-[24px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_minus.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="minus One One"
                        />
                      </Button>
                      <Text
                        className="font-medium md:ml-[11px] ml-[20px] sm:ml-[8px] text-bluegray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        1
                      </Text>
                      <Button
                        className="flex sm:h-[15px] md:h-[19px] h-[32px] items-center justify-center md:ml-[11px] ml-[21px] sm:ml-[9px] sm:w-[14px] md:w-[18px] w-[32px]"
                        size="mdIcn"
                        variant="icbOutlineIndigo51"
                      >
                        <Img
                          src="images/img_close.svg"
                          className="h-[20px] sm:h-[9px] md:h-[12px] flex items-center justify-center"
                          alt="close Two"
                        />
                      </Button>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[11px] md:mt-[15px] mt-[27px] w-[100%]">
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
              </List>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[28px] md:mt-[36px] mt-[64px] pl-[1px] pt-[1px] w-[100%]">
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
                  $240.0
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
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
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[65%]">
                <Img
                  src="images/img_computer_1.svg"
                  className="sm:h-[11px] md:h-[14px] h-[24px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[24px]"
                  alt="computer"
                />
                <Column className="flex flex-col md:ml-[13px] ml-[24px] sm:mx-[0] md:pr-[2px] pr-[5px] md:pt-[2px] sm:pt-[2px] pt-[5px] sm:px-[0] sm:w-[100%] w-[82%]">
                  <Text
                    className="font-bold text-bluegray_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Free nationwide shipping
                  </Text>
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-bluegray_900 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    (For order begin $100.0)
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartModal;
