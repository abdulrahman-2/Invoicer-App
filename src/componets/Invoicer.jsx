/* eslint-disable react/prop-types */
import { ClintDetails } from "./ClintDetails";
import { MainDetails } from "./MainDetails";
import { Header } from "./Header";
import { Dates } from "./Dates";
import { Table } from "./Table";
import { Notes } from "./Notes";
import { Footer } from "./Footer";

import { useRef, useContext } from "react";
import { useReactToPrint } from "react-to-print";

import { StateContext } from "../context/StateContext";

export const Invoicer = () => {
  const { setShowInvoicer } = useContext(StateContext);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "",
    // onAfterPrint: () => {
    //   alert("Print Success");
    // },
  });
  return (
    <div className="bg-white rounded-lg shadow-md border border-blue-300 m-3">
      <div>
        <button
          className="bg-blue-500 text-white font-bold rounded shadow py-2 px-8 mt-5 ml-5 cursor-pointer border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          onClick={handlePrint}
        >
          Print / Download
        </button>

        <main className="p-5" ref={componentRef}>
          <Header />

          <MainDetails />

          <ClintDetails />

          <Dates />

          <Table />

          <Notes />

          <Footer />
        </main>
      </div>
      <div>
        <button
          className="bg-blue-500 text-white font-bold rounded shadow py-2 px-8 mb-5 ml-5 cursor-pointer border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          onClick={() => {
            setShowInvoicer(false);
          }}
        >
          Edit Information
        </button>
      </div>
    </div>
  );
};
