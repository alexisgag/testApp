import React from "react";
import ModalProvider from "react-modal";

import { Column, Text, Stack, Img, Input } from "components";

const DashboardSubcribleModal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[34%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-bluegray_900_97 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Column className="bg-white_A700 flex flex-col justify-start max-w-[478px] ml-[auto] mr-[auto] sm:mt-[34px] md:mt-[44px] mt-[65px] sm:p-[15px] md:p-[22px] p-[32px] sm:pl-[15px] sm:pr-[15px] rounded-radius4 shadow-bs1 w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
              <Text className="text-bluegray_800 w-[auto]" as="h2" variant="h2">
                Subcrible
              </Text>
              <Text
                className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Subcribe our newletter and get notification to stay update
              </Text>
            </Column>
            <Column className="flex flex-col justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:px-[0] w-[100%]">
              <Text
                className="font-medium text-bluegray_800 w-[auto]"
                as="h6"
                variant="h6"
              >
                Email
              </Text>
              <Stack className="h-[56px] mt-[12px] sm:mt-[6px] md:mt-[8px] relative w-[100%]">
                <Img
                  src="images/img_cursor.svg"
                  className="absolute h-[20px] inset-y-[0] max-w-[100%] my-[auto] right-[5%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="cursor"
                />
                <Input
                  className="font-medium p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
                  wrapClassName="absolute flex w-[100%]"
                  type="email"
                  name="email One"
                  placeholder="Ackermanlhn@gmail.com"
                  prefix={
                    <Img
                      src="images/img_mail.svg"
                      className="ml-[4px] mr-[16px] sm:mr-[8px] md:mr-[11px] left-[1%] right-[4%] absolute my-[auto]"
                      alt="mail"
                    />
                  }
                  shape="RoundedBorder4"
                  size="xl"
                  variant="OutlineIndigo51"
                ></Input>
              </Stack>
            </Column>
          </Column>
        </div>
      </ModalProvider>
    </>
  );
};

export default DashboardSubcribleModal;
