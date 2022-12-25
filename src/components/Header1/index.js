import React from "react";

import { Row, Text, Input, Img, Column } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Header1 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <header className={props.className}>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[24px] md:mr-[15px] mr-[23px] sm:mx-[12px] my-[10px] sm:my-[5px] md:my-[6px] sm:w-[100%] w-[97%]">
          <Text className="font-inter font-medium mb-[11px] sm:mb-[5px] md:mb-[7px] mt-[14px] sm:mt-[7px] md:mt-[9px] text-[14px] text-bluegray_800 w-[auto]">
            Welcomback, Team!
          </Text>
          <Input
            value={inputvalue}
            onChange={(e) => setInputvalue(e?.target?.value)}
            className="bg-white_A700 border border-bluegray_200 border-solid font-inter font-medium p-[0] pb-[14px] sm:pb-[7px] md:pb-[9px] sm:pr-[18px] md:pr-[24px] pr-[35px] pt-[13px] sm:pt-[6px] md:pt-[8px] rounded-radius4 text-[12px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
            name="SearchBox"
            placeholder="Search..."
            prefix={
              <Img
                src="images/img_search.svg"
                className="cursor-pointer ml-[16px] mr-[8px] sm:mr-[4px] sm:ml-[8px] sm:my-[5px] md:mr-[5px] md:ml-[11px] md:my-[6px] my-[10px]"
                alt="search"
              />
            }
            shape="srcRoundedBorder4"
            size="srcPaddingTB14"
            variant="srcOutlineBluegray200"
            fontStyle="srcInterMedium12"
          ></Input>
          <Img
            src="images/img_shoppingbag.svg"
            className="sm:h-[13px] md:h-[17px] h-[24px] max-w-[100%] ml-[132px] sm:ml-[70px] md:ml-[90px] sm:my-[4px] md:my-[5px] my-[8px] sm:w-[12px] md:w-[16px] w-[24px]"
            alt="shoppingbag"
          />
          <Column
            className="bg-cover bg-no-repeat flex flex-col sm:h-[13px] md:h-[17px] h-[24px] items-end sm:ml-[12px] md:ml-[16px] ml-[24px] sm:my-[4px] md:my-[5px] my-[8px] pl-[1px] sm:w-[12px] md:w-[16px] w-[24px]"
            style={{ backgroundImage: "url('images/defaultNoData.png')" }}
          >
            <div className="bg-red_600 sm:h-[5px] md:h-[6px] h-[8px] mb-[14px] sm:mb-[7px] md:mb-[9px] outline outline-[2px] outline-white_A700 rounded-radius50 sm:w-[4px] md:w-[5px] w-[8px]"></div>
          </Column>
          <Text className="font-inter font-normal mb-[10px] sm:mb-[5px] md:mb-[6px] sm:ml-[12px] md:ml-[16px] ml-[24px] mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-[16px] text-gray_500 w-[auto]">
            <span className="text-gray_500 text-[16px] font-inter font-normal not-italic">
              Hello,
            </span>
            <span className="text-bluegray_900 text-[16px] font-inter font-normal not-italic">
              {" "}
            </span>
            <span className="text-bluegray_900 text-[16px] font-inter font-medium">
              Sam
            </span>
          </Text>
          <Img
            src="images/img_sherlocktoyfa.png"
            className="sm:h-[22px] md:h-[28px] h-[40px] ml-[13px] sm:ml-[6px] md:ml-[8px] rounded-radius50 sm:w-[21px] md:w-[27px] w-[40px]"
            alt="SherlockToyFa"
          />
        </Row>
      </header>
    </>
  );
};

export default Header1;
