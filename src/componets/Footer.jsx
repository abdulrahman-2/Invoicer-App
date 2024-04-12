/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const Footer = () => {
  const { user } = useContext(StateContext);
  return (
    <footer className="footer border-t-2 border-gray-300 pt-5">
      <ul className="flex flex-wrap items-center justify-center gap-3">
        <li>
          <span className="font-bold">Your name:</span> {user.name}
        </li>
        <li>
          <span className="font-bold">Your email:</span> {user.email}
        </li>
        <li>
          <span className="font-bold">Phone number:</span> {user.phone}
        </li>
        <li>
          <span className="font-bold">Bank:</span> {user.bankName}
        </li>
        <li>
          <span className="font-bold">Account holder:</span> {user.name}
        </li>
        <li>
          <span className="font-bold">Account number:</span> {user.bankAccount}
        </li>
        <li>
          <span className="font-bold">Website:</span> {user.website}
        </li>
      </ul>
    </footer>
  );
};
