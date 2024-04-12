/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { TableForm } from "./TableForm";
export const Form = () => {
  const {
    setShowInvoicer,
    user,
    setUser,
    client,
    setClient,
    invoiceDate,
    setInvoiceDate,
  } = useContext(StateContext);
  return (
    <>
      <section className="flex flex-col justify-center border border-blue-300 bg-white rounded-lg m-3 shadow-md">
        <div className="bg-white p-5 rounded shadow">
          <div className="flex flex-col justify-center">
            <article className="md:grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="name">Enter Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Full Name"
                  maxLength={56}
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="address">Enter your address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter your address"
                  maxLength={96}
                  value={user.address}
                  onChange={(e) =>
                    setUser({ ...user, address: e.target.value })
                  }
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="email">Enter your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  maxLength={55}
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="website">Enter your website</label>
                <input
                  type="url"
                  name="website"
                  id="website"
                  placeholder="Enter your website"
                  maxLength={80}
                  value={user.website}
                  onChange={(e) =>
                    setUser({ ...user, website: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone">Enter your phone</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone"
                  maxLength={11}
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                />
              </div>
            </article>
            <article className="md:grid grid-cols-2 gap-5">
              <div className="flex flex-col">
                <label htmlFor="bankName">Enter your bank name</label>
                <input
                  type="text"
                  name="bankName"
                  id="bankName"
                  placeholder="Enter your bank name"
                  maxLength={56}
                  value={user.bankName}
                  onChange={(e) =>
                    setUser({ ...user, bankName: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="bankAccount">
                  Enter your bank account number
                </label>
                <input
                  type="text"
                  name="bankAccount"
                  id="bankAccount"
                  placeholder="Enter your bank account number"
                  maxLength={20}
                  value={user.bankAccount}
                  onChange={(e) =>
                    setUser({ ...user, bankAccount: e.target.value })
                  }
                />
              </div>
            </article>
            <article className="md:grid grid-cols-2 gap-5 md:mt-16">
              <div className="flex flex-col">
                <label htmlFor="clientName">
                  Enter your client&apos;s name
                </label>
                <input
                  type="text"
                  name="clientName"
                  id="clientName"
                  placeholder="Enter your client's name"
                  maxLength={56}
                  value={client.name}
                  onChange={(e) =>
                    setClient({ ...client, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="clientAddress">
                  Enter your client&apos;s address
                </label>
                <input
                  type="text"
                  name="clientAddress"
                  id="clientAddress"
                  placeholder="Enter your client's address"
                  maxLength={96}
                  value={client.address}
                  onChange={(e) =>
                    setClient({ ...client, address: e.target.value })
                  }
                />
              </div>
            </article>
            <article className="md:grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="invoiceNumber">Invoice Number</label>
                <input
                  type="text"
                  name="invoiceNumber"
                  id="invoiceNumber"
                  placeholder="Invoice Number"
                  value={invoiceDate.number}
                  onChange={(e) =>
                    setInvoiceDate({ ...invoiceDate, number: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="invoiceDate">Invoice Date</label>
                <input
                  type="date"
                  name="invoiceDate"
                  id="invoiceDate"
                  placeholder="Invoice Date"
                  value={invoiceDate.date}
                  onChange={(e) =>
                    setInvoiceDate({ ...invoiceDate, date: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="dueDate">Due Date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  placeholder="Due Date"
                  value={invoiceDate.dueDate}
                  onChange={(e) =>
                    setInvoiceDate({ ...invoiceDate, dueDate: e.target.value })
                  }
                />
              </div>
            </article>
            {/* This is our table form */}
            <article>
              <TableForm />
            </article>
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              name="notes"
              id="notes"
              cols="30"
              rows="10"
              placeholder="Additional notes to the client"
              maxLength={500}
              value={invoiceDate.notes}
              onChange={(e) => {
                setInvoiceDate({ ...invoiceDate, notes: e.target.value });
              }}
            ></textarea>
          </div>
        </div>
        <div className="m-5">
          <button
            className="w-full bg-blue-500 text-white font-bold rounded shadow py-2 px-8  cursor-pointer border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
            onClick={() => {
              setShowInvoicer(true);
            }}
          >
            Preview Invoice
          </button>
        </div>
      </section>
    </>
  );
};
