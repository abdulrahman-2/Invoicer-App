/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const Dates = () => {
  const { invoiceDate } = useContext(StateContext);
  return (
    <article>
      <ul className="flex flex-col justify-end items-end mb-5">
        <li>
          <span className="font-bold">Invoicer number:</span>{" "}
          {invoiceDate.number}
        </li>
        <li>
          <span className="font-bold">Invoicer date:</span> {invoiceDate.date}
        </li>
        <li>
          <span className="font-bold">Due date:</span> {invoiceDate.dueDate}
        </li>
      </ul>
    </article>
  );
};
