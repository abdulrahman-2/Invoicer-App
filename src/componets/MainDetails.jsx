/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const MainDetails = () => {
  const { user } = useContext(StateContext);
  return (
    <section className="flex flex-col justify-end items-end">
      <h2 className="text-3xl uppercase font-bold">{user.name}</h2>
      <p>{user.address}</p>
    </section>
  );
};
