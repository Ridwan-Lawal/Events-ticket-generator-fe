"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const initialState = {
  step: 1,
  ticketType: "",
  noOfTickets: 1,
  avatar: "",
  name: "",
  email: "",
  special: "",
  ticketsTypeErrorMsg: "",
};

const FormContext = createContext(null);

import React from "react";

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticketDetails, setTicketDetails] = useState<object>(initialState);

  //   getting tickets from local storage
  useEffect(() => {
    const getTicketDetailsFromStorage = JSON.parse(
      localStorage.getItem("ticketDetails")
    );

    if (!getTicketDetailsFromStorage) return;

    setTicketDetails(getTicketDetailsFromStorage);
  }, []);

  //   storing ticket details to local storage
  useEffect(() => {
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));
  }, [ticketDetails]);

  return (
    <FormContext.Provider value={{ ticketDetails, setTicketDetails }}>
      {children}
    </FormContext.Provider>
  );
}

export function useTicketDetails() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error(
      "The location you are trying to access to context is outside the FormContextProvider!"
    );
  }

  return context;
}
