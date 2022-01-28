import React, { useState } from "react";
// import { useState } from "react-hooks-helper";

import StepEmail from '../stepper/email/StepEmail.js';
import StepPassword from "./password/StepPassword.js";
import StepUserName from "./userName/StepUserName.js";


const steps = [{ id: "step1" }, { id: "step2" }];

export const RegistrationFormStepper = () => {
  const [step, setStep] = useState(0);
  const { id } = step;



  const changeStep = (newStep) => {
    setStep(newStep);
  }
  return (
    <>
      {step === 0 &&
        <StepEmail setStep={changeStep} />
      }
      {step === 1 &&
        <StepPassword setStep={changeStep} />
      }

      {step === 2 &&
        <StepUserName setStep={changeStep} />
      }

      {step === 3 &&
        <StepEmail setStep={changeStep} />
      }

      {step === 4 &&
        <StepPassword setStep={changeStep} />
      }
    </>

  )
};
export default RegistrationFormStepper;

