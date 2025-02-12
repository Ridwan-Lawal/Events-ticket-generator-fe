"use client";

import React from "react";
import { Grid } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <Grid
        visible={true}
        height="40"
        width="40"
        color="#089905"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
