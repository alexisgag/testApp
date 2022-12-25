import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Input, SelectBox, Img, Row, Button } from "components";

const CreateEventPopupModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col items-center justify-start max-w-[478px] ml-[auto] mr-[auto] sm:mt-[29px] md:mt-[38px] mt-[56px] sm:p-[15px] md:p-[21px] p-[32px] sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs1 w-[100%]">
            <Column className="flex flex-col justify-end pr-[4px] sm:px-[0] py-[4px] w-[100%]">
              <Text
                className="mt-[1px] text-bluegray_800 w-[auto]"
                as="h2"
                variant="h2"
              >
                Create new event
              </Text>
              <Text
                className="font-normal sm:mt-[10px] md:mt-[13px] mt-[19px] not-italic text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Add new event in the calendar
              </Text>
            </Column>
            <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[21px] mt-[32px] pt-[4px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Event name
                </Text>
                <Input
                  className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                  type="text"
                  name="Group13362"
                  placeholder="Type name"
                  shape="RoundedBorder4"
                  size="xl"
                  variant="OutlineIndigo51"
                ></Input>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[17px] mt-[25px] w-[100%]">
                <Text
                  className="font-medium text-bluegray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Select category
                </Text>
                <SelectBox
                  className="font-semibold sm:mt-[4px] md:mt-[5px] mt-[8px] text-[16px] text-bluegray_800 w-[100%]"
                  placeholderClassName="text-bluegray_800"
                  name="Group13363"
                  placeholder="Data project"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_900.svg"
                      className="w-[20px] h-[20px] mr-[20px] sm:mr-[10px] sm:h-[11px] sm:w-[10px] md:mr-[13px] md:h-[14px] md:w-[13px] max-w-[100%]"
                      alt="arrow_down"
                    />
                  }
                  shape="RoundedBorder4"
                  variant="OutlineIndigo51_1"
                ></SelectBox>
              </Column>
            </Column>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[21px] mt-[32px] sm:px-[0] w-[100%]">
              <Button
                className="cursor-pointer font-bold min-w-[49%] text-[14px] text-center text-white_A700 w-[max-content]"
                shape="CircleBorder28"
                size="2xl"
                variant="FillDeeporange300"
              >
                Create now
              </Button>
              <Button
                className="cursor-pointer font-semibold min-w-[49%] md:ml-[10px] ml-[16px] sm:ml-[8px] text-[14px] text-bluegray_800 text-center w-[max-content]"
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

export default CreateEventPopupModal;
