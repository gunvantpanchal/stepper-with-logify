import React, {useState} from 'react';
import './styles.css';
import AppContext from './Context';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormFour from './FormFour';
import FormFinish from './FormFinish';
import ProgressBar from './ProgressBar';

const StepForm = ({userName, onLogout}) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [otp, setOTP] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [year, setYear] = useState(null);
  const [value, setValue] = useState(null);
  const [dob, setDOB] = useState(null);
  const [issue, setIssue] = useState(null);
  const [company, setCompany] = useState(null);

  const userDetails = {
    currentPage: step,
    userName: name,
    userMail: email,
    userPhone: phone,
    userOTP: otp,
    vehBrand: brand,
    userVehicle: model,
    vehYear: year,
    vehValue: value,
    userDOB: dob,
    issueDate: issue,
    companyName: company,
    setName,
    setEmail,
    setPhone,
    setStep,
    setOTP,
    setBrand,
    setModel,
    setYear,
    setValue,
    setDOB,
    setIssue,
    setCompany,
  };

  return (
    <AppContext.Provider value={{ userDetails }}>
      <div className="main">
        <div className="navbar">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--qr998ro4--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/6087/1914dec6-a5a6-4e6d-abf8-34fa1b0c3120.png"
            alt="logo"
            width="50px"
            height="50px"
            className="logo"
          />
          <div className="user_div">
            {userName}
            <button onClick={onLogout} className="logout_btn">Logout</button>
          </div>
        </div>
        <div className="body">
          <h3>Multi Step Form using ReactJS</h3>
          <div className="wrapper">
            <ProgressBar />
            {step === 0 && <FormOne />}
            {step === 1 && <FormTwo />}
            {step === 2 && <FormThree />}
            {step === 3 && <FormFour />}
            {step === 4 && <FormFinish />}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default StepForm;