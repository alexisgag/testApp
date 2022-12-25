import React from "react";
import AddProduct from "pages/AddProduct";
import CartProductList from "pages/CartProductList";
import ShopReviews from "pages/ShopReviews";
import ShopDetailitem from "pages/ShopDetailitem";
import ShopSearch from "pages/ShopSearch";
import ShippingInfo from "pages/ShippingInfo";
import CheckoutOne from "pages/CheckoutOne";
import EKYCIntroductionStepFour from "pages/EKYCIntroductionStepFour";
import EKYCIntroductionStepThree from "pages/EKYCIntroductionStepThree";
import EKYCSuccessful from "pages/EKYCSuccessful";
import EKYCSignature from "pages/EKYCSignature";
import Checkout from "pages/Checkout";
import EKYCConfirmInformation from "pages/EKYCConfirmInformation";
import PaymentInfo from "pages/PaymentInfo";
import EKYCIntroductionStepTwo from "pages/EKYCIntroductionStepTwo";
import EKYCIntroductionStepOne from "pages/EKYCIntroductionStepOne";
import EKYCBegin from "pages/EKYCBegin";
import EKYCScanFace from "pages/EKYCScanFace";
import EKYCScanIDCardAddimage from "pages/EKYCScanIDCardAddimage";
import EKYCScanIDCard from "pages/EKYCScanIDCard";
import Settings from "pages/Settings";
import Conversation from "pages/Conversation";
import Tracktasks from "pages/Tracktasks";
import FileManagementDefault from "pages/FileManagementDefault";
import Customer from "pages/Customer";
import Profile from "pages/Profile";
import CalenderWeek from "pages/CalenderWeek";
import CalenderDay1Event from "pages/CalenderDay1Event";
import CalenderDayNoevent from "pages/CalenderDayNoevent";
import CalenderMonth from "pages/CalenderMonth";
import DashboardThree from "pages/DashboardThree";
import DashboardTwo from "pages/DashboardTwo";
import DashboardOne from "pages/DashboardOne";
import SignupVerification from "pages/SignupVerification";
import SignupWrongemail from "pages/SignupWrongemail";
import SignupTextfill from "pages/SignupTextfill";
import SignupDefault from "pages/SignupDefault";
import SigninResetPasswordSu from "pages/SigninResetPasswordSu";
import SigninResetPassword from "pages/SigninResetPassword";
import SigninTextfill from "pages/SigninTextfill";
import SigninDefault from "pages/SigninDefault";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signindefault" element={<SigninDefault />} />
        <Route path="/signintextfill" element={<SigninTextfill />} />
        <Route path="/signinresetpassword" element={<SigninResetPassword />} />
        <Route
          path="/signinresetpasswordsu"
          element={<SigninResetPasswordSu />}
        />
        <Route path="/signupdefault" element={<SignupDefault />} />
        <Route path="/signuptextfill" element={<SignupTextfill />} />
        <Route path="/signupwrongemail" element={<SignupWrongemail />} />
        <Route path="/signupverification" element={<SignupVerification />} />
        <Route path="/dashboardone" element={<DashboardOne />} />
        <Route path="/dashboardtwo" element={<DashboardTwo />} />
        <Route path="/dashboardthree" element={<DashboardThree />} />
        <Route path="/calendermonth" element={<CalenderMonth />} />
        <Route path="/calenderdaynoevent" element={<CalenderDayNoevent />} />
        <Route path="/calenderday1event" element={<CalenderDay1Event />} />
        <Route path="/calenderweek" element={<CalenderWeek />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/customer" element={<Customer />} />
        <Route
          path="/filemanagementdefault"
          element={<FileManagementDefault />}
        />
        <Route path="/tracktasks" element={<Tracktasks />} />
        <Route path="/conversation" element={<Conversation />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/ekycscanidcard" element={<EKYCScanIDCard />} />
        <Route
          path="/ekycscanidcardaddimage"
          element={<EKYCScanIDCardAddimage />}
        />
        <Route path="/ekycscanface" element={<EKYCScanFace />} />
        <Route path="/ekycbegin" element={<EKYCBegin />} />
        <Route
          path="/ekycintroductionstepone"
          element={<EKYCIntroductionStepOne />}
        />
        <Route
          path="/ekycintroductionsteptwo"
          element={<EKYCIntroductionStepTwo />}
        />
        <Route path="/paymentinfo" element={<PaymentInfo />} />
        <Route
          path="/ekycconfirminformation"
          element={<EKYCConfirmInformation />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ekycsignature" element={<EKYCSignature />} />
        <Route path="/ekycsuccessful" element={<EKYCSuccessful />} />
        <Route
          path="/ekycintroductionstepthree"
          element={<EKYCIntroductionStepThree />}
        />
        <Route
          path="/ekycintroductionstepfour"
          element={<EKYCIntroductionStepFour />}
        />
        <Route path="/checkoutone" element={<CheckoutOne />} />
        <Route path="/shippinginfo" element={<ShippingInfo />} />
        <Route path="/shopsearch" element={<ShopSearch />} />
        <Route path="/shopdetailitem" element={<ShopDetailitem />} />
        <Route path="/shopreviews" element={<ShopReviews />} />
        <Route path="/cartproductlist" element={<CartProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
