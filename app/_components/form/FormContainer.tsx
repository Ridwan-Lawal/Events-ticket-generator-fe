"use client";

import StepOneForm from "@/app/_components/steps/StepOneForm";
import StepThree from "@/app/_components/steps/StepThree";
import StepTwoForm from "@/app/_components/steps/StepTwoForm";
import { useTicketDetails } from "@/app/_lib/contexts/FormContext";
import React from "react";

export default function FormContainer() {
  const { ticketDetails } = useTicketDetails();
  return (
    <div>
      {ticketDetails?.step === 1 && <StepOneForm />}
      {ticketDetails?.step === 2 && <StepTwoForm />}
      {ticketDetails?.step === 3 && <StepThree />}
    </div>
  );
}
