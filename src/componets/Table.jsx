import { useContext } from "react";
import { StateContext } from "../context/StateContext";
export const Table = () => {
  const { list, total } = useContext(StateContext);
  return (
    <>
      <table className="w-full text-center my-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <th className="text-left">Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td className="py-1 text-left">{item.description}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total text-right mb-10">
        <h1 className="text-3xl font-bold">
          Total: <span>{total}</span>
        </h1>
      </div>
    </>
  );
};
