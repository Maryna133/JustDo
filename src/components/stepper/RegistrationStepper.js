import React from "react";
import { useStep } from "react-hooks-helper";
import StepEmail  from '../stepper/email/StepEmail.js';
import StepPassword from "./password/StepPassword.js";


const steps = [{ id: "step1" }, { id: "step2" }];

export const RegistrationFormStepper = () => {
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const props = { navigation };
  const { id } = step;

  switch (id) {
    case "step1":
      return <StepEmail {...props} />;
    case "step2":
      return <StepPassword {...props} />;
    default:
      return <> Error! </>;
  }
};
export default RegistrationFormStepper;

