/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";

export const ClintDetails = () => {
  const { client } = useContext(StateContext);
  return (
    <section className="my-5">
      <h2 className="text-3xl uppercase font-bold">{client.name}</h2>
      <p>{client.address}</p>
    </section>
  );
};
