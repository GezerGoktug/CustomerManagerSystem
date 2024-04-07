import { useRef } from "react";

export const CustomerForm = ({
  customerName,
  setCustomerName,
  setCustomerList,
}) => {
  const input = useRef();
  const handleCustomerName = (e) => {
    input.current.classList.remove("bg-red-500");
    setCustomerName(e.target.value);
  };
  //! Müşteri listesi işlemleri
  const handleCustomerList = (e) => {
    e.preventDefault();
    //! Eğer giriş boşsa input kırmızı arka olan yap(uyarı için)
    if (customerName.trim() === "") {
      setCustomerName("");
      input.current.classList.add("bg-red-500");
      return;
    }
    //! State i güncelle
    setCustomerList((prevState) => [
      {
        id: Math.floor(Math.random() * 900) + 100,
        customerName: customerName,
      },
      ...prevState,
    ]);
    setCustomerName("");
  };
  return (
    <form className="flex justify-between gap-4 items-center my-4">
      <input
        ref={input}
        value={customerName}
        onChange={handleCustomerName}
        placeholder="Please enter your name"
        className="p-2 border outline-none rounded-md w-full "
        type="text"
      />
      <button
        onClick={handleCustomerList}
        className="bg-red-600  text-white   px-4  py-2  border rounded-lg "
      >
        <span>+</span>
      </button>
    </form>
  );
};
