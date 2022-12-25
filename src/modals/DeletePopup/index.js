import React from "react";
import ModalProvider from "react-modal";

import { Column, Img, Text, Row, Button } from "components";

const DeletePopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[478px] ml-[auto] mr-[auto] mt-[1px] sm:pl-[15px] pl-[4px] sm:pr-[15px] py-[4px] rounded-radius4 shadow-bs1 w-[100%]">
            <Img
              src="images/img_xcircle.svg"
              className="sm:h-[22px] md:h-[28px] h-[40px] max-w-[100%] sm:ml-[231px] md:ml-[298px] ml-[434px] sm:w-[21px] md:w-[27px] w-[40px]"
              alt="xcircle"
            />
            <Img
              src="images/img_12.svg"
              className="max-w-[100%] md:ml-[102px] ml-[149px] sm:ml-[79px] sm:mt-[10px] md:mt-[13px] mt-[20px] w-[37%]"
              alt="Twelve"
            />
            <Column className="flex flex-col items-center justify-start md:ml-[48px] ml-[71px] sm:mt-[30px] md:mt-[39px] mt-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
              <Text className="text-bluegray_800 w-[auto]" as="h2" variant="h2">
                Are you sure to delete item?
              </Text>
              <Text
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                This item will be delete from your cart
              </Text>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mb-[14px] md:mb-[19px] mb-[28px] md:ml-[19px] ml-[28px] md:mr-[22px] mr-[32px] sm:mt-[25px] md:mt-[33px] mt-[48px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
              <Button
                className="cursor-pointer font-bold min-w-[49%] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder28"
                size="xl"
                variant="FillRed600"
              >
                Yes, Delete item
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[49%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-bluegray_800 text-center w-[max-content]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillGray51"
              >
                Cancel
              </Button>
            </Row>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DeletePopupModal;
