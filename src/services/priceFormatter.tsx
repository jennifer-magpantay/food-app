import React from "react";

export const priceFormatter = (number: number) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(number);
};
