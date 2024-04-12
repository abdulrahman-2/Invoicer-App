import React from "react";
import { StateContext } from "../context/StateContext";
import { v4 as uuidv4 } from "uuid";

// icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

export const TableForm = () => {
  const {
    item,
    setItem,
    list,
    setList,
    total,
    setTotal,
    isEditing,
    setIsEditing,
  } = React.useContext(StateContext);

  // Calculate amount based on quantity and price
  React.useEffect(() => {
    const calculateAmount = () => {
      const amount = item.quantity * item.price;
      setItem((prevItem) => ({ ...prevItem, amount }));
    };

    calculateAmount();
  }, [item.quantity, item.price, setItem]);

  React.useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = list.reduce((acc, item) => acc + item.amount, 0);
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [list, setTotal]);

  // Function to add a new item to the list
  function addTable() {
    if (!item.description.trim() || !item.price || !item.quantity) {
      return;
    }
    // Create a new item object
    const newItem = {
      id: uuidv4(),
      description: item.description,
      quantity: item.quantity,
      price: item.price,
      amount: item.amount,
    };

    // Update state with the new item
    setList([...list, newItem]);
    setIsEditing(false);

    // Clear input fields
    setItem({
      description: "",
      quantity: "",
      price: "",
      amount: "",
    });
  }

  // Function to update item in the list
  function updateRow(id) {
    const updatedRow = list.find((item) => item.id === id);

    // Update item with the new values
    setItem({
      ...item,
      description: updatedRow.description,
      price: updatedRow.price,
      quantity: updatedRow.quantity,
      amount: updatedRow.amount,
    });

    // Set isEditing to true
    setIsEditing(true);

    // Remove the item from the list
    setList(list.filter((item) => item.id !== id));
  }

  // Function to delete an item from the list
  function deleteRow(id) {
    // Add confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      setList(list.filter((item) => item.id !== id));
    }
  }

  return (
    <article className="md:mt-16">
      <div className="flex flex-col">
        <label htmlFor="description">Item description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Item description"
          maxLength={96}
          autoComplete="off"
          value={item.description}
          onChange={(e) => setItem({ ...item, description: e.target.value })}
        />
      </div>

      <div className="md:grid grid-cols-3 gap-10">
        <div className="flex flex-col">
          <label htmlFor="description">Quantity</label>
          <input
            type="text"
            name="quantity"
            id="quantity"
            placeholder="Quantity"
            maxLength={33}
            autoComplete="off"
            value={item.quantity}
            onChange={(e) => setItem({ ...item, quantity: e.target.value })}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="description">Price</label>
          <input
            type="text"
            name="price"
            id="price"
            placeholder="Price"
            maxLength={33}
            autoComplete="off"
            value={item.price}
            onChange={(e) => setItem({ ...item, price: e.target.value })}
          />
        </div>

        <div className="flex flex-col mb-5 md:mb-0">
          <label htmlFor="amount">Amount</label>
          <p>{item.amount}</p>
        </div>
      </div>

      {/* Add onClick handler to call addTable function */}
      <button
        className="bg-blue-500 text-white font-bold rounded shadow py-2 px-8 mb-5 cursor-pointer border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
        onClick={addTable}
      >
        {isEditing ? "Edit Row" : "Add Table"}
      </button>

      {/* Render table items */}
      <table className="w-full text-center my-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <th className="text-left">Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <React.Fragment key={item.id}>
              <tr>
                <td className="text-left">{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td className="flex justify-center items-center gap-3 md:gap-5 mt-2">
                  <DeleteOutlineOutlinedIcon
                    className="text-red-500 cursor-pointer"
                    onClick={() => deleteRow(item.id)}
                  />
                  <BorderColorOutlinedIcon
                    className="text-blue-500 cursor-pointer"
                    onClick={() => updateRow(item.id)}
                  />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="total text-right mb-10">
        <h1 className="text-3xl font-bold">
          Total: <span>{total}</span>
        </h1>
      </div>
    </article>
  );
};
