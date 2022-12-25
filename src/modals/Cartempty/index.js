import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Text, Img } from "components";

const CartemptyModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[29%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[491px] ml-[auto] mr-[auto] sm:p-[15px] md:p-[27px] p-[48px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
            <Img
              src="images/img_20.svg"
              className="max-w-[100%] ml-[119px] sm:ml-[52px] md:ml-[67px] sm:mt-[33px] md:mt-[43px] mt-[77px] sm:w-[100%] w-[51%]"
              alt="Twenty"
            />
            <Text
              className="font-normal sm:mb-[40px] md:mb-[52px] mb-[92px] ml-[127px] sm:ml-[55px] md:ml-[72px] sm:mt-[19px] md:mt-[25px] mt-[44px] not-italic text-bluegray_400 w-[auto]"
              as="h5"
              variant="h5"
            >
              No item. Add more
            </Text>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default CartemptyModal;
