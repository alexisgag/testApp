import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Stack, Img, Text, Button } from "components";

const NoPromotionPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[478px] ml-[auto] mr-[auto] mt-[1px] sm:pb-[15px] md:pb-[22px] pb-[32px] sm:pl-[15px] md:pl-[22px] pl-[32px] sm:pr-[15px] rounded-radius4 shadow-bs1 w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
              <Stack className="bg-white_A700 h-[298px] sm:p-[15px] md:p-[32px] p-[47px] relative sm:w-[158px] md:w-[205px] w-[298px]">
                <Img
                  src="images/img_group_bluegray_900.svg"
                  className="absolute h-[194px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[49%]"
                  alt="Group"
                />
              </Stack>
              <Img
                src="images/img_xcircle.svg"
                className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[50px] mt-[4px] sm:w-[21px] md:w-[27px] w-[40px]"
                alt="xcircle"
              />
            </Row>
            <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[55%]">
              <Text className="text-bluegray_800 w-[auto]" as="h2" variant="h2">
                No promotion
              </Text>
              <Text
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Follow us to review lattest promotion
              </Text>
            </Column>
            <Button
              className="cursor-pointer font-bold min-w-[45%] sm:mt-[25px] md:mt-[33px] mt-[48px] text-[14px] text-center text-white_A700 w-[max-content]"
              shape="CircleBorder28"
              size="2xl"
              variant="FillDeeporange300"
            >
              Yes, I understand
            </Button>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default NoPromotionPopupModal;
