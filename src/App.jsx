import { useState } from "react";
import { Invoicer } from "./componets/Invoicer";
import { Form } from "./componets/Form";
import { StateContext } from "./context/StateContext";
function App() {
  // const [showinvoicer, setShowInvoicer] = useState(false);
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [bankName, setBankName] = useState("");
  // const [bankAccount, setBankAccount] = useState("");
  // const [website, setWebsite] = useState("");
  // const [clientName, setClientName] = useState("");
  // const [clientAddress, setClientAddress] = useState("");
  // const [invoiceNumber, setInvoiceNumber] = useState("");
  // const [invoiceDate, setInvoiceDate] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const [notes, setNotes] = useState("");
  // const [description, setDescription] = useState("");
  // const [quantity, setQuantity] = useState("");
  // const [price, setPrice] = useState("");
  // const [amount, setAmount] = useState("");
  // const [list, setList] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [isEditing, setIsEditing] = useState(false);

  const [user, setUser] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
    bankName: "",
    bankAccount: "",
    website: "",
  });

  const [client, setClient] = useState({
    name: "",
    address: "",
  });

  const [invoiceDate, setInvoiceDate] = useState({
    number: "",
    date: "",
    dueDate: "",
    notes: "",
  });

  const [item, setItem] = useState({
    description: "",
    quantity: "",
    price: "",
    amount: "",
  });

  const [showinvoicer, setShowInvoicer] = useState(false);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <StateContext.Provider
        value={{
          showinvoicer,
          setShowInvoicer,
          user,
          setUser,
          client,
          setClient,
          invoiceDate,
          setInvoiceDate,
          item,
          setItem,
          list,
          setList,
          total,
          setTotal,
          isEditing,
          setIsEditing,
        }}
      >
        <div className="container mx-auto lg:max-w-5xl xl:max-w-6xl">
          {showinvoicer ? <Invoicer /> : <Form />}
        </div>
      </StateContext.Provider>
    </>
  );
}

export default App;
