import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, Img, Row, Button, Line, Stack } from "components";

const DashboardRechargemoneyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[53%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[763px] ml-[auto] mr-[auto] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:p-[15px] md:p-[19px] p-[28px] sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs1 w-[100%]">
            <Text
              className="mt-[4px] text-bluegray_800 w-[auto]"
              as="h2"
              variant="h2"
            >
              Pick a wallet
            </Text>
            <Input
              className="font-medium p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
              wrapClassName="flex md:mt-[22px] mt-[32px] sm:mt-[17px] sm:mx-[0] sm:w-[100%] w-[99%]"
              name="Textinput"
              placeholder="0.0"
              prefix={
                <Img
                  src="images/img_music.svg"
                  className="ml-[1px] mr-[16px] sm:mr-[8px] md:mr-[11px] my-[auto]"
                  alt="music"
                />
              }
              shape="RoundedBorder4"
              size="lg"
              variant="OutlineIndigo51"
            ></Input>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
              <Button
                className="cursor-pointer font-semibold min-w-[22%] text-[14px] text-bluegray_800 text-center w-[max-content]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillGray51"
              >
                200.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[22%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-bluegray_800 text-center w-[max-content]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillGray51"
              >
                500.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[24%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-bluegray_800 text-center w-[max-content]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillGray51"
              >
                1.000.000đ
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[24%] sm:ml-[10px] md:ml-[13px] ml-[20px] text-[14px] text-bluegray_800 text-center w-[max-content]"
                shape="RoundedBorder4"
                size="xl"
                variant="FillGray51"
              >
                2.000.000đ
              </Button>
            </Row>
            <Line className="bg-indigo_51 h-[1px] sm:mt-[17px] md:mt-[22px] mt-[32px] sm:w-[100%] w-[99%]" />
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
              <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Available Wallet
                </Text>
                <Input
                  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="flex md:mt-[13px] mt-[19px] sm:mt-[10px] w-[100%]"
                  name="WalletOptions"
                  placeholder="Torus"
                  prefix={
                    <Img
                      src="images/img_bookmark_32X32.svg"
                      className="ml-[7px] mr-[10px] sm:mr-[5px] sm:ml-[3px] md:mr-[6px] md:ml-[4px] my-[auto]"
                      alt="bookmark"
                    />
                  }
                  shape="RoundedBorder4"
                  size="2xl"
                  variant="OutlineIndigo51_1"
                ></Input>
                <Row className="bg-gray_51 border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] sm:p-[15px] p-[16px] rounded-radius4 w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_metamaskicon0.png"
                      className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] rounded-radius5 sm:w-[17px] md:w-[22px] w-[32px]"
                      alt="MetaMaskIconZero"
                    />
                    <Text
                      className="flex-grow font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] text-bluegray_800"
                      as="h5"
                      variant="h5"
                    >
                      Metamask
                    </Text>
                  </Row>
                  <Img
                    src="images/img_arrowright_bluegray_900.svg"
                    className="sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="arrowright"
                  />
                </Row>
                <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius4 w-[100%]">
                  <Stack className="h-[32px] p-[2px] relative sm:w-[17px] md:w-[22px] w-[32px]">
                    <Img
                      src="images/img_portisicon.png"
                      className="absolute h-[26px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[13px] md:w-[17px] w-[26px]"
                      alt="PortisIcon"
                    />
                  </Stack>
                  <Text
                    className="font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] text-bluegray_800 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Portis
                  </Text>
                </Row>
                <Row className="border border-indigo_51 border-solid flex flex-row md:flex-wrap sm:flex-wrap items-center md:mt-[11px] mt-[16px] sm:mt-[8px] md:p-[11px] p-[16px] sm:px-[15px] sm:py-[8px] rounded-radius4 w-[100%]">
                  <Img
                    src="images/img_logofortmati.png"
                    className="flex-shrink-0 sm:h-[18px] md:h-[23px] h-[32px] max-w-[100%] sm:w-[17px] md:w-[22px] w-[32px]"
                    alt="LogoFortmati"
                  />
                  <Text
                    className="flex-grow font-semibold ml-[10px] sm:ml-[5px] md:ml-[6px] text-bluegray_800"
                    as="h5"
                    variant="h5"
                  >
                    Fortmatic
                  </Text>
                </Row>
              </Column>
              <Line className="bg-indigo_51 sm:h-[184px] md:h-[237px] h-[344px] sm:ml-[17px] md:ml-[22px] ml-[32px] w-[1px]" />
              <Column className="flex flex-col items-center md:ml-[21px] ml-[31px] sm:mx-[0] sm:px-[0] w-[1%] sm:w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between pb-[3px] w-[100%]">
                  <div className="mt-[4px] overflow-x-auto w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Text
                        className="font-medium text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        QR Code
                      </Text>
                      <Text
                        className="font-normal sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-bluegray_400 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Scan this QR code{" "}
                      </Text>
                    </Column>
                  </div>
                  <Column className="flex flex-col items-center justify-start py-[2px] w-[100%]">
                    <Row
                      className="bg-cover bg-no-repeat flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end pl-[2px] py-[2px] w-[100%]"
                      style={{
                        backgroundImage:
                          "url('images/img_frame_indigo_400.svg')",
                      }}
                    >
                      <Text
                        className="font-medium text-indigo_400 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Refresh
                      </Text>
                    </Row>
                  </Column>
                </Row>
                <Img
                  src="images/img_barcodeqr1.svg"
                  className="max-w-[100%] sm:mt-[10px] md:mt-[13px] mt-[19px] w-[100%]"
                  alt="barcodeqrOne"
                />
              </Column>
            </Row>
            <Button
              className="cursor-pointer font-bold mb-[4px] min-w-[99%] sm:mt-[17px] md:mt-[22px] mt-[32px] text-[14px] text-center text-white_A700 w-[max-content]"
              shape="CircleBorder28"
              size="2xl"
              variant="FillDeeporange300"
            >
              Pay now
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardRechargemoneyModal;
