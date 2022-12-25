import React from "react";

import { Column, Row, Img, Text, Line, Input, Stack, Button } from "components";
import Sidebar3 from "components/Sidebar3";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const CheckoutOnePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar3 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 sm:h-[528px] md:h-[682px] h-[990px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mb-[4px] md:mb-[5px] mb-[8px] mt-[14px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[99%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Checkout
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Shop Central/
                    </span>
                    <span className="text-bluegray_800 text-[16px]"> </span>
                    <span className="text-bluegray_400 text-[16px]">
                      Product detail/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Checkout
                    </span>
                  </Text>
                </Row>
                <Stack className="h-[802px] sm:mt-[19px] md:mt-[24px] mt-[36px] relative w-[100%]">
                  <Column className="absolute bottom-[0] flex flex-col justify-start left-[5%] sm:mx-[0] pr-[4px] pt-[4px] sm:px-[0] sm:w-[100%] w-[15%]">
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
                  <Column className="absolute bg-white_A700 flex flex-col items-center justify-start p-[111px] sm:p-[15px] md:p-[76px] rounded-radius4 shadow-bs w-[100%]">
                    <Img
                      src="images/img_group18037.svg"
                      className="max-w-[100%] w-[28%]"
                      alt="Group18037"
                    />
                    <Column className="flex flex-col items-center justify-start mb-[143px] sm:mb-[76px] md:mb-[98px] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="sm:ml-[25px] md:ml-[33px] ml-[48px] text-bluegray_900 w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          Congratulate! Order successfully
                        </Text>
                        <Text
                          className="font-normal leading-[22.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-bluegray_900 text-center w-[100%]"
                          as="h6"
                          variant="h6"
                        >
                          Your order receipt has been sent to your mail:
                          sambrown@gmail.com. Please check your mail
                        </Text>
                      </Column>
                      <Button
                        className="cursor-pointer font-bold min-w-[41%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="CircleBorder24"
                        size="xl"
                        variant="FillDeeporange300"
                      >
                        Review product
                      </Button>
                    </Column>
                  </Column>
                </Stack>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default CheckoutOnePage;
