/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const Notes = () => {
  const { invoiceDate } = useContext(StateContext);
  return (
    <section className="my-5">
      <p className="font-bold">Additional notes</p>
      <p>{invoiceDate.notes}</p>
    </section>
  );
};
