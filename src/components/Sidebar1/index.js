import React from "react";

import { Column, Img, Row, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="">
          <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[32px] w-[100%]">
            <Img
              src="images/img_logo.svg"
              className="max-w-[100%] mt-[4px] sm:w-[100%] w-[50%]"
              alt="Logo"
            />
            <Column className="flex flex-col justify-start sm:mb-[222px] md:mb-[287px] mb-[418px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[88%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                <Img
                  src="images/img_grid_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="grid"
                />
                <Text className="flex-grow font-normal font-poppins mb-[3px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-[14px] text-bluegray_400">
                  Dashboard
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                <Img
                  src="images/img_user_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="user"
                />
                <Text className="flex-grow font-normal font-poppins mb-[2px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] not-italic text-[14px] text-bluegray_400">
                  Customer
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[64%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="sort"
                  />
                  <Text className="flex-grow font-normal font-poppins md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[6px] not-italic text-[14px] text-bluegray_400">
                    Message
                  </Text>
                </Row>
                <Text className="bg-red_600 flex font-bold font-poppins items-center sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-[12px] text-white_A700 w-[24px]">
                  3
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] pr-[1px] sm:px-[0] py-[1px] sm:w-[100%] w-[39%]">
                <Img
                  src="images/img_folder_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="folder"
                />
                <Text className="flex-grow font-normal font-poppins mb-[3px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] not-italic text-[14px] text-bluegray_800">
                  File
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Img
                  src="images/img_calendar.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="calendar"
                />
                <Text className="flex-grow font-normal font-poppins mb-[2px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] not-italic text-[14px] text-bluegray_400">
                  Calender
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                <Img
                  src="images/img_trash.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="trash"
                />
                <Text className="flex-grow font-normal font-poppins md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] not-italic text-[14px] text-bluegray_400">
                  Shop
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[44%]">
                <Img
                  src="images/img_mail_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="mail"
                />
                <Text className="flex-grow font-normal font-poppins mb-[2px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] not-italic text-[14px] text-bluegray_400">
                  Cart
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Column className="bg-white_A700 flex flex-col sm:h-[14px] md:h-[18px] h-[26px] items-center justify-start px-[3px] sm:w-[13px] md:w-[17px] w-[26px]">
                  <div className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] rounded-radius50 sm:w-[10px] md:w-[13px] w-[20px]"></div>
                </Column>
                <Text className="font-normal font-poppins mb-[2px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] not-italic text-[14px] text-bluegray_400 w-[auto]">
                  Settings
                </Text>
              </Row>
            </Column>
          </Column>
        </div>
      </aside>
    </>
  );
};

export default Sidebar1;
