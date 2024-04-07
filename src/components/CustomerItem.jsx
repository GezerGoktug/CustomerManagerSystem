const CustomerItem = ({ customer, onClick }) => {
  return (
    <div className="flex justify-between items-center">
      <img
        src="https://i.pravatar.cc/300"
        className="object-contain h-12 rounded-full border border-slate-500"
        alt="avatar"
      />
      <h4 className="ms-2 me-auto font-medium">{customer.customerName}</h4>
      <button
        onClick={onClick}
        className="bg-red-500 px-4 py-2 rounded-lg text-white"
      >
        Sil
      </button>
    </div>
  );
};
export default CustomerItem;
  