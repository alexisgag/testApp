import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Line,
  Input,
  SelectBox,
  TextArea,
  Button,
} from "components";
import Sidebar6 from "components/Sidebar6";
import Header from "components/Header";
import { CloseSVG } from "../../assets/images/index.js";

const AddProductPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]">
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]">
          <Sidebar6 className="md:hidden sm:hidden w-[17%]" />
          <Line className="bg-indigo_51 h-[1071px] sm:h-[571px] md:h-[738px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]" />
          <Column className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Header className="bg-white_A700 w-[100%]" />
            <Column className="bg-gray_51 flex flex-col items-center justify-start md:p-[15px] sm:p-[15px] p-[23px] w-[100%]">
              <Column className="flex flex-col items-center justify-start my-[13px] sm:my-[6px] md:my-[8px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                  <Text
                    className="font-poppins mb-[3px] text-bluegray_900 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Add Product
                  </Text>
                  <Text
                    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    <span className="text-bluegray_400 text-[16px]">
                      Ecommerce/
                    </span>
                    <span className="text-bluegray_800 text-[16px]">
                      {" "}
                      Add Product
                    </span>
                  </Text>
                </Row>
                <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs w-[100%]">
                  <Column className="flex flex-col justify-start sm:mt-[2px] md:mt-[3px] mt-[5px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-bold text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Basic information
                    </Text>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[21px] md:mt-[27px] mt-[40px] w-[100%]">
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product name
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          type="text"
                          name="Group13163"
                          placeholder="Enter product’s name"
                          shape="RoundedBorder4"
                          size="xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
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
                          name="group18058"
                          placeholder="Data project"
                          isSearchable={false}
                          isMulti={false}
                          indicator={
                            <Img
                              src="images/img_arrowdown_bluegray_900.svg"
                              className="w-[11px] mr-[24px] sm:mr-[12px] sm:w-[5px] md:mr-[16px] md:w-[7px] max-w-[100%]"
                              alt="arrow_down"
                            />
                          }
                          shape="RoundedBorder4"
                          variant="OutlineIndigo51_1"
                        ></SelectBox>
                      </Column>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[19px] mt-[28px] w-[100%]">
                      <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[57%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Branch
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                            wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                            name="Group13164"
                            placeholder="Enter brach"
                            shape="RoundedBorder4"
                            size="lg"
                            variant="OutlineIndigo51"
                          ></Input>
                        </Column>
                        <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]">
                          <Text
                            className="font-medium text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Price
                          </Text>
                          <Input
                            className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                            wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                            name="Group13165"
                            placeholder="Enter brach"
                            shape="RoundedBorder4"
                            size="lg"
                            variant="OutlineIndigo51"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product description
                        </Text>
                        <TextArea
                          className="font-normal sm:mt-[4px] md:mt-[5px] mt-[8px] not-italic text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          name="Group13166"
                          placeholder="Write something..."
                        ></TextArea>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[10px] md:mt-[13px] mt-[20px] w-[100%]">
                  <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[22px] p-[32px] rounded-radius4 shadow-bs sm:w-[100%] w-[50%]">
                    <Text
                      className="font-bold sm:mt-[3px] md:mt-[4px] mt-[7px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Product image
                    </Text>
                    <Column className="border-2 border-dashed border-indigo_51 flex flex-col items-center justify-end sm:mt-[17px] md:mt-[22px] mt-[32px] md:p-[59px] p-[87px] sm:px-[15px] sm:py-[46px] rounded-radius4 w-[100%]">
                      <Column className="flex flex-col items-center justify-start mt-[10px] sm:mt-[5px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[67%]">
                        <Img
                          src="images/img_image_bluegray_900.svg"
                          className="sm:h-[15px] md:h-[20px] h-[28px] max-w-[100%] sm:w-[14px] md:w-[19px] w-[28px]"
                          alt="image"
                        />
                        <Column className="flex flex-col items-center justify-end sm:mt-[21px] md:mt-[27px] mt-[40px] sm:pt-[2px] md:pt-[3px] pt-[5px] sm:px-[2px] md:px-[3px] px-[5px] w-[100%]">
                          <Text
                            className="font-bold text-bluegray_800 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Upload image
                          </Text>
                          <Text
                            className="font-normal mt-[13px] sm:mt-[6px] md:mt-[8px] not-italic text-bluegray_800 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Drag or click to upload image
                          </Text>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col sm:mx-[0] sm:p-[15px] md:p-[17px] p-[26px] rounded-radius4 shadow-bs sm:w-[100%] w-[50%]">
                    <Text
                      className="font-bold sm:ml-[3px] md:ml-[4px] ml-[6px] sm:mr-[231px] md:mr-[299px] mr-[435px] mt-[11px] sm:mt-[5px] md:mt-[7px] text-bluegray_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Add link
                    </Text>
                    <Column className="flex flex-col items-center justify-start md:mr-[4px] mr-[6px] sm:mt-[19px] md:mt-[24px] mt-[36px] sm:mx-[0] pt-[3px] sm:px-[0] sm:w-[100%] w-[99%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Product Link
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
                          name="Group13167"
                          placeholder="Enter link"
                          shape="RoundedBorder4"
                          size="lg"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[29px] w-[100%]">
                        <Text
                          className="font-medium text-bluegray_800 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Hashtag
                        </Text>
                        <Input
                          className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_400 text-bluegray_400 w-[100%]"
                          wrapClassName="md:mt-[5px] mt-[8px] sm:mt-[4px] w-[100%]"
                          name="Group13168"
                          placeholder="Enter tag"
                          shape="RoundedBorder4"
                          size="xl"
                          variant="OutlineIndigo51"
                        ></Input>
                      </Column>
                    </Column>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end sm:mb-[3px] md:mb-[4px] mb-[6px] md:ml-[134px] ml-[195px] md:mr-[4px] mr-[6px] sm:mt-[33px] md:mt-[42px] mt-[62px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[61%]">
                      <Button
                        className="cursor-pointer font-bold min-w-[48%] text-[14px] text-center text-white_A700 w-[max-content]"
                        shape="CircleBorder24"
                        size="xl"
                        variant="FillDeeporange300"
                      >
                        Save
                      </Button>
                      <Button
                        className="cursor-pointer font-semibold min-w-[48%] md:ml-[11px] ml-[16px] sm:ml-[8px] text-[14px] text-bluegray_800 text-center w-[max-content]"
                        shape="CircleBorder24"
                        size="xl"
                        variant="FillGray51"
                      >
                        Cancel
                      </Button>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddProductPage;
