import { useEffect, useState } from "react";
import { CustomerForm } from "./CustomerForm";
import CustomerList from "./CustomerList";

export const CustomerCard = () => {
  //! Müşteri isimleri için state
  const [customerName, setCustomerName] = useState("");
  //! Müşteri listesi için state 
  //! Local storage de liste verisi varsa ordaki liste kullanılır yoksa
  //! Default veri kullanılır.
  const [customerList, setCustomerList] = useState(
    localStorage.getItem("customerData")
      ? JSON.parse(localStorage.getItem("customerData"))
      : []
  );
  //! Liste her değiştiğinde verileri kaydet
  useEffect(() => {
    localStorage.setItem("customerData", JSON.stringify(customerList));
  }, [customerList]);
  return (
    <div className=" w-[90%]  min-[450px]:w-3/4  md:w-1/2 xl:w-1/3   px-2 min-[450px]:px-6 py-4 bg-slate-100 rounded-xl border-2 border-slate-300 shadow-lg ">
      <h1 className="text-xl min-[450px]:text-3xl font-semibold mb-3 text-center">
        Customer Manager
      </h1>
      <CustomerForm
        customerName={customerName}
        setCustomerName={setCustomerName}
        setCustomerList={setCustomerList}
      />
      <CustomerList
        customerList={customerList}
        setCustomerList={setCustomerList}
      />
    </div>
  );
};
