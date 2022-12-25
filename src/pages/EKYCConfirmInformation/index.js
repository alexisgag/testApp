
    import React from 'react';

    
    import {Column,Row,Img,Text,Line,Input,Grid,CheckBox,Button} from 'components'
  import Sidebar2 from 'components/Sidebar2'
  import Header from 'components/Header'
  import {CloseSVG} from '../../assets/images/index.js'
  
    

    const EKYCConfirmInformationPage = () => {
      
      
      const [inputvalue,setInputvalue] = React.useState("")
  
      return (<>
        <Column
  className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] w-[100%]"
  
  
  
    
    
  
  
  
  ><Row
  className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly w-[100%]"
  
  
  
    
    
  
  
  ><Sidebar2 
  className="md:hidden sm:hidden w-[17%]"
  
  
  
    
    
  
  
  /><Line
    className="bg-indigo_51 sm:h-[508px] md:h-[656px] h-[953px] max-w-[1px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]"
    
  
  
    
    
  
    
  /><Column
  className="flex flex-col items-center max-w-[1198px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Header 
  className="bg-white_A700 w-[100%]"
  
  
  
    
    
  
  
  /><Column
  className="bg-gray_51 flex flex-col items-center justify-end md:p-[15px] sm:p-[15px] p-[23px] w-[100%]"
  
  
  
    
    
  
  
  
  ><Column
  className="flex flex-col items-center justify-start mb-[1px] md:mt-[10px] mt-[15px] sm:mt-[7px] sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Row
  className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]"
  
  
  
    
    
  
  
  ><Text
    className="font-poppins mb-[2px] text-bluegray_900 w-[auto]"
     
  
  
    as="h3"
    variant="h3"
  

    
  >eKYC</Text><Text
    className="font-inter font-normal mt-[4px] not-italic text-bluegray_400 w-[auto]"
     
  
  
    as="h5"
    variant="h5"
  

    
  ><span  className="text-bluegray_400 text-[16px]" >Setting/</span><span  className="text-bluegray_800 text-[16px]" > eKYC</span></Text></Row><Column
  className="bg-white_A700 flex flex-col items-center justify-start sm:mt-[18px] md:mt-[24px] mt-[35px] sm:p-[15px] md:p-[33px] p-[48px] rounded-radius4 shadow-bs w-[100%]"
  
  
  
    
    
  
  
  
  ><Column
  className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[30%]"
  
  
  
    
    
  
  
  
  ><Text
    className="sm:ml-[13px] md:ml-[17px] ml-[25px] text-bluegray_900 w-[auto]"
     
  
  
    as="h2"
    variant="h2"
  

    
  >Confirm Information</Text><Text
    className="font-normal sm:mt-[11px] md:mt-[14px] mt-[21px] not-italic text-bluegray_400 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  >Make sure that all your information are precise</Text></Column><Column
  className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[32px] sm:mx-[0] pt-[4px] sm:px-[0] sm:w-[100%] w-[67%]"
  
  
  
    
    
  
  
  
  ><Column
  className="flex flex-col justify-start w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >Full name </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
    
  
  
    
    
  
    name="group18068"
    placeholder  = "Mustermann Galer"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
  className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[27px] w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >ID number </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
    
  
  
    
    
  
    name="group18068 One"
    placeholder  = "L01X00T47"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Grid
    className="sm:gap-[12px] md:gap-[15px] gap-[23px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[12px] md:mt-[16px] mt-[24px] w-[100%]"
    
  
  
    
    
  
    
  ><Column
  className="flex flex-col justify-start sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >Gender </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
    
  
  
    
    
  
    name="gender One"
    placeholder  = "Female"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
  className="flex flex-col justify-start sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >Nationality </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[5px] mt-[8px] sm:mt-[4px] w-[100%]"
    
  
  
    
    
  
    name="group18068 Two"
    placeholder  = "Deitsch"shape="RoundedBorder4"
size="md"
variant="OutlineIndigo51"
  ></Input></Column><Column
  className="flex flex-col justify-start sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >Date of birth </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
    
  
  
    
    
  
    name="group18068 Three"
    placeholder  = "12.08.1983"shape="RoundedBorder4"
size="lg"
variant="OutlineIndigo51"
  ></Input></Column><Column
  className="flex flex-col justify-start sm:px-[0] w-[100%]"
  
  
  
    
    
  
  
  
  ><Text
    className="font-medium text-bluegray_800 w-[auto]"
     
  
  
    as="h6"
    variant="h6"
  

    
  ><span  className="text-bluegray_800 text-[14px] font-inter" >Place of birth </span><span  className="text-red_600 text-[14px] font-inter" >*</span></Text><Input

  className="font-semibold p-[0] text-[16px] placeholder:text-bluegray_800 text-bluegray_800 w-[100%]"
  wrapClassName="md:mt-[8px] mt-[12px] sm:mt-[6px] w-[100%]"
    
  
  
    
    
  
    name="group18068 Four"
    placeholder  = "Berlin"shape="RoundedBorder4"
size="md"
variant="OutlineIndigo51"
  ></Input></Column></Grid></Column><CheckBox
  className="font-normal sm:mt-[25px] md:mt-[33px] mt-[48px] not-italic text-[14px] text-bluegray_400"
    inputClassName="mr-[5px]"
    
  
  
    
    
  
    name="Remember"
    label="By clicking button “Confirm", I take all responsibility of the information above"  size="md"
    
  ></CheckBox><Button
  className="cursor-pointer font-bold min-w-[26%] sm:mt-[20px] md:mt-[26px] mt-[39px] text-[14px] text-center text-white_A700 w-[max-content]"
    
  
  
    
    
  
    shape="CircleBorder24"
size="xl"
variant="FillDeeporange300"
  >Confirm</Button></Column></Column></Column></Column></Row></Column>
        
      </>);
    };

    export default EKYCConfirmInformationPage;
  