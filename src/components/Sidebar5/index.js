import React from "react";

import { Column, Img, Row, Text } from "components";

const Sidebar5 = (props) => {
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
            <Column className="flex flex-col justify-start mb-[1447px] sm:mb-[770px] md:mb-[995px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] pt-[1px] sm:px-[0] sm:w-[100%] w-[88%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                <Img
                  src="images/img_grid_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="grid"
                />
                <Text className="flex-grow font-inter font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] my-[3px] text-[14px] text-bluegray_400">
                  Dashboard
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                <Img
                  src="images/img_user_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="user"
                />
                <Text className="flex-grow font-inter font-medium mb-[3px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] text-[14px] text-bluegray_400">
                  Customer
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[17px] md:mt-[22px] mt-[32px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mx-[0] my-[1px] sm:px-[0] sm:w-[100%] w-[63%]">
                  <Img
                    src="images/img_sort.svg"
                    className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] mb-[2px] sm:w-[10px] md:w-[13px] w-[20px]"
                    alt="sort"
                  />
                  <Text className="flex-grow font-inter font-medium md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-bluegray_400">
                    Message
                  </Text>
                </Row>
                <Text className="bg-red_600 flex font-bold font-inter items-center sm:px-[4px] md:px-[5px] px-[8px] rounded-radius50 text-[12px] text-white_A700 w-[24px]">
                  3
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                <Img
                  src="images/img_folder.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="folder"
                />
                <Text className="flex-grow font-inter font-medium mb-[3px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] text-[14px] text-bluegray_400">
                  File
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[17px] md:mt-[22px] mt-[33px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                <Img
                  src="images/img_calendar.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="calendar"
                />
                <Text className="flex-grow font-inter font-medium mb-[2px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[3px] text-[14px] text-bluegray_400">
                  Calender
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[18px] md:mt-[23px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[46%]">
                <Img
                  src="images/img_trash_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="trash"
                />
                <Text className="flex-grow font-inter font-medium mb-[1px] md:ml-[11px] ml-[16px] sm:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[5px] text-[14px] text-bluegray_800">
                  Shop
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[18px] md:mt-[24px] mt-[35px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                <Img
                  src="images/img_mail_20X20.svg"
                  className="flex-shrink-0 sm:h-[11px] md:h-[14px] h-[20px] max-w-[100%] sm:w-[10px] md:w-[13px] w-[20px]"
                  alt="mail"
                />
                <Text className="flex-grow font-inter font-medium mb-[3px] md:ml-[11px] ml-[16px] sm:ml-[8px] mt-[2px] text-[14px] text-bluegray_400">
                  Cart
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[16px] md:mt-[21px] mt-[31px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[62%]">
                <Column className="bg-white_A700 flex flex-col sm:h-[14px] md:h-[18px] h-[26px] items-center justify-start px-[3px] sm:w-[13px] md:w-[17px] w-[26px]">
                  <div className="bg-bluegray_400 sm:h-[11px] md:h-[14px] h-[20px] rounded-radius50 sm:w-[10px] md:w-[13px] w-[20px]"></div>
                </Column>
                <Text className="font-inter font-medium mb-[2px] ml-[13px] sm:ml-[6px] md:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[7px] text-[14px] text-bluegray_400 w-[auto]">
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

export default Sidebar5;
